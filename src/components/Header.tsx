
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-green-100">
      <div className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="font-bold text-base sm:text-lg md:text-xl text-gray-900 leading-tight max-w-[60%] sm:max-w-none">
          Sebastian Schneider Lohnunternehmen
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300 flex-shrink-0"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
