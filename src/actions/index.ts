import { defineAction, ActionError } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2, "Please enter your name."),
      email: z.email("Please enter a valid email address."),
      service: z.string().min(1, "Please choose a service."),
      message: z.string().min(10, "Please add a bit more detail."),
    }),
    handler: async ({ name, email, service, message }) => {
      console.log("RESEND_API_KEY exists:", !!import.meta.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: "Basha IT Solutions <onboarding@resend.dev>",
        to: ["amer.basha@outlook.com"],
        subject: `New website inquiry: ${service}`,
        replyTo: email,
        html: `
          <h2>New inquiry from your website</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
        text: `
New inquiry from your website

Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}
        `,
      });

      console.log("Resend data:", data);
      console.log("Resend error:", error);

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return {
        success: true,
        id: data?.id ?? null,
      };
    },
  }),
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}