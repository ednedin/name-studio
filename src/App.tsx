import React, { useState } from 'react';
import { siteConfig } from './config';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import ProblemSolution from './components/ProblemSolution';
import HorizontalVideoSection from './components/HorizontalVideoSection';
import BeforeAfter from './components/BeforeAfter';
import UsageGallery from './components/UsageGallery';
import DeepDive from './components/DeepDive';
import Benefits from './components/Benefits';
import Equipment from './components/Equipment';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import InlineFormBlock from './components/InlineFormBlock';
import PopupForm from './components/PopupForm';

const ComponentMap: Record<string, React.FC<any>> = {
  Hero,
  VideoSection,
  ProblemSolution,
  HorizontalVideoSection,
  BeforeAfter,
  UsageGallery,
  DeepDive,
  Benefits,
  Equipment,
  SocialProof,
  FinalCTA,
  InlineFormBlock
};

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Safely inject specific props only to components that need them
  const getSpecialProps = (name: string) => {
    if (name === 'Hero') {
      return { onOpenPopup: () => setIsPopupOpen(true) };
    }
    return {};
  };

  return (
    <div className="min-h-screen bg-white selection:bg-magio-gold selection:text-magio-black">
      <Header onOpenPopup={() => setIsPopupOpen(true)} />
      <main>
        {siteConfig.layout.map((block, idx) => {
          const Component = ComponentMap[block.name];
          
          // Error Handling: Fallback if config requests a non-existent component
          if (!Component) {
            console.warn(`[Template Warning] Component '${block.name}' not found in ComponentMap.`);
            return null;
          }

          return (
            <Component 
              key={`${block.name}-${idx}`} 
              {...getSpecialProps(block.name)} 
              {...(block.props || {})} 
            />
          );
        })}
      </main>
      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default App;
