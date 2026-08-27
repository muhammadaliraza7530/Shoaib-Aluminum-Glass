import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { ComingSoonPage } from "@/components/PageBits";
// import { Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aspiring Homes — Call 0306 0221896, Lahore" },
      {
        name: "description",
        content:
          "Talk to Aspiring Homes about your house design or construction project. Call 0306 0221896, message us on WhatsApp or email aspiringtalks@gmail.com.",
      },
      { property: "og:title", content: "Contact Aspiring Homes" },
      {
        property: "og:description",
        content: "Call 0306 0221896 or message us on WhatsApp to start your project.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ComingSoonPage image={img.luxuryVilla} />;
}
