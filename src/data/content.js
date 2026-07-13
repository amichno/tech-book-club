export const AVATARS = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=32",
  "https://i.pravatar.cc/64?img=47",
];

export const BENEFITS = [
  "Monthly curated tech reads selected by industry experts",
  "Virtual and in-person meetups for deep-dive discussions",
  "Early access to new tech book releases",
  "Author Q&A sessions with tech thought leaders",
];

export const JOURNEY_STEPS = [
  { number: "1", label: "Choose your membership tier" },
  { number: "2", label: "Get your monthly book selection" },
  { number: "3", label: "Join our discussion forums" },
  { number: "4", label: "Attend exclusive meetups" },
];

export const PLANS = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    features: ["1 book/month", "Online forums"],
    highlighted: false,
    cta: "Subscribe now",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    features: ["2 books/month", "Virtual meetups"],
    highlighted: true,
    cta: "Subscribe now",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Team access", "Private sessions"],
    highlighted: false,
    cta: "Talk to us",
  },
];
