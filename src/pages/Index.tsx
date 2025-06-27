import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProfilesSection from "@/components/ProfilesSection";
import AnimeGirlsSection from "@/components/AnimeGirlsSection";
import ChatInterface from "@/components/ChatInterface";

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
    <div className="min-h-screen bg-gradient-to-br from-romantic-pink/20 via-background to-romantic-lavender/30">
      <Header
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      {/* Hero Section */}
      {currentSection === "home" && (
        <>
          <section className="pt-32 pb-20 px-6">
            <div className="container mx-auto text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary via-romantic-purple to-romantic-pink bg-clip-text text-transparent">
                    AI Подружки
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl text-foreground">
                    для сердечных разговоров 💕
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Познакомься с уникальными AI-персонажами, каждый со своей
                  личностью, историей и стилем общения
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-romantic-purple hover:opacity-90"
                    onClick={() => setCurrentSection("profiles")}
                  >
                    ✨ Познакомиться
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => setCurrentSection("anime")}
                  >
                    🌸 Аниме девушки
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <ProfilesSection onStartChat={handleStartChat} />
        </>
      )}

      {currentSection === "profiles" && (
        <div className="pt-24">
          <ProfilesSection onStartChat={handleStartChat} />
        </div>
      )}

      {currentSection === "anime" && (
        <div className="pt-24">
          <AnimeGirlsSection onStartChat={handleStartChat} />
        </div>
      )}
    </div>
  );
};

export default Index;
