
import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="text-2xl font-bold text-brand-navy mb-4 inline-block">
              The Place <span className="text-brand-blue">English School</span>
            </a>
            <p className="text-slate-600 max-w-xs">
              Transformando o ensino de inglês com metodologia exclusiva e comprovada.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-brand-navy mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#metodo" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Nosso Método
                </a>
              </li>
              <li>
                <a href="#escola-bilingue" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Escola Bilíngue
                </a>
              </li>
              <li>
                <a href="#contato" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-brand-navy mb-4">Contato</h4>
            <address className="not-italic text-slate-600 space-y-2">
              <p>contato@theplaceenglish.com.br</p>
              <p>(44) 99842-5613</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>&copy; {year} The Place English School. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
