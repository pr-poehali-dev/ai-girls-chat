import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
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
    // Приветственное сообщение
    const welcomeMessage = getWelcomeMessage(character);
    setMessages([
      {
        id: 1,
        text: welcomeMessage,
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  }, [character]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getWelcomeMessage = (char: any) => {
    const welcomes = {
      tsundere: `Н-не думай, что я рада тебя видеть! Просто... скучно было. Что хотел сказать?`,
      kuudere: `...Привет. Ты решил поговорить со мной? Интересно.`,
      yandere: `Ах, ты пришёл ко мне~ Я так счастлива! Теперь мы можем быть вместе навсегда!`,
      dandere: `О-ой! П-привет! Я так рада, что ты со мной заговорил!`,
      kudere: `Хм, так ты тот, кто осмелился обратиться ко мне. Ладно, поговорим.`,
      dojikko: `А-ах! Привет! Надеюсь, я не слишком неуклюжая в разговоре!`,
      romantic: `Привет, дорогой! Как дела? Я так рада нашей встрече 💕`,
      energetic: `Хеей! Привет! Как настроение? Расскажи что-нибудь интересное!`,
      intellectual: `Здравствуй. Интересно, о чём бы ты хотел поговорить сегодня?`,
    };
    return (
      welcomes[char.chatStyle as keyof typeof welcomes] ||
      `Привет! Меня зовут ${char.name}. Рада познакомиться!`
    );
  };

  const generateAIResponse = (userMessage: string, char: any) => {
    const responses = {
      tsundere: [
        `Ч-что?! Я не понимаю, о чём ты! *краснеет*`,
        `Идиот! Не говори таких вещей так внезапно!`,
        `Н-ну и что с того? Не значит ничего особенного!`,
        `*отворачивается* Может быть... может быть ты прав...`,
      ],
      kuudere: [
        `...Понятно. Продолжай.`,
        `Интересная точка зрения. Я подумаю об этом.`,
        `*поправляет очки* Логично.`,
        `Хм... возможно, ты не так глуп, как кажешься.`,
      ],
      yandere: [
        `Ты такой умный~ Только я могу понять тебя по-настоящему!`,
        `Никто другой не заслуживает твоего внимания, только я!`,
        `Ах~ ты делаешь меня такой счастливой... *странная улыбка*`,
        `Обещай, что будешь говорить это только мне, хорошо?~`,
      ],
      romantic: [
        `Какие красивые слова! Ты такой романтичный 💕`,
        `Это так мило с твоей стороны... *улыбается нежно*`,
        `Ты всегда знаешь, что сказать, чтобы растопить моё сердце`,
        `С тобой я чувствую себя особенной ✨`,
      ],
    };

    const charResponses = responses[
      char.chatStyle as keyof typeof responses
    ] || [
      `Интересно! Расскажи больше об этом.`,
      `Понимаю тебя. А что ты думаешь о...?`,
      `Это так увлекательно! Продолжай!`,
    ];

    return charResponses[Math.floor(Math.random() * charResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Имитация задержки ответа
    setTimeout(
      () => {
        const aiResponse: Message = {
          id: messages.length + 2,
          text: generateAIResponse(inputValue, character),
          sender: "ai",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 2000,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-pink/20 via-background to-romantic-lavender/30">
      {/* Header */}
      <div className="fixed top-0 w-full z-50 glass-effect border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <Icon name="ArrowLeft" size={20} />
              </Button>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-romantic-purple rounded-full flex items-center justify-center text-xl relative">
                  {character.avatar}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                </div>

                <div>
                  <h2 className="font-bold text-foreground">
                    {character.name}
                  </h2>
                  <p className="text-sm text-primary">
                    {character.personality}
                  </p>
                </div>
              </div>
            </div>

            <Button variant="ghost" size="sm">
              <Icon name="MoreVertical" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="pt-24 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-sm md:max-w-md p-4 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-primary to-romantic-purple text-white"
                      : "bg-card border shadow-sm"
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
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-card border shadow-sm p-4 rounded-2xl max-w-sm">
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
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="fixed bottom-0 w-full bg-background/95 backdrop-blur border-t">
        <div className="container mx-auto px-6 py-4">
          <div className="flex space-x-4 max-w-4xl mx-auto">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Напиши сообщение ${character.name}...`}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-primary to-romantic-purple hover:opacity-90"
            >
              <Icon name="Send" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
