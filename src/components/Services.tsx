
import { useEffect, useRef } from 'react';
import { 
  PenTool, 
  BarChart, 
  Film, 
  Code, 
  MessageSquare, 
  Share2 
} from 'lucide-react';

const services = [
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'Content Creation',
    description: 'From blog posts to whitepapers, we craft engaging content that resonates with your audience and drives engagement.'
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: 'Content Strategy',
    description: 'We develop comprehensive content strategies aligned with your business goals and target audience needs.'
  },
  {
    icon: <Film className="h-8 w-8" />,
    title: 'Video Production',
    description: 'Compelling video content that tells your story and captivates your audience across all platforms.'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Beautiful, functional websites and landing pages designed to convert visitors into customers.'
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'Copywriting',
    description: 'Persuasive copy that speaks to your audience and drives them to take action.'
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Social Media',
    description: 'Strategic social media management that builds community and amplifies your brand voice.'
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    serviceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" className="section bg-secondary/50">
      <div className="container-custom">
        <div 
          ref={sectionRef} 
          className="animate-on-scroll mb-12"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive suite of creative services to elevate your brand and drive business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="animate-on-scroll glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary inline-flex mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
