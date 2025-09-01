

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "gym", label: "Gym Equipment" },
    { id: "classes", label: "Group Classes" },
    { id: "facilities", label: "Facilities" }
  ]

  const galleryItems = [
    {
      id: 1,
      image: "/images/gym1.jpg",
      title: "Modern Gym Equipment",
      category: "gym",
      description: "State-of-the-art fitness equipment for all your training needs"
    },
    {
      id: 2,
      image: "/images/classes.jpg",
      title: "Personal Training Session",
      category: "training",
      description: "One-on-one personal training with certified professionals"
    },
    {
      id: 3,
      image: "/images/classes-1.jpg",
      title: "Group Fitness Class",
      category: "classes",
      description: "High-energy group classes for motivation and fun"
    },
    {
      id: 4,
      image: "/images/facilities1.jpg",
      title: "Tennis Table",
      category: "facilites",
      description: "Extensive cardio equipment for endurance training"
    },
    {
      id: 5,
      image: "/images/gym.jpg",
      title: "Yoga Studio",
      category: "classes",
      description: "Peaceful yoga studio for mind-body wellness"
    },
    {
      id: 6,
      image: "/images/weight.jpg",
      title: "Weight Training Area",
      category: "gym",
      description: "Comprehensive weight training facilities"
    },
    {
      id: 7,
      image: "/images/snooker.jpg",
      title: "Snooker Table",
      category: "facilites",
      description: "Extensive cardio equipment for endurance training"
    },
  ]

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Our{" "}
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities and see what makes 
            Vision Fitness the premier choice for your fitness journey.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-500 filter saturate-60 group-hover:saturate-100"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover: transition-colors duration-300" />
                
                {/* Heart icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                    <Heart className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="capitalize">
                    {item.category}
                  </Badge>
                </div>


              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
        </Card>
          ))}
      </div>
    </div>
  </section>
  )
}
