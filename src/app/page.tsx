import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Calendar,
  DollarSign,
  Shield,
  Smartphone,
  Zap,
  Trophy,
  Users,
  MessageSquare,
  Wallet,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Target,
  Rocket
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 text-lg px-4 py-2">
              💰 Бюджет: 200,000 ₽
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              P2P Sports Betting
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-700 dark:text-zinc-300">
              Telegram Mini App
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
              Детальный план разработки платформы для P2P споров на спортивных событиях с интеграцией криптооплатежей TON и STARS
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8 py-3">
                <Target className="mr-2 h-5 w-5" />
                Обзор проекта
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                4 месяца разработки
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Распределение бюджета</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Поэтапное планирование с детализацией расходов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { phase: "Sprint 1", amount: "45,000", percentage: 22.5, weeks: "4 недели", icon: Zap },
            { phase: "Sprint 2", amount: "55,000", percentage: 27.5, weeks: "5 недель", icon: Trophy },
            { phase: "Sprint 3", amount: "35,000", percentage: 17.5, weeks: "3 недели", icon: MessageSquare },
            { phase: "Sprint 4", amount: "50,000", percentage: 25, weeks: "4 недели", icon: Wallet },
            { phase: "Запуск", amount: "15,000", percentage: 7.5, weeks: "2 недели", icon: Rocket }
          ].map((item) => (
            <Card key={item.phase} className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <item.icon className="h-8 w-8 text-blue-600" />
                  <Badge variant="secondary">{item.weeks}</Badge>
                </div>
                <CardTitle className="text-xl">{item.phase}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {item.amount} ₽
                </div>
                <Progress value={item.percentage} className="mb-2" />
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.percentage}% от общего бюджета
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detailed Plan */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="sprint1" className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Детальный план разработки</h2>
          </div>

          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="sprint1">Sprint 1</TabsTrigger>
            <TabsTrigger value="sprint2">Sprint 2</TabsTrigger>
            <TabsTrigger value="sprint3">Sprint 3</TabsTrigger>
            <TabsTrigger value="sprint4">Sprint 4</TabsTrigger>
            <TabsTrigger value="launch">Запуск</TabsTrigger>
          </TabsList>

          <TabsContent value="sprint1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Zap className="mr-3 h-6 w-6" />
                  Sprint 1: Основа и парсинг событий
                </CardTitle>
                <CardDescription>45,000 ₽ • 4 недели разработки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Shield className="mr-2 h-5 w-5" />
                      Backend разработка (20,000 ₽)
                    </h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Настройка Node.js + Express.js сервера</li>
                      <li>• PostgreSQL база данных (схема пользователей, событий)</li>
                      <li>• Telegram авторизация через Mini Apps SDK</li>
                      <li>• API для парсинга спортивных событий</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Smartphone className="mr-2 h-5 w-5" />
                      Frontend разработка (18,000 ₽)
                    </h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• React приложение с TMA SDK</li>
                      <li>• Главная страница со списком событий</li>
                      <li>• Регистрация/авторизация через Telegram</li>
                      <li>• Адаптивная верстка под мобильные устройства</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Интеграции (5,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• API-FOOTBALL подключение и тестирование</li>
                      <li>• WebSocket для real-time обновлений</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">DevOps (2,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Настройка AWS/VPS хостинга</li>
                      <li>• CI/CD pipeline</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sprint2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Trophy className="mr-3 h-6 w-6" />
                  Sprint 2: Система споров
                </CardTitle>
                <CardDescription>55,000 ₽ • 5 недель разработки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Backend разработка (25,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• API создания и участия в спорах</li>
                      <li>• Логика валидации ставок и ограничений времени</li>
                      <li>• Автоматический расчет результатов через API-FOOTBALL</li>
                      <li>• Система уведомлений через Telegram Bot</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Frontend разработка (20,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Форма создания спора с валидацией</li>
                      <li>• Страница открытых споров с фильтрами</li>
                      <li>• Детальная информация о событиях</li>
                      <li>• UX для подтверждения действий</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Тестирование (7,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Unit тесты (Jest)</li>
                      <li>• Интеграционные тесты API</li>
                      <li>• Тестирование пользовательских сценариев</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Безопасность (3,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Валидация входных данных</li>
                      <li>• Rate limiting для API</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sprint3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="mr-3 h-6 w-6" />
                  Sprint 3: Чат и история споров
                </CardTitle>
                <CardDescription>35,000 ₽ • 3 недели разработки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Backend разработка (15,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• WebSocket чат сервер</li>
                      <li>• Модерация сообщений (фильтр мата)</li>
                      <li>• API истории споров и статистики</li>
                      <li>• Система жалоб модераторам</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Frontend разработка (15,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Real-time чат интерфейс</li>
                      <li>• Страница "Мои споры" с фильтрами</li>
                      <li>• Статистика пользователя</li>
                      <li>• Функция "Повторить спор"</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Модерация (3,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Настройка автоматической модерации</li>
                      <li>• Интеграция с Telegram для жалоб</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">UX улучшения (2,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Анимации переходов</li>
                      <li>• Оптимизация производительности</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sprint4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Wallet className="mr-3 h-6 w-6" />
                  Sprint 4: Финансовая система
                </CardTitle>
                <CardDescription>50,000 ₽ • 4 недели разработки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Blockchain интеграция (25,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• TON Connect 2.0 интеграция</li>
                      <li>• Smart контракты для эскроу</li>
                      <li>• Обработка TON и STARS платежей</li>
                      <li>• Аудит безопасности смарт-контрактов</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Backend финансы (15,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• API управления балансом</li>
                      <li>• Комиссионная система (10%)</li>
                      <li>• Логи всех транзакций</li>
                      <li>• Защита от двойных трат</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Frontend кошелек (8,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Интерфейс баланса и транзакций</li>
                      <li>• Пополнение/вывод средств</li>
                      <li>• История операций</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Безопасность (2,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Шифрование данных (AES-256)</li>
                      <li>• Аудит финансовых операций</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="launch">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Rocket className="mr-3 h-6 w-6" />
                  Финальный этап: Запуск и поддержка
                </CardTitle>
                <CardDescription>15,000 ₽ • 2 недели</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Финальное тестирование (8,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Load testing</li>
                      <li>• Security penetration testing</li>
                      <li>• User acceptance testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Документация (3,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Swagger API документация</li>
                      <li>• Пользовательские инструкции (GIF)</li>
                      <li>• Техническая документация</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Деплой (4,000 ₽)</h4>
                    <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                      <li>• Production настройка</li>
                      <li>• Мониторинг и логирование</li>
                      <li>• Первичная поддержка</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tech Stack */}
      <div className="bg-zinc-100 dark:bg-zinc-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Технический стек</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Современные технологии для надежного и масштабируемого решения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• React 18+ с TypeScript</li>
                  <li>• @telegram-apps/sdk</li>
                  <li>• @tonconnect/ui-react</li>
                  <li>• Redux Toolkit / Zustand</li>
                  <li>• Socket.io-client</li>
                  <li>• Vite</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Node.js 18+ с Express.js</li>
                  <li>• PostgreSQL 14+</li>
                  <li>• Prisma / TypeORM</li>
                  <li>• Socket.io</li>
                  <li>• Bull/BullMQ</li>
                  <li>• Redis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="mr-2 h-5 w-5" />
                  Blockchain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• TON Blockchain</li>
                  <li>• @ton/ton, @ton/crypto</li>
                  <li>• TON Connect 2.0</li>
                  <li>• Smart contracts (FunC)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• AWS (EC2, RDS, ElastiCache)</li>
                  <li>• CloudFront CDN</li>
                  <li>• PM2, CloudWatch</li>
                  <li>• GitHub Actions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Security & ROI */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Security */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Shield className="mr-3 h-8 w-8" />
              Безопасность
            </h2>
            <div className="space-y-4">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Финансовая безопасность:</strong> Все транзакции подписываются приватным ключом пользователя, эскроу система
                </AlertDescription>
              </Alert>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Защита данных:</strong> AES-256 шифрование, HTTPS/WSS, валидация входных данных
                </AlertDescription>
              </Alert>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>GDPR соответствие:</strong> Хранение данных EU в EU (AWS Frankfurt), право на удаление
                </AlertDescription>
              </Alert>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Ответственная игра:</strong> Лимиты ставок, самоисключение, проверка возраста 18+
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* ROI */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <TrendingUp className="mr-3 h-8 w-8" />
              Окупаемость
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Средний чек:</span>
                    <Badge variant="secondary">10 TON (~$20)</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Комиссия:</span>
                    <Badge variant="secondary">10% ($2 за транзакцию)</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Необходимо транзакций:</span>
                    <Badge>10,000 для окупаемости</Badge>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">6-8 месяцев</div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Прогноз окупаемости при активном маркетинге
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Команда разработки:</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Fullstack разработчик</span>
                  <span className="font-semibold">80,000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Blockchain разработчик</span>
                  <span className="font-semibold">60,000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>DevOps инженер</span>
                  <span className="font-semibold">30,000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>UI/UX дизайнер</span>
                  <span className="font-semibold">20,000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Прочие расходы</span>
                  <span className="font-semibold">10,000 ₽</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого:</span>
                  <span className="text-green-600">200,000 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ключевые функции</h2>
            <p className="text-xl opacity-90">
              Полнофункциональная платформа для P2P споров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Telegram авторизация",
                description: "Быстрая регистрация через Mini Apps SDK"
              },
              {
                icon: Trophy,
                title: "Парсинг событий",
                description: "Real-time данные через API-FOOTBALL"
              },
              {
                icon: DollarSign,
                title: "P2P споры",
                description: "Создание и участие с автоматическим расчетом"
              },
              {
                icon: MessageSquare,
                title: "Модерируемый чат",
                description: "Общение с фильтрацией и системой жалоб"
              },
              {
                icon: Wallet,
                title: "TON/STARS платежи",
                description: "Интеграция с TON Connect 2.0"
              },
              {
                icon: Shield,
                title: "Безопасность",
                description: "Смарт-контракты и шифрование данных"
              },
              {
                icon: TrendingUp,
                title: "Статистика",
                description: "История споров и процент побед"
              },
              {
                icon: Clock,
                title: "Ответственная игра",
                description: "Лимиты ставок и самоисключение"
              }
            ].map((feature) => (
              <Card key={feature.title} className="bg-white/10 border-white/20 text-white">
                <CardContent className="pt-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Временная шкала</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            18 недель от старта до полного запуска
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                week: "Недели 1-4",
                phase: "Sprint 1",
                title: "Основа и парсинг событий",
                budget: "45,000 ₽",
                deliverables: ["Регистрация через Telegram", "Парсинг футбольных событий", "Основная архитектура"]
              },
              {
                week: "Недели 5-9",
                phase: "Sprint 2",
                title: "Система споров",
                budget: "55,000 ₽",
                deliverables: ["Создание споров", "Участие в спорах", "Автоматический расчет", "Уведомления"]
              },
              {
                week: "Недели 10-12",
                phase: "Sprint 3",
                title: "Чат и история",
                budget: "35,000 ₽",
                deliverables: ["Real-time чат", "Модерация", "История споров", "Статистика"]
              },
              {
                week: "Недели 13-16",
                phase: "Sprint 4",
                title: "Финансовая система",
                budget: "50,000 ₽",
                deliverables: ["TON Connect", "Smart контракты", "Кошелек", "Безопасность"]
              },
              {
                week: "Недели 17-18",
                phase: "Запуск",
                title: "Тестирование и деплой",
                budget: "15,000 ₽",
                deliverables: ["Финальное тестирование", "Документация", "Production деплой"]
              }
            ].map((item, index) => (
              <div key={item.phase} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <Card className="flex-1">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge className="mb-2">{item.week}</Badge>
                        <h3 className="text-xl font-bold">{item.phase}: {item.title}</h3>
                      </div>
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        {item.budget}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                      {item.deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-zinc-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать разработку?</h2>
          <p className="text-xl mb-8 opacity-90">
            Детальный план, проверенные технологии, опытная команда
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
              <Target className="mr-2 h-5 w-5" />
              Обсудить проект
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zinc-900">
              <Calendar className="mr-2 h-5 w-5" />
              Запланировать встречу
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-400">
              Telegram Mini App • TON Blockchain • 200,000 ₽ • 18 недель
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
