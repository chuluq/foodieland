"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(30, { message: "Name must not be longer than 30 characters." }),
  email: z.string().email(),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  messages: z.string().optional(),
  type: z.string({
    required_error: "Please select enquiry type.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  subject: "",
  messages: "",
  type: "",
};

export const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap gap-x-10 gap-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-[400px] grow space-y-3">
              <FormLabel className="text-xs font-medium uppercase leading-5 text-black/60">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name..."
                  className="h-auto w-full rounded-2xl px-5 py-[18px] text-sm leading-6 placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-[400px] grow space-y-3">
              <FormLabel className="text-xs font-medium uppercase leading-5 text-black/60">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email address..."
                  type="email"
                  className="h-auto w-full rounded-2xl px-5 py-[18px] text-sm leading-6 placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="w-[400px] grow space-y-3">
              <FormLabel className="text-xs font-medium uppercase leading-5 text-black/60">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter subject..."
                  className="h-auto w-full rounded-2xl px-5 py-[18px] text-sm leading-6 placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="w-[400px] grow space-y-3">
              <FormLabel className="text-xs font-medium uppercase leading-5 text-black/60">
                Enquiry Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-auto w-full rounded-2xl px-5 py-[18px] text-sm leading-6 placeholder:text-sm">
                    <SelectValue placeholder="Select enquiry type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="advertising">Advertising</SelectItem>
                  <SelectItem value="promotion">Promotion</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messages"
          render={({ field }) => (
            <FormItem className="w-full space-y-3">
              <FormLabel className="text-xs font-medium uppercase leading-5 text-black/60">
                Messages
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your messages..."
                  className="h-[200px] rounded-2xl p-5 text-sm leading-6 placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-12 h-16 w-[180px] rounded-2xl text-base font-semibold leading-6"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
