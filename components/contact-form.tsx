"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contact-form" className="py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Join the MyceliumLink Revolution</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're currently in the <span className="text-primary font-semibold">Seed Phase</span>, raising{" "}
              <span className="text-primary font-semibold">RM100,000 (USD 21,000)</span> to build our MVP, launch our
              whitepaper, and onboard the first set of partner datacenters.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're an <span className="font-semibold">investor</span>,{" "}
              <span className="font-semibold">infrastructure provider</span>, or{" "}
              <span className="font-semibold">developer</span>, this is your chance to be part of a system that could
              redefine how humanity stores and trusts information.
            </p>
            <blockquote className="text-lg text-primary italic pt-4">
              Be part of the next evolution in cloud infrastructure.
            </blockquote>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">I am a *</Label>
              <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="investor">Investor</SelectItem>
                  <SelectItem value="datacenter">Datacenter Partner</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg py-6">
              Let's Connect
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
