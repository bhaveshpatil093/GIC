
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mic, Code, MessageCircle, Award, Linkedin, User } from "lucide-react";
import { useRef, useEffect } from "react";

export const TimelineSection = () => {
  const events = [
    {
      date: "Sep. 8th, 2025 (Mon.)",
      title: "Game Impact Challenge Opening Ceremony",
      icon: Award,
      color: "text-neon-green",
      mentor: {
        name: "Yoonjung Lera",
        title: "CEO, LettuceBuild",
        linkedin: "https://www.linkedin.com/in/yoonjung-lera-92045349/",
        description: "Yoonjung Lera is a seasoned professional with expertise in business development and strategic partnerships, currently contributing her skills to innovative ventures.",
        photo: "/Yoonjung Lera.jpg"
      }
    },
    {
      date: "Sep. 9th, 2025 (Tue)",
      title: "Show and Tell",
      icon: MessageCircle,
      color: "text-neon-cyan",
      mentor: {
        name: "Coach Lucas",
        title: "Lead Coach, LettuceBuild",
        linkedin: "https://www.linkedin.com/in/lucas-wang-3160b720a/",
        description: "Lucas Wang is a dedicated Design major at Stanford University with a passion for game development and education, having built curriculum and taught courses in programming and game design since high school.",
        photo: "/Coach Lucas.jpeg"
      }
    },
    {
      date: "Sep. 10th, 2025 (Wed)",
      title: "Live-Game Development Session",
      icon: Code,
      color: "text-neon-purple",
      mentor: {
        name: "Mr. V",
        title: "Senior Software Engineer",
        linkedin: "https://www.linkedin.com/in/mvaganov/",
        description: "Mr. V (Michael Vaganov) is a seasoned software engineer and educator with over 15 years of experience in game development, XR prototyping, and computer science instruction.",
        photo: "/Mr V.png"
      }
    },
    {
      date: "Sep. 11th, 2025 (Thu)",
      title: "Mentor Talk (Q&A/AMA)",
      icon: MessageCircle,
      color: "text-neon-pink",
      mentors: [
        {
          name: "Mr. Tom Smith",
          title: "Educational Game Designer, Roblox",
          linkedin: "https://www.linkedin.com/in/tomsmith/",
          description: "Tom Smith is a veteran educational game designer and author with over two decades of experience crafting engaging player experiences for major franchises at companies like Roblox and Disney.",
          photo: "/Tom Smith.jpeg"
        },
        {
          name: "Dohyeon",
          title: "14 year-old game entrepreneur",
          linkedin: "",
          description: "Dohyeon is a 14 year-old game entrepreneur.",
          photo: "/Dohyeon.png"
        }
      ]
    },
    {
      date: "Sep. 12th, 2025 (Fri)",
      title: "Closing Ceremony",
      icon: Award,
      color: "text-neon-blue",
      mentor: {
        name: "Coach Steven",
        title: "Coach, LettuceBuild",
        linkedin: "https://www.linkedin.com/in/steven-christian-42387649/",
        description: "Coach Steven (Steven Christian) is an MD/PhD student and XR educator who combines neuroscience with creative technology to make healthcare education accessible and inclusive.",
        photo: "/Coach Steven.png"
      }
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
                        <CardContent className="pt-0">
                          {/* Mentor Information */}
                          {event.mentor ? (
                            // Single mentor
                            <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                  {event.mentor.photo ? (
                                    <img 
                                      src={event.mentor.photo} 
                                      alt={`${event.mentor.name} profile`}
                                      className="w-16 h-16 rounded-full object-cover border-2 border-neon-green"
                                    />
                                  ) : (
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center">
                                      <User className="w-6 h-6 text-white" />
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-semibold text-foreground">{event.mentor.name}</h4>
                                    <span className="text-sm text-muted-foreground">•</span>
                                    <span className="text-sm text-muted-foreground">{event.mentor.title}</span>
                                    {event.mentor.linkedin && (
                                      <a 
                                        href={event.mentor.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-neon-cyan hover:text-neon-green transition-colors duration-200"
                                      >
                                        <Linkedin className="w-4 h-4" />
                                        <span className="text-xs">LinkedIn</span>
                                      </a>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {event.mentor.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : event.mentors ? (
                            // Multiple mentors
                            <div className="space-y-3">
                              {event.mentors.map((mentor, mentorIndex) => (
                                <div key={mentorIndex} className="bg-background/50 rounded-lg p-4 border border-primary/10">
                                  <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0">
                                      {mentor.photo ? (
                                        <img 
                                          src={mentor.photo} 
                                          alt={`${mentor.name} profile`}
                                          className="w-16 h-16 rounded-full object-cover border-2 border-neon-green"
                                        />
                                      ) : (
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center">
                                          <User className="w-6 h-6 text-white" />
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-2">
                                        <h4 className="font-semibold text-foreground">{mentor.name}</h4>
                                        <span className="text-sm text-muted-foreground">•</span>
                                        <span className="text-sm text-muted-foreground">{mentor.title}</span>
                                        {mentor.linkedin && (
                                          <a 
                                            href={mentor.linkedin} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-neon-cyan hover:text-neon-green transition-colors duration-200"
                                          >
                                            <Linkedin className="w-4 h-4" />
                                            <span className="text-xs">LinkedIn</span>
                                          </a>
                                        )}
                                      </div>
                                      <p className="text-sm text-muted-foreground leading-relaxed">
                                        {mentor.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </CardContent>
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
