export function Footer() {
  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">MyceliumLink</h3>
              <p className="text-sm text-muted-foreground mb-4">The Decentralized Data Layer</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Operated by <strong>Arwindpianist Multimedia & Consulting</strong></p>
                <p>Business Registration: <strong>JR0170970-M</strong></p>
                <p>Malaysia</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-3">Contact Information</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Email: <a href="mailto:hello@myceliumlink.com" className="text-primary hover:underline">hello@myceliumlink.com</a></p>
                <p>Website: <a href="https://myceliumlink.com" className="text-primary hover:underline">myceliumlink.com</a></p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2025 MyceliumLink. All Rights Reserved.</p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Whitepaper (Coming Soon)
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Pitch Deck
              </a>
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/glossary" className="text-muted-foreground hover:text-primary transition-colors">
                Glossary
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
