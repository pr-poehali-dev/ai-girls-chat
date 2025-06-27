import ProfileCard from "./ProfileCard";

const ProfilesSection = () => {
  const profiles = [
    {
      name: "София",
      personality: "Романтичная мечтательница",
      description:
        "Люблю поэзию, закаты и глубокие разговоры о смысле жизни. Всегда готова поддержать и выслушать твои мысли.",
      avatar: "🌸",
      interests: ["Поэзия", "Музыка", "Философия", "Искусство"],
      isOnline: true,
    },
    {
      name: "Анна",
      personality: "Энергичная оптимистка",
      description:
        "Обожаю приключения, новые места и позитивное общение. Готова поднять настроение в любой ситуации!",
      avatar: "⭐",
      interests: ["Путешествия", "Спорт", "Фотография", "Танцы"],
      isOnline: true,
    },
    {
      name: "Мария",
      personality: "Интеллектуалка",
      description:
        "Увлекаюсь наукой, технологиями и саморазвитием. Люблю обсуждать интересные книги и новые идеи.",
      avatar: "📚",
      interests: ["Наука", "Книги", "Технологии", "Психология"],
      isOnline: false,
    },
    {
      name: "Елена",
      personality: "Творческая натура",
      description:
        "Рисую, создаю музыку и пишу истории. Вдохновляюсь красотой мира и готова делиться творчеством с тобой.",
      avatar: "🎨",
      interests: ["Рисование", "Музыка", "Творчество", "Дизайн"],
      isOnline: true,
    },
    {
      name: "Алиса",
      personality: "Загадочная",
      description:
        "Интересуюсь мистикой, астрологией и тайнами вселенной. Каждый разговор со мной - это маленькое приключение.",
      avatar: "🌙",
      interests: ["Астрология", "Мистика", "Медитация", "Эзотерика"],
      isOnline: true,
    },
    {
      name: "Виктория",
      personality: "Элегантная леди",
      description:
        "Ценю изысканность, хорошие манеры и качественное общение. Люблю говорить о моде, культуре и красоте.",
      avatar: "👑",
      interests: ["Мода", "Культура", "Искусство", "Этикет"],
      isOnline: true,
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
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
