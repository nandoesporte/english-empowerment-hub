
import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const CTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profile: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.profile) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos para continuar.",
        variant: "destructive"
      });
      return;
    }
    
    // Format the message for WhatsApp
    const whatsappNumber = "5544998425613"; // Phone number with country code (Brazil)
    const message = encodeURIComponent(
      `*Solicitação de Informações - The Place English School*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Perfil:* ${formData.profile}\n\n` +
      `Olá! Gostaria de receber mais informações sobre como me tornar um professor certificado pela metodologia The Place English School.`
    );
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              Seja um professor certificado pela metodologia <span className="text-brand-yellow">The Place!</span>
            </h2>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Entre em contato hoje mesmo e descubra como a licença The Place English School 
              pode ser o início da sua independência financeira com seu próprio negócio de sucesso.
            </p>
            
            <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome completo" 
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                  required
                />
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu melhor e-mail" 
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                  required
                />
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefone com WhatsApp" 
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                  required
                />
                <select 
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                  required
                >
                  <option value="" className="bg-brand-navy">Selecione seu perfil</option>
                  <option value="Professor de inglês" className="bg-brand-navy">Professor de inglês</option>
                  <option value="Pessoa fluente em inglês" className="bg-brand-navy">Pessoa fluente em inglês</option>
                  <option value="Diretor de escola de idiomas" className="bg-brand-navy">Diretor de escola de idiomas</option>
                  <option value="Empreendedor" className="bg-brand-navy">Empreendedor</option>
                  <option value="Diretor de escola regular" className="bg-brand-navy">Diretor de escola regular</option>
                </select>
                
                <button 
                  type="submit" 
                  className={cn(
                    "w-full py-4 px-6 bg-brand-yellow text-brand-navy font-bold rounded-xl",
                    "flex items-center justify-center gap-2 transition-all duration-300",
                    "hover:bg-white hover:shadow-lg active:scale-[0.98]",
                    "text-lg shadow-lg"
                  )}
                >
                  Quero mais informações
                  <Send className="h-4 w-4" />
                </button>
              </form>
              
              <p className="text-white/80 text-sm mt-4">
                Fique tranquilo! Seus dados estão protegidos e não serão compartilhados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
