
import React from 'react';
import { Check, Users, BookOpen, GraduationCap, Globe, Award, School } from 'lucide-react';
import { cn } from '@/lib/utils';

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay?: number;
}) => {
  return (
    <div 
      className="benefit-card group hover:border-brand-blue/30 relative overflow-hidden" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-5 rounded-full bg-brand-light p-4 w-16 h-16 flex items-center justify-center group-hover:bg-brand-blue/10 transition-all duration-300">
        <Icon className="h-8 w-8 text-brand-blue" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-brand-navy group-hover:text-brand-blue transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 text-base">{description}</p>
      
      {/* Card accent decoration */}
      <div className="absolute top-3 right-3 w-20 h-20 bg-brand-yellow/5 rounded-full blur-xl"></div>
      <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-brand-yellow/10 rounded-full"></div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="beneficios" className="pt-16 pb-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-brand-light opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-brand-light opacity-70 blur-3xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-md bg-brand-yellow px-3 py-1 text-sm font-semibold text-brand-navy mb-4 shadow-sm">
            Quem Pode se Beneficiar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
            Quem Pode se Beneficiar da <span className="text-gradient-blue">Nossa Metodologia?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nossa licença é ideal para diferentes perfis que desejam empreender no mercado de ensino de inglês.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            icon={Users}
            title="Professores de Inglês"
            description="Professores que desejam abrir sua própria escola e utilizar uma metodologia comprovadamente eficaz."
            delay={100}
          />
          <BenefitCard
            icon={Globe}
            title="Pessoas Fluentes"
            description="Pessoas fluentes em inglês que desejam iniciar uma carreira no ensino do idioma com seu próprio negócio."
            delay={200}
          />
          <BenefitCard
            icon={BookOpen}
            title="Escolas de Idiomas"
            description="Escolas interessadas em adotar um método exclusivo para atrair e reter mais alunos com resultados comprovados."
            delay={300}
          />
          <BenefitCard
            icon={GraduationCap}
            title="Empreendedores"
            description="Empreendedores que querem abrir um negócio lucrativo e de sucesso no setor de ensino de idiomas."
            delay={400}
          />
          <BenefitCard
            icon={School}
            title="Escolas Regulares"
            description="Diretores de escolas regulares que desejam implementar um programa bilíngue de qualidade."
            delay={500}
          />
          <BenefitCard
            icon={Award}
            title="Buscando Independência"
            description="Profissionais em busca de independência financeira e realização pessoal com seu próprio negócio."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
