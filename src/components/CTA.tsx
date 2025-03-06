
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CTA = () => {
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-brand-navy opacity-[0.03]"></div>
      <div className="absolute inset-0 -z-10 bg-[url('/pattern.png')] bg-repeat opacity-[0.02]"></div>
      
      <div className="container px-4 md:px-6 max-w-5xl">
        <div className="glass-panel bg-gradient-to-r from-brand-blue to-brand-navy p-8 md:p-12 rounded-3xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              Pronto para transformar o ensino de inglês?
            </h2>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Entre em contato hoje mesmo e descubra como a metodologia The Place English School 
              pode impulsionar sua carreira ou transformar sua instituição de ensino.
            </p>
            
            <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nome completo" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Telefone com WhatsApp" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <select 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                >
                  <option value="" className="bg-brand-navy">Selecione seu perfil</option>
                  <option value="professor" className="bg-brand-navy">Professor de inglês</option>
                  <option value="fluente" className="bg-brand-navy">Pessoa fluente em inglês</option>
                  <option value="escola" className="bg-brand-navy">Diretor de escola de idiomas</option>
                  <option value="empreendedor" className="bg-brand-navy">Empreendedor</option>
                  <option value="escola-regular" className="bg-brand-navy">Diretor de escola regular</option>
                </select>
                
                <button 
                  type="submit" 
                  className={cn(
                    "w-full py-3 px-6 bg-white text-brand-navy font-semibold rounded-lg",
                    "flex items-center justify-center gap-2 transition-all duration-300",
                    "hover:bg-brand-light hover:shadow-lg active:scale-[0.98]"
                  )}
                >
                  Quero mais informações
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
