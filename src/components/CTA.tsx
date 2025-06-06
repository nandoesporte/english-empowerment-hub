
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-brand-navy opacity-[0.03]"></div>
      <div className="absolute inset-0 -z-10 bg-[url('/pattern.png')] bg-repeat opacity-[0.02]"></div>
      
      <div className="container px-4 md:px-6 max-w-5xl">
        <div className="modern-glass-card bg-gradient-to-b from-brand-blue to-brand-navy p-8 md:p-12 rounded-2xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              Pronto para começar sua jornada como professor certificado?
            </h2>
            
            <p className="body-text text-lg text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              A metodologia The Place English School já transformou milhares de vidas. 
              Agora é a sua vez de fazer parte desta história de sucesso e conquistar sua independência financeira.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <a 
                href="#" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center rounded-full bg-brand-yellow text-brand-navy font-bold py-4 px-8 text-lg transition-all duration-300 hover:bg-white hover:shadow-lg active:scale-[0.98] shadow-lg"
              >
                Preencher Formulário
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <p className="text-white/80 text-sm">
                Ou role para cima e preencha o formulário no início da página
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
