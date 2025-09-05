import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="ARNEOR team working on innovative tech solutions"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            🚀 Now featuring UNEVEE - Our flagship health & fitness platform
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 animate-slide-up">
            Engineering the Future of
            <span className="block gradient-primary bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 animate-slide-up">
            ARNEOR is a technology holding company that engineers and designs 
            innovative products and services that transform industries globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button variant="brand" size="lg" asChild>
              <Link to="/portfolio" className="group">
                Explore Our Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about" className="group">
                <Play className="mr-2 h-4 w-4" />
                Learn About Us
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1+</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2024</div>
              <div className="text-muted-foreground">Year Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;