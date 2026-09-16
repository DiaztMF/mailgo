"use server";

import { z } from "zod";
import { createContact } from "@/src/lib/queries";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactState = {
  success: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContact(
  prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Please fix the validation errors below.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    await createContact({
      name: validated.data.name,
      email: validated.data.email,
      message: validated.data.message,
    });

    return {
      success: true,
      message: "Thank you for getting in touch! We'll reply within 24 hours.",
    };
  } catch (error) {
    console.error("Failed to submit contact message:", error);
    return {
      success: false,
      message: "Something went wrong while sending your message. Please try again.",
    };
  }
}
