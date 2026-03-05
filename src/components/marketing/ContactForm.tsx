"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

const formSchema = z.object({
    interest: z.enum(["home-care", "employment"]),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    zip: z.string().min(5, {
        message: "Please enter a valid ZIP code.",
    }),
    relationship: z.string().min(1, {
        message: "Please select a relationship."
    }),
    referralSource: z.string().optional(),
    message: z.string().optional(),
})

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            interest: "home-care",
            name: "",
            email: "",
            phone: "",
            zip: "",
            relationship: "",
            referralSource: "",
            message: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                console.error("Failed to submit");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    if (submitted) {
        return (
            <div className="bg-green-50 py-12 px-8 rounded-xl text-center border border-green-200 shadow-sm animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                <p className="text-green-700 mb-6">We have received your request and will be in touch shortly to discuss your needs.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">Send Another Request</Button>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:bg-slate-900 dark:border-slate-800" id="contact-form">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Get Started with Home Care</h3>
                    <p className="text-slate-500 text-sm mt-1">Fill out the form below and we will contact you within 24 hours.</p>
                </div>

                <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>I am interested in...</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="home-care">Home Care Services</SelectItem>
                                    <SelectItem value="employment">Employment Opportunities</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="(555) 555-5555" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="zip"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ZIP Code</FormLabel>
                                <FormControl>
                                    <Input placeholder="12345" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="relationship"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Who needs care?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select relationship" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="myself">Myself</SelectItem>
                                    <SelectItem value="parent">Parent</SelectItem>
                                    <SelectItem value="spouse">Spouse</SelectItem>
                                    <SelectItem value="relative">Other Relative</SelectItem>
                                    <SelectItem value="friend">Friend / Neighbor</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Optional Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Tell us about your specific needs..." className="resize-none h-32" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full text-lg h-12" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Request Information"}
                </Button>

                <p className="text-xs text-center text-slate-400 mt-4">
                    By submitting this form, you agree to our Privacy Policy and Terms of Use.
                </p>
            </form>
        </Form>
    )
}
