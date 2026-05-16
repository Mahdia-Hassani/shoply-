import { createFileRoute } from "@tanstack/react-router";
import { Truck, ShieldCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shoply" },
      { name: "description", content: "Learn about Shoply, our mission, and our values." },
      { property: "og:title", content: "About — Shoply" },
      { property: "og:description", content: "Learn about Shoply, our mission, and our values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-foreground">About Shoply</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Shoply is a friendly mini online shop built to showcase modern web design.
        We bring you curated products across multiple categories with a smooth, responsive shopping experience.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        {[
          { icon: Truck, title: "Fast Shipping", text: "Free delivery on orders over $50." },
          { icon: ShieldCheck, title: "Secure Checkout", text: "Your data is safe with us." },
          { icon: Heart, title: "Made with Care", text: "Curated products you'll love." },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border bg-card p-6 text-center hover:shadow-md transition-shadow">
            <f.icon className="mx-auto h-8 w-8 text-primary" />
            <h3 className="mt-3 font-semibold text-card-foreground">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed">
          Founded in 2025, Shoply began as a student project and has grown into a beautiful
          demonstration of responsive web design, accessibility, and clean coding practices.
          We believe shopping online should be simple, fast, and delightful.
        </p>
      </section>
    </div>
  );
}