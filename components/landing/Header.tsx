import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-green-600 p-1.5 rounded-lg">
              <Camera className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl inline-block text-gray-900 tracking-tight">
              EasyPhoto
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-green-600"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-green-600"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-green-600"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="/login"
              className="hidden lg:block text-sm font-medium text-gray-600 hover:text-green-600 mr-4"
            >
              Login
            </Link>
            <Button className="bg-green-600 hover:bg-green-700 text-white shadow-sm font-medium px-6 rounded-full transition-all">
              <Link href="/app">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
