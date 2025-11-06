import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const infrastructure = [
    {
      image: "https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/66ff5a16-c4c2-4217-b404-759be828aa88.jpg",
      title: "Конференц-залы",
      description: "Современные залы для мероприятий"
    },
    {
      image: "https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/498f6ae5-53d9-4fea-ae51-61bb697447ef.jpg",
      title: "Центр Здоровья",
      description: "Профессиональный медицинский центр"
    },
    {
      image: "https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/7fb2946d-a46f-488f-9e84-c1e6f364c931.jpg",
      title: "Тренажерный зал",
      description: "Оснащен современным оборудованием"
    },
    {
      image: "https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/9ce22bb5-d312-4cb8-a787-6f484eebe17c.jpg",
      title: "Сцена",
      description: "Для концертов и развлечений"
    },
    {
      image: "https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/313fe98d-7c11-40cb-82f5-b27a6a127da5.jpg",
      title: "Интерактивное пространство",
      description: "Зона для творчества и отдыха"
    },
    {
      image: "https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/3b463864-c61a-41c2-9739-9d80be3ec3b9.jpg",
      title: "Велопрокат",
      description: "Прогулки вдоль набережной"
    }
  ];

  const rooms = [
    {
      image: "https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/b71252b6-6dbb-4432-8447-4900da6f13a1.jpg",
      title: "Стандарт",
      description: "Уютный номер с видом на море",
      features: ["2 гостя", "Вид на море", "Wi-Fi"]
    },
    {
      image: "https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/fc0aa417-70ac-42f3-85f8-a4dc55dee55a.jpg",
      title: "Люкс",
      description: "Просторный номер с балконом",
      features: ["3 гостя", "Балкон", "Кондиционер"]
    },
    {
      image: "https://cdn.poehali.dev/projects/f17a6b49-c218-4622-be31-eda4e88c2b91/files/417be22e-cd82-41c6-ac52-295035962c54.jpg",
      title: "Семейный",
      description: "Идеален для отдыха с детьми",
      features: ["4 гостя", "Детская зона", "Мини-бар"]
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
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6 text-center">
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

      <section className="py-20 px-4 bg-gradient-to-b from-accent/20 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Номера
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Комфорт для каждого гостя
          </p>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {rooms.map((room, index) => (
                <Card 
                  key={index}
                  className="flex-shrink-0 w-80 snap-center hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">
                      {room.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {room.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground">
            Найдите нас на карте
          </h2>
          
          <Card className="p-4 shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Star" size={24} className="text-yellow-500 fill-yellow-500" />
              <span className="text-3xl font-bold text-foreground">4.8</span>
              <span className="text-muted-foreground text-lg">на Яндекс Картах</span>
            </div>

            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.726261%2C43.585472&mode=search&oid=1076394713&ol=biz&z=16"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
              />
            </div>
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