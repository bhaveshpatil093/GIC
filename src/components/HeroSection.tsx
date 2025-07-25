
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, Zap } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const tagline = "More than an event – it’s where friendships spark, laughter echoes, and creativity shines! ✨🎉";
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const idx = useRef(0);
  const direction = useRef<"forward" | "backward">("forward");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (direction.current === "forward") {
      if (idx.current < tagline.length) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev + tagline.charAt(idx.current));
          idx.current++;
        }, 35);
      } else {
        direction.current = "backward";
        timeout = setTimeout(() => {}, 1200); // Pause before erasing
      }
    } else {
      if (idx.current > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          idx.current--;
        }, 18);
      } else {
        direction.current = "forward";
        timeout = setTimeout(() => {}, 600); // Pause before typing again
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-gradient-neon text-background border-none text-lg px-6 py-2">
          🎮 GIC: A Weeklong Gaming Community Celebration
        </Badge>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent leading-tight">
          Game Impact Challenge
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neon-cyan">
          GIC 2025
        </h2>
        <div className="overflow-x-hidden mb-8 max-w-3xl mx-auto">
          <div className="relative w-full h-10">
            <div className="absolute left-0 top-0 flex animate-marquee-continuous w-max">
              <span className="whitespace-nowrap text-xl md:text-2xl font-bold bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent pr-16">
                More than an event – it’s where friendships spark, laughter echoes, and creativity shines! ✨🎉
              </span>
              <span className="whitespace-nowrap text-xl md:text-2xl font-bold bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent pr-16">
                More than an event – it’s where friendships spark, laughter echoes, and creativity shines! ✨🎉
              </span>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes marquee-continuous {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-continuous {
            animation: marquee-continuous 18s linear infinite;
          }
        `}</style>
        
        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-foreground">
            <Calendar className="text-neon-green" />
            <span className="font-semibold">Sep 8-12, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Users className="text-neon-cyan" />
            <span className="font-semibold">Grades 5-9</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Trophy className="text-neon-purple" />
            <span className="font-semibold">Global Online Event</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Zap className="text-neon-pink" />
            <span className="font-semibold">Solo or Team</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="gaming" size="lg">
            <a
              href="https://forms.gle/xGjQVgUsjv2LSSvV7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </Button>
          <Button
            asChild
            variant="neon"
            size="lg"
          >
            <a
              href="https://discord.com/invite/qXUKQjABzn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join on Discord
            </a>
          </Button>
        </div>
        
        {/* Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-card hover:shadow-neon transition-all duration-300">
            <div className="text-3xl font-bold text-neon-green mb-2">🎯</div>
            <h3 className="font-semibold mb-2">Develop & Share</h3>
            <p className="text-sm text-muted-foreground">Create amazing games and showcase your talent</p>
          </div>
          <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-card hover:shadow-neon transition-all duration-300">
            <div className="text-3xl font-bold text-neon-cyan mb-2">🧠</div>
            <h3 className="font-semibold mb-2">Learn from Experts</h3>
            <p className="text-sm text-muted-foreground">Get guidance from industry professionals</p>
          </div>
          <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-card hover:shadow-neon transition-all duration-300">
            <div className="text-3xl font-bold text-neon-purple mb-2">🤝</div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <p className="text-sm text-muted-foreground">Join a community of like-minded creators</p>
          </div>
          <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-card hover:shadow-neon transition-all duration-300">
            <div className="text-3xl font-bold text-neon-pink mb-2">🌟</div>
            <h3 className="font-semibold mb-2">Make Impact</h3>
            <p className="text-sm text-muted-foreground">Create games that matter and inspire change</p>
          </div>
        </div>
      </div>
    </section>
  );
};
