
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-gray-900 mr-auto">
          Sebastian Schneider Lohnunternehmen
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200 ml-auto"
          onClick={onMenuToggle}
        >
          <Menu className="h-6 w-6 text-green-700" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
