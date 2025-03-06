
import React from 'react';
import { Check, BookOpen, Users, GraduationCap, School, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCheck = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="feature-check">
      <div className="flex-shrink-0 mt-1">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/10">
          <Check className="h-3.5 w-3.5 text-brand-blue" />
        </div>
      </div>
      <p className="text-slate-700">{children}</p>
    </div>
  );
};

const Method = () => {
  return (
    <section id="metodo" className="py-20 overflow-hidden bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -z-10 h-96 w-96 rounded-full bg-brand-light/70 blur-3xl left-1/4 top-1/4"></div>
            <div className="relative glass-panel p-6 md:p-8 rounded-lg overflow-hidden shadow-xl animate-scale-in">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaD0AqDancEmcrGMvMdGuigrIYaKvz2wSbMQ&s"
                alt="Sala de aula com metodologia The Place"
                className="w-full h-auto rounded-lg object-cover lazy-image lazy-image-loaded"
                style={{ aspectRatio: '4/3' }}
                loading="lazy"
              />
              <div className="absolute bottom-8 right-8 glass-panel p-4 rounded-lg shadow-lg max-w-xs animate-fade-in-up">
                <div className="flex gap-3 mb-2">
                  <BookOpen className="h-6 w-6 text-brand-blue" />
                  <h4 className="font-semibold text-brand-navy">Método Exclusivo</h4>
                </div>
                <p className="text-sm text-slate-700">
                  Nossa metodologia combina técnicas modernas com práticas comprovadamente eficazes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block rounded-md bg-brand-yellow px-3 py-1 text-sm font-medium text-brand-navy">
              Por Que Escolher a The Place
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Por Que Escolher a The Place English School?
            </h2>
            
            <div className="space-y-4">
              <FeatureCheck>
                <span className="font-medium">Ensino Eficiente:</span> Nossos alunos realmente aprendem a falar, entender, ler e escrever em inglês.
              </FeatureCheck>
              
              <FeatureCheck>
                <span className="font-medium">Formação Completa:</span> Curso de capacitação para professores pela Editora The Place English School.
              </FeatureCheck>
              
              <FeatureCheck>
                <span className="font-medium">Estratégias Inovadoras:</span> Retenção de alunos garantida por meio de métodos pedagógicos exclusivos.
              </FeatureCheck>
              
              <FeatureCheck>
                <span className="font-medium">Suporte Total:</span> Acesso ao departamento pedagógico e ferramentas para acompanhar o progresso de cada aluno.
              </FeatureCheck>
              
              <FeatureCheck>
                <span className="font-medium">Investimento Sob Demanda:</span> Material didático sob demanda, sem necessidade de estoque.
              </FeatureCheck>
            </div>
            
            <a href="#contato" className={cn(
              "the-place-button",
              "inline-flex mt-4 animate-scale-in"
            )}>
              Quero Saber Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
