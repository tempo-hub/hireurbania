


export const GLOBAL_REVIEWS = [
  {
    id: "g1",
    name: "Rahul S.",
    location: "Delhi",
    rating: 5,
    date: "October 2025",
    tripType: "Family Trip",
    comment:
      "Booked a 17-seater for our family pilgrimage to Haridwar. The vehicle was spotless, AC worked perfectly, and the driver was punctual and courteous. Will definitely book again!",
  },
  {
    id: "g2",
    name: "Priya M.",
    location: "Mumbai",
    rating: 5,
    date: "September 2025",
    tripType: "Corporate Outing",
    comment:
      "Our office trip to Lonavala was a breeze. The Force Urbania was comfortable with plush seats and great legroom. Booking on WhatsApp was super quick — highly recommend.",
  },
  {
    id: "g3",
    name: "Amit K.",
    location: "Bangalore",
    rating: 5,
    date: "August 2025",
    tripType: "Weekend Getaway",
    comment:
      "Hired a 9-seater for our friends trip to Coorg. Smooth ride, amazing vehicle, and the driver knew all the scenic routes. Couldn't have asked for more!",
  },
  {
    id: "g4",
    name: "Neha Sharma",
    location: "Lucknow",
    rating: 5,
    date: "October 2025",
    tripType: "Wedding",
    comment:
      "Used Hire Urbania for our wedding baraat and guest transfers. The 17-seater Urbania was decorated beautifully (as requested) and service was impeccable.",
  },
  {
    id: "g5",
    name: "Vikash Kumar",
    location: "Varanasi",
    rating: 4,
    date: "July 2025",
    tripType: "Pilgrimage",
    comment:
      "Took the Urbania from Varanasi to Ayodhya for Ram Mandir darshan. Very comfortable seating and good AC. Reached on time without any issues.",
  },
  {
    id: "g6",
    name: "Anjali M.",
    location: "Hyderabad",
    rating: 5,
    date: "September 2025",
    tripType: "Group Tour",
    comment:
      "Excellent service! The Force Urbania was in top condition. Our team of 15 people was very comfortable throughout the 8-hour journey. Great value for money.",
  },
  {
    id: "g7",
    name: "Suresh Reddy",
    location: "Chennai",
    rating: 4,
    date: "August 2025",
    tripType: "Family Trip",
    comment:
      "Booked for a Tirupati family trip. The driver was experienced and the vehicle was clean. A smooth, comfortable journey for our family of 12.",
  },
  {
    id: "g8",
    name: "Kavitha R.",
    location: "Kochi",
    rating: 5,
    date: "October 2025",
    tripType: "Backpacker Tour",
    comment:
      "Used the Urbania for a Kerala backwater tour with friends. Spacious, comfortable and the driver was very knowledgeable about local attractions. Fabulous experience!",
  },
];

const CITY_REVIEWS = [
  {
    id: "g1",
    name: "Rahul S.",
    location: "Delhi",
    rating: 5,
    date: "October 2025",
    tripType: "Family Trip",
    comment:
      "Booked a 17-seater for our family pilgrimage to Haridwar. The vehicle was spotless, AC worked perfectly, and the driver was punctual and courteous. Will definitely book again!",
  },
  {
    id: "g2",
    name: "Priya M.",
    location: "Mumbai",
    rating: 5,
    date: "September 2025",
    tripType: "Corporate Outing",
    comment:
      "Our office trip to Lonavala was a breeze. The Force Urbania was comfortable with plush seats and great legroom. Booking on WhatsApp was super quick — highly recommend.",
  },
  {
    id: "g3",
    name: "Amit K.",
    location: "Bangalore",
    rating: 5,
    date: "August 2025",
    tripType: "Weekend Getaway",
    comment:
      "Hired a 9-seater for our friends trip to Coorg. Smooth ride, amazing vehicle, and the driver knew all the scenic routes. Couldn't have asked for more!",
  },
  {
    id: "g4",
    name: "Neha Sharma",
    location: "Lucknow",
    rating: 5,
    date: "October 2025",
    tripType: "Wedding",
    comment:
      "Used Hire Urbania for our wedding baraat and guest transfers. The 17-seater Urbania was decorated beautifully (as requested) and service was impeccable.",
  },
  {
    id: "g5",
    name: "Vikash Kumar",
    location: "Varanasi",
    rating: 4,
    date: "July 2025",
    tripType: "Pilgrimage",
    comment:
      "Took the Urbania from Varanasi to Ayodhya for Ram Mandir darshan. Very comfortable seating and good AC. Reached on time without any issues.",
  },
  {
    id: "g6",
    name: "Anjali M.",
    location: "Hyderabad",
    rating: 5,
    date: "September 2025",
    tripType: "Group Tour",
    comment:
      "Excellent service! The Force Urbania was in top condition. Our team of 15 people was very comfortable throughout the 8-hour journey. Great value for money.",
  },
  {
    id: "g7",
    name: "Suresh Reddy",
    location: "Chennai",
    rating: 4,
    date: "August 2025",
    tripType: "Family Trip",
    comment:
      "Booked for a Tirupati family trip. The driver was experienced and the vehicle was clean. A smooth, comfortable journey for our family of 12.",
  },
  {
    id: "g8",
    name: "Kavitha R.",
    location: "Kochi",
    rating: 5,
    date: "October 2025",
    tripType: "Backpacker Tour",
    comment:
      "Used the Urbania for a Kerala backwater tour with friends. Spacious, comfortable and the driver was very knowledgeable about local attractions. Fabulous experience!",
  },
];

