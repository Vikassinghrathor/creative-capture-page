
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Proceed with form submission
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
      });
    }, 1500);
  };

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

              <div className="pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl dark:bg-foreground/5 dark:border-white/10">
                    <h3 className="text-lg font-medium mb-4">Get Started Today</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`input-field w-full ${formErrors.name ? 'border-red-500' : ''} dark:bg-foreground/5 dark:border-white/10`}
                          placeholder="Your name"
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input-field w-full ${formErrors.email ? 'border-red-500' : ''} dark:bg-foreground/5 dark:border-white/10`}
                          placeholder="you@example.com"
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                        )}
                      </div>

                      <Button 
                        type="submit"
                        variant="accent"
                        className="w-full py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="glass-card p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30">
                    <h3 className="text-lg font-medium mb-2 text-green-700 dark:text-green-300">Thank You!</h3>
                    <p className="text-green-600 dark:text-green-400">We've received your information and will be in touch shortly.</p>
                    <Button 
                      variant="outline"
                      className="mt-4"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                )}
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
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white dark:bg-foreground/20 rounded-lg shadow-lg animate-float opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationDuration: '7s' }}></div>
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
            <div key={i} className="glass-card rounded-xl p-4 md:p-6 text-center dark:bg-foreground/5 dark:border-white/10">
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
