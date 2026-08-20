import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import OurSpace from "@/components/OurSpace";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />

      <main>
        <section
          id="top"
          className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-footer-bg"
        >
          <video
            className="absolute inset-0 z-0 h-full w-full object-cover"
            style={{ objectPosition: "50% 38%" }}
            src="/images/banner.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />

          {/* Minimum overlay for text contrast: a touch darker at the top (header)
              and behind the centered copy, left clear over the wave band. */}
          <div
            className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.08)_26%,rgba(0,0,0,0.22)_58%,rgba(0,0,0,0.36)_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-16 sm:px-8">
            <Hero />
          </div>
        </section>

        <Treatments />
        <OurSpace />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
