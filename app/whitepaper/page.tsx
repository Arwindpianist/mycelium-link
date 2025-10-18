'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Share2, BookOpen, TrendingUp, Globe, Shield, Zap, Layers, DollarSign, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkAnimation } from '@/components/network-animation';
import { toast } from 'sonner';
import Link from 'next/link';

export default function WhitepaperPage() {
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = async () => {
    try {
      // Option 1: If you have a PDF file in public folder
      const link = document.createElement('a');
      link.href = '/MyceliumLink-Whitepaper-v1.0.pdf';
      link.download = 'MyceliumLink-Whitepaper-v1.0.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Downloading whitepaper...', {
        description: 'MyceliumLink-Whitepaper-v1.0.pdf'
      });
    } catch (error) {
      // Fallback: Open the whitepaper markdown in new tab for printing to PDF
      window.open('/WHITEPAPER.md', '_blank');
      toast.info('Opening whitepaper', {
        description: 'Use Print to PDF to save the document'
      });
    }
  };

  const handleShare = async () => {
    const shareUrl = 'https://myceliumlink.com/whitepaper';
    const shareTitle = 'MyceliumLink Whitepaper';
    const shareText = 'Check out the MyceliumLink Whitepaper - Decentralized Data Infrastructure for the Living Internet';

    setIsSharing(true);

    try {
      // Try Web Share API first (mobile-friendly)
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        toast.success('Shared successfully!');
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        toast.success('Link copied to clipboard!', {
          description: shareUrl
        });
        setTimeout(() => setCopied(false), 3000);
      }
    } catch (error) {
      // If both fail, show the link to copy manually
      if (error instanceof Error && error.name !== 'AbortError') {
        toast.error('Could not share', {
          description: 'Link: https://myceliumlink.com/whitepaper'
        });
      }
    } finally {
      setIsSharing(false);
    }
  };
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <NetworkAnimation opacity={0.2} variant="mixed" />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="max-w-6xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  <BookOpen className="w-4 h-4" />
                  Whitepaper v1.0 | October 2025
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold tracking-tight"
              >
                <span className="block mb-2">MyceliumLink</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  Whitepaper
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto"
              >
                Decentralized Data Infrastructure for the Living Internet
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Building the world's first decentralized datachain that connects independent datacenters 
                into a resilient, self-sustaining storage network inspired by nature's mycelium networks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleDownload}>
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10" onClick={handleShare} disabled={isSharing}>
                  {copied ? <Check className="w-5 h-5 mr-2" /> : <Share2 className="w-5 h-5 mr-2" />}
                  {copied ? 'Link Copied!' : 'Share with Investors'}
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-sm text-muted-foreground pt-4"
              >
                Arwindpianist Multimedia & Consulting (JR0170970-M)
              </motion.p>
            </div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </section>

        {/* Table of Contents */}
        <section className="relative py-20 px-4 border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Table of Contents</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </motion.div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Executive Summary',
                'The Problem',
                'The Vision',
                'Technology',
                'Architecture',
                'Credit System',
                'Roadmap',
                'Market Opportunity',
                'Business Model',
                'Financial Forecast',
                'Team & Advisors',
                'The Future'
              ].map((section, index) => (
                <motion.a
                  key={section}
                  href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex items-center space-x-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {index + 1}
                  </div>
                  <span className="text-foreground/80 group-hover:text-primary font-medium transition-colors">{section}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section id="executive-summary" className="relative py-20 px-4">
          <NetworkAnimation opacity={0.05} variant="nodes" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">1. Executive Summary</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto mb-16"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Mission Statement</h3>
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    <strong className="text-primary">MyceliumLink aims to build the world's first decentralized datachain 
                    that connects independent datacenters into a resilient, self-sustaining storage network.</strong>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By combining blockchain verification, peer-to-peer distribution, and military-grade encryption, 
                    we create infrastructure that is <strong className="text-primary">90% cheaper</strong>, infinitely more resilient, and environmentally 
                    sustainable compared to traditional cloud providers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Metrics */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">Key Metrics & Targets</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Globe, title: 'Phase 1 Goal', value: '500 nodes', subtitle: '100TB distributed capacity' },
                  { icon: TrendingUp, title: 'Seed Round', value: 'RM100K', subtitle: '10% equity (RM1M valuation)' },
                  { icon: Zap, title: 'Market Opportunity', value: '$152B', subtitle: 'Addressable market' },
                  { icon: DollarSign, title: 'Cost Advantage', value: '90%', subtitle: 'Cheaper than AWS/Azure' },
                  { icon: Shield, title: 'Environmental Impact', value: '40-60%', subtitle: 'Energy reduction' },
                  { icon: Users, title: 'Target Users', value: '2,000+', subtitle: 'By 2027' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-card/80 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <metric.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground/80 text-sm mb-1">{metric.title}</h4>
                            <p className="text-3xl font-bold text-primary mb-1">{metric.value}</p>
                            <p className="text-sm text-muted-foreground">{metric.subtitle}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section id="the-problem" className="relative py-20 px-4 border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-background to-background pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">2. The Problem</h2>
              <p className="text-xl text-muted-foreground mb-4">Why Centralized Infrastructure Is Failing</p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-destructive to-primary mx-auto rounded-full"></div>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {/* The Tyranny of Three */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { name: 'AWS', percentage: '32%', color: 'destructive' },
                  { name: 'Microsoft Azure', percentage: '23%', color: 'primary' },
                  { name: 'Google Cloud', percentage: '10%', color: 'secondary' }
                ].map((provider, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center bg-card/50 backdrop-blur-sm border-border">
                      <CardContent className="p-8">
                        <h4 className="text-lg font-semibold mb-2">{provider.name}</h4>
                        <div className="text-5xl font-bold text-primary mb-2">{provider.percentage}</div>
                        <p className="text-sm text-muted-foreground">Market Control</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <p className="text-2xl font-bold">
                      <span className="text-primary">Combined: 65%</span> controlled by just <span className="text-primary">three</span> providers
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cost Comparison */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Cost Comparison</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-4 px-4 font-bold">Service</th>
                            <th className="text-left py-4 px-4 font-bold">AWS Cost</th>
                            <th className="text-left py-4 px-4 font-bold text-primary">MyceliumLink Cost</th>
                            <th className="text-left py-4 px-4 font-bold">Savings</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['1TB storage/month', '$23', '$2.30', '90%'],
                            ['1TB egress bandwidth', '$90', '$9.00', '90%'],
                            ['Compute instance', '$30/month', '$3/month', '90%']
                          ].map((row, index) => (
                            <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                              <td className="py-4 px-4 font-medium">{row[0]}</td>
                              <td className="py-4 px-4 text-muted-foreground">{row[1]}</td>
                              <td className="py-4 px-4 text-primary font-semibold">{row[2]}</td>
                              <td className="py-4 px-4 text-secondary font-bold">{row[3]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-center text-muted-foreground mt-6">
                      Enterprise spending <strong>$100,000/month</strong> on AWS could reduce to <strong className="text-primary">$10,000/month</strong>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section id="technology" className="relative py-20 px-4">
          <NetworkAnimation opacity={0.05} variant="connections" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">4. The Technology</h2>
              <p className="text-xl text-muted-foreground mb-4">How MyceliumLink Works</p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {/* Three-Layer Architecture */}
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: '1. Data Fragmentation',
                    icon: Layers,
                    items: ['AES-256-GCM encryption', 'Reed-Solomon erasure coding', '50% redundancy', 'SHA-3-256 addressing']
                  },
                  {
                    title: '2. Consensus Layer',
                    icon: Shield,
                    items: ['Proof of Link validation', 'Byzantine Fault Tolerance', 'Node reliability scoring', 'Geographic rewards']
                  },
                  {
                    title: '3. Metadata Chain',
                    icon: Globe,
                    items: ['Immutable storage proofs', 'Fragment location tracking', 'Access permissions', 'Compliance metadata']
                  }
                ].map((layer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <layer.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold">{layer.title}</h3>
                        </div>
                        <ul className="space-y-3">
                          {layer.items.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financial Forecast */}
        <section id="financial-forecast" className="relative py-20 px-4 border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background to-background pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">10. Financial Forecast</h2>
              <p className="text-xl text-muted-foreground mb-4">3-Year Projections & ROI Scenarios</p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {/* 3-Year Pro Forma */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">3-Year Pro Forma Summary</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-4 px-4 font-bold">Year</th>
                            <th className="text-left py-4 px-4 font-bold">Revenue</th>
                            <th className="text-left py-4 px-4 font-bold">Net Profit</th>
                            <th className="text-left py-4 px-4 font-bold">Margin</th>
                            <th className="text-left py-4 px-4 font-bold">Users</th>
                            <th className="text-left py-4 px-4 font-bold">Nodes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['2025', 'RM 0', 'RM -100K', '-', '0', '0'],
                            ['2026', 'RM 320K', 'RM 140K', '44%', '500', '25'],
                            ['2027', 'RM 1.45M', 'RM 700K', '48%', '2,000', '100'],
                            ['2028', 'RM 4.6M', 'RM 620K', '13%', '5,000', '500']
                          ].map((row, index) => (
                            <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={`py-4 px-4 ${cellIndex === 0 ? 'font-semibold' : 'text-muted-foreground'}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* ROI Scenarios */}
              <h3 className="text-2xl font-bold mb-8 text-center">Return on Investment Scenarios</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { label: 'Conservative', value: '10.75x', subtitle: 'ROI in 4 years', details: '80% IRR', exit: '$50M exit (2029)' },
                  { label: 'Base Case', value: '32x', subtitle: 'ROI in 5 years', details: '99% IRR', exit: '$150M exit (2030)', highlight: true },
                  { label: 'Optimistic', value: '86x', subtitle: 'ROI in 6 years', details: '111% IRR', exit: '$500M exit (2031)' }
                ].map((scenario, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`text-center ${scenario.highlight ? 'bg-primary/10 border-primary scale-105' : 'bg-card/50 border-border'} backdrop-blur-sm`}>
                      <CardContent className="p-8">
                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                          {scenario.label}
                        </div>
                        <div className={`text-6xl font-bold mb-2 ${scenario.highlight ? 'text-primary' : 'text-secondary'}`}>
                          {scenario.value}
                        </div>
                        <div className="text-foreground/80 mb-2">{scenario.subtitle}</div>
                        <div className="text-sm text-muted-foreground mb-4">{scenario.details}</div>
                        <div className="text-sm text-muted-foreground border-t border-border pt-4">
                          {scenario.exit}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seed Round CTA */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-card/80 backdrop-blur-sm border-primary/30">
                <CardContent className="p-12 text-center">
                  <h2 className="text-4xl font-bold mb-6">Seed Round Investment</h2>
                  <div className="text-6xl font-bold text-primary mb-4">RM100,000</div>
                  <p className="text-xl text-muted-foreground mb-8">
                    10% Equity | RM1M Pre-Money Valuation
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="text-left">
                      <h4 className="font-bold mb-4">Use of Funds</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 40% - MVP Development</li>
                        <li>• 25% - Branding & Marketing</li>
                        <li>• 20% - Legal & Compliance</li>
                        <li>• 15% - Operations</li>
                      </ul>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold mb-4">Investor Benefits</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Early equity position</li>
                        <li>• First-mover advantage</li>
                        <li>• Advisory influence</li>
                        <li>• 50-100x return potential</li>
                      </ul>
                    </div>
                  </div>

                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleDownload}>
                    <Download className="w-5 h-5 mr-2" />
                    Download Full Whitepaper
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-4 border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join the Decentralized Future
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Be part of building the infrastructure for a better internet. 
                Invest in MyceliumLink and help create a resilient, sustainable, 
                and democratized data ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleDownload}>
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Whitepaper
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10" onClick={handleShare} disabled={isSharing}>
                  {copied ? <Check className="w-5 h-5 mr-2" /> : <Share2 className="w-5 h-5 mr-2" />}
                  {copied ? 'Link Copied!' : 'Share with Investors'}
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-muted-foreground text-sm">
                <a href="mailto:hello@myceliumlink.com" className="hover:text-primary transition-colors">
                  hello@myceliumlink.com
                </a>
                <span className="hidden sm:inline">|</span>
                <a href="mailto:arwin@myceliumlink.com" className="hover:text-primary transition-colors">
                  arwin@myceliumlink.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}