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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge className="text-xl px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                💰 Бюджет: 200,000 ₽
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              P2P Sports Betting
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">
              Telegram Mini App
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Детальный план разработки платформы для P2P споров на спортивных событиях с интеграцией криптооплатежей TON и STARS
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button variant="outline" size="lg" className="text-xl px-10 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                <Calendar className="mr-3 h-6 w-6" />
                2 месяца разработки
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-white">Распределение бюджета</h2>
          <p className="text-2xl text-white/70">
            Поэтапное планирование с детализацией расходов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { phase: "Sprint 1", amount: "45,000", percentage: 22.5, weeks: "2 недели", icon: Zap, color: "from-blue-500 to-cyan-500" },
            { phase: "Sprint 2", amount: "55,000", percentage: 27.5, weeks: "2 недели", icon: Trophy, color: "from-purple-500 to-pink-500" },
            { phase: "Sprint 3", amount: "35,000", percentage: 17.5, weeks: "2 недели", icon: MessageSquare, color: "from-green-500 to-emerald-500" },
            { phase: "Sprint 4", amount: "50,000", percentage: 25, weeks: "1.5 недели", icon: Wallet, color: "from-orange-500 to-red-500" },
            { phase: "Запуск", amount: "15,000", percentage: 7.5, weeks: "0.5 недели", icon: Rocket, color: "from-indigo-500 to-purple-500" }
          ].map((item) => (
            <Card key={item.phase} className="relative overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/20">{item.weeks}</Badge>
                </div>
                <CardTitle className="text-2xl text-white">{item.phase}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-3">
                  {item.amount} ₽
                </div>
                <Progress value={item.percentage} className="mb-3 h-3 bg-white/10" />
                <p className="text-white/60">
                  {item.percentage}% от общего бюджета
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detailed Plan */}
      <div className="container mx-auto px-4 py-20">
        <Tabs defaultValue="sprint1" className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-6 text-white">Детальный план разработки</h2>
          </div>

          <TabsList className="grid w-full grid-cols-5 mb-12 bg-white/10 p-2 rounded-2xl backdrop-blur-sm">
            <TabsTrigger value="sprint1" className="data-[state=active]:bg-white/20 text-white rounded-xl">Sprint 1</TabsTrigger>
            <TabsTrigger value="sprint2" className="data-[state=active]:bg-white/20 text-white rounded-xl">Sprint 2</TabsTrigger>
            <TabsTrigger value="sprint3" className="data-[state=active]:bg-white/20 text-white rounded-xl">Sprint 3</TabsTrigger>
            <TabsTrigger value="sprint4" className="data-[state=active]:bg-white/20 text-white rounded-xl">Sprint 4</TabsTrigger>
            <TabsTrigger value="launch" className="data-[state=active]:bg-white/20 text-white rounded-xl">Запуск</TabsTrigger>
          </TabsList>

          <TabsContent value="sprint1">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-3xl text-white">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mr-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  Sprint 1: Основа и парсинг событий
                </CardTitle>
                <CardDescription className="text-xl text-white/70">45,000 ₽ • 2 недели разработки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 flex items-center text-white">
                      <Shield className="mr-3 h-6 w-6 text-blue-400" />
                      Backend разработка (20,000 ₽)
                    </h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Настройка Node.js + Express.js сервера</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>PostgreSQL база данных (схема пользователей, событий)</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Telegram авторизация через Mini Apps SDK</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>API для парсинга спортивных событий</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 flex items-center text-white">
                      <Smartphone className="mr-3 h-6 w-6 text-purple-400" />
                      Frontend разработка (18,000 ₽)
                    </h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>React приложение с TMA SDK</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Главная страница со списком событий</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Регистрация/авторизация через Telegram</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Адаптивная верстка под мобильные устройства</li>
                    </ul>
                  </div>
                </div>

                <Separator className="bg-white/20" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Интеграции (5,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>API-FOOTBALL подключение и тестирование</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>WebSocket для real-time обновлений</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">DevOps (2,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Настройка AWS/VPS хостинга</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>CI/CD pipeline</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sprint2">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-3xl text-white">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mr-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  Sprint 2: Система споров
                </CardTitle>
                <CardDescription className="text-xl text-white/70">55,000 ₽ • 2 недели разработки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Backend разработка (25,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>API создания и участия в спорах</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Логика валидации ставок и ограничений времени</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Автоматический расчет результатов через API-FOOTBALL</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Система уведомлений через Telegram Bot</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Frontend разработка (20,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Форма создания спора с валидацией</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Страница открытых споров с фильтрами</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Детальная информация о событиях</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>UX для подтверждения действий</li>
                    </ul>
                  </div>
                </div>

                <Separator className="bg-white/20" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Тестирование (7,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Unit тесты (Jest)</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Интеграционные тесты API</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Тестирование пользовательских сценариев</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Безопасность (3,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Валидация входных данных</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Rate limiting для API</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sprint3">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-3xl text-white">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mr-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  Sprint 3: Чат и история споров
                </CardTitle>
                <CardDescription className="text-xl text-white/70">35,000 ₽ • 2 недели разработки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Backend разработка (15,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>WebSocket чат сервер</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Модерация сообщений (фильтр мата)</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>API истории споров и статистики</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Система жалоб модераторам</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Frontend разработка (15,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Real-time чат интерфейс</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Страница "Мои споры" с фильтрами</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Статистика пользователя</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Функция "Повторить спор"</li>
                    </ul>
                  </div>
                </div>

                <Separator className="bg-white/20" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Модерация (3,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Настройка автоматической модерации</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Интеграция с Telegram для жалоб</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">UX улучшения (2,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Анимации переходов</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Оптимизация производительности</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sprint4">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-3xl text-white">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 mr-4">
                    <Wallet className="h-8 w-8 text-white" />
                  </div>
                  Sprint 4: Финансовая система
                </CardTitle>
                <CardDescription className="text-xl text-white/70">50,000 ₽ • 1.5 недели разработки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Blockchain интеграция (25,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>TON Connect 2.0 интеграция</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Smart контракты для эскроу</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Обработка TON и STARS платежей</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Аудит безопасности смарт-контрактов</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Backend финансы (15,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>API управления балансом</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Комиссионная система (10%)</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Логи всех транзакций</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Защита от двойных трат</li>
                    </ul>
                  </div>
                </div>

                <Separator className="bg-white/20" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Frontend кошелек (8,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Интерфейс баланса и транзакций</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Пополнение/вывод средств</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>История операций</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Безопасность (2,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Шифрование данных (AES-256)</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Аудит финансовых операций</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="launch">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-3xl text-white">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mr-4">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  Финальный этап: Запуск и поддержка
                </CardTitle>
                <CardDescription className="text-xl text-white/70">15,000 ₽ • 0.5 недели</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Финальное тестирование (8,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Load testing</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Security penetration testing</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>User acceptance testing</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Документация (3,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Swagger API документация</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Пользовательские инструкции (GIF)</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Техническая документация</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-xl mb-4 text-white">Деплой (4,000 ₽)</h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Production настройка</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Мониторинг и логирование</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Первичная поддержка</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tech Stack */}
      <div className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 text-white">Технический стек</h2>
            <p className="text-2xl text-white/70">
              Современные технологии для надежного и масштабируемого решения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Smartphone className="mr-3 h-6 w-6 text-blue-400" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li>• React 18+ с TypeScript</li>
                  <li>• @telegram-apps/sdk</li>
                  <li>• @tonconnect/ui-react</li>
                  <li>• Redux Toolkit / Zustand</li>
                  <li>• Socket.io-client</li>
                  <li>• Vite</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Shield className="mr-3 h-6 w-6 text-green-400" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li>• Node.js 18+ с Express.js</li>
                  <li>• PostgreSQL 14+</li>
                  <li>• Prisma / TypeORM</li>
                  <li>• Socket.io</li>
                  <li>• Bull/BullMQ</li>
                  <li>• Redis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Wallet className="mr-3 h-6 w-6 text-purple-400" />
                  Blockchain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li>• TON Blockchain</li>
                  <li>• @ton/ton, @ton/crypto</li>
                  <li>• TON Connect 2.0</li>
                  <li>• Smart contracts (FunC)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Zap className="mr-3 h-6 w-6 text-orange-400" />
                  DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
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

      {/* Security */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-12 text-center text-white flex items-center justify-center">
            <Shield className="mr-4 h-12 w-12 text-green-400" />
            Безопасность
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Alert className="bg-white/5 border-green-500/20 backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <AlertDescription className="text-white/90 text-lg">
                <strong className="text-green-400">Финансовая безопасность:</strong> Все транзакции подписываются приватным ключом пользователя, эскроу система
              </AlertDescription>
            </Alert>
            <Alert className="bg-white/5 border-blue-500/20 backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-blue-400" />
              <AlertDescription className="text-white/90 text-lg">
                <strong className="text-blue-400">Защита данных:</strong> AES-256 шифрование, HTTPS/WSS, валидация входных данных
              </AlertDescription>
            </Alert>
            <Alert className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-purple-400" />
              <AlertDescription className="text-white/90 text-lg">
                <strong className="text-purple-400">GDPR соответствие:</strong> Хранение данных EU в EU (AWS Frankfurt), право на удаление
              </AlertDescription>
            </Alert>
            <Alert className="bg-white/5 border-orange-500/20 backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-orange-400" />
              <AlertDescription className="text-white/90 text-lg">
                <strong className="text-orange-400">Ответственная игра:</strong> Лимиты ставок, самоисключение, проверка возраста 18+
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 text-white">Ключевые функции</h2>
            <p className="text-2xl text-white/70">
              Полнофункциональная платформа для P2P споров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Telegram авторизация",
                description: "Быстрая регистрация через Mini Apps SDK",
                color: "from-blue-400 to-cyan-400"
              },
              {
                icon: Trophy,
                title: "Парсинг событий",
                description: "Real-time данные через API-FOOTBALL",
                color: "from-purple-400 to-pink-400"
              },
              {
                icon: DollarSign,
                title: "P2P споры",
                description: "Создание и участие с автоматическим расчетом",
                color: "from-green-400 to-emerald-400"
              },
              {
                icon: MessageSquare,
                title: "Модерируемый чат",
                description: "Общение с фильтрацией и системой жалоб",
                color: "from-orange-400 to-red-400"
              },
              {
                icon: Wallet,
                title: "TON/STARS платежи",
                description: "Интеграция с TON Connect 2.0",
                color: "from-indigo-400 to-purple-400"
              },
              {
                icon: Shield,
                title: "Безопасность",
                description: "Смарт-контракты и шифрование данных",
                color: "from-teal-400 to-blue-400"
              },
              {
                icon: TrendingUp,
                title: "Статистика",
                description: "История споров и процент побед",
                color: "from-pink-400 to-rose-400"
              },
              {
                icon: Clock,
                title: "Ответственная игра",
                description: "Лимиты ставок и самоисключение",
                color: "from-yellow-400 to-orange-400"
              }
            ].map((feature) => (
              <Card key={feature.title} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="pt-8 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-white">Временная шкала</h2>
          <p className="text-2xl text-white/70">
            8 недель от старта до полного запуска
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {[
              {
                week: "Недели 1-2",
                phase: "Sprint 1",
                title: "Основа и парсинг событий",
                budget: "45,000 ₽",
                deliverables: ["Регистрация через Telegram", "Парсинг футбольных событий", "Основная архитектура"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                week: "Недели 3-4",
                phase: "Sprint 2",
                title: "Система споров",
                budget: "55,000 ₽",
                deliverables: ["Создание споров", "Участие в спорах", "Автоматический расчет", "Уведомления"],
                color: "from-purple-500 to-pink-500"
              },
              {
                week: "Недели 5-6",
                phase: "Sprint 3",
                title: "Чат и история",
                budget: "35,000 ₽",
                deliverables: ["Real-time чат", "Модерация", "История споров", "Статистика"],
                color: "from-green-500 to-emerald-500"
              },
              {
                week: "Неделя 7-7.5",
                phase: "Sprint 4",
                title: "Финансовая система",
                budget: "50,000 ₽",
                deliverables: ["TON Connect", "Smart контракты", "Кошелек", "Безопасность"],
                color: "from-orange-500 to-red-500"
              },
              {
                week: "Неделя 8",
                phase: "Запуск",
                title: "Тестирование и деплой",
                budget: "15,000 ₽",
                deliverables: ["Финальное тестирование", "Документация", "Production деплой"],
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, index) => (
              <div key={item.phase} className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl`}>
                    {index + 1}
                  </div>
                </div>
                <Card className="flex-1 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <Badge className={`mb-3 bg-gradient-to-r ${item.color} text-white border-0`}>{item.week}</Badge>
                        <h3 className="text-2xl font-bold text-white">{item.phase}: {item.title}</h3>
                      </div>
                      <Badge variant="outline" className="text-xl px-4 py-2 bg-white/10 border-white/20 text-white">
                        {item.budget}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {item.deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-center bg-white/5 p-3 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-white/90 text-sm">{deliverable}</span>
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

      {/* Footer */}
      <div className="bg-gradient-to-r from-slate-900 to-black py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 text-lg">
            <span className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Telegram Mini App
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center">
              <Wallet className="mr-2 h-5 w-5" />
              TON Blockchain
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center font-bold text-green-400">
              <DollarSign className="mr-2 h-5 w-5" />
              200,000 ₽
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              8 недель
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
