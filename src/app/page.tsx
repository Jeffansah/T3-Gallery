import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (image, { desc }) => desc(image.id),
  });

  return (
    <main className="py-4">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id} className="w-48 flex flex-col gap-1">
            <img src={image.url} alt={image.name} className="w-full" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
