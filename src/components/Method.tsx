
import React from 'react';
import { cn } from '@/lib/utils';

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
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block rounded-full bg-brand-yellow px-4 py-1.5 text-sm font-semibold text-brand-navy shadow-sm">
              Por Que Escolher a The Place
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Por Que Escolher a <span className="text-gradient-blue">The Place English School?</span>
            </h2>
            {/* Lista de benefícios removida conforme solicitado */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
