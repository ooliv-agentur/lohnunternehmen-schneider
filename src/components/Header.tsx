
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="font-bold text-xl text-gray-900">
          Lohnunternehmen Schneider
        </div>
        
        {/* Spacer to maintain layout balance */}
        <div className="w-10 h-10"></div>
      </div>
      
      {/* Fixed positioned burger button to match close icon exactly */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-6 right-6 border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300 z-50"
        onClick={onMenuToggle}
      >
        <Menu className="h-6 w-6 text-green-700" />
      </Button>
    </header>
  );
};

export default Header;
