"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/src/actions/contact";

const initialState: ContactState = {
  success: false,
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm shadow-xl">
      <div className="text-center mb-6">
        <h3 className="text-white text-2xl font-bold">Contact Our Campaign Specialists</h3>
        <p className="text-gray-400 text-sm mt-1">
          Have questions about custom plans, deliverability, or onboarding? Talk to us.
        </p>
      </div>

      {state?.success ? (
        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-200 text-center font-medium">
          {state.message}
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          {state?.message && !state.success && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
              {state.message}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Alex Turner"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {state?.errors?.name && (
              <p className="mt-1 text-xs text-red-400">{state.errors.name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="alex@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {state?.errors?.email && (
              <p className="mt-1 text-xs text-red-400">{state.errors.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message or Requirements
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell us about your audience size and sending volume..."
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
            {state?.errors?.message && (
              <p className="mt-1 text-xs text-red-400">{state.errors.message[0]}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 px-6 rounded-full font-medium text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-150 disabled:opacity-60"
          >
            {isPending ? "Sending message..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
