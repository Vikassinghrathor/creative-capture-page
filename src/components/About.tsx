import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "Strategic approach to content creation",
  "Expert team of creative professionals",
  "Data-driven content performance analysis",
  "End-to-end project management",
  "Tailored solutions for every client",
  "Commitment to exceptional quality",
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add("fade-in-left-active");
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add("fade-in-right-active");
            } else {
              entry.target.classList.add("fade-in-up-active");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div ref={sectionRef} className="animate-on-scroll mb-12">
          <h2 className="section-title">About Our Agency</h2>
          <p className="section-subtitle">
            We're a team of content strategists, designers, and storytellers
            dedicated to creating exceptional brand experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - About Image */}
          <div ref={imageRef} className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[500px] shadow-xl">
              {/* Placeholder for about image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-primary/70 dark:from-accent dark:via-accent/80 dark:to-primary/60"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-medium mb-3">
                    Creative Excellence
                  </h3>
                  <p className="max-w-xs mx-auto text-white/90">
                    Our team brings your vision to life with creativity and
                    precision
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary dark:hidden rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-white dark:hidden rounded-lg shadow-lg"></div>
          </div>

          {/* Right side - About Content */}
          <div ref={contentRef} className="animate-on-scroll space-y-6">
            <h3 className="text-2xl font-semibold">
              Crafting Stories That Inspire Action
            </h3>
            <p className="text-muted-foreground">
              Founded in 2015, CreateStudios has established itself as a leading
              creative agency focused on delivering exceptional content and
              design solutions. We blend strategic thinking with creative
              execution to help brands stand out in today's crowded digital
              landscape.
            </p>
            <p className="text-muted-foreground">
              Our collaborative approach ensures that we understand your unique
              challenges and opportunities, allowing us to create tailored
              solutions that drive real business results.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn btn-primary px-6 py-3 mt-6 inline-flex dark:bg-accent dark:hover:bg-accent/90"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
