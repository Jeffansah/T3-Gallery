import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/fWZ41OxcUGsED096JD4WVYX1aheQpvzlgdJW9bSKRyOUuxwN",
  "https://utfs.io/f/fWZ41OxcUGsEvonuQedmufUXrgz0s41yPeG5dxElC38h2bqa",
  "https://utfs.io/f/fWZ41OxcUGsEDBOtHSWVYX1aheQpvzlgdJW9bSKRyOUuxwNo",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="py-4">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
