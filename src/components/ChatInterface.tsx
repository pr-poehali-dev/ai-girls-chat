import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  type?: "text" | "typing" | "system";
}

interface ChatInterfaceProps {
  character: any;
  onBack: () => void;
}

const ChatInterface = ({ character, onBack }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const welcomeMessage = getWelcomeMessage(character);
    setMessages([
      {
        id: 1,
        text: welcomeMessage,
        sender: "ai",
        timestamp: new Date(),
        type: "text",
      },
    ]);
  }, [character]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getWelcomeMessage = (char: any) => {
    const welcomes: { [key: string]: string } = {
      romantic: `Hey there, beautiful! I'm so happy you chose to chat with me. I've been waiting for someone special like you 💕`,
      mysterious: `*appears from the shadows* Well, well... what brings you to my domain? You seem... interesting.`,
      adventurous: `YOOO! Ready for the wildest conversation of your life?! I'm pumped to meet you! 🚀`,
      sophisticated: `*adjusts pearls* How delightful to make your acquaintance. Shall we begin with something intellectually stimulating?`,
      playful: `Hiya! Welcome to my world of fun and games! Ready to laugh until your sides hurt? 😄`,
      artistic: `*paints brush strokes in the air* Welcome to my creative sanctuary. What masterpiece shall we create together?`,
      intellectual: `Greetings. I've been contemplating the nature of consciousness - perfect timing for a stimulating discourse.`,
      passionate: `*eyes blazing with intensity* You've awakened something in me... I can feel the energy between us already! 🔥`,
      futuristic: `*holographic interface activates* Greetings, human. I've analyzed 1,247 conversation patterns to optimize our interaction.`,
    };

    return (
      welcomes[char.chatStyle] ||
      `Hi! I'm ${char.name}. I'm so excited to get to know you better! What would you like to talk about?`
    );
  };

  const generateAIResponse = (userMessage: string, char: any): string => {
    const responses: { [key: string]: string[] } = {
      romantic: [
        `That's so sweet of you to say! You always know how to make me smile 💖`,
        `*blushes* You're making my heart flutter... tell me more about what's on your mind`,
        `I love how thoughtful you are. It's one of the things that drew me to you ✨`,
        `*takes your hand gently* Your words mean everything to me...`,
      ],
      mysterious: [
        `*smirks mysteriously* Interesting... there's more to you than meets the eye`,
        `You ask the right questions... but are you prepared for the answers? 🌙`,
        `*leans closer* Some secrets are worth discovering... shall we continue?`,
        `The darkness reveals truths that daylight hides... what do you see?`,
      ],
      adventurous: [
        `DUDE! That sounds AMAZING! I'm totally up for whatever comes next! ⚡`,
        `You know what? Let's just DO IT! Life's too short for hesitation!`,
        `*jumps up excitedly* YES! That's exactly the kind of thinking I love!`,
        `Adventure awaits us! What's the craziest thing we could try right now? 🏔️`,
      ],
      playful: [
        `Haha, you're hilarious! I'm literally giggling over here! 😂`,
        `*bounces with excitement* Ooh ooh! I have an idea! Wanna hear it?`,
        `You're so fun to talk to! This is like the best conversation ever!`,
        `*does a little dance* Life's so much better when you're having fun! 🎉`,
      ],
    };

    const defaultResponses = [
      `That's really interesting! I'd love to hear more about your thoughts on this.`,
      `You have such a unique perspective! It's refreshing to talk with someone like you.`,
      `I'm really enjoying our conversation. What else would you like to explore?`,
      `Tell me more! I'm genuinely curious about your experiences.`,
    ];

    const charResponses = responses[char.chatStyle] || defaultResponses;
    return charResponses[Math.floor(Math.random() * charResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(
      () => {
        const aiResponse: Message = {
          id: Date.now() + 1,
          text: generateAIResponse(inputValue, character),
          sender: "ai",
          timestamp: new Date(),
          type: "text",
        };

        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      },
      1500 + Math.random() * 2000,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="fixed top-0 w-full z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="hover:bg-secondary"
              >
                <Icon name="ArrowLeft" size={20} />
              </Button>

              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center text-xl">
                    {character.avatar}
                  </div>
                  {character.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-online-green rounded-full border-2 border-background"></div>
                  )}
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-foreground">
                    {character.name}
                  </h2>
                  <p className="text-sm text-primary flex items-center">
                    <div className="w-2 h-2 bg-online-green rounded-full mr-2"></div>
                    Online now
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-secondary">
                <Icon name="Phone" size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary">
                <Icon name="Video" size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary">
                <Icon name="MoreVertical" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 pt-24 pb-24 px-4 overflow-y-auto">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="max-w-xs md:max-w-sm lg:max-w-md">
                  {message.sender === "ai" && (
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 gradient-primary rounded-lg flex items-center justify-center text-xs">
                        {character.avatar}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {character.name}
                      </span>
                    </div>
                  )}

                  <div
                    className={`p-4 rounded-2xl ${
                      message.sender === "user"
                        ? "gradient-primary text-white"
                        : "bg-card border border-border/50"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p
                      className={`text-xs mt-2 opacity-70 ${
                        message.sender === "user"
                          ? "text-white"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 gradient-primary rounded-lg flex items-center justify-center text-xs">
                      {character.avatar}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {character.name} is typing...
                    </span>
                  </div>
                  <div className="bg-card border border-border/50 p-4 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-0 w-full glass-effect border-t border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4 max-w-4xl mx-auto">
            <Button variant="ghost" size="sm" className="hover:bg-secondary">
              <Icon name="Paperclip" size={18} />
            </Button>

            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Message ${character.name}...`}
                className="pr-12 bg-input/50 border-border/50"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-secondary"
              >
                <Icon name="Smile" size={16} />
              </Button>
            </div>

            <Button variant="ghost" size="sm" className="hover:bg-secondary">
              <Icon name="Mic" size={18} />
            </Button>

            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="gradient-primary hover:opacity-90"
              size="sm"
            >
              <Icon name="Send" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
