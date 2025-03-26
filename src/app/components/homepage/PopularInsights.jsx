import { Calendar, MessageSquare, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PopularInsights = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          Popular Insights
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Discover insights through the latest analysis to enhance your
          knowledge from our expert contributors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-60">
              <Image
                src="/Images/img1.png"
                alt="/Images/img1.png"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <div className="bg-emerald-500 text-white px-3 py-1 rounded flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">17 Mar 2025</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                How to Use Behavioral Data to Mast...
              </h3>
              <p className="mb-4">
                Keen to know the ins and outs of behavioral data? From using CRM
                tools to mastering your social media algorithm, here's how to
                use behavioral data to inform and improve...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span>1</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <User className="w-4 h-4" />
                    <span>Mr John</span>
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-emerald-500 font-medium flex items-center"
                >
                  READ MORE <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-60">
              <Image
                src="/Images/img2.png"
                alt="Person with blackboard background"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <div className="bg-emerald-500 text-white px-3 py-1 rounded flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">17 Mar 2025</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                What's New on Envato Elements?...
              </h3>
              <p className="mb-4">
                From suggested music tracks and related items to collections
                curated just for you, let's explore the latest and greatest
                product updates on Envato Elements.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span>1</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <User className="w-4 h-4" />
                    <span>Mr John</span>
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-emerald-500 font-medium flex items-center"
                >
                  READ MORE <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-60">
              <Image
                src="/Images/img3.png"
                alt="Person with blue background"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <div className="bg-emerald-500 text-white px-3 py-1 rounded flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">17 Mar 2025</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                Mockup Trends for 2023: From...
              </h3>
              <p className="mb-4">
                Mock mock, who's there? The top mockup trends of 2023! If you
                want to take your designs to the next level, here are the top
                mockup trends to try this year.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span>0</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <User className="w-4 h-4" />
                    <span>Mr John</span>
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-emerald-500 font-medium flex items-center"
                >
                  READ MORE <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInsights;
