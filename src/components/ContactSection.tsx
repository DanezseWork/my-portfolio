
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
      <div className="flex min-h-0 flex-col gap-y-3 w-full items-center relative">
        <div className="flex gap-5">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='top bottom+=10%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            textClassName="text-2xl font-bold"
          >
            Contact Me
          </ScrollFloat>
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='top bottom+=40%'
            scrollEnd='bottom bottom-=80%'
            stagger={0.03}
            textClassName="text-2xl font-bold"
          >
            <span role="img" aria-label="document">✉️</span>
          </ScrollFloat>
        </div>
        <ContactForm 
          onMouseEnter={handleFormMouseEnter} 
          onMouseLeave={handleFormMouseLeave} 
        />
        <div className="absolute inset-0 z-[-1]">
          <RippleGrid
            enableRainbow={false}
            gridColor="#ffffff"
            rippleIntensity={0.01}
            gridSize={15}
            gridThickness={20}
            fadeDistance={3}
            vignetteStrength={.5}
            glowIntensity={.5}
            mouseInteraction={isFormHovered} // <--- Pass the state here
            mouseInteractionRadius={1.2}
            opacity={1}
          />
        </div>
      </div>
    </section>
  );
}