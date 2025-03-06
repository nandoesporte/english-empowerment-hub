
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="the-place-logo flex items-center">
              <img 
                src="https://theplacebrazil.com/wp-content/uploads/2016/12/LOGO-JPG-200px.jpg" 
                alt="The Place English School" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#beneficios" className="px-4 py-2 text-slate-700 hover:text-brand-blue transition-colors duration-300">
              Benefícios
            </a>
            <a href="#metodo" className="px-4 py-2 text-slate-700 hover:text-brand-blue transition-colors duration-300">
              Nosso Método
            </a>
            <a href="#escola-bilingue" className="px-4 py-2 text-slate-700 hover:text-brand-blue transition-colors duration-300">
              Escola Bilíngue
            </a>
            <Button className="ml-4 bg-brand-blue hover:bg-brand-navy text-white font-medium rounded-full px-6">
              Quero Saber Mais <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-brand-blue focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col pt-20 px-6 animate-fade-in">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 text-slate-700 hover:text-brand-blue"
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col space-y-4">
              <a 
                href="#beneficios" 
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-lg text-slate-700 hover:text-brand-blue border-b border-slate-100"
              >
                Benefícios
              </a>
              <a 
                href="#metodo" 
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-lg text-slate-700 hover:text-brand-blue border-b border-slate-100"
              >
                Nosso Método
              </a>
              <a 
                href="#escola-bilingue" 
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-lg text-slate-700 hover:text-brand-blue border-b border-slate-100"
              >
                Escola Bilíngue
              </a>
              <Button 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-brand-blue hover:bg-brand-navy text-white font-medium rounded-full py-6"
              >
                Quero Saber Mais <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
