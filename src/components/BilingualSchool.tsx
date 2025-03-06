
import React from 'react';
import { Check, School, BookOpen, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const BilingualSchool = () => {
  return (
    <section id="escola-bilingue" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-brand-light opacity-70 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-brand-light opacity-70 blur-2xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-md bg-brand-yellow px-3 py-1 text-sm font-medium text-brand-navy mb-4">
            Transformação Educacional
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Transforme Sua Escola Regular em uma Escola Bilíngue!
          </h2>
          <p className="text-lg text-slate-600">
            Sua escola pode se tornar referência no ensino bilíngue com exclusividade na sua região.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="the-place-card hover:-translate-y-1 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-brand-light mb-6">
              <School className="h-7 w-7 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-brand-navy">Metodologia Exclusiva</h3>
            <p className="text-slate-600 mb-6">
              Ensino do inglês integrado à grade curricular, com abordagem pedagógica moderna e eficaz.
            </p>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-brand-blue" />
              </div>
              <p className="text-slate-700 text-sm">
                Resultados visíveis desde as primeiras aulas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-brand-blue" />
              </div>
              <p className="text-slate-700 text-sm">
                Método adaptado para diferentes idades
              </p>
            </div>
          </div>
          
          <div className="the-place-card hover:-translate-y-1 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-brand-light mb-6">
              <BookOpen className="h-7 w-7 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-brand-navy">Material Didático Completo</h3>
            <p className="text-slate-600 mb-6">
              Conteúdo para alunos do ensino fundamental ao médio, desenvolvido por especialistas em educação bilíngue.
            </p>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-brand-blue" />
              </div>
              <p className="text-slate-700 text-sm">
                Livros e materiais digitais interativos
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-brand-blue" />
              </div>
              <p className="text-slate-700 text-sm">
                Conteúdo alinhado à BNCC e parâmetros internacionais
              </p>
            </div>
          </div>
          
          <div className="the-place-card hover:-translate-y-1 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-brand-light mb-6">
              <GraduationCap className="h-7 w-7 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-brand-navy">Estratégias Pedagógicas</h3>
            <p className="text-slate-600 mb-6">
              Suporte e treinamento para tornar sua escola bilíngue de verdade, com acompanhamento contínuo.
            </p>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-brand-blue" />
              </div>
              <p className="text-slate-700 text-sm">
                Capacitação continuada para professores
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-brand-blue" />
              </div>
              <p className="text-slate-700 text-sm">
                Consultoria pedagógica especializada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BilingualSchool;
