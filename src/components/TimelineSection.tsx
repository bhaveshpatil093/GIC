
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mic, Code, MessageCircle, Award } from "lucide-react";
import { useRef, useEffect } from "react";

export const TimelineSection = () => {
  const events = [
    {
      date: "Sep. 8th, 2025 (Mon.)",
      title: "Game Impact Challenge Opening Ceremony",
      icon: Award,
      color: "text-neon-green"
    },
    {
      date: "Sep. 9th, 2025 (Tue)",
      title: "Meme Challenge + Boba Chat Hangout",
      icon: MessageCircle,
      color: "text-neon-cyan"
    },
    {
      date: "Sep. 10th, 2025 (Wed)",
      title: "Live-Game Development Session",
      icon: Code,
      color: "text-neon-purple"
    },
    {
      date: "Sep. 11th, 2025 (Thu)",
      title: "Mentor Talk (Q&A/AMA)",
      icon: MessageCircle,
      color: "text-neon-pink"
    },
    {
      date: "Sep. 12th, 2025 (Fri)",
      title: "Closing Ceremony",
      icon: Award,
      color: "text-neon-blue"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-gaming text-primary-foreground border-none">
            <Calendar className="w-4 h-4 mr-2" />
            Event Schedule
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Game Impact Challenge (GIC) is a weeklong event planned to be hosted between{" "}
            <span className="text-neon-green font-semibold">September 8th - 12th, 2025</span>, online.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Vertical Timeline */}
          <div className="relative flex flex-col md:flex-row md:items-start">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-green via-neon-cyan to-neon-purple rounded-full z-0" style={{ minHeight: '100%' }} />
            <div className="w-full md:pl-24 space-y-12">
              {events.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <div key={index} className="relative flex md:items-center group animate-fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                    {/* Dot and connector */}
                    <div className="flex flex-col items-center absolute left-0 md:left-8 top-0 z-10">
                      <span className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shadow-lg bg-background ${event.color}`}> 
                        <IconComponent className="w-6 h-6" />
                      </span>
                      {index < events.length - 1 && (
                        <span className={`w-1 flex-1 bg-gradient-to-b from-current to-transparent opacity-60 ${event.color}`} style={{ minHeight: '40px' }} />
                      )}
                    </div>
                    {/* Card content */}
                    <div className="ml-16 md:ml-0 md:pl-16 flex-1">
                      <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card hover:shadow-neon transition-all duration-300">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                              <Clock className="w-4 h-4" />
                              {event.date}
                            </div>
                            <CardTitle className="text-xl text-foreground">
                              {event.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Card className="mt-12 bg-gradient-gaming/10 backdrop-blur-sm border-primary/30 shadow-neon hover:shadow-glow transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-neon-green mb-2">✨ Special Features</h3>
                <p className="text-muted-foreground">
                  Each day features unique activities designed to inspire, educate, and connect young game developers 
                  from around the world. Join us for an unforgettable week of creativity and innovation!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(.23,1.01,.32,1) both;
        }
      `}</style>
    </section>
  );
};
