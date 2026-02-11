"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { submitContactForm, type ContactFormData } from "@/app/actions/contact";
import Link from "next/link";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  location: z.string().min(2, "Bitte geben Sie Ihren Ort ein"),
  subject: z.string().min(1, "Bitte wählen Sie ein Anliegen"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Bitte akzeptieren Sie die Datenschutzerklärung",
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      privacy: false,
    },
  });

  const privacyValue = watch("privacy");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          placeholder="Max Mustermann"
          {...register("name")}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          E-Mail <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="max@beispiel.de"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon (optional)</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="0123 / 456789"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location">
          Ort <span className="text-destructive">*</span>
        </Label>
        <Input
          id="location"
          placeholder="Musterstadt"
          {...register("location")}
          aria-invalid={errors.location ? "true" : "false"}
        />
        {errors.location && (
          <p className="text-sm text-destructive">{errors.location.message}</p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="subject">
          Anliegen <span className="text-destructive">*</span>
        </Label>
        <select
          id="subject"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          {...register("subject")}
        >
          <option value="">Bitte wählen...</option>
          <option value="Badsanierung">Badsanierung</option>
          <option value="Großformatfliesen">Großformatfliesen</option>
          <option value="Naturstein">Naturstein</option>
          <option value="Terrasse / Außen">Terrasse / Außen</option>
          <option value="Reparatur">Reparatur / Wartung</option>
          <option value="Beratung">Beratung</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Ihre Nachricht <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Beschreiben Sie kurz Ihr Projekt..."
          className="min-h-[120px]"
          {...register("message")}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy Checkbox */}
      <div className="flex items-start space-x-2">
        <Checkbox
          id="privacy"
          checked={privacyValue}
          onCheckedChange={(checked) =>
            setValue("privacy", checked as boolean, { shouldValidate: true })
          }
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="privacy"
            className="text-sm font-normal leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Ich habe die{" "}
            <Link href="/datenschutz" className="underline hover:text-primary">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und akzeptiere diese. <span className="text-destructive">*</span>
          </Label>
          {errors.privacy && (
            <p className="text-sm text-destructive">{errors.privacy.message}</p>
          )}
        </div>
      </div>

      {/* Submit Status */}
      {submitStatus.type && (
        <div
          className={`rounded-lg p-4 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          "Anfrage senden"
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        <span className="text-destructive">*</span> Pflichtfelder
      </p>
    </form>
  );
}
