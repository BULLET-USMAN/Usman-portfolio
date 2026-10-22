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
 * Submits the contact form to usmanjunaid809@gmail.com using FormSubmit.
 * If network fails or is blocked, falls back seamlessly to mailto:.
 */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactFormResult> {
  const recipient = 'usmanjunaid809@gmail.com'

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        _subject: payload.purpose
          ? `[Portfolio Inquiry: ${payload.purpose}] ${payload.subject}`
          : `[Portfolio Inquiry] ${payload.subject}`,
        purpose: payload.purpose || 'General',
        message: payload.message,
        _template: 'table',
      }),
    })

    if (response.ok) {
      return { success: true, demo: false }
    }

    const data = await response.json().catch(() => null)
    return {
      success: false,
      demo: false,
      error: data?.message || 'Failed to send message. Please try again or email directly.',
    }
  } catch {
    // Fallback: trigger client mailto if fetch encounters network error / adblock
    if (typeof window !== 'undefined') {
      const subject = encodeURIComponent(
        payload.purpose ? `[${payload.purpose}] ${payload.subject}` : payload.subject
      )
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nReason: ${payload.purpose || 'N/A'}\n\nMessage:\n${payload.message}`
      )
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
      return { success: true, demo: false }
    }

    return {
      success: false,
      demo: false,
      error: 'Network error. Please email usmanjunaid809@gmail.com directly.',
    }
  }
}

