import React from 'react';
import { cn } from '@/lib/utils';

const Method = () => {
  return (
    <section id="metodo" className="py-20 overflow-hidden bg-slate-50 relative">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Removed video and associated overlay/decoration */}
          <div className="relative order-2 lg:order-1">
            {/* left intentionally blank as video was removed */}
          </div>
          {/* Removed heading/badge/section title */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* content removed as requested */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
