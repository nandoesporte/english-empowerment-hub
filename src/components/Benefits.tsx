import React from 'react';
import { Check, Users, BookOpen, GraduationCap, Globe, Award, School, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

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
      className="benefit-card group relative overflow-hidden border-2 border-transparent hover:border-[#1e3a8a]/20 rounded-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card top accent bar - American/British inspired */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bf0a30] via-white to-[#002868]"></div>
      
      <div className="p-7">
        <div className="mb-5 rounded-full bg-[#f8f9fa] p-4 w-16 h-16 flex items-center justify-center group-hover:bg-[#e7f5ff] transition-all duration-300 border border-[#e2e8f0]">
          <Icon className="h-8 w-8 text-[#1e3a8a]" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#1a365d] group-hover:text-[#1e3a8a] transition-colors duration-300">{title}</h3>
        <p className="text-slate-600 text-base mb-4">{description}</p>
        
        {/* New "Saiba Mais" button */}
        <a 
          href="#contato" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1e3a8a] hover:text-[#0284c7] transition-colors"
        >
          Saiba Mais
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      
      {/* Card accent decorations */}
      <div className="absolute top-3 right-3 w-20 h-20 bg-[#bf0a30]/5 rounded-full blur-xl"></div>
      <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-[#002868]/10 rounded-full"></div>

      {/* Flag-inspired corner */}
      <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden opacity-20">
        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#bf0a30] rotate-45"></div>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="beneficios" className="pt-16 pb-24 bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden">
      {/* Flag-inspired background decorations */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-[#bf0a30]/5 opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-[#002868]/5 opacity-70 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 -z-10 h-32 w-32 rounded-full bg-white opacity-40 blur-2xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-md bg-gradient-to-r from-[#bf0a30] to-[#002868] px-3 py-1 text-sm font-semibold text-white mb-4 shadow-sm">
            <span className="px-3 py-0.5 bg-white/10 backdrop-blur-sm rounded-sm">Quem Pode se Beneficiar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4 leading-tight">
            Quem Pode se Beneficiar da <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0284c7] text-transparent bg-clip-text">Nossa Metodologia?</span>
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
