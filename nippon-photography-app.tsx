import React, { useState } from 'react';
import { Card, CardContent } from "/components/ui/card";
import { Button } from "/components/ui/button";

const NipponPhotographyApp = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      id: 1,
      title: "Kyoto Temple",
      description: "Ancient temple in Kyoto with cherry blossoms"
    },
    {
      id: 2,
      title: "Tokyo Streets",
      description: "Neon-lit streets of Shinjuku at night"
    },
    {
      id: 3,
      title: "Mount Fuji",
      description: "Majestic Mount Fuji at sunrise"
    },
    {
      id: 4,
      title: "Bamboo Forest",
      description: "Serene bamboo forest in Arashiyama"
    },
    {
      id: 5,
      title: "Traditional Tea",
      description: "Traditional Japanese tea ceremony"
    },
    {
      id: 6,
      title: "Osaka Castle",
      description: "Historic Osaka Castle surrounded by moat"
    }
  ];

  const openLightbox = (imageId: number) => {
    setSelectedImage(`Photo ${imageId}`);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Nippon Photography</h1>
          <Button variant="ghost" size="sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Featured Photo */}
        <div className="mb-8">
          <Card className="overflow-hidden border-border">
            <CardContent className="p-0">
              <div className="aspect-[16/9] relative">
                <img
                  src="https://placeholder-image-service.onrender.com/image/800x450?prompt=Featured Japanese landscape photography with Mount Fuji in background and cherry blossoms in foreground, dramatic lighting, cinematic composition&id=featured-1"
                  alt="Featured Japanese landscape photography with Mount Fuji and cherry blossoms in dramatic lighting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-xl font-semibold text-white">Featured Shot</h2>
                  <p className="text-muted-foreground text-sm">Mount Fuji Sunrise</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Photo 1 */}
          <Card 
            className="overflow-hidden border-border cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(1)}
          >
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x400?prompt=Traditional Japanese temple in Kyoto with red gates and autumn colors, serene atmosphere&id=photo-1"
                  alt="Traditional Japanese temple in Kyoto with red gates and autumn colors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm">Kyoto Temple</h3>
                <p className="text-xs text-muted-foreground">Ancient beauty</p>
              </div>
            </CardContent>
          </Card>

          {/* Photo 2 */}
          <Card 
            className="overflow-hidden border-border cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(2)}
          >
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x400?prompt=Tokyo city streets at night with neon lights and people walking, cyberpunk atmosphere&id=photo-2"
                  alt="Tokyo city streets at night with neon lights and cyberpunk atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm">Tokyo Nights</h3>
                <p className="text-xs text-muted-foreground">Urban energy</p>
              </div>
            </CardContent>
          </Card>

          {/* Photo 3 */}
          <Card 
            className="overflow-hidden border-border cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(3)}
          >
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x400?prompt=Mount Fuji at sunrise with perfect reflection in lake, dramatic clouds&id=photo-3"
                  alt="Mount Fuji at sunrise with perfect reflection in lake and dramatic clouds"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm">Fuji Dawn</h3>
                <p className="text-xs text-muted-foreground">Natural wonder</p>
              </div>
            </CardContent>
          </Card>

          {/* Photo 4 */}
          <Card 
            className="overflow-hidden border-border cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(4)}
          >
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x400?prompt=Bamboo forest in Arashiyama with tall green bamboo stalks and light filtering through&id=photo-4"
                  alt="Bamboo forest in Arashiyama with tall green bamboo stalks and filtered light"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm">Bamboo Path</h3>
                <p className="text-xs text-muted-foreground">Peaceful walk</p>
              </div>
            </CardContent>
          </Card>

          {/* Photo 5 */}
          <Card 
            className="overflow-hidden border-border cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(5)}
          >
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x400?prompt=Traditional Japanese tea ceremony with matcha bowl and utensils, minimalist composition&id=photo-5"
                  alt="Traditional Japanese tea ceremony with matcha bowl and utensils in minimalist style"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm">Tea Ritual</h3>
                <p className="text-xs text-muted-foreground">Cultural heritage</p>
              </div>
            </CardContent>
          </Card>

          {/* Photo 6 */}
          <Card 
            className="overflow-hidden border-border cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(6)}
          >
            <CardContent className="p-0">
   
