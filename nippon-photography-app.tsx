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


export default NipponPhotographyApp;
