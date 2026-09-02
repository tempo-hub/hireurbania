export const BLOGS = [
  {
    _id: "urbania-group-travel-guide",
    title: "The Complete Guide to Comfortable Group Travel in a Force Urbania",
    slug: "comfortable-group-travel-force-urbania",
    category: "Travel Guides",
    description:
      "Plan a smooth group journey with practical tips for choosing seats, packing well and travelling comfortably in a Force Urbania.",
    content: [
      "Group travel becomes much easier when everyone has enough room to relax. A Force Urbania gives families, friends and work teams a comfortable shared space for long road journeys.",
      "Before you leave, confirm the pickup point, passenger count and luggage needs. Keeping a small day bag with water, medicines and chargers makes stops simpler for everyone.",
      "For the best experience, plan regular breaks and share the itinerary with the whole group. A little preparation keeps the journey calm from the first kilometre to the last.",
    ],
    keywords: ["Force Urbania", "group travel", "tempo traveller"],
    hashtags: ["#GroupTravel", "#ForceUrbania"],
    createdAt: "2026-08-20",
  },
  {
    _id: "urbania-road-trip-checklist",
    title: "Force Urbania Road Trip Checklist for Families and Groups",
    slug: "force-urbania-road-trip-checklist",
    category: "Travel Tips",
    description:
      "Use this simple checklist to prepare your vehicle, luggage and travel plan before a family or corporate road trip.",
    content: [
      "A reliable checklist removes last-minute stress. Start with the essentials: confirmed vehicle details, driver contact information, identification and an agreed departure time.",
      "Pack luggage in soft-sided bags where possible and keep valuables in a small personal bag. This leaves the aisle clear and makes every stop more efficient.",
      "Finally, check the weather and route conditions before departure. Allow extra time for meals, fuel and rest so the group can enjoy the road instead of watching the clock.",
    ],
    keywords: ["road trip checklist", "family travel", "Urbania rental"],
    hashtags: ["#RoadTrip", "#TravelTips"],
    createdAt: "2026-08-12",
  },
  {
    _id: "urbania-corporate-travel",
    title: "Why Force Urbania Works Well for Corporate Group Travel",
    slug: "force-urbania-corporate-group-travel",
    category: "Corporate Travel",
    description:
      "Discover how a dedicated group vehicle can make conferences, team offsites and business transfers more organised.",
    content: [
      "Corporate travel works best when the team can move together. A Force Urbania reduces the coordination involved in arranging several cars and gives everyone one clear schedule.",
      "The spacious cabin also lets colleagues review plans, rest between meetings and arrive together. For multi-day events, a pre-planned vehicle keeps transfers predictable.",
      "Share the route, pickup instructions and emergency contact with every traveller in advance. That small step creates a more professional experience for the whole team.",
    ],
    keywords: ["corporate travel", "team transport", "business travel"],
    hashtags: ["#CorporateTravel", "#TeamTransport"],
    createdAt: "2026-08-05",
  },
];

export function getBlogBySlug(slug) {
  return BLOGS.find((blog) => blog.slug === slug);
}

export function getCategorySlug(category) {
  return category.toLowerCase().trim().replace(/\s+/g, "-");
}
