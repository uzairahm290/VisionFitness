

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Calendar,
  Star,
  MessageCircle
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Refs for animations
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)
  const plansRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "10 B1 PIA Main Boulevard, Block B1",
      description: "PIA Housing Scheme, Lahore, Pakistan",
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "0332-5010579",
      description: "Available 24/7 for emergencies",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@visionfitness.com",
      description: "We'll respond within 24 hours",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: "24/7 Access",
      description: "Staff available 6 AM - 10 PM",
      color: "bg-orange-500/10 text-orange-600"
    }
  ]

  const membershipPlans = [
    {
      name: "Basic",
      price: "RS. 3000",
      period: "/month",
      features: ["Access to gym equipment", "Locker room access", "Free parking"],
      popular: false
    },
    {
      name: "Premium",
      price: "RS. 5000",
      period: "/month",
      features: ["All Basic features", "Group classes", "Personal trainer consultation", "Towel service"],
      popular: true
    },
    {
      name: "Elite",
      price: "RS. 7000",
      period: "/month",
      features: ["All Premium features", "Unlimited personal training", "Nutrition consultation", "Spa access"],
      popular: false
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

      // Contact info cards animation
      const contactCards = contactInfoRef.current?.querySelectorAll('.contact-card')
      contactCards?.forEach((card, index) => {
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

      // Form animation
      gsap.fromTo(formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Quick Contact section animation
      const quickContactSection = formRef.current?.nextElementSibling
      if (quickContactSection) {
        gsap.fromTo(quickContactSection,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: quickContactSection,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Membership plans section animation
      gsap.fromTo(plansRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: plansRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Individual plan cards staggered animation
      const planCards = plansRef.current?.querySelectorAll('.plan-card')
      planCards?.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.95, rotationY: -15 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.3 + (index * 0.15),
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Map section animation
      gsap.fromTo(mapRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Map iframe animation
      const mapIframe = mapRef.current?.querySelector('iframe')
      if (mapIframe) {
        gsap.fromTo(mapIframe,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.5,
            scrollTrigger: {
              trigger: mapIframe,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Location details animation
      const locationDetails = mapRef.current?.querySelectorAll('.grid.md\\:grid-cols-2 > div')
      locationDetails?.forEach((detail, index) => {
        gsap.fromTo(detail,
          { x: index === 0 ? -30 : 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.8 + (index * 0.2),
            scrollTrigger: {
              trigger: detail,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Action buttons animation
      const actionButtons = mapRef.current?.querySelectorAll('button')
      actionButtons?.forEach((button, index) => {
        gsap.fromTo(button,
          { y: 20, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 1.2 + (index * 0.1),
            scrollTrigger: {
              trigger: button,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsLoading(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get in{" "}
            <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today to learn more about 
            our membership options and schedule your first session.
          </p>
        </div>

        {/* Contact Info Cards - Top Section */}
        <div ref={contactInfoRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 contact-card ${
                info.title === "Visit Us" ? "cursor-pointer" : ""
              }`}
              onClick={info.title === "Visit Us" ? () => window.open('https://maps.app.goo.gl/F8oFxq1rKoNi9HwJ9', '_blank') : undefined}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 rounded-full ${info.color} flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

                {/* First Line: Contact Form + Quick Contact */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 mb-16">
          {/* Contact Form */}
          <div ref={formRef}>
            <Card className="shadow-xl border-0 bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-green-600">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>Full Name</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>Email</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>Phone Number</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>Subject</span>
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Membership inquiry"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>Message</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your fitness goals..."
                        rows={5}
                        required
                        className="resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-semibold" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Quick Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Call us now</p>
                    <p className="text-primary font-semibold">0332-5010579</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email us</p>
                    <p className="text-primary font-semibold">info@visionfitness.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp us</p>
                    <p className="text-green-600 font-semibold">0332-5010579</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white" 
                  onClick={() => window.open('https://wa.me/923325010579?text=Hi! I\'m interested in Vision Fitness membership. Can you provide more information?', '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Second Line: Membership Plans */}
        <div ref={plansRef} className="mb-16" data-membership-plans>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span>Popular Plans</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={plansRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                  {membershipPlans.map((plan, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors plan-card text-center relative">
                      {plan.popular && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-primary text-primary-foreground text-xs">Popular</Badge>
                        </div>
                      )}
                      <div className="mb-3">
                        <h4 className="font-semibold mb-2">{plan.name}</h4>
                      </div>
                      <div className="flex items-baseline justify-center space-x-1 mb-4">
                        <span className="text-2xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        {plan.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div ref={mapRef} className="mt-16">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Find Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Google Maps Embed */}
                
                <div className="aspect-video rounded-lg overflow-hidden border shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d871328.4286844431!2d73.1327263!3d31.4519431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901122e11b0d5%3A0xa8e52f05b1887e8c!2sVision%20Fitness!5e0!3m2!1sen!2s!4v1756565621476!5m2!1sen!2s"
                    height="600"
                    width="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vision Fitness Location"
                    className="w-full h-full"
                  />
                </div>
                
                {/* Location Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Our Location</span>
                    </h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>10 B1 PIA Main Boulevard</p>
                      <p>Block B1, PIA Housing Scheme</p>
                      <p>Lahore, 54770, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Getting Here</span>
                    </h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Metro Bus: Johar Town Station</p>
                      <p>• Local Bus: Routes 1, 3, 5</p>
                      <p>• Free parking available</p>
                      <p>• Easy access from Main Boulevard</p>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    className="flex-1" 
                    onClick={() => window.open('https://maps.app.goo.gl/F8oFxq1rKoNi9HwJ9', '_blank')}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open('https://maps.app.goo.gl/F8oFxq1rKoNi9HwJ9', '_blank')}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
