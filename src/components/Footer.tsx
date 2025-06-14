
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="text-2xl font-bold text-brand-navy mb-4 inline-block">
              Escola de Idiomas <span className="text-brand-blue">The Place</span>
            </a>
            <p className="text-slate-600 max-w-xs">
              Transformando vidas através do ensino de inglês com metodologia exclusiva, certificada e comprovada.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-brand-navy mb-4">Certificação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Benefícios da Licença
                </a>
              </li>
              <li>
                <a href="#metodo" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Nossa Metodologia
                </a>
              </li>
              <li>
                <a href="#escola-bilingue" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Material Didático
                </a>
              </li>
              <li>
                <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-600 hover:text-brand-blue transition-colors">
                  Seja um Professor
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-brand-navy mb-4">Contato</h4>
            <address className="not-italic text-slate-600 space-y-2">
              <div className="space-y-1">
                <p>Av. dos Palmares, 650</p>
                <p>Maringá, PR - CEP 87.045-290</p>
                <p>Jardim América</p>
              </div>
              <div className="space-y-1 pt-2">
                <p>Telefone: (44) 3228-5022</p>
                <p>WhatsApp: (44) 99842-5613</p>
                <p>contato@escolatheplace.com.br</p>
              </div>
              <div className="pt-2">
                <p className="text-sm text-slate-500">CNPJ: 08.607.720/0001-21</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>Metodologia exclusiva para formação de professores de inglês certificados. ©️ {year} Editora The Place Brazil. Todos os direitos reservados.</p>
          <p className="mt-1">Metodologia exclusiva The Place English School.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
