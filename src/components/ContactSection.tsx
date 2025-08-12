
import { ContactForm } from './ContactForm';
import RippleGrid from './RippleGrid';
import ScrollFloat from './ScrollFloat';
import { useState } from 'react';


export default function MyContactSection() {
  const [isFormHovered, setIsFormHovered] = useState(false);

  const handleFormMouseEnter = () => {
    setIsFormHovered(true);
  };

  const handleFormMouseLeave = () => {
    setIsFormHovered(false);
  };

  return (
    <section id="contact" className="min-h-[100vh] flex !mt-0 !pt-0">
      <div className="flex min-h-0 flex-col gap-y-3 w-full text-center relative">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom+=10%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="text-2xl font-bold"
        >
          Contact Me <span role="img" aria-label="document">✉️</span>
        </ScrollFloat>
        
        <ContactForm 
          onMouseEnter={handleFormMouseEnter} 
          onMouseLeave={handleFormMouseLeave} 
        />
        <div className="absolute inset-0 z-[-1]">
        <RippleGrid
                enableRainbow={false}
                gridColor="#ffffff"
                rippleIntensity={0.05}
                gridSize={10}
                gridThickness={15}
                mouseInteraction={isFormHovered} // <--- Pass the state here
                mouseInteractionRadius={1.2}
                opacity={0.8}
                />
        </div>
      </div>
    </section>
  );
}