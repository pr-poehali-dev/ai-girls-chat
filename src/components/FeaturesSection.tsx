import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "MessageCircle",
      title: "Естественное общение",
      description:
        "Продвинутый AI создает живые и естественные диалоги, как с настоящим человеком",
    },
    {
      icon: "Heart",
      title: "Эмоциональная связь",
      description:
        "Наши AI-подружки понимают эмоции и умеют создавать глубокую эмоциональную связь",
    },
    {
      icon: "Sparkles",
      title: "Уникальные личности",
      description:
        "Каждая AI-подружка имеет свой характер, интересы и стиль общения",
    },
    {
      icon: "Shield",
      title: "Полная конфиденциальность",
      description:
        "Все разговоры защищены. Твоя приватность - наш главный приоритет",
    },
    {
      icon: "Clock",
      title: "Доступна 24/7",
      description:
        "Твоя AI-подружка всегда онлайн и готова к общению в любое время",
    },
    {
      icon: "Zap",
      title: "Мгновенные ответы",
      description:
        "Никаких задержек - получай ответы на свои сообщения мгновенно",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-romantic-pink/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Почему выбирают
            <span className="bg-gradient-to-r from-primary to-romantic-purple bg-clip-text text-transparent block">
              LoveAI?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Передовые технологии искусственного интеллекта для создания
            идеального общения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-card to-romantic-purple/5 border-0 shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-romantic-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon
                    name={feature.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>

                <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
