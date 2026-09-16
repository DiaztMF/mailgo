import type { NewCampaign, NewSubscriber } from "./schema";

export const initialCampaigns: NewCampaign[] = [
  {
    name: "Basic plan",
    description: "For new creators building their list",
    price: 0,
    isMostPopular: false,
    features: [
      "300 emails/day",
      "Customizable Email Templates",
      "Drag & Drop Editor",
      "Transactional Emails",
      "SMS & WhatsApp Campaigns",
      "Phone support",
    ],
  },
  {
    name: "Starter",
    description: "Ideal for growing businesses",
    price: 12,
    isMostPopular: true,
    features: [
      "From 20k emails/month",
      "Marketing Automation",
      "A/B testing",
      "Advanced statistics",
      "Multi-user access",
      "Send time optimization",
    ],
  },
  {
    name: "Business",
    description: "Built for marketing managers",
    price: 32,
    isMostPopular: false,
    features: [
      "Everything in Starter",
      "Enterprise-grade Security",
      "Advanced Integrations",
      "Sub-account Management",
      "Tailored Onboarding",
      "Personalized support",
    ],
  },
];

export const initialSubscribers: NewSubscriber[] = [
  { email: "alex.turner@gmail.com" },
  { email: "sarah.connor@cyberdyne.io" },
  { email: "david.beckham@manutd.org" },
  { email: "elena.rostova@techcorp.de" },
  { email: "kenji.sato@tokyo-ventures.jp" },
  { email: "clara.oswald@tardis.co.uk" },
  { email: "marcus.aurelius@stoic.it" },
  { email: "hannah.abbott@hogwarts.edu" },
  { email: "bruce.wayne@wayne-enterprises.com" },
  { email: "natasha.romanoff@avengers.org" },
  { email: "liam.neeson@taken.fr" },
  { email: "sophie.martin@parisinnovate.com" },
];
