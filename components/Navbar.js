function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isGlitched, setIsGlitched] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitched(true);
      setTimeout(() => setIsGlitched(false), 150);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
  { name: "SERVICES", href: "#services", hidden: "CONSUME" },
  { name: "PORTFOLIO", href: "#portfolio", hidden: "SUBMIT" },
  { name: "ABOUT US", href: "#about", hidden: "OBEY" },
  { name: "CONTACT", href: "#contact", hidden: "CONFORM" }];


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white" data-id="p8i8rzvms" data-path="components/Navbar.js">
      <div className="container mx-auto px-4" data-id="kac6h01al" data-path="components/Navbar.js">
        <div className="flex justify-between items-center py-4" data-id="0h4dga3i5" data-path="components/Navbar.js">
          <div className="flex items-center" data-id="15rv6m3wd" data-path="components/Navbar.js">
            <a href="#" className={`text-white text-xl font-bold propaganda-text ${isGlitched ? 'glitch-effect' : ''}`}
            data-text="WAKE UP" data-id="9g9tn54dw" data-path="components/Navbar.js">
              <span className="flex items-center" data-id="3auee1plh" data-path="components/Navbar.js">
                <i className="fas fa-glasses mr-2" data-id="29svmjb88" data-path="components/Navbar.js"></i>
                WAKE UP
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-id="bouvg1bsd" data-path="components/Navbar.js">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-red-500 focus:outline-none" data-id="dykcfsxiz" data-path="components/Navbar.js">

              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`} data-id="s0n4cr444" data-path="components/Navbar.js"></i>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8" data-id="s7kze3837" data-path="components/Navbar.js">
            {navLinks.map((link, index) =>
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-red-500 propaganda-text hidden-message"
              data-hidden-message={link.hidden} data-id="uhv6y8fch" data-path="components/Navbar.js">

                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className="btn propaganda-text"
              data-text="SEE THE TRUTH" data-id="5n1g8f0me" data-path="components/Navbar.js">

              HIRE US
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-2`} data-id="t0oiw0c76" data-path="components/Navbar.js">
          {navLinks.map((link, index) =>
          <a
            key={index}
            href={link.href}
            className="block py-2 text-white hover:text-red-500 propaganda-text text-center hidden-message"
            data-hidden-message={link.hidden}
            onClick={toggleMenu} data-id="nivyrr5vs" data-path="components/Navbar.js">

              {link.name}
            </a>
          )}
          <div className="py-2 text-center" data-id="3j0vd1nxb" data-path="components/Navbar.js">
            <a
              href="#contact"
              className="inline-block btn propaganda-text"
              data-text="SEE THE TRUTH"
              onClick={toggleMenu} data-id="ey9cr6y25" data-path="components/Navbar.js">

              HIRE US
            </a>
          </div>
        </div>
      </div>
    </nav>);

}