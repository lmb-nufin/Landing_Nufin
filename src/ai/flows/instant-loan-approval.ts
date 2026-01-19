'use server';

/**
 * @fileOverview A flow that approves or rejects a loan application based on user data.
 *
 * - instantLoanApproval - A function that handles the loan application approval process.
 * - InstantLoanApprovalInput - The input type for the instantLoanApproval function.
 * - InstantLoanApprovalOutput - The return type for the instantLoanApproval function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InstantLoanApprovalInputSchema = z.object({
  creditScore: z.number().describe('The credit score of the applicant.'),
  income: z.number().describe('The monthly income of the applicant.'),
  debt: z.number().describe('The total debt of the applicant.'),
  loanAmount: z.number().describe('The requested loan amount.'),
  employmentStatus: z
    .string()
    .describe('The employment status of the applicant.'),
  age: z.number().describe('The age of the applicant.'),
  location: z.string().describe('The current location of the applicant'),
  consentGiven: z.boolean().describe('Whether the user has given GDPR consent'),
});
export type InstantLoanApprovalInput = z.infer<typeof InstantLoanApprovalInputSchema>;

const InstantLoanApprovalOutputSchema = z.object({
  approved: z.boolean().describe('Whether the loan application is approved.'),
  interestRate: z
    .number()
    .optional()
    .describe('The interest rate for the loan, if approved.'),
  reason: z.string().describe('The reason for the approval or rejection.'),
});
export type InstantLoanApprovalOutput = z.infer<typeof InstantLoanApprovalOutputSchema>;

export async function instantLoanApproval(input: InstantLoanApprovalInput): Promise<InstantLoanApprovalOutput> {
  return instantLoanApprovalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'instantLoanApprovalPrompt',
  input: {schema: InstantLoanApprovalInputSchema},
  output: {schema: InstantLoanApprovalOutputSchema},
  prompt: `You are an AI loan approval agent. You will receive data about a loan applicant and must determine if they should be approved for a loan.

  Consider the following factors:
  - Credit score: Higher credit scores indicate lower risk.
  - Income: Higher income indicates a greater ability to repay the loan.
  - Debt: Higher debt indicates a lower ability to repay the loan.
  - Loan amount: Higher loan amounts increase the risk.
  - Employment status: Stable employment indicates a greater ability to repay the loan.
  - Age: Consider applicant's age when assessing their ability to manage financial responsibilities
  - Location: Applicant's current location
  - GDPR Consent: Has the applicant given GDPR consent?

  If the applicant's GDPR consent is false, set approved to false and reason to GDPR compliance is required before proceeding.

  Respond with JSON that contains 'approved' (boolean), 'interestRate' (number, only if approved), and 'reason' (string) fields.

  Here is the applicant data:
  Credit score: {{{creditScore}}}
  Income: {{{income}}}
  Debt: {{{debt}}}
  Loan amount: {{{loanAmount}}}
  Employment status: {{{employmentStatus}}}
  Age: {{{age}}}
  Location: {{{location}}}
  GDPR Consent: {{{consentGiven}}}
  `,
});

const instantLoanApprovalFlow = ai.defineFlow(
  {
    name: 'instantLoanApprovalFlow',
    inputSchema: InstantLoanApprovalInputSchema,
    outputSchema: InstantLoanApprovalOutputSchema,
  },
  async input => {
    if (!input.consentGiven) {
      return {
        approved: false,
        reason: 'GDPR compliance is required before proceeding.',
      };
    }
    const {output} = await prompt(input);
    return output!;
  }
);
