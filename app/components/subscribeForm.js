'use client';

import { useActionState } from 'react';
import { subscribeToNewsletter } from '@/app/actions/subscribe';

export function SubscribeForm() {
const [state, formAction, isPending] = useActionState(async (prevState, formData) => {
    return await subscribeToNewsletter(formData);
  }, null);
  return (
    <div className="form-area">
      <div className="mailchimp-form">
        <form className="one-field-form" action={formAction}>
          <div className="field-group">
            <label className="email-label" htmlFor="email-input">
              *Subscribe to our news letter
            </label>
            <div style={{ height: "20px" }}></div>
            <input
              className="email-input"
              type="email"
              name="email"
              id="email-input"
              placeholder="Email Address"
              autoComplete="off"
              required
              disabled={isPending}
            />
            <div className="cta-area">
              <button
                className="btn-solid subscribe-btn"
                type="submit"
                disabled={isPending}
              >
                {isPending ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </div>
          <div style={{ height: "10px" }}></div>
            {state?.error && <p className="error">{state.error}</p>}
            {state?.success && <p className="success">{state.success}</p>}
          <span className="email-notice">
            *we will not share your personal info
          </span>
        </form>
      </div>
    </div>
  );
}