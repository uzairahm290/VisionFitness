

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  
  // Animated counters state
  const [counts, setCounts] = useState({
    satisfaction: 0,
    rating: 0,
    members: 0,
    stories: 0
  })

  // Animation values
  const targetValues = {
    satisfaction: 98,
    rating: 4.7,
    members: 500,
    stories: 1000
  }

  // Animate counters when component mounts
  useEffect(() => {
    const duration = 1000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    
    const timer = setInterval(() => {
      setCounts(prev => ({
        satisfaction: Math.min(prev.satisfaction + (targetValues.satisfaction / steps), targetValues.satisfaction),
        rating: Math.min(prev.rating + (targetValues.rating / steps), targetValues.rating),
        members: Math.min(prev.members + (targetValues.members / steps), targetValues.members),
        stories: Math.min(prev.stories + (targetValues.stories / steps), targetValues.stories)
      }))
    }, stepDuration)
    
    return () => clearInterval(timer)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Shahid Khan",
      role: "Member for 6 months",
      image: "/testimonials/shahid.jpg",
      rating: 5,
      category: "Crossfit Training",
      testimonial: "One of the best Crossfit Training Centre in Lahore. Highly recommended. Mr Fahad (Owner of the Centre) one of the humble person i have ever met in fitness industry.",
      results: "Lost 30 lbs in 6 months"
    },
    {
      id: 2,
      name: "Sher Azam",
      role: "Member for 10 months",
      image: "/testimonials/sher.jpg",
      rating: 5,
      category: "Personal Training",
      testimonial: "Best gym in town with latest equipment and alot of options other than gym like snooker, table tennis, play station and many more… Best choice for personal trainer.",
      results: "Gained 20 lbs muscle"
    },
    {
      id: 3,
      name: "Dua Fatima Rajput",
      role: "Member for 10 months",
      image: "/testimonials/dua.jpg",
      rating: 5,
      category: "General Fitness",
      testimonial: "Amazing gym! 5/5! Great gym, awesome owner! Humble, kind & supportive. Feels like family! Brother by heart( Fahad bhai🩶) Best gym in lahore",
      results: "Improved strength by 50%"
    },
    {
      id: 4,
      name: "Bari",
      role: "Member for 8 months",
      image: "/testimonials/bari.jpg",
      rating: 5,
      category: "Cardio & Strength",
      testimonial: "Best gym in johar town , amazing facilities and equipment. Dedicated floor for cardio and strength training",
      results: "Completed 10K race"
    },
    {
      id: 5,
      name: "Faisal Mahmood",
      role: "Member for 4 years",
      image: "/testimonials/faisal.jpg",
      rating: 5,
      category: "Equipment & Atmosphere",
      testimonial: "Fahad is awesome. And his gym is excellent in the town. Imported equipments and amazing atmosphere. Visit and enjoy",
      results: "Achieved 6-pack abs"
    },
    {
      id: 6,
      name: "Hafiz Asif",
      role: "Local Guide · 10 months",
      image: "/testimonials/hafiz.jpg",
      rating: 5,
      category: "Cleanliness & Equipment",
      testimonial: "It's one of the best gyms. Neat and clean. Excellent machinery. 100% recommended",
      results: "Reduced body fat by 15%"
    },
    {
      id: 7,
      name: "Asad Abbas",
      role: "Local Guide · 2 years",
      image: "/testimonials/asad.jpg",
      rating: 5,
      category: "Equipment & Management",
      testimonial: "Good gym, all kind of machines available. Management is good too.",
      results: "Increased bench press by 100 lbs"
    },
    {
      id: 8,
      name: "Mohammad Adil Khushi",
      role: "Local Guide · 4 years",
      image: "/testimonials/adil.jpg",
      rating: 4.5,
      category: "Cardio & Value",
      testimonial: "Nice place for shredding sime sweat. Has treadmills and eleptical as well. Though the gym was spacious when they started. But now with more and GOOD machines, the space is getting filled. Im giving 5 stars cux it's reasonable, close to my house and covers all my workouts.",
      results: "Improved flexibility by 60%"
    },
    {
      id: 9,
      name: "Abdullah Sheikh",
      role: "Local Guide · 1 year",
      image: "/testimonials/abdullah.jpg",
      rating: 5,
      category: "Recreation Facilities",
      testimonial: "Seems to be a good gym.Actually I was looking for some gym which has table tennis too. I visited it today & it contains table tennis & snooker and i think its one of the few gyms to have so....",
      results: "Won local fitness competition"
    },
    {
      id: 10,
      name: "Hamza Nadeem",
      role: "Local Guide · 7 months",
      image: "/testimonials/hamza.jpg",
      rating: 5,
      category: "Equipment & Environment",
      testimonial: "Very good gym with all types of equipment. Overall enviornment and experience is great so far.",
      results: "Attends 5 classes per week"
    }
  ]

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What Our{" "}
            <span className="text-primary">Members Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our community of members who have transformed their lives 
            and achieved their fitness goals with Vision Fitness.
          </p>
        </div>

        {/* Continuously Scrolling Testimonials */}
        <div className="relative overflow-hidden mx-auto max-w-7xl">
          <div 
            ref={scrollRef}
            className="flex animate-scroll py-4"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] p-2 sm:p-3 md:p-4"
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3 sm:pb-4 px-3 sm:px-4">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="text-xs sm:text-sm font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-base sm:text-lg truncate">{testimonial.name}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                        </div>
                      </div>
                      <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary/30 group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <Badge variant="secondary" className="text-xs w-fit">
                        {testimonial.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                    <blockquote className="text-muted-foreground italic text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-none">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Math.round(counts.satisfaction)}%
            </div>
            <div className="text-sm text-muted-foreground">Member Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {counts.rating.toFixed(1)}/5
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Math.round(counts.members)}+
            </div>
            <div className="text-sm text-muted-foreground">Happy Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Math.round(counts.stories)}+
            </div>
            <div className="text-sm text-muted-foreground">Success Stories</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start your fitness journey today and become part of our community 
              of successful members who have transformed their lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Your Journey
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
