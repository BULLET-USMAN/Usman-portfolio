export interface ContactFormPayload {
  name: string
  email: string
  purpose: string
  subject: string
  message: string
}

export interface ContactFormResult {
  success: boolean
  /** True when this ran through the demo path rather than a real backend. */
  demo: boolean
  error?: string
}

/**
 * No backend is connected yet. This simulates a submission (brief
 * delay, then resolves) so the UI's loading/success states are real
 * and testable — but it never actually sends anything, and the UI
 * must say so.
 *
 * To connect a real service later, replace the body of this function
 * with an actual call (e.g. `fetch('/api/contact', { method: 'POST',
 * body: JSON.stringify(payload) })`) and return `{ success, demo:
 * false }` based on the real response. Nothing in ContactForm.tsx
 * needs to change — it only depends on this function's signature.
 */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactFormResult> {
  void payload
  await new Promise((resolve) => setTimeout(resolve, 900))
  return { success: true, demo: true }
}
