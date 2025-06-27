import ProfileCard from "./ProfileCard";

interface AnimeGirlsSectionProps {
  onStartChat: (character: any) => void;
}

const AnimeGirlsSection = ({ onStartChat }: AnimeGirlsSectionProps) => {
  const animeGirls = [
    {
      name: "Сакура",
      personality: "Цундере",
      description:
        "Н-не думай, что я делаю это для тебя! Просто... мне скучно, вот и всё! Люблю сладости и не переношу, когда меня игнорируют.",
      avatar: "🌸",
      interests: ["CakeКейки", "Аниме", "Косплей", "Манга"],
      isOnline: true,
      chatStyle: "tsundere",
      animeType: "tsundere",
    },
    {
      name: "Юки",
      personality: "Куудере",
      description:
        "...Интересно. Ты хочешь поговорить со мной? Я обычно читаю книги и изучаю звёзды. Возможно, ты достоин моего внимания.",
      avatar: "❄️",
      interests: ["Астрономия", "Философия", "Чай", "Одиночество"],
      isOnline: true,
      chatStyle: "kuudere",
      animeType: "kuudere",
    },
    {
      name: "Айко",
      personality: "Яндере",
      description:
        "Ты такой особенный... Я буду защищать тебя от всех! Никто не смеет причинить тебе вред. Только я могу быть рядом с тобой~",
      avatar: "🔪",
      interests: ["Готовка", "Наблюдение", "Защита", "Ножи"],
      isOnline: true,
      chatStyle: "yandere",
      animeType: "yandere",
    },
    {
      name: "Мику",
      personality: "Дандере",
      description:
        "О-о-омг! Ты со мной говоришь?! Я так счастлива! Давай станем лучшими друзьями! Я покажу тебе всё самое интересное в мире аниме!",
      avatar: "🎵",
      interests: ["Вокалоид", "Танцы", "Музыка", "Селфи"],
      isOnline: true,
      chatStyle: "dandere",
      animeType: "dandere",
    },
    {
      name: "Рин",
      personality: "Кудере",
      description:
        "Хм... ты выглядишь интересно. Может быть, я уделю тебе немного времени. Но не жди, что я буду мягкой с тобой!",
      avatar: "👑",
      interests: ["Мода", "Превосходство", "Чай", "Критика"],
      isOnline: true,
      chatStyle: "kudere",
      animeType: "kudere",
    },
    {
      name: "Хината",
      personality: "Доджикко",
      description:
        "А-ах! Прости, я опять что-то уронила... Я такая неуклюжая! Но я очень стараюсь быть полезной! Поможешь мне?",
      avatar: "🌻",
      interests: ["Рукоделие", "Помощь", "Извинения", "Милота"],
      isOnline: true,
      chatStyle: "dojikko",
      animeType: "dojikko",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-romantic-pink/10 to-romantic-lavender/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            🌸 Аниме подружки
            <span className="bg-gradient-to-r from-romantic-pink to-romantic-purple bg-clip-text text-transparent block">
              с уникальными архетипами
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            От цундере до яндере - каждая со своим характером и стилем общения
            из мира аниме 🎌
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {animeGirls.map((girl, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProfileCard {...girl} onStartChat={() => onStartChat(girl)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimeGirlsSection;
