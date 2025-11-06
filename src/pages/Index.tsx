import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const infrastructure = [
    {
      icon: "Users",
      title: "Конференц-залы",
      description: "Современные залы для мероприятий"
    },
    {
      icon: "Heart",
      title: "Центр Здоровья",
      description: "Профессиональный медицинский центр"
    },
    {
      icon: "Dumbbell",
      title: "Тренажерный зал",
      description: "Оснащен современным оборудованием"
    },
    {
      icon: "Music",
      title: "Сцена",
      description: "Для концертов и развлечений"
    },
    {
      icon: "Sparkles",
      title: "Интерактивное пространство",
      description: "Зона для творчества и отдыха"
    },
    {
      icon: "Bike",
      title: "Велопрокат",
      description: "Прогулки вдоль набережной"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/95c7bc2f-82c5-47ce-9ab7-7449c94d6010.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Екатерининский квартал
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Город-отель Бархатные сезоны
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-full text-lg mb-8 animate-float">
            <Icon name="Waves" size={24} />
            <span className="font-semibold">Первая береговая линия</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Инфраструктура квартала
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Всё необходимое для комфортного отдыха
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-accent/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ресепшен и столовая
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Адрес ресепшен</h3>
                  <p className="text-muted-foreground text-lg">
                    б-р Надежд, 42 (3 корпус)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="UtensilsCrossed" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Столовая «Времена года»</h3>
                  <p className="text-muted-foreground text-lg">
                    Шведская линия с разнообразным меню
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/e8d84047-0b2f-4584-973c-34855f95fa8b.jpg"
                alt="Конференц-зал"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/80b1b763-ff6b-4d11-afe3-9f1186e4153c.jpg"
                alt="Столовая"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Найдите нас на карте
          </h2>
          
          <Card className="p-8 shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Icon name="Star" size={24} className="text-yellow-500 fill-yellow-500" />
              <span className="text-3xl font-bold text-foreground">4.8</span>
              <span className="text-muted-foreground text-lg">на Яндекс Картах</span>
            </div>

            <Button 
              size="lg"
              className="w-full md:w-auto text-lg px-8 py-6"
              onClick={() => window.open('https://yandex.ru/maps/-/CLv7VM86', '_blank')}
            >
              <Icon name="MapPin" size={24} className="mr-2" />
              Открыть на Яндекс Картах
            </Button>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Екатерининский квартал</h3>
          <p className="text-white/80 mb-4">Город-отель Бархатные сезоны</p>
          <p className="text-white/60">б-р Надежд, 42 (3 корпус)</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
