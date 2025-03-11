
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <div className={`space-y-6 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
              <div className="badge bg-secondary text-primary animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>Creative Excellence</div>
              
              <h1 className="font-bold tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                Elevate Your <span className="text-primary">Brand Story</span> with Creative Precision
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
                We craft compelling content strategies and eye-catching designs that transform your brand messaging and drive measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
                <a href="#contact" className="btn btn-primary px-6 py-3">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#services" className="btn btn-secondary px-6 py-3">
                  Explore Services
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Creative Visual */}
          <div className="relative order-1 md:order-2">
            <div 
              className={`relative aspect-video rounded-2xl overflow-hidden shadow-xl transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } transition-all duration-1000 delay-300`}
            >
              {/* Placeholder for a hero image - in a real project, you would use an actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/70 animate-pulse-subtle"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="inline-block p-3 rounded-full bg-white/20 mb-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-2">Creative Content That Converts</h3>
                  <p className="text-white/80">Engaging visuals and compelling copy that drive action</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-lg shadow-lg animate-float opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-lg shadow-lg animate-float opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationDuration: '7s' }}></div>
          </div>
        </div>

        {/* Stats - Optional */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
          {[
            { value: '250+', label: 'Projects Delivered' },
            { value: '95%', label: 'Client Satisfaction' },
            { value: '8', label: 'Years Experience' },
            { value: '40+', label: 'Team Members' }
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-4 md:p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
