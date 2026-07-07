/**
 * No transactional email provider is wired up yet. Replace this implementation
 * (e.g. with Resend, Postmark, etc.) once one is chosen — nothing else in the
 * newsletter flow needs to change.
 */
export async function sendConfirmationEmail(email: string, confirmUrl: string): Promise<void> {
  console.log(`[newsletter] TODO: send confirmation email to ${email}: ${confirmUrl}`)
}
