
import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, CheckCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
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
    
    // Show success message
    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });
  };

  useEffect(() => {
    // Create YouTube player after component mounts
    if (videoContainerRef.current) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      
      // @ts-ignore
      window.onYouTubeIframeAPIReady = () => {
        // @ts-ignore
        new YT.Player('youtube-player', {
          videoId: 'VqYifYVigOY',
          playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'VqYifYVigOY', // needed for looping
            controls: 0,
            showinfo: 0,
            rel: 0,
            mute: 1, // muted for autoplay to work
            playsinline: 1,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
            }
          }
        });
      };
    }
    
    return () => {
      // @ts-ignore
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[url('/hero-pattern.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-brand-blue opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 -translate-x-1/3 rounded-full bg-brand-teal opacity-10 blur-3xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulário de contato em destaque - primeira coluna */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-brand-blue via-blue-700 to-brand-navy rounded-3xl p-8 shadow-2xl border-4 border-brand-blue">
              {/* Efeito de brilho */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-red rounded-full animate-bounce flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-bounce-subtle">
                    🚀 OFERTA ESPECIAL!
                  </h3>
                  <p className="text-white font-semibold text-lg">
                    Receba informações GRATUITAS agora!
                  </p>
                </div>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nome completo" 
                    className="w-full px-4 py-4 rounded-2xl bg-white border-2 border-white text-brand-navy placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-red/30 transition-all duration-300 text-lg font-medium shadow-lg"
                    required
                  />
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu melhor e-mail" 
                    className="w-full px-4 py-4 rounded-2xl bg-white border-2 border-white text-brand-navy placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-red/30 transition-all duration-300 text-lg font-medium shadow-lg"
                    required
                  />
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefone com WhatsApp" 
                    className="w-full px-4 py-4 rounded-2xl bg-white border-2 border-white text-brand-navy placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-red/30 transition-all duration-300 text-lg font-medium shadow-lg"
                    required
                  />
                  <select 
                    name="profile"
                    value={formData.profile}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-2xl bg-white border-2 border-white text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-red/30 transition-all duration-300 text-lg font-medium shadow-lg"
                    required
                  >
                    <option value="">Selecione seu perfil</option>
                    <option value="Professor de inglês">Professor de inglês</option>
                    <option value="Pessoa fluente em inglês">Pessoa fluente em inglês</option>
                    <option value="Diretor de escola de idiomas">Diretor de escola de idiomas</option>
                    <option value="Empreendedor">Empreendedor</option>
                    <option value="Diretor de escola regular">Diretor de escola regular</option>
                  </select>
                  
                  <button 
                    type="submit" 
                    className={cn(
                      "w-full py-5 px-6 bg-gradient-to-r from-brand-red to-red-700 text-white font-bold rounded-2xl",
                      "flex items-center justify-center gap-2 transition-all duration-300",
                      "hover:from-red-700 hover:to-red-800 hover:shadow-2xl active:scale-[0.98]",
                      "text-xl shadow-2xl border-2 border-red-800"
                    )}
                  >
                    QUERO MAIS INFORMAÇÕES AGORA!
                    <Send className="h-5 w-5" />
                  </button>
                </form>
                
                <p className="text-white text-sm mt-4 text-center font-medium">
                  🔒 Fique tranquilo! Seus dados estão protegidos e não serão compartilhados.
                </p>
              </div>
            </div>
          </div>

          {/* Conteúdo principal - segunda coluna */}
          <div className="space-y-6 animate-fade-in-up order-1 lg:order-2">
            <div className="inline-block rounded-full bg-brand-red px-4 py-1.5 text-sm font-semibold text-white animate-slide-in shadow-sm">
              A melhor metodologia de ensino de inglês
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-brand-navy leading-tight hero-text">
              Abra sua escola de inglês com a <span className="text-gradient-blue">exclusiva metodologia The Place!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 max-w-lg body-text">
              Abra sua escola de inglês com a metodologia The Place e tenha alunos fluentes em inglês. Com a melhor taxa de licença e sem Royalties.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 body-text">Metodologia exclusiva e comprovada</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 body-text">Material didático para todas as idades</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 body-text">Sem Royalties - apenas uma taxa única</p>
              </div>
            </div>
            
            {/* Vídeo */}
            <div className="relative rounded-2xl overflow-hidden animate-scale-in mt-8">
              <div 
                ref={videoContainerRef}
                className="relative z-10 glass-panel p-6 md:p-10 mx-auto max-w-md lg:max-w-full shadow-2xl rounded-2xl border border-white/30"
              >
                {/* YouTube thumbnail overlay */}
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                  {/* Thumbnail image that will be displayed before the video loads */}
                  <img 
                    src="/lovable-uploads/2daefeb2-b0e8-43d8-b8ff-4c3781ef9386.png" 
                    alt="The Place English School - Ganhe dinheiro ensinando inglês" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  
                  {/* YouTube iframe container */}
                  <div className="absolute inset-0">
                    <div id="youtube-player" className="w-full h-full"></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 flex items-center justify-center rounded-full bg-white w-24 h-24 shadow-lg animate-bounce-subtle p-2">
                  <img 
                    src="https://theplacebrazil.com/wp-content/uploads/2016/12/LOGO-JPG-200px.jpg" 
                    alt="The Place Logo" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
