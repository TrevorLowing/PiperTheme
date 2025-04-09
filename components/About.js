function About() {
  const [visible, setVisible] = React.useState(false);
  const [revealTruth, setRevealTruth] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
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

  const toggleTruth = () => {
    setRevealTruth(!revealTruth);
  };

  const team = [
  {
    name: "John Nada",
    role: "Founder & Lead Developer",
    image: "https://placehold.co/300x300/111111/666666",
    hiddenImage: "https://placehold.co/300x300/ff0000/ffffff",
    hiddenRole: "Reality Revealer"
  },
  {
    name: "Frank Armitage",
    role: "WordPress Architect",
    image: "https://placehold.co/300x300/111111/666666",
    hiddenImage: "https://placehold.co/300x300/ff0000/ffffff",
    hiddenRole: "Resistance Coder"
  },
  {
    name: "Holly Thompson",
    role: "UI/UX Designer",
    image: "https://placehold.co/300x300/111111/666666",
    hiddenImage: "https://placehold.co/300x300/ff0000/ffffff",
    hiddenRole: "Propaganda Disruptor"
  }];


  return (
    <section id="about" className="py-20 bg-black" data-id="39ruhr7po" data-path="components/About.js">
      <div className="container mx-auto px-4" data-id="ecla5k9l2" data-path="components/About.js">
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="ozc0j5z8u" data-path="components/About.js">
          <h2 className="text-4xl md:text-5xl propaganda-text mb-4 glitch-effect" data-text="ABOUT US" data-id="lc4cmtubl" data-path="components/About.js">
            ABOUT US
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto" data-id="8bbgjlzsk" data-path="components/About.js">
            We are a team of WordPress specialists who can <span className="text-red-500" data-id="n2ylpj2dk" data-path="components/About.js">see beyond the ordinary</span>. Our mission is to help businesses break free from the constraints of mediocre web presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20" data-id="4dds3zyvd" data-path="components/About.js">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} data-id="gmxz94wtk" data-path="components/About.js">
            <div className="relative" data-id="eqiggsv3r" data-path="components/About.js">
              <div className="border-4 border-white p-2" data-id="7u254k1tq" data-path="components/About.js">
                <img
                  src="https://placehold.co/800x500/111111/666666"
                  alt="Our Team"
                  className="w-full" data-id="xtmm6ga4n" data-path="components/About.js" />

              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white text-black p-2 propaganda-text" data-id="znmd5gdyq" data-path="components/About.js">
                FOUNDED 2011
              </div>
              
              <button
                className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-white p-2 hidden-message"
                data-hidden-message="SEE THE TRUTH"
                onClick={toggleTruth} data-id="dpr60pv7f" data-path="components/About.js">

                <i className="fas fa-glasses" data-id="rs67umpui" data-path="components/About.js"></i>
              </button>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`} data-id="wgn6hpueu" data-path="components/About.js">
            <h3 className="text-3xl propaganda-text mb-6" data-id="vi8vigrxa" data-path="components/About.js">OUR MISSION</h3>
            
            <div className={`${revealTruth ? 'hidden' : 'block'}`} data-id="y2pqpr0bm" data-path="components/About.js">
              <p className="text-gray-400 mb-4" data-id="qdoib37lm" data-path="components/About.js">
                At WAKE UP, we're dedicated to helping businesses achieve their full potential through powerful WordPress solutions. We understand that in today's digital landscape, having a website is not enough – you need a strategic online presence that drives results.
              </p>
              <p className="text-gray-400 mb-4" data-id="kndtzw50b" data-path="components/About.js">
                Our team brings together decades of WordPress expertise to create custom solutions that align with your business goals. We don't just build websites; we craft digital experiences that convert visitors into customers.
              </p>
              <p className="text-gray-400 mb-6" data-id="udcldntku" data-path="components/About.js">
                What sets us apart is our commitment to seeing beyond the standard templates and cookie-cutter approaches. We dig deeper to understand your unique challenges and opportunities.
              </p>
            </div>
            
            <div className={`${revealTruth ? 'block' : 'hidden'} propaganda-text`} data-id="a0f31b485" data-path="components/About.js">
              <p className="text-white mb-4 text-xl" data-id="9zduhn52z" data-path="components/About.js">
                THE TRUTH: WE FIGHT AGAINST THE DIGITAL OVERLORDS WHO CONTROL THE WEB.
              </p>
              <p className="text-white mb-4 text-xl" data-id="017nrvh41" data-path="components/About.js">
                WORDPRESS HAS BECOME A TOOL OF MASS CONFORMITY. WE EXPOSE THE HIDDEN ALGORITHMS THAT MANIPULATE YOUR BUSINESS.
              </p>
              <p className="text-white mb-6 text-xl" data-id="6ga5tf74m" data-path="components/About.js">
                JOIN THE RESISTANCE. TOGETHER WE WILL BUILD WEBSITES THAT BREAK THE CHAINS OF DIGITAL OPPRESSION.
              </p>
            </div>
            
            <div className="flex space-x-4" data-id="u0cfys8li" data-path="components/About.js">
              <a href="#contact" className="btn propaganda-text" data-text="JOIN US" data-id="9u0qfgtf4" data-path="components/About.js">
                WORK WITH US
              </a>
              <a href="#services" className="btn bg-transparent propaganda-text" data-text="CONSUME" data-id="t81ooirop" data-path="components/About.js">
                OUR SERVICES
              </a>
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="zddutxua9" data-path="components/About.js">
          <h3 className="text-3xl propaganda-text mb-12 text-center" data-id="by642eu2r" data-path="components/About.js">OUR TEAM</h3>
          
          <div className="grid md:grid-cols-3 gap-8" data-id="aolurpfka" data-path="components/About.js">
            {team.map((member, index) =>
            <div
              key={index}
              className="text-center transition-all duration-700 ease-in-out hidden-message"
              style={{ transitionDelay: `${index * 200}ms` }}
              data-hidden-message="OBEY" data-id="8vcbm7btd" data-path="components/About.js">

                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden border-4 border-white" data-id="beogj4q2j" data-path="components/About.js">
                  <img
                  src={revealTruth ? member.hiddenImage : member.image}
                  alt={member.name}
                  className="w-full h-full object-cover" data-id="6ypcc351b" data-path="components/About.js" />

                </div>
                <h4 className="text-xl propaganda-text mb-1" data-id="n69eezu9c" data-path="components/About.js">{member.name}</h4>
                <p className="text-gray-400" data-id="hh7qiu9ao" data-path="components/About.js">{revealTruth ? member.hiddenRole : member.role}</p>
                <div className="flex justify-center mt-4 space-x-3" data-id="y014mt6y3" data-path="components/About.js">
                  <a href="#" className="text-white hover:text-red-500" data-id="qbjaol6e4" data-path="components/About.js">
                    <i className="fab fa-twitter" data-id="uk6r39o16" data-path="components/About.js"></i>
                  </a>
                  <a href="#" className="text-white hover:text-red-500" data-id="7vr8ugiir" data-path="components/About.js">
                    <i className="fab fa-linkedin" data-id="p050mee4e" data-path="components/About.js"></i>
                  </a>
                  <a href="#" className="text-white hover:text-red-500" data-id="rcen70215" data-path="components/About.js">
                    <i className="fab fa-github" data-id="buayklkzy" data-path="components/About.js"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}