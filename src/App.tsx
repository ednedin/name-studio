import React from 'react';
import { siteConfig } from './config';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const ComponentMap: Record<string, React.FC<any>> = { Calculator, Footer };

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[#d4af37] selection:text-black flex flex-col">
      <main className="flex-grow">
        {siteConfig.layout.map((block, idx) => {
          const Component = ComponentMap[block.name];
          if (!Component) return null;
          return <Component key={`${block.name}-${idx}`} {...(block.props || {})} />;
        })}
      </main>
    </div>
  );
}
export default App;
