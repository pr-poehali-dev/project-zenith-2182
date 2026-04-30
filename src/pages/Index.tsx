import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="text-primary">TO</span>
              <span className="text-accent">NE</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
                О зале
              </a>
              <a href="#programs" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
                Программы
              </a>
              <a href="#trainers" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
                Тренеры
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
                Контакты
              </a>
            </div>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              Первая тренировка бесплатно
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[85vh]">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit bg-primary/20 text-primary border-primary/30 font-bold">
                    <Icon name="Zap" className="w-3 h-3 mr-1" />
                    Фитнес-зал в твоём городе
                  </Badge>
                  <h1 className="text-7xl lg:text-9xl font-bold tracking-tight text-balance" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    Прокачай
                    <span className="text-primary block">своё тело.</span>
                    <span className="text-accent">Tone.</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty font-medium">
                    Современный фитнес-зал с профессиональным оборудованием, опытными тренерами и заряжающей атмосферой. Результаты — с первых недель.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                    Записаться на тренировку
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent border-accent text-accent hover:bg-accent/10 font-bold">
                    Посмотреть программы
                  </Button>
                </div>
                <div className="flex gap-10 pt-4">
                  <div>
                    <div className="text-4xl font-bold text-primary" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>500+</div>
                    <div className="text-muted-foreground text-sm font-semibold">Участников</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>15+</div>
                    <div className="text-muted-foreground text-sm font-semibold">Тренеров</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>30+</div>
                    <div className="text-muted-foreground text-sm font-semibold">Программ</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square overflow-hidden rounded-xl border-border">
                <img
                  src="https://cdn.poehali.dev/templates/lp/acoustic-guitar-player-in-plant-filled-cafe.jpg"
                  alt="Тренировка в зале"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square overflow-hidden rounded-xl border-primary/30">
                <img
                  src="https://cdn.poehali.dev/templates/lp/lush-green-plants-and-hanging-gardens-in-cafe.jpg"
                  alt="Силовые тренировки"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square overflow-hidden rounded-xl border-accent/30">
                <img
                  src="https://cdn.poehali.dev/templates/lp/artisan-coffee-and-pastries-on-wooden-table.jpg"
                  alt="Групповые занятия"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square overflow-hidden rounded-xl border-border">
                <img
                  src="https://cdn.poehali.dev/templates/lp/intimate-music-venue-with-plants-and-warm-lighting.jpg"
                  alt="Оборудование зала"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">ПОЧЕМУ ВЫБИРАЮТ TONE</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance font-medium">
              Мы создали пространство, где каждый достигает своего результата
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Dumbbell" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Тренируйся</h3>
              <p className="text-muted-foreground font-medium">
                Современные тренажёры, свободные веса и функциональные зоны. Всё для эффективной и безопасной тренировки.
              </p>
            </Card>

            <Card className="p-8 text-center border-accent/20 hover:border-accent/50 transition-colors">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Прогрессируй</h3>
              <p className="text-muted-foreground font-medium">
                Индивидуальный план, отслеживание результатов и поддержка тренера на каждом этапе твоего пути.
              </p>
            </Card>

            <Card className="p-8 text-center border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Будь в команде</h3>
              <p className="text-muted-foreground font-medium">
                Сильное сообщество единомышленников, групповые тренировки и мотивация, которая не даёт останавливаться.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Программы тренировок */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-5xl font-bold">ПРОГРАММЫ ТРЕНИРОВОК</h2>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold">
              Все программы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform border-border hover:border-primary/40">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/indie-folk-singer-with-acoustic-guitar-in-intimate.jpg"
                  alt="Силовые тренировки"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-bold">Хит</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Силовые тренировки</h3>
                <p className="text-muted-foreground mb-4 font-medium">Рост мышц и сила — с нуля до результата</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4 text-primary" />
                    <span className="font-semibold">60 мин</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" className="w-4 h-4 text-primary" />
                    <span className="font-semibold">До 12 чел</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform border-border hover:border-accent/40">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/jazz-trio-performing-in-plant-filled-venue.jpg"
                  alt="Кардио и выносливость"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold">
                  Популярно
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Кардио и выносливость</h3>
                <p className="text-muted-foreground mb-4 font-medium">Сжигание жира и здоровье сердца</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4 text-accent" />
                    <span className="font-semibold">45 мин</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" className="w-4 h-4 text-accent" />
                    <span className="font-semibold">До 20 чел</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform border-border hover:border-primary/40">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/electronic-ambient-musician-with-synthesizers-and-.jpg"
                  alt="Растяжка и йога"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-foreground font-bold">
                  Новинка
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Функциональный тренинг</h3>
                <p className="text-muted-foreground mb-4 font-medium">Баланс, гибкость и тонус всего тела</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4 text-primary" />
                    <span className="font-semibold">50 мин</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" className="w-4 h-4 text-primary" />
                    <span className="font-semibold">До 15 чел</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* О зале */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-balance">Твоя форма — наша миссия</h2>
              <div className="space-y-6 text-lg text-muted-foreground font-medium">
                <p>
                  Tone — это не просто тренажёрный зал. Это место, где профессиональные тренеры, современное оборудование и правильная атмосфера объединяются ради одного: твоего результата.
                </p>
                <p>
                  Мы верим, что каждый способен достичь своей цели — будь то похудение, набор мышечной массы или просто активная и здоровая жизнь.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>500+</div>
                  <div className="text-muted-foreground text-sm font-semibold mt-1">Участников</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="text-3xl font-bold text-accent" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>5 лет</div>
                  <div className="text-muted-foreground text-sm font-semibold mt-1">На рынке</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>98%</div>
                  <div className="text-muted-foreground text-sm font-semibold mt-1">Довольных</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden border-primary/20">
                <img
                  src="https://cdn.poehali.dev/templates/lp/lush-indoor-garden-cafe-with-hanging-plants-and-na.jpg"
                  alt="Зал Tone"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/80 backdrop-blur rounded-xl p-4 border border-primary/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Star" className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-bold">Рейтинг 4.9 / 5.0</div>
                        <div className="text-sm text-muted-foreground">По отзывам участников</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 font-bold text-sm px-4 py-1">
            Только сейчас
          </Badge>
          <h2 className="text-6xl font-bold mb-6 text-balance">Первая тренировка — бесплатно!</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance font-medium">
            Приходи и убедись сам. Без обязательств, без давления — просто отличная тренировка и знакомство с командой Tone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              Записаться бесплатно
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 bg-transparent border-primary text-primary hover:bg-primary/10 font-bold">
              <Icon name="MapPin" className="w-4 h-4 mr-2" />
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer id="contact" className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl tracking-widest mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="text-primary">TO</span>
                <span className="text-accent">NE</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md font-medium">
                Современный фитнес-зал для тех, кто хочет реального результата. Тренируйся с удовольствием, живи активнее.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 font-bold">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 font-bold">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10 font-bold">
                  Instagram
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Адрес</h4>
              <div className="space-y-2 text-muted-foreground font-medium">
                <p>ул. Спортивная, 10</p>
                <p>Фитнес-квартал</p>
                <p>Пн–Пт 7:00 – 23:00</p>
                <p>Сб–Вс 9:00 – 21:00</p>
                <p>+7 (495) 000-00-00</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Направления</h4>
              <div className="space-y-2 text-muted-foreground font-medium">
                <p>Силовые тренировки</p>
                <p>Кардио и HIIT</p>
                <p>Функциональный тренинг</p>
                <p>Растяжка и йога</p>
                <p>Персональный тренинг</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground font-medium">
            <p>&copy; 2026 Tone Fitness. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
