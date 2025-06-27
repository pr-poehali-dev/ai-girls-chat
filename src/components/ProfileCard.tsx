import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ProfileCardProps {
  name: string;
  personality: string;
  description: string;
  avatar: string;
  interests: string[];
  isOnline?: boolean;
  onStartChat: () => void;
}

const ProfileCard = ({
  name,
  personality,
  description,
  avatar,
  interests,
  isOnline = true,
  onStartChat,
}: ProfileCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-card to-romantic-pink/20 border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="relative mb-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-romantic-purple flex items-center justify-center text-4xl mb-3 relative">
            {avatar}
            {isOnline && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </div>

          <div className="text-center">
            <h3 className="font-montserrat font-bold text-xl text-foreground mb-1">
              {name}
            </h3>
            <p className="text-primary font-semibold text-sm mb-2">
              {personality}
            </p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm text-center mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {interests.slice(0, 3).map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-romantic-lavender text-primary text-xs rounded-full font-medium"
            >
              {interest}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            onClick={onStartChat}
            className="flex-1 bg-gradient-to-r from-primary to-romantic-purple hover:opacity-90 transition-all"
            size="sm"
            disabled={!isOnline}
          >
            <Icon name="MessageCircle" size={16} className="mr-1" />
            {isOnline ? "Начать чат" : "Оффлайн"}
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Icon name="Heart" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
