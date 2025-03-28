
import React, { useEffect, useRef } from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create YouTube player after component mounts
    if (videoContainerRef.current) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      
      // @ts-ignore
      window.onYouTubeIframeAPIReady = () => {
        // @ts-ignore
        new YT.Player('youtube-player', {
          videoId: 'VqYifYVigOY',
          playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'VqYifYVigOY', // needed for looping
            controls: 0,
            showinfo: 0,
            rel: 0,
            mute: 1, // muted for autoplay to work
            playsinline: 1,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
            }
          }
        });
      };
    }
    
    return () => {
      // @ts-ignore
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[url('/hero-pattern.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-brand-blue opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 -translate-x-1/3 rounded-full bg-brand-teal opacity-10 blur-3xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block rounded-full bg-brand-yellow px-4 py-1.5 text-sm font-semibold text-brand-navy animate-slide-in shadow-sm">
              A melhor metodologia de ensino de inglês
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
              Transforme-se em um <span className="text-gradient-blue">professor de inglês certificado</span> pela Metodologia The Place!
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 max-w-lg">
              Abra sua escola de inglês com a metodologia The Place e tenha alunos fluentes em inglês. Com a melhor taxa de licença e sem Royalties.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Metodologia exclusiva e comprovada</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Material didático para todas as idades</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Sem Royalties - apenas uma taxa única</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contato" className="the-place-button group flex items-center justify-center gap-2 shadow-blue rounded-full py-3.5 px-8">
                Quero Saber Mais
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a href="#metodo" className="hero-button hero-button-secondary group flex items-center justify-center gap-2 rounded-full py-3.5 px-8">
                Conhecer o Método
                <ChevronRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden animate-scale-in">
            <div 
              ref={videoContainerRef}
              className="relative z-10 glass-panel p-6 md:p-10 mx-auto max-w-md lg:max-w-full shadow-2xl rounded-2xl border border-white/30"
            >
              {/* YouTube thumbnail overlay */}
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                {/* Thumbnail image that will be displayed before the video loads */}
                <img 
                  src="/lovable-uploads/2daefeb2-b0e8-43d8-b8ff-4c3781ef9386.png" 
                  alt="The Place English School - Ganhe dinheiro ensinando inglês" 
                  className="w-full h-full object-cover rounded-lg"
                />
                
                {/* YouTube iframe container */}
                <div className="absolute inset-0">
                  <div id="youtube-player" className="w-full h-full"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 flex items-center justify-center rounded-full bg-white w-24 h-24 shadow-lg animate-bounce-subtle p-2">
                <img 
                  src="https://theplacebrazil.com/wp-content/uploads/2016/12/LOGO-JPG-200px.jpg" 
                  alt="The Place Logo" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
