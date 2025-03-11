
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-foreground/10 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tight font-display">
          Create<span className="text-accent">Studios</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary dark:bg-foreground/10 text-foreground dark:text-primary-foreground ml-2 transition-all hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <Button 
            className="ml-4 px-6 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Mobile Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary dark:bg-foreground/10 text-foreground dark:text-primary-foreground transition-all hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button 
            className="text-foreground focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-background/95 dark:bg-foreground/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="text-xl font-bold tracking-tight font-display">
              Create<span className="text-accent">Studios</span>
            </a>
            <button 
              className="text-foreground focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <a 
              href="#services" 
              className="text-lg font-medium"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-lg font-medium"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-lg font-medium"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-lg font-medium"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <Button 
              className="px-6 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
              onClick={toggleMobileMenu}
            >
              Get Started Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
