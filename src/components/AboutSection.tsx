import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Target, Users, Award } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: Target,
      title: "Goal-Oriented Training",
      description: "Personalized programs designed to help you reach your specific fitness goals."
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Join a supportive community of fitness enthusiasts and professional trainers."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Thousands of members have transformed their lives with our proven methods."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Content animation
      gsap.fromTo(contentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Stats cards animation
      const statCards = statsRef.current?.querySelectorAll('.stat-card')
      statCards?.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Features animation
      const featureItems = featuresRef.current?.querySelectorAll('.feature-item')
      featureItems?.forEach((item, index) => {
        gsap.fromTo(item,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-10 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <h2 ref={titleRef} className="text-3xl sm:text-4xl font-bold tracking-tight">
                About{" "}
                <span className="text-primary">Vision Fitness</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We are more than just a gym. We are a community dedicated to helping 
                individuals achieve their fitness goals and transform their lives through 
                comprehensive training programs, expert guidance, and state-of-the-art facilities.
              </p>
            </div>

            <div ref={featuresRef} className="space-y-6">
              <div className="flex items-start space-x-4 feature-item">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">State-of-the-Art Equipment</h3>
                  <p className="text-muted-foreground">
                    Access to the latest fitness technology and equipment to maximize your workout efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 feature-item">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Certified Personal Trainers</h3>
                  <p className="text-muted-foreground">
                    Our team of certified professionals is here to guide you every step of your fitness journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 feature-item">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Flexible Membership Options</h3>
                  <p className="text-muted-foreground">
                    Choose from various membership plans that fit your lifestyle and fitness goals.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8 py-6">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 stat-card">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 stat-card">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Members</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 stat-card">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Expert Trainers</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 stat-card">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">60+</div>
                  <div className="text-sm text-muted-foreground">Weekly Classes</div>
                </CardContent>
              </Card>
            </div>

            {/* Features Grid */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
