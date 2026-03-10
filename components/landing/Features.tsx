import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Scissors, Palette, Grid3X3, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "AI Background Removal",
      description:
        "Automatically separate the subject from any complex background with state-of-the-art AI precision in seconds.",
      icon: Scissors,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Solid Color Options",
      description:
        "One-click application of standard studio backgrounds like passport green, professional blue, crisp white, or ruby red.",
      icon: Palette,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "A4 Print Ready Layouts",
      description:
        "Arrange multiple photos mathematically perfectly on a generated A4 sheet, usually in multiples of 6, ready for instant printing.",
      icon: Grid3X3,
      color: "text-gray-900",
      bgColor: "bg-gray-200",
    },
    {
      title: "Lightning Fast Workflow",
      description:
        "Don't keep your walk-in customers waiting. The whole process takes less than 30 seconds from upload to print.",
      icon: Zap,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 bg-white px-4 py-1.5 text-sm border-gray-200 text-green-700 font-medium"
          >
            Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Everything you need for perfect photos
          </h2>
          <p className="text-lg text-gray-600">
            EasyPhoto replaces complex tools like Photoshop with a streamlined,
            purpose-built workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bgColor} ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
