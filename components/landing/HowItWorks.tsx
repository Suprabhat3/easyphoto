import { Badge } from "@/components/ui/badge";
import { Upload, Scissors, Printer } from "lucide-react";
import Image from "next/image";

export function HowItWorks() {
  const steps = [
    {
      title: "Upload Photo",
      description:
        "Ask your customer to stand near a plain background and take a picture. Upload it to EasyPhoto instantly.",
      icon: Upload,
      bg: "bg-blue-500",
    },
    {
      title: "Auto-Process & Adjust",
      description:
        "Our AI strips away the old background. You pick the desired color (Aadhar, PAN style blue/white).",
      icon: Scissors,
      bg: "bg-green-500",
    },
    {
      title: "Select Quantity & Print",
      description:
        "Choose 'Multiples of 6' layout. EasyPhoto generates an A4 PDF or image perfect for your photo printer.",
      icon: Printer,
      bg: "bg-gray-800",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-1.5 text-sm border-blue-200">
            Simple Workflow
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Three simple steps to go from a quick snap to a printed passport
            photo grid. No manual editing required.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Steps */}
          <div className="flex-1 space-y-12 w-full lg:max-w-md">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="relative flex flex-col items-center">
                  <div
                    className={`w-14 h-14 rounded-full text-white flex items-center justify-center flex-shrink-0 shadow-lg ${step.bg} transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="h-full w-px bg-gray-200 absolute top-14 bottom-0 -mb-12"></div>
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Showcase */}
          <div className="flex-1 w-full lg:min-w-[500px]">
            <div className="relative rounded-2xl border-4 border-gray-100 shadow-2xl overflow-hidden aspect-[4/3] transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gray-50 flex items-center justify-center p-8">
                <Image
                  src="/print.png"
                  alt="A4 print layout preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute bottom-10 right-10 -z-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
