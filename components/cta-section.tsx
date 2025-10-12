"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sprout } from "lucide-react"
import { NetworkAnimation } from "@/components/network-animation"
import { motion } from "framer-motion"

export function CtaSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      type: formData.get("type") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitted(true)
        e.currentTarget.reset() // Clear form
        setTimeout(() => setSubmitted(false), 8000)
      } else {
        setError(result.error || "Failed to send message. Please try again or email us at hello@myceliumlink.com")
      }
    } catch (err) {
      console.error("Form submission error:", err)
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact-form" className="py-24 md:py-32 relative overflow-hidden">
      <NetworkAnimation opacity={0.2} variant="mixed" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="space-y-12">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Join the MyceliumLink Revolution</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Be part of the next evolution in cloud infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Invest, collaborate, or partner with us to shape the decentralized data economy.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-card/90 backdrop-blur-sm border border-primary rounded-xl p-12 text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Sprout className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Thank you for joining MyceliumLink!</h3>
              <p className="text-muted-foreground">
                Our founder will reach out personally to explore collaboration opportunities.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" required placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+60 12-345 6789" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">I am a... *</Label>
                  <Select name="type" required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="datacenter">Datacenter Partner</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your interest in MyceliumLink..." rows={4} />
              </div>

              {error && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={loading}
              >
                {loading ? "Sending..." : "Let's Connect"} <Sprout className="ml-2 w-5 h-5" />
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
