

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Star,
  Award,
  Share2,
  Twitter,
  Linkedin
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function TrainersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const trainersRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const trainer = {
    id: 1,
    name: "Fahad",
    role: "Owner & Head Trainer",
    specialties: ["CrossFit Training", "Personal Training", "Strength Training"],
    experience: "10+ years",
    image: "/images/trainer.jpg",
    bio: "Fahad is the passionate owner and head trainer at Vision Fitness. Known for his humble nature and exceptional training expertise, he has helped hundreds of clients achieve their fitness goals. His dedication to creating a family-like atmosphere makes Vision Fitness more than just a gym - it's a community.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    },
    achievements: ["CrossFit Certified", "Personal Training Expert", "500+ Happy Clients", "Gym Owner"]
  }

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

      // Trainers cards animation
      const trainerCards = trainersRef.current?.querySelectorAll('.trainer-card')
      trainerCards?.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.15,
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
    <section ref={sectionRef} id="trainers" className="py-10 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Meet Our{" "}
            <span className="text-primary">Expert Trainer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet Fahad, the passionate owner and head trainer at Vision Fitness. 
            His expertise and dedication have helped hundreds of clients achieve their fitness goals.
          </p>
        </div>

        {/* Single Trainer Profile */}
        <div ref={trainersRef} className="max-w-4xl mx-auto mb-16">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 trainer-card overflow-hidden bg-card border-0">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Photo */}
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-all duration-500 filter saturaion-0 group-hover:saturation-0 sm:saturation-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                {/* Name and Role */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">
                    <span className="text-foreground">{trainer.name}</span>
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-2">
                    {trainer.role}
                  </p>
                  <p className="text-muted-foreground">
                    {trainer.experience} of experience
                  </p>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {trainer.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-primary" />
                    Achievements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {trainer.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <Button size="icon" variant="ghost" className="h-10 w-10">
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-10 w-10">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-10 w-10">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
