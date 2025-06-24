
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-lg text-gray-900">
          Sebastian Schneider Lohnunternehmen
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-gray-100 transition-all duration-300"
          onClick={onMenuToggle}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
