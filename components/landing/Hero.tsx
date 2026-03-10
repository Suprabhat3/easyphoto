import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-24 lg:pt-32 pb-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left side: Text Content */}
          <div className="flex-1 w-full max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2"></span>
              Built specifically for cyber cafes
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl/none xl:text-6xl/none">
              Create Perfect <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Passport Photos
              </span>{" "}
              Instantly
            </h1>

            <p className="mb-8 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Upload any image, automatically remove the background, select a
              solid color, and arrange ready-to-print A4 sheets in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-base bg-green-600 hover:bg-green-700 text-white rounded-full transition-all shadow-lg hover:shadow-green-200/50"
              >
                <Link href="/app" className="flex items-center">
                  Try EasyPhoto Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-base rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>No installation needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>PWA ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Free trial available</span>
              </div>
            </div>
          </div>

          {/* Right side: App Mockup */}
          <div className="flex-1 w-full max-w-3xl lg:max-w-none">
            <div className="relative mx-auto rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden aspect-video md:aspect-[4/3] lg:aspect-video transform transition-transform hover:scale-[1.02] duration-500">
              {/* Replace with actual high quality app mockup */}
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <Image
                  src="/hero.png"
                  alt="EasyPhoto Application Interface mockup with green and blue accents"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Mock browser header */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-green-50 to-blue-50 opacity-50 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      </div>
    </section>
  );
}
