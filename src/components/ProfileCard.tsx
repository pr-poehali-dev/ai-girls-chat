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
  rating?: number;
  chats?: string;
  onStartChat: () => void;
}

const ProfileCard = ({
  name,
  personality,
  description,
  avatar,
  interests,
  isOnline = true,
  rating = 4.8,
  chats = "10k",
  onStartChat,
}: ProfileCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-card border-border/50 overflow-hidden">
      <CardContent className="p-0">
        {/* Avatar Section */}
        <div className="relative p-6 pb-4">
          <div className="relative">
            <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center text-2xl mb-3 relative">
              {avatar}
              {isOnline && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-online-green rounded-full border-2 border-card flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>

            <div className="text-center">
              <h3 className="font-poppins font-semibold text-lg text-foreground mb-1">
                {name}
              </h3>
              <p className="text-primary font-medium text-sm">{personality}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-4 mt-3">
            <div className="flex items-center space-x-1">
              <Icon
                name="Star"
                size={12}
                className="text-yellow-500 fill-current"
              />
              <span className="text-xs text-muted-foreground">{rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon
                name="MessageCircle"
                size={12}
                className="text-muted-foreground"
              />
              <span className="text-xs text-muted-foreground">{chats}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 pb-4">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Interests */}
          <div className="flex flex-wrap gap-1 mb-4">
            {interests.slice(0, 3).map((interest, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
              >
                {interest}
              </span>
            ))}
            {interests.length > 3 && (
              <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
                +{interests.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6">
          <div className="flex gap-2">
            <Button
              onClick={onStartChat}
              className="flex-1 gradient-primary hover:opacity-90 transition-all font-medium"
              size="sm"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Chat Now
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-border hover:border-primary"
            >
              <Icon name="Heart" size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
