import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls: string[] = [
  "https://utfs.io/f/fWZ41OxcUGsED096JD4WVYX1aheQpvzlgdJW9bSKRyOUuxwN",
  "https://utfs.io/f/fWZ41OxcUGsEvonuQedmufUXrgz0s41yPeG5dxElC38h2bqa",
  "https://utfs.io/f/fWZ41OxcUGsEDBOtHSWVYX1aheQpvzlgdJW9bSKRyOUuxwNo",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="py-4">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <p key={post.id} className="w-48">
            {post.name}
          </p>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
