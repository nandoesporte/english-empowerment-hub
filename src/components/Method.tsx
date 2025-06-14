
import React from 'react';
import { cn } from '@/lib/utils';

const Method = () => {
  return (
    <section id="metodo" className="py-2 overflow-hidden bg-slate-50 relative min-h-0">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="container px-0 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-0">
          <div className="relative order-2 lg:order-1 p-0 m-0"></div>
          <div className="space-y-0 order-1 lg:order-2 p-0 m-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Method;
