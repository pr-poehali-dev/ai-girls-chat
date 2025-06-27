import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Icon name="Rocket" className="h-8 w-8 text-indigo-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Поехали!</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-500 hover:text-gray-900">
                Возможности
              </a>
              <a href="#about" className="text-gray-500 hover:text-gray-900">
                О нас
              </a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Создавайте сайты
            <span className="text-indigo-600"> через русский язык</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Быстрее конструкторов и кодинга в 30 раз. Без знания
            программирования.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Начать создание
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Icon name="BookOpen" className="mr-2 h-5 w-5" />
              Документация
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Возможности сервиса
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Code" className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Создание сайтов</CardTitle>
                <CardDescription>
                  Позволяет создавать UX / UI, компоненты и страницы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Bug" className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Исправление ошибок</CardTitle>
                <CardDescription>
                  Юра анализирует код и чинит баги автоматически
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Github" className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Интеграция с GitHub</CardTitle>
                <CardDescription>
                  Синхронизация проекта с вашим репозиторием
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Globe" className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Публикация в интернет</CardTitle>
                <CardDescription>
                  Ваш проект становится доступным по URL-ссылке
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Edit" className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Редактор</CardTitle>
                <CardDescription>
                  Позволяет редактировать веб-элементы вручную
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Zap" className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Быстрая разработка</CardTitle>
                <CardDescription>
                  Создание сайтов в 30 раз быстрее традиционного кодинга
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Rocket" className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">Поехали!</span>
            </div>
            <p className="text-gray-400">
              Сервис для разработки сайтов через русский язык
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
