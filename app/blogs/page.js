import TrustPage, { BlogCard } from '@/components/TrustPage';

export const metadata = { title: 'Blogs' };

const posts = [
  {
    title: 'How to choose the right Urbania seater for your group',
    excerpt: 'A practical guide to choosing between 9, 12, 16, 17, and 20 seaters based on group size, luggage, and trip comfort.',
  },
  {
    title: 'Planning a comfortable Delhi to Uttarakhand road trip',
    excerpt: 'Build a smoother hill journey with realistic travel time, sensible halts, and the right vehicle for mountain roads.',
  },
  {
    title: 'Urbania hire for family holidays and pilgrimages',
    excerpt: 'Why pushback seating, shared pickup planning, and an experienced driver make group travel easier.',
  },
  {
    title: 'What to share when requesting a tempo traveller quote',
    excerpt: 'The route, dates, passenger count, and stops that help our team prepare a reliable booking estimate.',
  },
];

export default function BlogsPage() {
  return (
    <TrustPage
      eyebrow="Travel ideas"
      title="Hire Urbania Travel Journal"
      intro="Useful planning notes for comfortable group travel across Delhi NCR, the hills, pilgrimage routes, and beyond."
    >
      <div className="trust-blog-grid">
        {posts.map((post) => <BlogCard key={post.title} {...post} />)}
      </div>
    </TrustPage>
  );
}
