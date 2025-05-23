
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Spiritual gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0">
        {/* Large floating orbs with spiritual colors */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Sacred geometry overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            <defs>
              <pattern id="sacred-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Islamic star pattern */}
                <path d="M50 10 L60 30 L80 30 L66 44 L72 64 L50 52 L28 64 L34 44 L20 30 L40 30 Z" 
                      fill="currentColor" 
                      className="text-emerald-300/20 animate-spin" 
                      style={{transformOrigin: '50px 50px', animationDuration: '30s'}} />
                {/* Concentric circles for dhikr symbolism */}
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-300/30" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-teal-300/40" />
                <circle cx="50" cy="50" r="5" fill="currentColor" className="text-emerald-300/50" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sacred-pattern)" />
          </svg>
        </div>
        
        {/* Floating light particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full animate-float opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
