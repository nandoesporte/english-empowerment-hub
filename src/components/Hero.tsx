
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[url('/hero-pattern.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-brand-blue opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 -translate-x-1/3 rounded-full bg-brand-teal opacity-10 blur-3xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block rounded-full bg-brand-light px-3 py-1 text-sm font-medium text-brand-navy animate-slide-in">
              Método exclusivo de ensino de inglês
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight">
              Empreenda no Ensino de Inglês com um Método <span className="text-brand-blue">Comprovado!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 max-w-lg">
              Seja um professor, diretor ou empreendedor, a The Place English School tem a solução ideal para você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contato" className={cn(
                "hero-button hero-button-primary group",
                "flex items-center justify-center gap-2"
              )}>
                Quero Saber Mais
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a href="#metodo" className={cn(
                "hero-button hero-button-secondary",
                "flex items-center justify-center gap-2"
              )}>
                Conhecer o Método
              </a>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden animate-scale-in">
            <div className="relative z-10 glass-panel p-6 md:p-10 mx-auto max-w-md lg:max-w-full">
              <img 
                src="/teacher.jpg" 
                alt="Professor de inglês ensinando" 
                className="w-full h-auto rounded-xl shadow-lg object-cover lazy-image lazy-image-loaded"
                style={{ aspectRatio: '16/9' }}
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 flex items-center justify-center rounded-full bg-brand-blue w-24 h-24 shadow-lg animate-bounce-subtle">
                <span className="text-white font-bold text-lg">Método<br/>Único</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
