import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="flex items-center justify-between border-b p-4 text-sm">
      <Link href="/" className="text-2xl font-bold">
        <span className="text-red-500">T3</span> Gallery
      </Link>
      {/* <Link href="/sign-in " className="bg-red-500 py-2 px-4 rounded-lg">
        Sign in
      </Link> */}
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default TopNav;
