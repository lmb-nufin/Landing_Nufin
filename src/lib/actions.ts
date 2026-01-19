"use server";

import { instantLoanApproval } from "@/ai/flows/instant-loan-approval";
import { loanApplicationSchema } from "@/lib/schemas";
import type { LoanApplicationFormState } from "@/lib/schemas";

export async function processLoanApplication(
  prevState: LoanApplicationFormState,
  formData: FormData
): Promise<LoanApplicationFormState> {
  const validatedFields = loanApplicationSchema.safeParse({
    creditScore: Number(formData.get("creditScore")),
    income: Number(formData.get("income")),
    debt: Number(formData.get("debt")),
    loanAmount: Number(formData.get("loanAmount")),
    employmentStatus: formData.get("employmentStatus"),
    age: Number(formData.get("age")),
    location: formData.get("location"),
    consentGiven: formData.get("consentGiven") === "on",
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Invalid form data. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await instantLoanApproval(validatedFields.data);
    if (result.approved) {
      return {
        status: "success",
        message: result.reason,
        data: result,
      };
    } else {
      return {
        status: "error",
        message: result.reason,
        data: result,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
