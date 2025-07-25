import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, UserCheck, FileText, Shield, Zap } from "lucide-react";

export const RulesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-neon text-background border-none">
            Event Guidelines
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent">
            Rules & Guidelines
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Eligibility */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-neon-cyan flex items-center gap-2 hover:animate-pulse-glow transition-all duration-300">
                  <GraduationCap className="w-6 h-6 animate-bounce-gentle" />
                  Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 hover:text-neon-green transition-colors duration-300">
                    <span className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0 animate-pulse"></span>
                    <span>Open to all middle schoolers (grades 5-9) and homeschool students</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-neon-cyan transition-colors duration-300">
                    <span className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                    <span>Participate solo or in teams of up to 5</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mentor/Coach */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-neon-purple flex items-center gap-2 hover:animate-pulse-glow transition-all duration-300">
                  <UserCheck className="w-6 h-6 animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
                  Mentor/Coach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 hover:text-neon-purple transition-colors duration-300">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0 animate-pulse"></span>
                  <span>Every participant (individual or team) must have an adult mentor (18+) for guidance</span>
                </div>
              </CardContent>
            </Card>

            {/* Registration */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-neon-pink flex items-center gap-2 hover:animate-pulse-glow transition-all duration-300">
                  <Users className="w-6 h-6 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
                  Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 hover:text-neon-pink transition-colors duration-300">
                  <span className="w-2 h-2 bg-neon-pink rounded-full mt-2 flex-shrink-0 animate-pulse"></span>
                  <span>Choose to compete/participate solo or in a team – both must register using [this form]</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What to Submit */}
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card mb-8 hover:shadow-neon transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-green flex items-center gap-2 hover:animate-pulse-glow transition-all duration-300">
                <FileText className="w-6 h-6 animate-bounce-gentle" />
                What to Submit?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="hover:text-neon-cyan transition-colors duration-300 transform hover:scale-105">
                  <h4 className="font-semibold text-neon-cyan mb-2 animate-neon-pulse">🎮 Game name</h4>
                  <p className="text-sm text-muted-foreground">Choose a creative and memorable name for your game</p>
                </div>
                <div className="hover:text-neon-purple transition-colors duration-300 transform hover:scale-105">
                  <h4 className="font-semibold text-neon-purple mb-2 animate-neon-pulse">📝 Game description</h4>
                  <p className="text-sm text-muted-foreground">Explain your game's concept, mechanics, and goals</p>
                </div>
                <div className="hover:text-neon-pink transition-colors duration-300 transform hover:scale-105">
                  <h4 className="font-semibold text-neon-pink mb-2 animate-neon-pulse">🎯 Playable demo links*</h4>
                  <p className="text-sm text-muted-foreground">*May include: GitHub repo, live build, YouTube video, Steam/Gamernation links</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg hover:bg-neon-green/20 transition-colors duration-300">
                <p className="text-sm text-foreground">
                  <strong>Submission:</strong> Submit via the registration form's final page.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Submissions Guidelines */}
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card mb-8 hover:shadow-neon transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-blue flex items-center gap-2 hover:animate-pulse-glow transition-all duration-300">
                <Zap className="w-6 h-6 animate-bounce-gentle" />
                Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neon-green mb-2">1. Original Work Only</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>○ All submissions must be your creation</li>
                      <li>○ If using others' content, you must have permission</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neon-cyan mb-2">2. No Copyright Violations</h4>
                    <ul className="text-sm text-muted-foreground ml-4">
                      <li>○ Do not include any third-party IP without authorization</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neon-purple mb-2">3. Anti-Plagiarism Policy</h4>
                    <ul className="text-sm text-muted-foreground ml-4">
                      <li>○ Any plagiarized work = immediate disqualification + future ban</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neon-pink mb-2">4. Rule Changes</h4>
                    <ul className="text-sm text-muted-foreground ml-4">
                      <li>○ GIC may update rules at any time to ensure fair competition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Code of Conduct */}
          <Card className="bg-gradient-gaming/10 backdrop-blur-sm border-primary/30 shadow-neon hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-green flex items-center gap-2 hover:animate-pulse-glow transition-all duration-300">
                <Shield className="w-6 h-6 animate-bounce-gentle" />
                Code of Conduct
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-neon-cyan mb-3">Our Safe Space Policy</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-neon-green">❖</span>
                      Zero tolerance for harassment, discrimination, or hate speech of any kind
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-cyan">❖</span>
                      No inappropriate content, bullying, doxing, or unwanted contact
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-purple">❖</span>
                      Respect everyone's identity and boundaries
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neon-purple mb-3">How We Communicate</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-neon-green">❖</span>
                      Keep conversations respectful and on-topic
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-cyan">❖</span>
                      No spamming or unsolicited DMs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-purple">❖</span>
                      Use appropriate channels for different topics
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
