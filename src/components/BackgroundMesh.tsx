import React from 'react';

export const BackgroundMesh: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-gradient-to-bl from-purple-500/10 via-violet-500/5 to-transparent blur-[140px] animate-float" />
      <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent blur-[130px] animate-float-reverse" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025]" 
        style={{
          backgroundImage: `radial-gradient(#111827 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};
