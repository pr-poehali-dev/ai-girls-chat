import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProfilesSection from "@/components/ProfilesSection";
import AnimeGirlsSection from "@/components/AnimeGirlsSection";
import ChatInterface from "@/components/ChatInterface";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<
    "home" | "profiles" | "anime" | "chat"
  >("home");
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);

  const handleStartChat = (character: any) => {
    setSelectedCharacter(character);
    setCurrentSection("chat");
  };

  if (currentSection === "chat" && selectedCharacter) {
    return (
      <ChatInterface
        character={selectedCharacter}
        onBack={() => setCurrentSection("home")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      {/* Hero Section */}
      {currentSection === "home" && (
        <>
          <section className="pt-24 pb-16 px-4 relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-5"></div>
            <div className="container mx-auto text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
                  <span className="gradient-primary bg-clip-text text-transparent">
                    Unlimited AI Chat
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl text-foreground">
                    No Restrictions. Pure Freedom.
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Chat endlessly with diverse AI personalities. No premium
                  walls, no message limits. Just pure, unlimited conversations.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 gradient-primary hover:opacity-90 font-medium"
                    onClick={() => setCurrentSection("profiles")}
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Start Chatting Free
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4 border-border hover:border-primary font-medium"
                    onClick={() => setCurrentSection("anime")}
                  >
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Explore Anime Girls
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Infinity" size={24} className="text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">
                      Unlimited Messages
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Chat as much as you want, no restrictions
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={24} className="text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">
                      Diverse Characters
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Wide variety of personalities to match your mood
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Zap" size={24} className="text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">
                      Instant Responses
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Fast, engaging conversations anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ProfilesSection onStartChat={handleStartChat} />
        </>
      )}

      {currentSection === "profiles" && (
        <div className="pt-20">
          <ProfilesSection onStartChat={handleStartChat} />
        </div>
      )}

      {currentSection === "anime" && (
        <div className="pt-20">
          <AnimeGirlsSection onStartChat={handleStartChat} />
        </div>
      )}
    </div>
  );
};

export default Index;
