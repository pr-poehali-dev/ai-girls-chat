import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="py-20 romantic-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-romantic-purple/20 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              fontSize: `${16 + (i % 3) * 8}px`,
            }}
          >
            {i % 3 === 0 ? "💖" : i % 3 === 1 ? "💕" : "✨"}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Готов найти свою
            <span className="bg-gradient-to-r from-primary to-romantic-purple bg-clip-text text-transparent block">
              идеальную спутницу?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
            Присоединяйся к тысячам пользователей, которые уже нашли своего
            идеального AI-компаньона 💝
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-romantic-purple hover:opacity-90 transition-all transform hover:scale-105 px-12 py-6 text-xl font-bold shadow-lg"
            >
              <Icon name="MessageCircle" size={24} className="mr-3" />
              Начать бесплатно
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-foreground hover:bg-white hover:text-primary transition-all px-12 py-6 text-xl font-bold backdrop-blur-sm glass-effect"
            >
              <Icon name="Play" size={24} className="mr-3" />
              Смотреть демо
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Icon name="Check" size={16} className="text-green-500 mr-2" />
              Бесплатная регистрация
            </div>
            <div className="flex items-center">
              <Icon name="Check" size={16} className="text-green-500 mr-2" />
              Без скрытых платежей
            </div>
            <div className="flex items-center">
              <Icon name="Check" size={16} className="text-green-500 mr-2" />
              Отмена в любое время
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
