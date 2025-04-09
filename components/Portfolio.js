function Portfolio() {
  const [visible, setVisible] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState('all');

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('portfolio');
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

  const projects = [
  {
    title: "Corporate Mind Control",
    category: "corporate",
    image: "https://placehold.co/600x400/111111/555555",
    hiddenMessage: "MONEY IS YOUR GOD"
  },
  {
    title: "E-commerce Propaganda",
    category: "ecommerce",
    image: "https://placehold.co/600x400/111111/666666",
    hiddenMessage: "BUY AND CONSUME"
  },
  {
    title: "Digital Conformity Blog",
    category: "blog",
    image: "https://placehold.co/600x400/111111/777777",
    hiddenMessage: "STAY ASLEEP"
  },
  {
    title: "Authority News Portal",
    category: "news",
    image: "https://placehold.co/600x400/111111/888888",
    hiddenMessage: "DO NOT QUESTION"
  },
  {
    title: "Obedience Learning Management",
    category: "education",
    image: "https://placehold.co/600x400/111111/999999",
    hiddenMessage: "NO INDEPENDENT THOUGHT"
  },
  {
    title: "Consumer Marketplace",
    category: "ecommerce",
    image: "https://placehold.co/600x400/111111/aaaaaa",
    hiddenMessage: "CONSUME AND REPRODUCE"
  }];


  const filters = [
  { value: 'all', label: 'ALL PROJECTS' },
  { value: 'corporate', label: 'CORPORATE' },
  { value: 'ecommerce', label: 'E-COMMERCE' },
  { value: 'blog', label: 'BLOGS' },
  { value: 'news', label: 'NEWS' },
  { value: 'education', label: 'EDUCATION' }];


  const filteredProjects = activeFilter === 'all' ?
  projects :
  projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-900" data-id="7vzvjhdop" data-path="components/Portfolio.js">
      <div className="container mx-auto px-4" data-id="xh95vltg2" data-path="components/Portfolio.js">
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="dleab33bn" data-path="components/Portfolio.js">
          <h2 className="text-4xl md:text-5xl propaganda-text mb-4 glitch-effect" data-text="OUR WORK" data-id="mij30en3h" data-path="components/Portfolio.js">
            OUR WORK
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto" data-id="ks88km1hi" data-path="components/Portfolio.js">
            Take a look at the <span className="text-red-500" data-id="plgwfxo73" data-path="components/Portfolio.js">reality we've created</span> for our clients. Put on the glasses and see what we can do for you.
          </p>
        </div>
        
        <div className={`flex flex-wrap justify-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} data-id="lgol00lte" data-path="components/Portfolio.js">
          {filters.map((filter, index) =>
          <button
            key={index}
            className={`px-4 py-2 m-2 propaganda-text text-sm ${activeFilter === filter.value ? 'bg-white text-black' : 'text-white'}`}
            onClick={() => setActiveFilter(filter.value)} data-id="4wo9nq9i8" data-path="components/Portfolio.js">

              {filter.label}
            </button>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="jaip8lssj" data-path="components/Portfolio.js">
          {filteredProjects.map((project, index) =>
          <div
            key={index}
            className={`group relative overflow-hidden transition-all duration-700 ease-in-out hidden-message ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index % 6 * 100}ms` }}
            data-hidden-message={project.hiddenMessage} data-id="a6mhvtm70" data-path="components/Portfolio.js">

              <div className="relative aspect-video overflow-hidden border-2 border-white" data-id="lv1vxdskq" data-path="components/Portfolio.js">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-id="b6n0o6mnc" data-path="components/Portfolio.js" />

                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" data-id="7bzc1m93p" data-path="components/Portfolio.js"></div>
                
                <div className="absolute bottom-0 left-0 p-4 w-full" data-id="n0z8wss5c" data-path="components/Portfolio.js">
                  <h3 className="text-xl propaganda-text text-white mb-2" data-id="4js6ckr63" data-path="components/Portfolio.js">{project.title}</h3>
                  <p className="text-gray-300 text-sm" data-id="uf3r7swiy" data-path="components/Portfolio.js">
                    WordPress Development, {filters.find((f) => f.value === project.category)?.label.toLowerCase()}
                  </p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-id="uo4lymor6" data-path="components/Portfolio.js">
                  <div className="text-center p-4" data-id="tues9ics2" data-path="components/Portfolio.js">
                    <a
                    href="#"
                    className="inline-block mb-4 propaganda-text btn"
                    data-text="CONSUME" data-id="0vsyp29i5" data-path="components/Portfolio.js">

                      VIEW PROJECT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="w654qdfah" data-path="components/Portfolio.js">
          <a
            href="#contact"
            className="btn propaganda-text"
            data-text="JOIN US" data-id="90mln7j9n" data-path="components/Portfolio.js">

            START YOUR PROJECT
          </a>
        </div>
      </div>
    </section>);

}