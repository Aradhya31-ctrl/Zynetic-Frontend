function Footer() {
    return (
      <footer className="w-full mt-16 bg-white/10 text-sm text-center p-6 text-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/80">Weather data provided by OpenWeatherMap API.</p>
          <p className="mt-2 text-white/80">Built with ❤️ using React.js + Tailwind CSS</p>
          <p className="mt-1 text-white/70">&copy; 2025 Weather. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              <img src="/vercel.svg" alt="Vercel" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  