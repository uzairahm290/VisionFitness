

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
  Star
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
      price: "$29",
      period: "/month",
      features: ["Access to gym equipment", "Locker room access", "Free parking"],
      popular: false
    },
    {
      name: "Premium",
      price: "$49",
      period: "/month",
      features: ["All Basic features", "Group classes", "Personal trainer consultation", "Towel service"],
      popular: true
    },
    {
      name: "Elite",
      price: "$79",
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

      // Membership plans animation
      const planCards = plansRef.current?.querySelectorAll('.plan-card')
      planCards?.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
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

      // Map section animation
      gsap.fromTo(mapRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

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

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="space-y-8">
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

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            {/* Contact Info Cards */}
            <div ref={contactInfoRef} className="space-y-3 lg:space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 contact-card ${
                    info.title === "Visit Us" ? "cursor-pointer" : ""
                  }`}
                  onClick={info.title === "Visit Us" ? () => window.open('https://maps.app.goo.gl/F8oFxq1rKoNi9HwJ9', '_blank') : undefined}
                >
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <div className={`p-2 lg:p-3 rounded-lg ${info.color}`}>
                        <info.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base lg:text-lg mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1 text-sm lg:text-base">{info.details}</p>
                        <p className="text-xs lg:text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Membership Plans */}
            <Card className="shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Membership Plans</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div ref={plansRef} className="space-y-3">
                  {membershipPlans.map((plan, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors plan-card">
                      <div className="flex items-center space-x-3">
                        {plan.popular && (
                          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                        )}
                        <div>
                          <h4 className="font-semibold">{plan.name}</h4>
                          <div className="flex items-baseline space-x-1">
                            <span className="text-2xl font-bold text-primary">{plan.price}</span>
                            <span className="text-muted-foreground">{plan.period}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {plan.features.slice(0, 2).map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View All Plans
                </Button>
              </CardContent>
            </Card>
          </div>
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
                      <p>• Subway: Fulton Street Station</p>
                      <p>• Bus: M15, M22, M103</p>
                      <p>• Parking available nearby</p>
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
