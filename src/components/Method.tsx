
import React from 'react';
import { Check, BookOpen, Users, GraduationCap, School, Globe, X, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const FeatureCheck = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="feature-check">
      <div className="flex-shrink-0 mt-1">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/10">
          <Check className="h-3.5 w-3.5 text-brand-blue" />
        </div>
      </div>
      <p className="text-slate-700 text-base">{children}</p>
    </div>
  );
};

const Method = () => {
  return (
    <section id="metodo" className="py-20 overflow-hidden bg-slate-50 relative">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -z-10 h-96 w-96 rounded-full bg-brand-light/70 blur-3xl left-1/4 top-1/4"></div>
            <div className="relative glass-panel p-6 md:p-8 rounded-xl overflow-hidden shadow-xl animate-scale-in border border-white/50">
              <div className="responsive-video-container w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <iframe 
                  src="https://www.youtube.com/embed/3rmkb7_IBlU" 
                  title="Metodologia The Place English School"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Methodology note repositioned for better mobile visibility */}
              <div className="absolute bottom-8 right-8 md:right-8 glass-panel p-3 md:p-4 rounded-lg shadow-lg max-w-[200px] md:max-w-xs animate-fade-in-up hidden md:block border border-white/50">
                <div className="flex gap-2 md:gap-3 mb-1 md:mb-2">
                  <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-brand-blue" />
                  <h4 className="font-semibold text-brand-navy text-sm md:text-base">Método Exclusivo</h4>
                </div>
                <p className="text-xs md:text-sm text-slate-700">
                  Nossa metodologia combina técnicas modernas com práticas comprovadamente eficazes.
                </p>
              </div>
              
              {/* Alternative methodology note for mobile devices */}
              <div className="mt-4 glass-panel p-3 rounded-lg shadow-lg md:hidden border border-white/50">
                <div className="flex gap-2 mb-1">
                  <BookOpen className="h-5 w-5 text-brand-blue" />
                  <h4 className="font-semibold text-brand-navy text-sm">Método Exclusivo</h4>
                </div>
                <p className="text-xs text-slate-700">
                  Nossa metodologia combina técnicas modernas com práticas comprovadamente eficazes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block rounded-full bg-brand-yellow px-4 py-1.5 text-sm font-semibold text-brand-navy shadow-sm">
              Por Que Escolher a The Place
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Por Que Escolher a <span className="text-gradient-blue">The Place English School?</span>
            </h2>
            
            <div className="space-y-5 mt-8">
              <FeatureCheck>
                <span className="font-semibold">Sistema 3 P:</span> Preço acessível, Perto de você, Processo natural de aprendizagem.
              </FeatureCheck>
              
              <FeatureCheck>
                <span className="font-semibold">Licença Exclusiva:</span> Opere com exclusividade em sua região, utilizando a metodologia exclusiva The Place English School.
              </FeatureCheck>
              
              <FeatureCheck>
                <span className="font-semibold">Material Didático Completo:</span> Séries Kids, Teens, Adultos e Premium para todas as idades e níveis.
              </FeatureCheck>
              
              <FeatureCheck>
                <span className="font-semibold">Sem Royalties:</span> Apenas uma taxa única de licença de R$10.000,00, sem mensalidades ou porcentagens.
              </FeatureCheck>
              
              <FeatureCheck>
                <span className="font-semibold">Suporte Completo:</span> Treinamento para professores, suporte pedagógico e orientação para gestão da escola.
              </FeatureCheck>
            </div>
            
            <a href="#contato" className={cn(
              "the-place-button",
              "inline-flex mt-4 animate-scale-in shadow-blue rounded-full"
            )}>
              Quero Abrir Minha Escola
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