function normalizeCity(city = "") {
  return city
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * City pages:
 * Return only reviews belonging to that city.
 */
export function getReviewsForCity(cityName = "", count = 6) {
  if (!cityName) return [];

  const cityKey = normalizeCity(cityName);

  return CITY_REVIEWS[cityKey]?.slice(0, count) || [];
}

export const ROUTE_REVIEWS = [
  
    {
      id: "route-bb-1",
      name: "Amit Sharma",
      rating: 5,
      date: "2026-10-12",
      title: "Comfortable journey to Belur",
      comment:
        "We booked an Urbania for our family trip from Bangalore to Belur. The vehicle was clean, spacious and comfortable. The journey was smooth.",
      route: "Bangalore to Belur",
      tripType: "Family Trip",
      vehicle: "Force Urbania",
    },
    {
      id: "route-bb-2",
      name: "Priya Nair",
      rating: 5,
      date: "2026-09-28",
      title: "Great travel experience",
      comment:
        "Our Hyderabad to Jangaon trip was very comfortable. The vehicle had enough space for everyone and the overall booking experience was easy.",
      route: "Hyderabad to Jangaon",
      tripType: "Family Trip",
      vehicle: "Force Urbania",
    },

    {
      id: "route-bm-1",
      name: "Sneha Reddy",
      rating: 5,
      date: "2026-10-18",
      title: "Enjoyable Mysore trip",
      comment:
        "Booked an Urbania for our Bangalore to Mysore trip. It was spacious and comfortable for our family. Overall, a pleasant experience.",
      route: "Bangalore to Mysore",
      tripType: "Family Trip",
      vehicle: "Force Urbania",
    },

    {
      id: "route-va-1",
      name: "Ankit Gupta",
      rating: 5,
      date: "2026-10-20",
      title: "Comfortable Ayodhya journey",
      comment:
        "We planned a family trip from Varanasi to Bodh Gaya. The Urbania was spacious and made the journey comfortable for our group.",
      route: "Varanasi to Bodh Gaya",
      tripType: "Family Trip",
      vehicle: "Force Urbania",
    },
    {
      id: "route-va-2",
      name: "Neha Singh",
      rating: 5,
      date: "2026-09-19",
      title: "Good for pilgrimage travel",
      comment:
        "Our group travelled from Varanasi to Ayodhya together. Having a spacious vehicle made the trip convenient and enjoyable.",
      route: "Varanasi to Ayodhya",
      tripType: "Pilgrimage",
      vehicle: "Force Urbania",
    },
  
    {
      id: "route-dj-1",
      name: "Rohit Malhotra",
      rating: 5,
      date: "2026-10-25",
      title: "Smooth Jaipur road trip",
      comment:
        "We booked a Force Urbania for our Delhi to Jaipur group trip. The spacious seating made the road journey comfortable.",
      route: "Delhi to Jaipur",
      tripType: "Group Trip",
      vehicle: "Force Urbania",
    },
];

/**
 * Route pages:
 * Return only reviews belonging to the exact origin-destination pair.
 */
/**
 * Route pages:
 * Show multiple route reviews on every route page.
 */
export function getReviewsForRoute(
  origin = "",
  destination = "",
  count = 6
) {
  if (!ROUTE_REVIEWS.length) return [];

  return ROUTE_REVIEWS
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}
