import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen romantic-gradient flex items-center justify-center relative overflow-hidden">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-romantic-purple opacity-20 animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${20 + (i % 3) * 10}px`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-foreground mb-6 leading-tight">
            Найди свою
            <span className="bg-gradient-to-r from-primary to-romantic-purple bg-clip-text text-transparent block">
              идеальную спутницу
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Персонализированные AI-подружки с уникальными личностями, готовые
            поддержать разговор и подарить тепло 💖
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-romantic-purple hover:opacity-90 transition-all transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Начать общение
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Посмотреть профили
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-romantic-purple rounded-full flex items-center justify-center mb-3">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-foreground">
                Уникальные личности
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-romantic-purple to-romantic-pink rounded-full flex items-center justify-center mb-3">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-foreground">
                24/7 доступность
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-romantic-pink to-romantic-cream rounded-full flex items-center justify-center mb-3">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-foreground">
                Приватность
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
