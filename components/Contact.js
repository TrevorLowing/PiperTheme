function Contact() {
  const [visible, setVisible] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
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

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission with a delay
      setTimeout(() => {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        // Reset submission state after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden" data-id="dpp3g090k" data-path="components/Contact.js">
      <div className="absolute inset-0 pointer-events-none opacity-20" data-id="scfylw067" data-path="components/Contact.js">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/000000/222222')] 
                      bg-cover bg-center blur-sm" data-id="ty9109jgl" data-path="components/Contact.js">
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" data-id="pgscfbqyp" data-path="components/Contact.js">
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="6mzflarm7" data-path="components/Contact.js">
          <h2 className="text-4xl md:text-5xl propaganda-text mb-4 glitch-effect" data-text="JOIN US" data-id="m6msl9wp5" data-path="components/Contact.js">
            CONTACT US
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto" data-id="gq3gurgll" data-path="components/Contact.js">
            Ready to <span className="text-red-500" data-id="x8018fcve" data-path="components/Contact.js">see the truth</span> about your WordPress potential? Get in touch with our team to start your journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12" data-id="ajnt4h9p8" data-path="components/Contact.js">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} data-id="5wyllnb3s" data-path="components/Contact.js">
            <h3 className="text-2xl propaganda-text mb-6" data-id="4um2ot116" data-path="components/Contact.js">GET IN TOUCH</h3>
            <p className="text-gray-400 mb-8" data-id="dwf6rigj6" data-path="components/Contact.js">
              Have a WordPress project in mind? Want to improve your current website? Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6" data-id="26dv1fxkh" data-path="components/Contact.js">
              <div className="flex items-start" data-id="lwftod3z0" data-path="components/Contact.js">
                <div className="text-red-500 text-2xl mr-4" data-id="j07gxvn8b" data-path="components/Contact.js">
                  <i className="fas fa-map-marker-alt" data-id="1vohxzyei" data-path="components/Contact.js"></i>
                </div>
                <div data-id="bbyxpo3s2" data-path="components/Contact.js">
                  <h4 className="text-lg propaganda-text mb-1" data-id="yxzus05ex" data-path="components/Contact.js">Our Location</h4>
                  <p className="text-gray-400" data-id="a1iwmzt5g" data-path="components/Contact.js">123 Reality St, Digital District<br data-id="b7ee8yvcm" data-path="components/Contact.js" />Los Angeles, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start" data-id="eqpj87c0z" data-path="components/Contact.js">
                <div className="text-red-500 text-2xl mr-4" data-id="5s6d3xgvv" data-path="components/Contact.js">
                  <i className="fas fa-envelope" data-id="7vqf1btw7" data-path="components/Contact.js"></i>
                </div>
                <div data-id="9g6yqg2xo" data-path="components/Contact.js">
                  <h4 className="text-lg propaganda-text mb-1" data-id="16pc40frg" data-path="components/Contact.js">Email Us</h4>
                  <p className="text-gray-400" data-id="jsxf9hp2z" data-path="components/Contact.js">info@wakeupwp.com<br data-id="k4x1n48dd" data-path="components/Contact.js" />support@wakeupwp.com</p>
                </div>
              </div>
              
              <div className="flex items-start" data-id="pyca5qvp3" data-path="components/Contact.js">
                <div className="text-red-500 text-2xl mr-4" data-id="ldznwttss" data-path="components/Contact.js">
                  <i className="fas fa-phone-alt" data-id="a367xv005" data-path="components/Contact.js"></i>
                </div>
                <div data-id="6hdhx3uc0" data-path="components/Contact.js">
                  <h4 className="text-lg propaganda-text mb-1" data-id="b4mw1ty2q" data-path="components/Contact.js">Call Us</h4>
                  <p className="text-gray-400" data-id="p56g3ao43" data-path="components/Contact.js">(555) 123-4567<br data-id="s8gb0phoh" data-path="components/Contact.js" />(555) 765-4321</p>
                </div>
              </div>
              
              <div className="pt-4" data-id="yb8fvv2z5" data-path="components/Contact.js">
                <h4 className="text-lg propaganda-text mb-4" data-id="cvb8pn4hq" data-path="components/Contact.js">Follow Us</h4>
                <div className="flex space-x-4" data-id="7afebiaex" data-path="components/Contact.js">
                  <a href="#" className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors" data-id="6ciyaq2fa" data-path="components/Contact.js">
                    <i className="fab fa-twitter" data-id="vu4y5052p" data-path="components/Contact.js"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors" data-id="rbr870f37" data-path="components/Contact.js">
                    <i className="fab fa-facebook-f" data-id="t5c8u57wz" data-path="components/Contact.js"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors" data-id="plpb84in4" data-path="components/Contact.js">
                    <i className="fab fa-instagram" data-id="v9nh4m3hs" data-path="components/Contact.js"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors" data-id="hd7rb64nr" data-path="components/Contact.js">
                    <i className="fab fa-linkedin-in" data-id="772q0jzm0" data-path="components/Contact.js"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`} data-id="s88lysfex" data-path="components/Contact.js">
            <div className="bg-black border border-gray-800 p-8" data-id="uaxka59zz" data-path="components/Contact.js">
              {submitted ?
              <div className="text-center py-12" data-id="io32q6sv9" data-path="components/Contact.js">
                  <div className="text-5xl mb-4 text-green-500" data-id="2bc09i36y" data-path="components/Contact.js">
                    <i className="fas fa-check-circle" data-id="gsh7re6n0" data-path="components/Contact.js"></i>
                  </div>
                  <h3 className="text-2xl propaganda-text mb-2" data-id="my4ibnyxs" data-path="components/Contact.js">Message Sent!</h3>
                  <p className="text-gray-400" data-id="l8fin4xnv" data-path="components/Contact.js">We'll get back to you as soon as possible.</p>
                  <div className="hidden-message propaganda-text mt-8" data-hidden-message="YOU HAVE BEEN REGISTERED" data-id="s4ihf1nar" data-path="components/Contact.js">
                    THANK YOU FOR YOUR SUBMISSION
                  </div>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-6" data-id="jw4z5xocq" data-path="components/Contact.js">
                  <div data-id="wenf94vam" data-path="components/Contact.js">
                    <label htmlFor="name" className="block mb-2 propaganda-text" data-id="ickrkdy35" data-path="components/Contact.js">YOUR NAME</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-700'} p-3 text-white`}
                    placeholder="John Nada" data-id="0njqhvn3h" data-path="components/Contact.js" />

                    {errors.name && <p className="text-red-500 text-sm mt-1" data-id="sz3ylm6wk" data-path="components/Contact.js">{errors.name}</p>}
                  </div>
                  
                  <div data-id="jxawcv4f7" data-path="components/Contact.js">
                    <label htmlFor="email" className="block mb-2 propaganda-text" data-id="tumrqmj2y" data-path="components/Contact.js">YOUR EMAIL</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-700'} p-3 text-white`}
                    placeholder="john@example.com" data-id="13mu0agka" data-path="components/Contact.js" />

                    {errors.email && <p className="text-red-500 text-sm mt-1" data-id="nu8pm18b1" data-path="components/Contact.js">{errors.email}</p>}
                  </div>
                  
                  <div data-id="5yb4kbzp1" data-path="components/Contact.js">
                    <label htmlFor="phone" className="block mb-2 propaganda-text" data-id="m7ackbyde" data-path="components/Contact.js">PHONE (OPTIONAL)</label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 p-3 text-white"
                    placeholder="(555) 123-4567" data-id="bejsw5845" data-path="components/Contact.js" />

                  </div>
                  
                  <div data-id="wq5v6klxn" data-path="components/Contact.js">
                    <label htmlFor="message" className="block mb-2 propaganda-text" data-id="4vxf2wp86" data-path="components/Contact.js">YOUR MESSAGE</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-700'} p-3 text-white`}
                    placeholder="Tell us about your project..." data-id="c7lnasyhx" data-path="components/Contact.js">
                  </textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1" data-id="id5z1cr7f" data-path="components/Contact.js">{errors.message}</p>}
                  </div>
                  
                  <div className="hidden-message" data-hidden-message="SUBMIT TO CONTROL" data-id="z5iqa6aws" data-path="components/Contact.js">
                    <label className="flex items-center" data-id="oet7cn8ew" data-path="components/Contact.js">
                      <input type="checkbox" className="mr-2" defaultChecked data-id="h67zpis5y" data-path="components/Contact.js" />
                      <span className="text-gray-400 text-sm" data-id="pyit3rsr6" data-path="components/Contact.js">I agree to the Terms and Conditions</span>
                    </label>
                  </div>
                  
                  <div data-id="1yavboed0" data-path="components/Contact.js">
                    <button
                    type="submit"
                    className="w-full btn propaganda-text"
                    data-text="SUBMIT" data-id="lszl9ybby" data-path="components/Contact.js">

                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}