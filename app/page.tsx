import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedApps } from "@/components/featured-apps"
import { CategorySection } from "@/components/category-section"
import { VendorSpotlight } from "@/components/vendor-spotlight"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <FeaturedApps />
        <CategorySection />
        <VendorSpotlight />
      </main>
      <Footer />
    </div>
  )
}
