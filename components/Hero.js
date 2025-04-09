function Hero() {
  const [visible, setVisible] = React.useState(false);
  const [revealMessage, setRevealMessage] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);

    const messageTimer = setTimeout(() => {
      setRevealMessage(true);
      setTimeout(() => setRevealMessage(false), 1000);
    }, 3000);

    return () => clearTimeout(messageTimer);
  }, []);

  const handleSunglassesClick = () => {
    setRevealMessage(true);
    setTimeout(() => setRevealMessage(false), 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" id="hero" data-id="kss2ad1yr" data-path="components/Hero.js">
      <div className="absolute inset-0 bg-black" data-id="46s0rx23k" data-path="components/Hero.js">
        <div
          className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/000000/333333')] 
                   bg-cover bg-center opacity-20" data-id="deg0ketrr" data-path="components/Hero.js">

        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" data-id="iasxoyuhu" data-path="components/Hero.js">
        <div className="grid md:grid-cols-2 gap-8 items-center" data-id="gzb221y6f" data-path="components/Hero.js">
          <div className={`transition-all duration-1000 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} data-id="29mnpbv4j" data-path="components/Hero.js">
            <h1 className="text-5xl md:text-7xl propaganda-text font-bold mb-4 glitch-effect" data-text="THEY CODE" data-id="91eohmes4" data-path="components/Hero.js">
              THEY CODE
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-mono" data-id="pl038gidm" data-path="components/Hero.js">
              WordPress Solutions That <span className="line-through" data-id="4q8n7ksq4" data-path="components/Hero.js">Control</span> <span className="text-red-500" data-id="o0v4n9gyf" data-path="components/Hero.js">Transform</span> Your Business
            </h2>
            <p className="text-gray-400 mb-8 font-mono" data-id="1crqe31jx" data-path="components/Hero.js">
              We build powerful WordPress websites that reveal the true potential of your business. Our team sees what others miss.
            </p>
            <div className="flex flex-wrap gap-4" data-id="30lkvv3lz" data-path="components/Hero.js">
              <a href="#services" className="btn propaganda-text" data-text="THE TRUTH" data-id="px3th540s" data-path="components/Hero.js">DISCOVER</a>
              <a href="#contact" className="btn bg-transparent propaganda-text" data-text="JOIN US" data-id="o3t4i7sos" data-path="components/Hero.js">GET STARTED</a>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} data-id="abbsumxmn" data-path="components/Hero.js">
            <div className="relative mx-auto w-full max-w-md aspect-square" data-id="hx67sfy6t" data-path="components/Hero.js">
              <div className="absolute inset-0 flex items-center justify-center" data-id="u7fo3zhdb" data-path="components/Hero.js">
                <div
                  className={`relative w-full h-full ${revealMessage ? 'reveal-truth' : ''}`}
                  onClick={handleSunglassesClick} data-id="9oufi381c" data-path="components/Hero.js">

                  <img
                    src="https://placehold.co/600x600/111111/666666"
                    alt="WordPress Development"
                    className="w-full h-full object-cover border-4 border-white p-2" data-id="qd9k78i2a" data-path="components/Hero.js" />

                  
                  <div className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-300 ${revealMessage ? 'opacity-100' : 'opacity-0'}`} data-id="2w4jzlu5w" data-path="components/Hero.js">
                    <div className="text-center propaganda-text" data-id="pgmagvfii" data-path="components/Hero.js">
                      <div className="text-6xl text-white mb-4" data-id="rq52hmbp0" data-path="components/Hero.js">WORDPRESS IS</div>
                      <div className="text-8xl text-red-500" data-id="6njpfeg6s" data-path="components/Hero.js">CONTROL</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white text-black p-2 propaganda-text hidden-message" data-hidden-message="OBEY" data-id="2apqi2sw4" data-path="components/Hero.js">
                <i className="fas fa-glasses mr-2" data-id="w6exuydws" data-path="components/Hero.js"></i> PUT ON THE GLASSES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}