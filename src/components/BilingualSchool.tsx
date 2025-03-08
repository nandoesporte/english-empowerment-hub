
import React from 'react';
import { Check, School, BookOpen, GraduationCap, PenTool, Award, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const MaterialBenefit = ({ icon: Icon, title, description, features, delay = 0 }: BenefitProps) => {
  return (
    <div className="the-place-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-slate-100 rounded-xl p-6" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-light mb-6">
        <Icon className="h-8 w-8 text-brand-blue" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-brand-navy">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <Check className="h-5 w-5 text-brand-blue" />
            </div>
            <p className="text-slate-700 text-sm">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const BilingualSchool = () => {
  return (
    <section id="escola-bilingue" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-brand-light opacity-70 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-brand-light opacity-70 blur-2xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-brand-yellow px-4 py-1.5 text-sm font-semibold text-brand-navy mb-4 shadow-sm">
            Material Didático Exclusivo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
            Material Didático Completo para <span className="text-gradient-blue">Todas as Idades</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nosso material é desenvolvido especificamente para cada faixa etária, garantindo o aprendizado efetivo do inglês.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <MaterialBenefit
            icon={School}
            title="Série Kids"
            description="Material didático para crianças entre 8 e 11 anos de idade, com conteúdo lúdico e adequado ao desenvolvimento."
            features={[
              "4 livros anuais com atividades interativas",
              "Abordagem lúdica e adequada para crianças"
            ]}
            delay={100}
          />
          
          <MaterialBenefit
            icon={BookOpen}
            title="Série Teens"
            description="Conteúdo especializado para jovens entre 12 e 17 anos, com temas relevantes e adaptados à realidade deles."
            features={[
              "7 livros semestrais com progressão adequada",
              "Temas do universo adolescente para maior engajamento"
            ]}
            delay={200}
          />
          
          <MaterialBenefit
            icon={GraduationCap}
            title="Série Adultos"
            description="Material completo para alunos acima de 18 anos, com foco em situações práticas e comunicação efetiva."
            features={[
              "4 livros semestrais com foco em situações reais",
              "Conteúdo direcionado para o mercado de trabalho"
            ]}
            delay={300}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <MaterialBenefit
            icon={Award}
            title="Série Premium"
            description="Material avançado para alunos já fluentes em inglês que desejam aprimorar ainda mais suas habilidades linguísticas."
            features={[
              "3 livros semestrais com conteúdo avançado",
              "Foco em nuances da língua e expressões idiomáticas"
            ]}
            delay={400}
          />
          
          <MaterialBenefit
            icon={PenTool}
            title="Vantagens do Material"
            description="Nosso material didático exclusivo oferece vantagens únicas para escolas e professores."
            features={[
              "Sem necessidade de estoque inicial",
              "Compra sob demanda conforme necessidade",
              "Entrega direta pelo correio para sua escola",
              "Acesso exclusivo para licenciados The Place"
            ]}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default BilingualSchool;
