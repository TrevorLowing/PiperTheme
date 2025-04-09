function Services() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
  {
    icon: "fa-code",
    title: "WordPress Development",
    description: "Custom WordPress solutions that break free from templated constraints. We build sites that serve your business goals, not the other way around.",
    hiddenMessage: "CONSUME TEMPLATE"
  },
  {
    icon: "fa-rocket",
    title: "Performance Optimization",
    description: "Strip away the bloat and reveal blazing fast websites. We optimize your WordPress site for speed that will convert visitors into loyal customers.",
    hiddenMessage: "OBEY ALGORITHM"
  },
  {
    icon: "fa-shield-alt",
    title: "Security Hardening",
    description: "See the threats others miss. Our security protocols protect your website from invisible dangers lurking in the digital shadows.",
    hiddenMessage: "SUBMIT TO SECURITY"
  },
  {
    icon: "fa-search",
    title: "SEO Domination",
    description: "Reveal yourself to the algorithm overlords. Our SEO strategies position your business to be seen by those who control the search rankings.",
    hiddenMessage: "CONFORM TO SEARCH"
  },
  {
    icon: "fa-tools",
    title: "Maintenance & Support",
    description: "We watch over your digital presence while you sleep. Our maintenance plans keep your WordPress site running smoothly without interruption.",
    hiddenMessage: "STAY ASLEEP"
  },
  {
    icon: "fa-shopping-cart",
    title: "E-commerce Solutions",
    description: "Turn your WordPress site into a money-making machine. Our WooCommerce implementations drive sales while you reap the profits.",
    hiddenMessage: "BUY AND CONSUME"
  }];


  return (
    <section id="services" className="py-20 bg-black" data-id="sci1cclba" data-path="components/Services.js">
      <div className="container mx-auto px-4" data-id="0mh9w3kdi" data-path="components/Services.js">
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="ahbpgarly" data-path="components/Services.js">
          <h2 className="text-4xl md:text-5xl propaganda-text mb-4 glitch-effect" data-text="OUR SERVICES" data-id="t2glcb21w" data-path="components/Services.js">
            OUR SERVICES
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto" data-id="tk9r54d7t" data-path="components/Services.js">
            Discover how our WordPress expertise can <span className="text-red-500" data-id="t266kzqwy" data-path="components/Services.js">open your eyes</span> to new possibilities for your online presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="1qgw4jih0" data-path="components/Services.js">
          {services.map((service, index) =>
          <div
            key={index}
            className={`bg-gray-900 p-6 border border-gray-800 transition-all duration-700 ease-in-out hidden-message ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            data-hidden-message={service.hiddenMessage} data-id="xtct2zjc2" data-path="components/Services.js">

              <div className="mb-4 text-red-500 text-4xl" data-id="50li5pyhw" data-path="components/Services.js">
                <i className={`fas ${service.icon}`} data-id="cz9qc1hc6" data-path="components/Services.js"></i>
              </div>
              <h3 className="text-xl propaganda-text mb-4" data-id="cnh50fodl" data-path="components/Services.js">{service.title}</h3>
              <p className="text-gray-400" data-id="qua8zpxag" data-path="components/Services.js">{service.description}</p>
              <div className="mt-6" data-id="a0edqbo5a" data-path="components/Services.js">
                <a href="#contact" className="inline-flex items-center text-white propaganda-text hover:text-red-500" data-id="c79j0t5ti" data-path="components/Services.js">
                  <span data-id="dicy7qehc" data-path="components/Services.js">LEARN MORE</span>
                  <i className="fas fa-arrow-right ml-2" data-id="an4ibmq09" data-path="components/Services.js"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}