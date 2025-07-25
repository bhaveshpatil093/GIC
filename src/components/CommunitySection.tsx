import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Bell, Users, Mail, ExternalLink, Lightbulb, HelpCircle, AlertTriangle } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Community quote */}
        <div className="flex flex-col items-center mb-8">
          <span className="bg-neon-cyan/90 text-background px-6 py-2 rounded-full text-lg md:text-xl font-semibold shadow-lg">
            “I joined for the games, but stayed for the friends.” — Priya, 14
          </span>
          <span className="mt-2 text-base text-muted-foreground italic">(You’ll fit right in!)</span>
        </div>
        {/* Playful emoji row */}
        <div className="flex justify-center gap-2 mb-8 text-2xl">
          <span>🎮</span><span>😂</span><span>🤝</span><span>🌟</span><span>🍕</span><span>🏆</span>
        </div>
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-gaming text-primary-foreground border-none">
            Join Our Community
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Discord & Community
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Discord Section */}
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-purple flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Discord
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">Join our <strong>Discord server</strong> for:</p>
              <p className="text-base text-muted-foreground mb-4 italic">(It’s where the real fun happens—memes, game jams, and late-night chats!)</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="font-semibold text-neon-green mb-2">Real-time announcements</h3>
                  <p className="text-sm text-muted-foreground">Stay updated with the latest event news and changes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <h3 className="font-semibold text-neon-cyan mb-2">Mentor & judge access</h3>
                  <p className="text-sm text-muted-foreground">Connect directly with mentors and competition judges</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-neon-purple" />
                  </div>
                  <h3 className="font-semibold text-neon-purple mb-2">Community Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Team up with other creators and share ideas</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  asChild
                  variant="gaming"
                  size="lg"
                  className="mb-4"
                >
                  <a
                    href="https://discord.com/invite/qXUKQjABzn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Join our Discord
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Prefer email? We'll send key updates there too.
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  (Why? Discord helps our community create, share, and grow together!)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Suggestions & Referrals */}
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-green flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                Suggestions & Referrals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">Help us improve GIC! Share your:</p>
              <p className="text-base text-muted-foreground mb-4 italic">(No idea is too silly. We love surprises!)</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✏️</span>
                  <span className="font-semibold text-neon-cyan">Ideas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">❓</span>
                  <span className="font-semibold text-neon-purple">Questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📢</span>
                  <span className="font-semibold text-neon-pink">Feedback</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-neon-green" />
                  <a
                    href="mailto:contact@lettuce.build"
                    className="text-neon-green font-semibold hover:underline"
                  >
                    contact@lettuce.build
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-neon-cyan" />
                  <span>or Submit via Form: link</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-gaming/10 border border-primary/30 rounded-lg">
                <h4 className="font-semibold text-neon-green mb-2">Know someone who'd love GIC?</h4>
                <p className="text-muted-foreground mb-4">Refer a friend → [Referral Form]</p>
                <p className="text-sm text-muted-foreground italic">
                  (We're always listening to make GIC better!)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* LettuceBuild Section */}
          <Card className="bg-gradient-neon/10 backdrop-blur-sm border-neon-green/30 shadow-neon">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-green">
                LettuceBuild
              </CardTitle>
              <p className="text-neon-cyan font-semibold">Collaborative. AI-Powered. Sustainable.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Mission:</h4>
                  <p className="text-muted-foreground">
                    Empowering student leaders to drive meaningful change through AI and innovation, 
                    building solutions for a better tomorrow.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">How We Work:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-neon-green">🌍</span>
                      <div>
                        <strong className="text-neon-green">Remote-First Learning:</strong>
                        <span className="text-muted-foreground ml-2">
                          Hands-on projects in coding, robotics, game design, and app development—accessible from anywhere in the world.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-neon-cyan">🤝</span>
                      <div>
                        <strong className="text-neon-cyan">Collaboration by Design:</strong>
                        <span className="text-muted-foreground ml-2">
                          Team up with young innovators to solve real-world challenges.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-neon-purple">♻️</span>
                      <div>
                        <strong className="text-neon-purple">Purpose-Driven Projects:</strong>
                        <span className="text-muted-foreground ml-2">
                          Every creation aligns with sustainability goals, turning ideas into impactful solutions.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Why Choose Us?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-neon-pink">🚀</span>
                      <div>
                        <strong className="text-neon-pink">Dream Big, Build Bigger:</strong>
                        <span className="text-muted-foreground ml-2">
                          From first-time coders to future tech leaders—we meet you where you are.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-neon-blue">✨</span>
                      <div>
                        <strong className="text-neon-blue">Learn for the Future:</strong>
                        <span className="text-muted-foreground ml-2">
                          Skills that matter, projects that inspire.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-lg text-foreground mb-4 italic">
                    Ready to create, collaborate, and change the world?
                  </p>
                  <Button asChild variant="neon" size="lg">
                    <a
                      href="https://www.lettuce.build/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Join Us Today
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};