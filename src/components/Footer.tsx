import { Button } from "@/components/ui/button";
import { Gamepad2, Mail, ExternalLink, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-gaming rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                Game Impact Challenge
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering young game creators to showcase their creativity, passion, and skills. 
              Join the Gen Z gaming revolution and make an impact through innovative game design.
            </p>
            <div className="flex gap-4">
              <Button variant="gaming" size="sm" asChild>
                <a href="mailto:contact@lettuce.build">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
              <Button variant="outline" size="sm">
                <a
                  href="https://discord.com/invite/qXUKQjABzn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Discord
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-neon-green mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  About GIC
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Event Timeline
                </a>
              </li>
              <li>
                <a href="#rules" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Rules & Guidelines
                </a>
              </li>
              <li>
                <a href="#community" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Join Community
                </a>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="font-semibold text-neon-purple mb-4">Event Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>📅 September 8-12, 2025</li>
              <li>🌍 Global Online Event</li>
              <li>🎓 Grades 5-9</li>
              <li>👥 Solo or Team</li>
              <li>🏆 Free to Participate</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 LettuceBuild. Game Impact Challenge. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-neon-pink" /> for young game creators
            </div>
          </div>
          <div className="flex flex-col items-center mt-6">
            <span className="bg-neon-green/90 text-background px-6 py-2 rounded-full text-lg md:text-xl font-bold shadow-lg mb-2">
              Thanks for visiting! If you read this far, you’re officially part of the GIC fam. 💚
            </span>
            <span className="text-base text-muted-foreground italic">See you at GIC!</span>
          </div>
        </div>
      </div>
    </footer>
  );
};