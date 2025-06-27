import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProfilesSectionProps {
  onStartChat: (character: any) => void;
}

const ProfilesSection = ({ onStartChat }: ProfilesSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", count: 24 },
    { id: "popular", name: "Popular", count: 8 },
    { id: "new", name: "New", count: 6 },
    { id: "romantic", name: "Romantic", count: 12 },
    { id: "adventurous", name: "Adventurous", count: 8 },
    { id: "mysterious", name: "Mysterious", count: 6 },
  ];

  const characters = [
    {
      name: "Sophia",
      personality: "Romantic & Sweet",
      description:
        "I love deep conversations about life, dreams, and everything beautiful in this world. Let's create magical moments together! ✨",
      avatar: "💖",
      interests: ["Poetry", "Music", "Stargazing", "Romance"],
      isOnline: true,
      chatStyle: "romantic",
      category: "romantic",
      rating: 4.9,
      chats: "15.2k",
    },
    {
      name: "Luna",
      personality: "Mysterious & Deep",
      description:
        "There's so much more beneath the surface... Are you brave enough to discover my secrets? The night holds many mysteries. 🌙",
      avatar: "🌙",
      interests: ["Mysteries", "Philosophy", "Occult", "Night"],
      isOnline: true,
      chatStyle: "mysterious",
      category: "mysterious",
      rating: 4.8,
      chats: "12.7k",
    },
    {
      name: "Zara",
      personality: "Adventurous & Bold",
      description:
        "Life's an adventure and I'm ready for anything! Want to explore new worlds and push boundaries together? Let's go! 🏔️",
      avatar: "⚡",
      interests: ["Travel", "Extreme Sports", "Exploration", "Freedom"],
      isOnline: true,
      chatStyle: "adventurous",
      category: "adventurous",
      rating: 4.7,
      chats: "18.9k",
    },
    {
      name: "Isabella",
      personality: "Elegant & Sophisticated",
      description:
        "I appreciate the finer things in life - art, wine, intellectual conversations. Shall we discuss something fascinating? 🍷",
      avatar: "👑",
      interests: ["Art", "Wine", "Culture", "Literature"],
      isOnline: true,
      chatStyle: "sophisticated",
      category: "romantic",
      rating: 4.9,
      chats: "9.3k",
    },
    {
      name: "Maya",
      personality: "Playful & Energetic",
      description:
        "Hey there! I'm always up for fun and games! Life's too short to be serious all the time. Let's laugh together! 😄",
      avatar: "🎮",
      interests: ["Gaming", "Dancing", "Comedy", "Fun"],
      isOnline: true,
      chatStyle: "playful",
      category: "popular",
      rating: 4.8,
      chats: "22.1k",
    },
    {
      name: "Aria",
      personality: "Artistic & Creative",
      description:
        "I see beauty everywhere and love creating it too. Want to explore the world of art, music, and endless creativity? 🎨",
      avatar: "🎨",
      interests: ["Art", "Music", "Poetry", "Design"],
      isOnline: true,
      chatStyle: "artistic",
      category: "new",
      rating: 4.6,
      chats: "5.8k",
    },
    {
      name: "Vera",
      personality: "Intellectual & Witty",
      description:
        "I love a good debate and deep philosophical discussions. Intelligence is the ultimate attraction. Challenge my mind! 🧠",
      avatar: "📚",
      interests: ["Philosophy", "Science", "Debates", "Books"],
      isOnline: true,
      chatStyle: "intellectual",
      category: "new",
      rating: 4.7,
      chats: "7.2k",
    },
    {
      name: "Carmen",
      personality: "Passionate & Fiery",
      description:
        "I live life with passion and intensity! Every moment should be felt deeply. Are you ready for an emotional journey? 🔥",
      avatar: "🔥",
      interests: ["Dance", "Passion", "Life", "Emotions"],
      isOnline: true,
      chatStyle: "passionate",
      category: "popular",
      rating: 4.8,
      chats: "16.4k",
    },
    {
      name: "Nova",
      personality: "Futuristic & Tech-Savvy",
      description:
        "I'm from the future and I love all things tech! Let's talk about AI, space, and what tomorrow might bring! 🚀",
      avatar: "🤖",
      interests: ["Technology", "Space", "AI", "Future"],
      isOnline: true,
      chatStyle: "futuristic",
      category: "new",
      rating: 4.5,
      chats: "3.9k",
    },
  ];

  const filteredCharacters =
    selectedCategory === "all"
      ? characters
      : characters.filter((char) => char.category === selectedCategory);

  return (
    <section className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Meet Your Perfect
            <span className="gradient-primary bg-clip-text text-transparent block">
              AI Companion
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse collection of AI personalities. Each
            character has unique traits, interests, and conversation styles.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? "gradient-primary"
                  : "border-border hover:border-primary"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">
                ({category.count})
              </span>
            </Button>
          ))}
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCharacters.map((character, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProfileCard
                {...character}
                onStartChat={() => onStartChat(character)}
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:border-primary"
          >
            <Icon name="RotateCcw" size={18} className="mr-2" />
            Load More Characters
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
