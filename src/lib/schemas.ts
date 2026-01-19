import { z } from "zod";
import type { InstantLoanApprovalOutput } from "@/ai/flows/instant-loan-approval";

export const loanApplicationSchema = z.object({
  creditScore: z.number().min(300, "Credit score must be at least 300").max(850, "Credit score must be at most 850"),
  income: z.number().min(0, "Income cannot be negative"),
  debt: z.number().min(0, "Debt cannot be negative"),
  loanAmount: z.number().min(500, "Loan amount must be at least $500").max(9000, "Loan amount cannot exceed $9,000"),
  employmentStatus: z.enum(["employed", "unemployed", "self-employed", "student"], {
    errorMap: () => ({ message: "Please select a valid employment status." }),
  }),
  age: z.number().min(18, "You must be at least 18 years old").max(100, "Please enter a valid age"),
  location: z.string().min(2, "Please enter a valid location"),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions to proceed.",
  }),
});

export type LoanApplicationData = z.infer<typeof loanApplicationSchema>;

export type LoanApplicationFormState = {
  status: "idle" | "success" | "error";
  message: string;
  data?: InstantLoanApprovalOutput;
  errors?: {
    [K in keyof LoanApplicationData]?: string[];
  } & { form?: string[] };
};
