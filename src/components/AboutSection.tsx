
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Personal story/quote */}
        <div className="flex flex-col items-center mb-8">
          <span className="bg-neon-purple/90 text-background px-6 py-2 rounded-full text-lg md:text-xl font-semibold shadow-lg">
            “I made my first real game at GIC. Now I can’t stop!” — Alex, 13
          </span>
          <span className="mt-2 text-base text-muted-foreground italic">(You could be next!)</span>
        </div>
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-neon text-background border-none">
            About GIC
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent">
            What’s the Game Impact Challenge, really?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card mb-8 hover:shadow-neon transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-green">🎮 More Than Just an Event</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="mb-4">
                GIC is where you meet friends, try wild ideas, and surprise yourself. It’s not just about winning—it’s about having fun, learning, and cheering each other on. <span className="text-neon-cyan font-semibold">Gen Z developers</span> get to show off their creativity, passion, and skills in game design.
              </p>
              <p>
                At its core, GIC is a <span className="text-neon-purple font-semibold">celebration of innovation and community</span>. We’re here to help you grow, make friends, and have a blast—no matter your skill level.
              </p>
            </CardContent>
          </Card>
          
          {/* Did you know fun fact */}
          <div className="flex justify-center mt-8 mb-4">
            <span className="bg-neon-green/90 text-background px-4 py-2 rounded-xl shadow text-base md:text-lg font-semibold animate-pulse">
              🤔 Did you know? The youngest GIC participant ever was just 9 years old!
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card hover:shadow-neon transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-neon-cyan flex items-center gap-2">
                  🎯 Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">GIC is a global online event featuring:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-green rounded-full"></span>
                    Competitive game challenges
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                    Fun community activities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                    Expert-led learning sessions
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  All designed to celebrate gaming's creativity and impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card hover:shadow-neon transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-neon-purple flex items-center gap-2">
                  🌟 Core Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Whether you're a beginner or experienced coder:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-green rounded-full"></span>
                    Develop and share their games
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                    Learn from experts in the industry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                    Connect with a community of like-minded creators
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-pink rounded-full"></span>
                    Make an impact through games that matter
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
