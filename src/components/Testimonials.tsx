
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "CreateStudios transformed our content strategy, resulting in a 156% increase in organic traffic and significantly improved engagement metrics.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechVision Inc."
  },
  {
    quote: "Working with the CreateStudios team was an absolute pleasure. They understood our brand voice perfectly and delivered content that exceeded our expectations.",
    author: "Michael Chen",
    position: "CEO, GrowthMetrics"
  },
  {
    quote: "The team's creativity and strategic approach to our rebranding campaign delivered exceptional results. Our social media engagement increased by 200%.",
    author: "Emily Rodriguez",
    position: "Brand Manager, StyleHouse"
  },
  {
    quote: "CreateStudios helped us articulate our complex services in a clear, compelling way. Our website conversion rate has improved by 75% since the redesign.",
    author: "Robert Keller",
    position: "Operations Lead, CloudSolutions"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (testimonialRef.current) observer.observe(testimonialRef.current);

    return () => observer.disconnect();
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section bg-primary/5">
      <div className="container-custom">
        <div 
          ref={sectionRef}
          className="animate-on-scroll mb-12"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div 
          ref={testimonialRef}
          className="animate-on-scroll max-w-4xl mx-auto"
        >
          <div className="relative glass-card rounded-xl p-8 md:p-10 shadow-lg">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            
            <div className="space-y-6 text-center relative z-10 min-h-[180px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentIndex
                      ? 'opacity-100 translate-x-0'
                      : index < currentIndex
                      ? 'opacity-0 -translate-x-16'
                      : 'opacity-0 translate-x-16'
                  }`}
                >
                  <p className="text-lg md:text-xl italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/80 text-primary hover:bg-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/80 text-primary hover:bg-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
