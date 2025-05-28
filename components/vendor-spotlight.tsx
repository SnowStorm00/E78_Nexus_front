import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"

export function VendorSpotlight() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-8">
            <div className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
              Vendor Spotlight
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/images/cybermaxx-vendor.png"
                  alt="CyberMaxx - Think like an Adversary. Defend like a Guardian"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Cybermaxx</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Cybersafe Solutions a CyberMaxx Company's SOL XDR is an advanced cybersecurity solution that combines
                  state-of-the-art technologies to deliver managed detection, response, and containment capabilities.
                </p>
                <div className="border-l-4 border-orange-500 pl-4 mb-8">
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                    Advanced Cybersecurity Solutions
                  </p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium w-fit">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
