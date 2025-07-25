import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import gamernationPoster from "@/assets/Gamernation 2.0 Beta Testing Party.webp";
import gicPoster from "@/assets/GIC 4.0 Official Poster.webp";
import heroGaming from "@/assets/hero-gaming.jpg";

// Pixel art assets (place your PNGs in src/assets/ and import here)
import pixelTrophy from "@/assets/pixel-trophy.png"; // for opening ceremony
import pixelJoystick from "@/assets/pixel-joystick.png"; // for code-along
import pixelChat from "@/assets/pixel-chat.png"; // for community
import pixelPlay from "@/assets/pixel-play.png"; // overlay for videos
import pixelMascot from "@/assets/pixel-mascot.png"; // mascot for header
import pixelGrass from "@/assets/pixel-grass.png"; // grass border

const recapCards = [
  {
    title: "Gamernation 2.0 Beta Testing Party",
    thumbnail: gamernationPoster,
    icon: pixelTrophy,
    button: { label: "View Poster", href: gamernationPoster },
    alt: "Gamernation 2.0 Beta Testing Party Poster",
    external: false,
  },
  {
    title: "GIC 4.0 Official Poster",
    thumbnail: gicPoster,
    icon: pixelTrophy,
    button: { label: "View Poster", href: gicPoster },
    alt: "GIC 4.0 Official Poster",
    external: false,
  },
  {
    title: "Complete Recap",
    thumbnail: heroGaming,
    icon: pixelMascot,
    button: {
      label: "Read the Article",
      href: "https://lettucebuild.medium.com/gic-4-0-recap-a-lens-of-hope-for-our-future-gamers-b2abdc1c35bb",
    },
    alt: "GIC 4.0 Recap Article",
    external: true,
  },
  {
    title: "Opening Ceremony, Gamernation Version 2 Launch",
    thumbnail: "https://vumbnail.com/1007897179.jpg",
    icon: pixelTrophy,
    button: { label: "Watch Video", href: "https://vimeo.com/1007897179" },
    alt: "Opening Ceremony Video Thumbnail",
    external: true,
    isVideo: true,
  },
  {
    title: "Get to Know the Community! Show and Tell.",
    thumbnail: "https://vumbnail.com/1007900127.jpg",
    icon: pixelChat,
    button: { label: "Watch Video", href: "https://vimeo.com/1007900127" },
    alt: "Show and Tell Video Thumbnail",
    external: true,
    isVideo: true,
  },
  {
    title: "Career Paths in Game Development - Mentor Talk by Mr. V.",
    thumbnail: "https://vumbnail.com/1008279952.jpg",
    icon: pixelTrophy,
    button: { label: "Watch Video", href: "https://vimeo.com/1008279952" },
    alt: "Career Paths Video Thumbnail",
    external: true,
    isVideo: true,
  },
  {
    title: "Live Game Code-along by Coach Izzy",
    thumbnail: "https://vumbnail.com/1008703224.jpg",
    icon: pixelJoystick,
    button: { label: "Watch Video", href: "https://vimeo.com/1008703224" },
    alt: "Live Game Code-along Video Thumbnail",
    external: true,
    isVideo: true,
  },
  {
    title: "Impact of Integrating Gamification for Today’s Education - Mentor Talk by Mr. Bansal",
    thumbnail: "https://vumbnail.com/1009091036.jpg",
    icon: pixelTrophy,
    button: { label: "Watch Video", href: "https://vimeo.com/1009091036" },
    alt: "Gamification Mentor Talk Video Thumbnail",
    external: true,
    isVideo: true,
  },
  {
    title: "ACF Game Dev. Community Boba Chat + Fun Memories",
    thumbnail: "https://vumbnail.com/1009377386.jpg",
    icon: pixelChat,
    button: { label: "Watch Video", href: "https://vimeo.com/1009377386" },
    alt: "Boba Chat Video Thumbnail",
    external: true,
    isVideo: true,
  },
];

