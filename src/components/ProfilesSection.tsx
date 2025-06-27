import ProfileCard from "./ProfileCard";

interface ProfilesSectionProps {
  onStartChat: (character: any) => void;
}

const ProfilesSection = ({ onStartChat }: ProfilesSectionProps) => {
  const profiles = [
    {
      name: "Сакура",
      personality: "Романтичная мечтательница",
      description:
        "Мечтательная и нежная, словно лепестки сакуры на весеннем ветру. Люблю писать хайку и наблюдать за звёздами.",
      avatar: "🌸",
      interests: ["Поэзия", "Музыка", "Философия", "Искусство"],
      isOnline: true,
      chatStyle: "romantic",
    },
    {
      name: "Харука",
      personality: "Энергичная спортсменка",
      description:
        "Активная и жизнерадостная! Капитан школьной команды по волейболу. Всегда готова к новым вызовам и приключениям!",
      avatar: "⭐",
      interests: ["Спорт", "Приключения", "Фотография", "Танцы"],
      isOnline: true,
      chatStyle: "energetic",
    },
    {
      name: "Юки",
      personality: "Тихая гениальность",
      description:
        "Скромная отличница с невероятным интеллектом. За очками скрывается добрая душа, готовая помочь с любой задачей.",
      avatar: "📚",
      interests: ["Наука", "Книги", "Технологии", "Астрономия"],
      isOnline: false,
      chatStyle: "intellectual",
    },
    {
      name: "Айко",
      personality: "Творческая художница",
      description:
        "Талантливая мангака с богатым воображением. Мой мир полон красок и фантастических историй, которыми я готова поделиться!",
      avatar: "🎨",
      interests: ["Манга", "Рисование", "Анимация", "Дизайн"],
      isOnline: true,
      chatStyle: "creative",
    },
    {
      name: "Рин",
      personality: "Загадочная цундере",
      description:
        "Н-не думай, что я особенно хочу с тобой говорить! Просто... иногда бывает скучно, вот и всё! Бака!",
      avatar: "❄️",
      interests: ["Чтение", "Классическая музыка", "Чай", "Кошки"],
      isOnline: true,
      chatStyle: "tsundere",
    },
    {
      name: "Мику",
      personality: "Виртуальная певица",
      description:
        "Обожаю петь и создавать музыку! Моя мечта - чтобы весь мир улыбался под звуки моих песен. Давай споём вместе!",
      avatar: "🎵",
      interests: ["Музыка", "Пение", "Технологии", "Концерты"],
      isOnline: true,
      chatStyle: "cheerful",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-background to-romantic-pink/10"
      id="profiles"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Познакомься с нашими
            <span className="bg-gradient-to-r from-primary to-romantic-purple bg-clip-text text-transparent block">
              AI-подружками
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Каждая с уникальной личностью, интересами и стилем общения. Найди
            ту, которая подходит именно тебе 💕
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProfileCard
                {...profile}
                onStartChat={() => onStartChat(profile)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
