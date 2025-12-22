import { Music2, Sparkles } from "lucide-react";

const WhatIs = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-8">
            <Music2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">About the Tool</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-architectural mb-8">
            What is <span className="text-primary">HarmoniQ</span>?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              HarmoniQ is an innovative educational tool designed to help musicians, 
              music students, and composers understand and verify chord progressions in their compositions.
            </p>
            
            <p>
              Using advanced Nondeterministic Finite Automaton (NFA) technology, our tool analyzes 
              chord sequences to determine if they follow established music theory rules and common 
              progression patterns.
            </p>
            
            <p>
              Whether you're learning music theory, composing new pieces, or just curious about 
              how chords work together, HarmoniQ provides instant feedback to enhance 
              your musical understanding.
            </p>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Built for musicians, by musicians</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
