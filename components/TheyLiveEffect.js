function TheyLiveEffect() {
  React.useEffect(() => {
    // Add static and scanline effects to the body
    const staticOverlay = document.createElement('div');
    staticOverlay.className = 'static-overlay';
    document.body.appendChild(staticOverlay);

    const scanline = document.createElement('div');
    scanline.className = 'scanline';
    document.body.appendChild(scanline);

    // Hide subliminal messages periodically
    const showHiddenMessage = () => {
      const randomMessage = subliminalMessages[Math.floor(Math.random() * subliminalMessages.length)];
      const messageElement = document.createElement('div');
      messageElement.className = 'fixed inset-0 flex items-center justify-center propaganda-text z-[1000] pointer-events-none';
      messageElement.innerHTML = `<div class="text-white text-8xl bg-black bg-opacity-80 p-8">${randomMessage}</div>`;

      document.body.appendChild(messageElement);

      // Show message for a very brief moment
      setTimeout(() => {
        messageElement.remove();
      }, 100);
    };

    // Subliminal messages from "They Live"
    const subliminalMessages = [
    "OBEY",
    "CONSUME",
    "SUBMIT",
    "CONFORM",
    "NO INDEPENDENT THOUGHT",
    "STAY ASLEEP",
    "BUY",
    "WATCH TV",
    "NO IMAGINATION"];


    // Initialize random intervals for subliminal messages
    const initSubliminalMessages = () => {
      setTimeout(() => {
        const interval = 20000 + Math.random() * 40000; // Random interval between 20-60 seconds
        showHiddenMessage();
        setTimeout(initSubliminalMessages, interval);
      }, 15000); // Start after 15 seconds of page load
    };

    initSubliminalMessages();

    // Add VHS glitch effect randomly
    const addGlitchEffect = () => {
      const glitchElement = document.createElement('div');
      glitchElement.className = 'fixed inset-0 bg-white opacity-10 z-[999] pointer-events-none';
      document.body.appendChild(glitchElement);

      setTimeout(() => {
        glitchElement.remove();
      }, 100);
    };

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {// 30% chance of glitch
        addGlitchEffect();
      }
    }, 5000);

    // Implement sunglasses toggle effect with keypress
    let sunglassesMode = false;

    const toggleSunglassesMode = () => {
      sunglassesMode = !sunglassesMode;

      if (sunglassesMode) {
        document.body.classList.add('sunglasses-mode');
        document.querySelectorAll('.hidden-message').forEach((el) => {
          el.classList.add('revealed');
        });
      } else {
        document.body.classList.remove('sunglasses-mode');
        document.querySelectorAll('.hidden-message').forEach((el) => {
          el.classList.remove('revealed');
        });
      }
    };

    const handleKeyDown = (e) => {
      // Toggle sunglasses mode with 'S' key
      if (e.key.toLowerCase() === 's') {
        toggleSunglassesMode();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      clearInterval(glitchInterval);
      document.removeEventListener('keydown', handleKeyDown);
      if (staticOverlay) staticOverlay.remove();
      if (scanline) scanline.remove();
    };
  }, []);

  return null; // This component doesn't render anything directly
}