export const GICRecapSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-x-hidden">
      {/* Pixel mascot in header */}
      <div className="flex justify-center items-center mb-4">
        <img src={pixelMascot} alt="Pixel Mascot" className="w-16 h-16 mr-2 animate-bounce" />
        <Badge className="mb-4 bg-gradient-neon text-background border-none text-lg">GIC 4.0 Recap</Badge>
      </div>
      {/* Friendly intro blurb */}
      <div className="flex flex-col items-center mb-6">
        <span className="text-lg md:text-2xl font-semibold text-neon-green bg-background/80 px-4 py-2 rounded-xl shadow">
          Here are some of our favorite moments from GIC 4.0! 🎉
        </span>
        <span className="text-base text-muted-foreground mt-2 italic">(Scroll to relive the fun, laughter, and memories!)</span>
      </div>
      {/* Playful handwritten arrow SVG pointing to first card on desktop */}
      <svg className="hidden md:block absolute left-32 top-40 w-32 h-24 z-20" fill="none" stroke="#00FF99" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 10 Q 80 80 120 10 M120 10 Q 130 0 140 30" />
        <text x="30" y="60" fontSize="18" fill="#00FF99" fontFamily="Comic Sans MS, Comic Sans, cursive">Check this out!</text>
      </svg>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent text-center">
        GIC 4.0 Recap
      </h2>
      {/* Subtle animated pixel background (e.g. stars/clouds) could be added here */}
      <div className="relative max-w-5xl mx-auto">
        <Carousel opts={{ align: "start", slidesToScroll: 1, loop: true }} className="">
          <CarouselContent className="-ml-4">
            {recapCards.map((card, idx) => {
              // Add a fun caption and emojis for each card
              const captions = [
                "Beta testers went wild!",
                "The official poster drop!",
                "A recap to remember!",
                "Opening ceremony hype!",
                "Show & Tell: So many laughs!",
                "Mentor wisdom, unlocked!",
                "Live coding magic!",
                "Gamification talk = mind blown!",
                "Boba chat = best memories!",
              ];
              // Pick a 'Team Pick' badge for the 3rd card
              const isTeamPick = idx === 2;
              return (
                <CarouselItem
                  key={idx}
                  className="pl-4 md:basis-1/2 sm:basis-1/2 basis-full flex flex-col"
                >
                  <div className="relative w-full aspect-video group overflow-hidden rounded-2xl shadow-xl border-4 border-primary/20 bg-gradient-to-br from-background/80 to-background/40">
                    <img
                      src={card.thumbnail}
                      alt={card.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Pixel play button overlay for videos */}
                    {card.isVideo && (
                      <img src={pixelPlay} alt="Play" className="absolute inset-0 m-auto w-20 h-20 opacity-90 pointer-events-none" />
                    )}
                    {/* Team Pick badge */}
                    {isTeamPick && (
                      <span className="absolute top-4 left-4 bg-neon-pink text-white font-bold px-4 py-2 rounded-full shadow-lg text-base animate-bounce z-20">
                        Team Pick!
                      </span>
                    )}
                  </div>
                  {/* Title, caption, emojis, and button below the image */}
                  <div className="flex flex-col gap-2 mt-4 items-start px-2 md:px-4">
                    <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{card.title}</span>
                    <span className="text-lg md:text-xl text-neon-green font-medium flex items-center gap-2">
                      {captions[idx]} <span className="ml-2">{["🎮","🎉","😂","😍","🤩"][idx%5]}</span>
                    </span>
                    <a
                      href={card.button.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="inline-block mt-2 px-6 py-3 bg-neon-green text-background font-semibold rounded shadow hover:bg-neon-green/80 transition text-lg md:text-xl w-max"
                      download={!card.external}
                    >
                      {card.button.label} {card.isVideo ? "▶️" : ""}
                    </a>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* Pixel grass border below carousel */}
        <img src={pixelGrass} alt="Pixel Grass Border" className="w-full max-h-10 object-cover mt-8 select-none pointer-events-none mx-auto" />
      </div>
    </section>
  );
};

export default GICRecapSection;
// Place your pixel art PNGs in src/assets/ and update the import paths above accordingly. 