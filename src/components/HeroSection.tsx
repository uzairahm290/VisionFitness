
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section entrance animation
      const tl = gsap.timeline()
      
      tl.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(statsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(imageRef.current,
        { x: 100, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )

      // Floating animation for the hero image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      })

      // Stats counter animation
      const stats = statsRef.current?.querySelectorAll('.stat-number')
      stats?.forEach((stat, index) => {
        const target = parseInt(stat.textContent?.replace(/\D/g, '') || '0')
        gsap.fromTo(stat,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            delay: 1 + index * 0.2,
            snap: { textContent: 1 },
            onUpdate: function() {
              const current = Math.ceil(this.targets()[0].textContent)
              this.targets()[0].textContent = current + '+'
            }
          }
        )
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                <span>Premium Fitness Experience</span>
              </div>
              
              <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Transform Your{" "}
                <span className="text-primary">Body</span>{" "}
                <br />
                Transform Your{" "}
                <span className="text-primary">Life</span>
              </h1>
              
              <p ref={subtitleRef} className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Join Vision Fitness and discover the power of transformation. 
                Our state-of-the-art facilities and expert trainers are here to 
                help you achieve your fitness goals.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2 stat-number">50</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2 stat-number">5</div>
                <div className="text-sm text-muted-foreground">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2 stat-number">10</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div ref={imageRef} className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero.jpg"
                alt="Vision Fitness Gym"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
