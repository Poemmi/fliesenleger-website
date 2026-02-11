"use server";

import { z } from "zod";

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(5, "Bitte geben Sie eine Telefonnummer ein").optional(),
  location: z.string().min(2, "Bitte geben Sie Ihren Ort ein"),
  subject: z.string().min(1, "Bitte wählen Sie ein Anliegen"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Bitte akzeptieren Sie die Datenschutzerklärung",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate data
    const validated = contactFormSchema.parse(data);

    // TODO: Implement actual email sending with Resend
    // For now, we'll just log and simulate success
    console.log("Contact form submission:", validated);

    // Simulate email sending
    // const { Resend } = require("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: "website@ihr-domain.de",
    //   to: "info@mustermann-fliesenleger.de",
    //   subject: `Neue Anfrage: ${validated.subject}`,
    //   html: `
    //     <h2>Neue Kontaktanfrage</h2>
    //     <p><strong>Name:</strong> ${validated.name}</p>
    //     <p><strong>E-Mail:</strong> ${validated.email}</p>
    //     <p><strong>Telefon:</strong> ${validated.phone || "Nicht angegeben"}</p>
    //     <p><strong>Ort:</strong> ${validated.location}</p>
    //     <p><strong>Anliegen:</strong> ${validated.subject}</p>
    //     <p><strong>Nachricht:</strong></p>
    //     <p>${validated.message}</p>
    //   `,
    // });

    return { success: true, message: "Vielen Dank! Wir melden uns bei Ihnen." };
  } catch (error) {
    console.error("Form submission error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Bitte überprüfen Sie Ihre Eingaben.",
        errors: error.errors,
      };
    }

    return {
      success: false,
      message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    };
  }
}
