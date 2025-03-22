
import React, { useRef, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialVideo {
  id: string;
  title: string;
  person: string;
}

const testimonialVideos: TestimonialVideo[] = [
  {
    id: "nZvhszO0lWY",
    title: "Depoimento de sucesso",
    person: "Aluno The Place"
  },
  {
    id: "kyGb8EsKs-4",
    title: "Experiência transformadora",
    person: "Aluno The Place"
  },
  {
    id: "1x6sbj7DJGs",
    title: "Impacto do método",
    person: "Aluno The Place"
  },
  {
    id: "h_Wg8UeVNSM",
    title: "Crescimento com a metodologia",
    person: "Aluno The Place"
  },
  {
    id: "1mLZKgBlsLo",
    title: "Casos de sucesso",
    person: "Aluno The Place"
  }
];

const TestimonialVideoCard = ({ video }: { video: TestimonialVideo }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentVideoRef = videoRef.current;
    if (!currentVideoRef) return;
    
    const videoId = currentVideoRef.getAttribute('data-video-id');
    if (!videoId) return;
    
    // Create a thumbnail with play overlay initially
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'thumbnail-container relative cursor-pointer';
    thumbnailContainer.innerHTML = `
      <img 
        src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" 
        alt="${video.title}" 
        class="w-full h-auto object-cover rounded-lg"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="bg-white/80 rounded-full p-3 shadow-lg hover:bg-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-blue">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      </div>
    `;
    
    currentVideoRef.appendChild(thumbnailContainer);
    
    // Handle thumbnail click to load the YouTube player
    thumbnailContainer.addEventListener('click', () => {
      // Remove the thumbnail container
      thumbnailContainer.remove();
      
      // Create and append the iframe
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.className = 'absolute inset-0 rounded-lg';
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      
      currentVideoRef.appendChild(iframe);
    });
    
    return () => {
      // Clean up if component unmounts
      if (thumbnailContainer.parentNode === currentVideoRef) {
        currentVideoRef.removeChild(thumbnailContainer);
      }
    };
  }, [video.id]);

  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-video relative rounded-t-lg overflow-hidden">
          <div 
            ref={videoRef}
            data-video-id={video.id}
            className="relative w-full h-full"
          />
        </div>
        <div className="p-4 border-t border-gray-100">
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" />
            ))}
          </div>
          <Quote size={24} className="text-brand-blue/20 mb-1" />
          <h3 className="font-semibold text-brand-navy">{video.title}</h3>
          <p className="text-sm text-gray-600">{video.person}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-flag-us-red/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-flag-uk-blue/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex gap-2 items-center justify-center rounded-full bg-brand-light px-4 py-1 mb-4">
            <span className="inline-block w-3 h-3 rounded-full bg-flag-us-red animate-pulse"></span>
            <span className="text-sm font-semibold text-brand-navy">Histórias de sucesso</span>
            <span className="inline-block w-3 h-3 rounded-full bg-flag-uk-blue animate-pulse"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Depoimentos de <span className="text-gradient-blue">alunos</span>
          </h2>
          
          <p className="text-slate-600 max-w-2xl mx-auto">
            Veja como nossa metodologia exclusiva tem transformado a vida de alunos em todo o Brasil, criando histórias reais de sucesso no ensino de inglês.
          </p>
        </div>
        
        <div className="mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialVideos.map((video) => (
                <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <TestimonialVideoCard video={video} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static bg-white hover:bg-brand-light border-brand-blue/20 hover:border-brand-blue/30 text-brand-blue" />
              <CarouselNext className="relative static bg-white hover:bg-brand-light border-brand-blue/20 hover:border-brand-blue/30 text-brand-blue" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
