import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const logo = "./logo.png";
  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Makewood" className="h-14 w-auto object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button className=" bg-[#7A2E1D]/85 hover:bg-[#7A2E1D]/95" size="lg">
            CONTACT
          </Button>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-2 ml-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-6 mt-6">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Makewood" className="h-8 w-auto object-contain" />
                <span className="text-lg font-bold">MAKEWOOD</span>
              </div>
              
              <nav className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              
              <Button variant="cta" className="w-full">
                CONTACT
              </Button>
              
              <div className="flex items-center justify-center space-x-4 pt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;