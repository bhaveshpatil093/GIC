import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
// Pixel art assets (place your PNGs in src/assets/ and import here)
import pixelQuote from "@/assets/pixel-quote.png"; // for testimonial icon
import pixelMascot from "@/assets/pixel-mascot.png"; // mascot for header
import pixelStar from "@/assets/pixel-star.png"; // for card decoration

const testimonials = [
  {
    name: "Jaeho Lee",
    role: "Student/ Event Student Leader",
    text: `GIC 4.0 was an incredible experience, and an absolute blast! It was so much fun with enthusiastic participants, and a ton of interesting presentations and information, making it all a success. Even though it was just a fraction of the entire week-long event, I realized how many passionate game developers were in our community during the Show and Tell event I got to co-host. In my experience hosting other events, usually a little push for questions is needed, however, there was no need for that this time, as everyone seemed extremely interested in each others’ games and immediately jumped to satisfy their curiosity. Not only was I co-host in GIC 4.0, but I was also a student many years back, participating in this exact event, which was cool to experience both sides. I remember presenting would always go a little bumpy, and I would get nervous every time I unmuted to present, so I was impressed to see everyone present so well. I also remember how fun it was to get to look at everyone else’s games, which luckily, hasn’t changed. Overall, GIC–whether I’m hosting or participating–has been nothing but amazing for students presenting and learning about unique, passion-filled projects; and I can’t wait to see it return next year!`,
  },
  {
    name: "Kenneth Luong",
    role: "ACF Coach",
    text: `GIC 4.0 was a great success this year and allowed for connections to be made within the ACF game development community. I was glad to be able to host the closing ceremony which was attended by coaches and students and allowed for conservations, advice, and perspectives to be shared. Near the end of the closing ceremony event, we were able to indulge in Gartic Phone and everyone trying to replicate one another’s art made me laugh so much and was a core memory of the whole event. I believe GIC allows for students to learn about careers in game development, highlight their own creations, meet other programmers which is an invaluable experience and something they can always look forward to. As we can continue to hold this event annually, I hope many more people attend because it is truly an educational experience where you can learn from people in the industry and absorb knowledge. I hope we continue to host GIC next year and make it even greater!`,
  },
  {
    name: "Juan Tafolla",
    role: "ACF Coach",
    text: `I am extremely proud of our current progress of GIC this year. After being part of this wonderful event in previous years, I am more than happy to say it was more than a pleasure to help take part and make this wonderful event possible. Coding education how we can spread this information to the wider community is crucial, especially as a resident in the central valley the importance of having events with easy accessibility such as this one- are key to promoting and increasing this educational goal. It’s always a pleasure to see so many international audience members from different parts of the world and seeing these people share this enthusiasm. The guest speakers were very enthusiastic with many tackling subjects the appeal to all sorts of age groups! From talking about Gamefication of coding education to exploring the world of game development I found students of different ages- as well as myself intrigued and entertained to the possibilities available to these ambitious programmers. Likewise it was also enjoyable to have students show off their finished projects! Giving young students the opportunity to demonstrate their leadership, social, and technical skills challenges these students to leave their comfort zone to create their own memories of this experience. My favorite moment was mentoring one of my advanced students Thibault in putting together and preparing a presentation, I recall him being VERY enthusiastic about presenting the projects we have worked hard together for months, to show his skill.`,
  },
  {
    name: "Izzy Lera",
    role: "ACF Coach",
    text: `GIC 4.0 I believe was a very successful event this year. Both participants and presenters had a nice and fulfilling experience for this event. GIC gives students the unique opportunity to interact with and ask questions to industry professionals in an environment that is both accessible and friendly. For my part I led the pygame introduction course for GIC and I had a great time doing so. The students were very interactive with my curriculum and each other. The students even went beyond my code that I had taught and added their own spin to the circle clicker that I was teaching how to create. I think for the future it would be great to see more students interact as this is such a unique and wonderful experience. I hope that I can be a part of GIC next year and can’t wait to see what comes next.`,
  },
  {
    name: "Swatilekha Roy",
    role: "ACF Staff",
    text: `Nothing is more fulfilling than watching all our Coaches and students come together under one roof (or virtually, within the same Zoom room) and bring their authentic selves, creativity and storytelling, passions, and get excited together! I think GIC 4.0 manifested that spirit pretty well, thanks to the tremendous support of all our Coaches, parents, mentors, speakers, participants, and students. My favorite memory from our fourth chapter would be one of our coding workshops, where one student was voluntarily helping another with a coding bug troubleshooting, which for me, rings so true with the true essence of GIC: learning through sharing! I hope for our future chapters to be even more vibrant, and engaging. Until then, let’s keep the spirit of game development alive within the community and keep empowering each other. See you all next time! 💛`,
  },
];

export const GICTestimonialsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-x-hidden">
      {/* Pixel mascot in header */}
      <div className="flex justify-center items-center mb-4">
        <img src={pixelMascot} alt="Pixel Mascot" className="w-16 h-16 mr-2 animate-bounce" />
        <Badge className="mb-4 bg-gradient-neon text-background border-none text-lg">GIC 4.0 Testimonials</Badge>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent text-center">
        GIC 4.0 Testimonials
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <Carousel opts={{ align: "start", slidesToScroll: 1, loop: true }} className="">
          <CarouselContent className="-ml-4">
            {testimonials.map((t, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 md:basis-1/2 sm:basis-full basis-full flex flex-col"
              >
                <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-neon transition-all duration-300 h-full flex flex-col group relative overflow-hidden hover:scale-105 hover:shadow-glow">
                  {/* Pixel art quote icon in the corner */}
                  <img src={pixelQuote} alt="Quote" className="absolute top-2 right-2 w-8 h-8 opacity-80 z-10" />
                  {/* Pixel star for decoration */}
                  <img src={pixelStar} alt="Star" className="absolute bottom-2 left-2 w-6 h-6 opacity-60 z-10 animate-pulse" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg md:text-xl font-bold flex items-center gap-2">
                      {t.name} <span className="text-xs text-muted-foreground font-normal">({t.role})</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-base md:text-lg text-muted-foreground mb-4 italic max-h-60 overflow-y-auto">
                      {t.text}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default GICTestimonialsSection;
// Place your pixel art PNGs in src/assets/ and update the import paths above accordingly. 