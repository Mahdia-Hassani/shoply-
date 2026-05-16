import { Facebook, Twitter, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/50 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-bold text-foreground mb-2">Shoply</h3>
          <p className="text-sm text-muted-foreground">
            Your friendly online shop for everyday essentials.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full p-2 bg-background hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="rounded-full p-2 bg-background hover:bg-primary hover:text-primary-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full p-2 bg-background hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shoply. All rights reserved.
      </div>
    </footer>
  );
}