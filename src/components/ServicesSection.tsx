

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Dumbbell, 
  Heart, 
  Users, 
  Target, 
  Clock, 
  Award,
  ArrowRight,
  Calendar,
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers to help you reach your fitness goals faster.",
      features: ["Custom workout plans", "Progress tracking", "Nutrition guidance", "24/7 support"]
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "High-energy group sessions that combine cardio, strength, and flexibility training.",
      features: ["Yoga & Pilates", "HIIT Training", "Spinning Classes", "Zumba & Dance"]
    },
    {
      icon: Heart,
      title: "Cardio Zone",
      description: "State-of-the-art cardio equipment to boost your endurance and burn calories.",
      features: ["Treadmills", "Ellipticals", "Rowing Machines", "Stationary Bikes"]
    },
    {
      icon: Target,
      title: "Strength Training",
      description: "Comprehensive strength training area with free weights and resistance machines.",
      features: ["Free Weights", "Cable Machines", "Smith Machines", "Power Racks"]
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Work out on your schedule with round-the-clock access to our facilities.",
      features: ["Flexible hours", "Secure access", "Clean facilities", "Emergency support"]
    },
    {
      icon: Award,
      title: "Nutrition Coaching",
      description: "Expert nutrition guidance to complement your fitness journey and optimize results.",
      features: ["Meal planning", "Supplement advice", "Progress monitoring", "Regular consultations"]
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Services cards staggered animation
      const serviceCards = servicesRef.current?.querySelectorAll('.service-card')
      serviceCards?.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
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

      // CTA section animation
      gsap.fromTo(ctaRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Our{" "}
            <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of fitness services designed to help you 
            achieve your goals and maintain a healthy lifestyle.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 service-card">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="mt-20 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Start Your{" "}
              <span className="text-primary">Fitness Journey</span>?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service that best fits your needs and take the first step 
              towards achieving your fitness goals with our expert team.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => {
                // Scroll to contact section for booking
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Book a Session
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => {
                // Scroll to membership plans section in contact page
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                  // After scrolling to contact, scroll to membership plans
                  setTimeout(() => {
                    const plansSection = contactSection.querySelector('[data-membership-plans]');
                    if (plansSection) {
                      plansSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }, 500);
                }
              }}
            >
              View Membership Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
