import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ReportData {
  date: string;
  reportNumber: string;
  clientInfo: string;
  fullName: string;
  phoneNumbers: string;
  emails: string;
  documents: string;
  addresses: string;
  vehicles: string;
  socialAccounts: string;
  additionalVkAccount: string;
  profileHistory: string;
  hiddenFriends: string;
  activityReport: string;
  telegramAnalysis: string;
  datingAnalysis: string;
  phoneBookRecords: string;
  purchases: string;
}

export default function ReportForm() {
  const [activeTab, setActiveTab] = useState('report');
  const [reportData, setReportData] = useState<ReportData>({
    date: new Date().toLocaleDateString('ru-RU'),
    reportNumber: '№ В/П 06842-25',
    clientInfo: '',
    fullName: '',
    phoneNumbers: '',
    emails: '',
    documents: '',
    addresses: '',
    vehicles: '',
    socialAccounts: '',
    additionalVkAccount: `Обнаружен дополнительный профиль ВК с подозрительными совпадениями.\n\nПрофиль: https://vk.com/id362****24\nДата создания: 23.01.2025\nПоследняя активность: 21.08.2025\n\n🚨 Обнаруженные совпадения:\n• Идентичные почтовые адреса\n• Совпадающие цифровые отпечатки устройств\n• 18 друзей, из них 2 общих с основным профилем\n• 4 общих сообщества\n\n📊 Заключение: Выявленные совпадения с высокой вероятностью указывают на принадлежность обоих профилей одному лицу.\n\n⚡ Полная проверка покажет весь масштаб скрытой деятельности: скрытых друзей, переписку, время онлайн совместно с конкретными людьми.`,
    profileHistory: '',
    hiddenFriends: 'В основном аккаунте ВК найдены скрытые друзья. К сожалению мини-проверка не предусматривает выгрузку скрытых друзей. Для выгрузки всех друзей профиля, в том числе и скрытых закажите услугу «Полная проверка на верность» и получите полный подробный отчет о всех друзьях вашей второй половины.',
    activityReport: 'В основном профиле ВК зафиксирована ежедневная цифровая активность с несколькими постоянными пользователями. Мини-проверка не позволяет определить, с кем именно общается ваша вторая половина и как часто.\n\n💬 В полной проверке доступны:\n• Детализация общения с каждым контактом\n• Время и частота переписки\n• Совместная активность онлайн\n• Анализ взаимодействий с друзьями\n\nДля получения полного отчета закажите «Полную проверку на верность».',
    telegramAnalysis: 'В основном аккаунте Telegram зафиксирована ежедневная активность с несколькими постоянными контактами. Обнаружена подписка на специализированные каналы знакомств и флирта.\n\n🔍 Выявленные особенности:\n• Регулярная активность в чатах с неизвестными пользователями\n• Подписки на каналы знакомств: 3 активных канала\n• Частная переписка с 7 контактами\n• Активность преимущественно в вечернее время\n\n⚡ Полная проверка раскроет:\n• С кем именно ведется переписка\n• Содержание активности в каналах знакомств\n• Детальный анализ контактов\n• История сообщений и медиафайлов',
    datingAnalysis: `🚨 Обнаружен аккаунт на сайте знакомств Mamba.ru\n\nПо номеру телефона найдена анкета на Mamba.ru:\n• Дата регистрации: 12.04.2023\n• Анкета удалена в архив: 09.06.2025\n• Сохранено 2 фотографии\n• Ссылка: http://www.mamba.ru/anketa.phtml?oid=826****\n\n⚠️ Важно: Мини-проверка не может определить, кому точно принадлежит этот аккаунт. Анкета находится в архиве, но не удалена окончательно.\n\n📊 Что можно узнать из полной проверки:\n• Подробный анализ фотографий на совпадения\n• Поиск дополнительных аккаунтов на других сайтах знакомств\n• Историю активности и переписку\n• Полное подтверждение принадлежности`,
    phoneBookRecords: '',
    purchases: ''
  });

  const updateField = (field: keyof ReportData, value: string) => {
    setReportData(prev => ({ ...prev, [field]: value }));
  };

  const exportToPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Результат мини-проверки на верность</h1>
            <div className="flex gap-3">
              <TabsList className="grid w-auto grid-cols-2">
                <TabsTrigger value="report" className="flex items-center gap-2">
                  <Icon name="FileText" size={16} />
                  Отчет
                </TabsTrigger>
                <TabsTrigger value="parameters" className="flex items-center gap-2">
                  <Icon name="Heart" size={16} />
                  Верность.Про
                </TabsTrigger>
              </TabsList>
              <Button 
                onClick={exportToPDF}
                variant="destructive"
                className="flex items-center gap-2"
              >
                <Icon name="FileDown" size={16} />
                Конфиденциально!
              </Button>
            </div>
          </div>
        </div>

        {/* Report Tab */}
        <TabsContent value="report" className="p-6 space-y-6">
          {/* 1. Report Information */}
          <Card>
            <CardHeader className="bg-blue-50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Информация о проверке</CardTitle>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-slate-600">Дата проверки: {reportData.date}</p>
                    <p className="text-sm text-slate-600">Номер проверки: {reportData.reportNumber}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* 2. Client Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="User" size={20} />
                Информация о заказчике
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{reportData.clientInfo || 'Данные заказчика не указаны'}</p>
            </CardContent>
          </Card>

          {/* 3. General Information with Phone Book Records */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                Общая информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="font-medium">ФИО и дата рождения</Label>
                  <p className="text-sm text-slate-600 mt-1">{reportData.fullName || 'Не указано'}</p>
                </div>
                <div>
                  <Label className="font-medium">Найденные номера телефонов</Label>
                  <p className="text-sm text-slate-600 mt-1">{reportData.phoneNumbers || 'Не найдено'}</p>
                </div>
                <div>
                  <Label className="font-medium">Найденные E-mail адреса</Label>
                  <p className="text-sm text-slate-600 mt-1">{reportData.emails || 'Не найдено'}</p>
                </div>
                <div>
                  <Label className="font-medium">Найденные документы</Label>
                  <p className="text-sm text-slate-600 mt-1">{reportData.documents || 'Не найдено'}</p>
                </div>
                <div>
                  <Label className="font-medium">Найденные адреса</Label>
                  <p className="text-sm text-slate-600 mt-1">{reportData.addresses || 'Не найдено'}</p>
                </div>
                <div>
                  <Label className="font-medium">Найденные автомобили</Label>
                  <p className="text-sm text-slate-600 mt-1">{reportData.vehicles || 'Не найдено'}</p>
                </div>
              </div>
              <div>
                <Label className="font-medium">Найденные аккаунты соцсетей и мессенджеров</Label>
                <p className="text-sm text-slate-600 mt-1">{reportData.socialAccounts || 'Не найдено'}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                <Label className="font-medium text-blue-800">Как записана ваша вторая половина у других людей в телефонной книге</Label>
                <p className="text-sm text-blue-700 mt-1">{reportData.phoneBookRecords || 'Информация не найдена'}</p>
              </div>
            </CardContent>
          </Card>

          {/* 4. VK Digital Activity */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Icon name="MessageCircle" size={20} />
                Цифровая активность основного аккаунта ВК
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="font-medium text-blue-800">История изменения основного профиля ВК с момента создания</Label>
                  <p className="text-sm text-blue-700 mt-1">{reportData.profileHistory || 'Информация не найдена'}</p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <Label className="font-medium text-yellow-800">Скрытые друзья</Label>
                  <p className="text-sm text-yellow-700 mt-1">{reportData.hiddenFriends}</p>
                </div>
                
                <div className="bg-white/70 p-4 rounded-lg border border-blue-300">
                  <Label className="font-medium text-blue-800">Отчет и анализ цифровой активности с другими пользователями</Label>
                  <p className="text-sm text-blue-700 mt-1 whitespace-pre-wrap">{reportData.activityReport}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5. Additional VK Account */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Icon name="AlertTriangle" size={20} />
                Информация о дополнительном найденном аккаунте ВК
                <Badge variant="destructive">!</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-orange-700 whitespace-pre-wrap">{reportData.additionalVkAccount}</p>
            </CardContent>
          </Card>

          {/* 6. Telegram Analysis */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Icon name="MessageCircle" size={20} />
                Цифровая активность основного аккаунта в Телеграм
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-700 whitespace-pre-wrap">{reportData.telegramAnalysis}</p>
              <div className="mt-4 bg-white/70 p-3 rounded-lg border border-blue-300">
                <p className="text-xs text-blue-600">
                  💡 В полной проверке доступна детализация: с кем именно общается, частота переписки, совместная активность онлайн с конкретными пользователями.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 7. Dating Sites Analysis */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Icon name="Heart" size={20} />
                Информация о найденных аккаунтах на сайтах знакомств и флирта
                <Badge variant="destructive">Подозрительно</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium text-red-800 mb-2">Аналитическое заключение по результатам проверки</h4>
              <p className="text-sm text-red-700 whitespace-pre-wrap">{reportData.datingAnalysis}</p>
            </CardContent>
          </Card>

          {/* 8. Purchase Reports */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Icon name="CreditCard" size={20} />
                Отчет о последних покупках в сети
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-700">
                {reportData.purchases || 'Анализ покупок...'}
                {' '}Закажите полную проверку на верность и получите подробный отчет с информацией о покупках вашей второй половины за последние пол года в розничных магазинах и интернет-ресурсах.
              </p>
            </CardContent>
          </Card>

          {/* Promotion Block */}
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-xl">Успей получить скидку 30% на полную проверку на верность!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-100">
                Уведомляем, что мини-отчет по проверке верности, как правило, содержит ограниченную информацию, которой недостаточно для полного развеивания сомнений и получения ответов на все интересующие вопросы.
              </p>
              <p className="text-blue-100">
                Мы предлагаем вам воспользоваться услугой полной проверки верности вашей второй половины. В полном отчете вы получите исчерпывающую и точную информацию, которая позволит вам принять обоснованные решения и окончательно развеять все сомнения.
              </p>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-medium">Специальное предложение: акция «Скидка 30% на полную проверку за отзыв!»</p>
                <p className="text-blue-100 mt-2">Ваш индивидуальный промокод: <span className="font-mono bg-white/20 px-2 py-1 rounded">PROMO888</span></p>
              </div>
              <div className="flex gap-4">
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open('https://t.me/VernostService', '_blank')}
                >
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Получите полный отчет со скидкой 30%!
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* What You Get Block */}
          <Card>
            <CardHeader>
              <CardTitle>Что вы получите при заказе полной проверки на верность</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                    <span className="text-sm">Профессиональную проверку на верность онлайн</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                    <span className="text-sm">Глубокий анализ цифровой жизни вашего партнера</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                    <span className="text-sm">Информацию о скрытых аккаунтах</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                    <span className="text-sm">Подробный анализ активности в социальных сетях</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                    <span className="text-sm">Понятный и структурированный отчет</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                    <span className="text-sm">Конфиденциальность и анонимность 100%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="text-center">
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-xl font-bold mb-2">Узнайте полную информацию, которую скрывает ваша вторая половина прямо сейчас!</h3>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                <p className="text-green-800 font-medium">
                  💰 Стоимость полной проверки от <span className="text-xl font-bold">500 рублей</span>
                </p>
                <p className="text-green-700 text-sm mt-1">
                  Точную сумму можно рассчитать прямо сейчас у нашего менеджера в зависимости от индивидуальной технической сложности проверки и объема информации.
                </p>
              </div>
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.open('https://t.me/VernostService', '_blank')}
              >
                Рассчитать стоимость
              </Button>
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card className="bg-slate-100">
            <CardHeader>
              <CardTitle className="text-sm">Политика конфиденциальности и обеспечения анонимности клиентов</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-600">
                Политика конфиденциальности и обеспечения анонимности клиентов. В целях обеспечения максимальной конфиденциальности и полной анонимности наших клиентов данный отчет передается исключительно заказчику и не сохраняется в наших системах в виде копий. После успешной отправки, отчет автоматически удаляется с сервера отправителя, что исключает его дальнейшее хранение. Мы придерживаемся строгой политики конфиденциальности и гарантируем полную анонимность наших клиентов! Вся информация, связанная с заказом, не сохраняется на наших серверах после его выполнения и не передается третьим лицам с нашей стороны ни при обстоятельствах.
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-slate-500 py-4">
            © All Rights Reserved. Proverka.Vernosti 2025.
          </div>
        </TabsContent>

        {/* Parameters Tab */}
        <TabsContent value="parameters" className="p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" size={20} />
                  Параметры отчета для менеджеров
                </CardTitle>
                <p className="text-sm text-slate-600">Заполните поля ниже. Данные автоматически синхронизируются с основным отчетом.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Основная информация</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Дата проверки</Label>
                      <Input 
                        id="date"
                        value={reportData.date}
                        onChange={(e) => updateField('date', e.target.value)}
                        placeholder="дд.мм.гг"
                      />
                      <p className="text-xs text-slate-500 mt-1">Формат: 26.09.25</p>
                    </div>
                    <div>
                      <Label htmlFor="reportNumber">Номер проверки</Label>
                      <Input 
                        id="reportNumber"
                        value={reportData.reportNumber}
                        onChange={(e) => updateField('reportNumber', e.target.value)}
                        placeholder="№ В/П 06842-25"
                      />
                      <p className="text-xs text-slate-500 mt-1">Пример: № В/П 06842-25</p>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="clientInfo">Информация о заказчике</Label>
                    <Textarea 
                      id="clientInfo"
                      value={reportData.clientInfo}
                      onChange={(e) => updateField('clientInfo', e.target.value)}
                      placeholder="Номер телефона, ID VK или username Telegram заказчика"
                      rows={2}
                    />
                    <p className="text-xs text-slate-500 mt-1">Укажите контактные данные заказчика для связи</p>
                  </div>
                </div>

                {/* General Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Общая информация о второй половине</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">ФИО и дата рождения</Label>
                      <Textarea 
                        id="fullName"
                        value={reportData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="Иванов Иван Иванович, 15.03.1990"
                        rows={2}
                      />
                      <p className="text-xs text-slate-500 mt-1">Полное имя и дата рождения проверяемого</p>
                    </div>
                    <div>
                      <Label htmlFor="phoneNumbers">Найденные номера телефонов</Label>
                      <Textarea 
                        id="phoneNumbers"
                        value={reportData.phoneNumbers}
                        onChange={(e) => updateField('phoneNumbers', e.target.value)}
                        placeholder="+7 (XXX) XXX-XX-XX, +7 (XXX) XXX-XX-XX"
                        rows={2}
                      />
                      <p className="text-xs text-slate-500 mt-1">Все найденные телефонные номера через запятую</p>
                    </div>
                    <div>
                      <Label htmlFor="emails">Найденные E-mail адреса</Label>
                      <Textarea 
                        id="emails"
                        value={reportData.emails}
                        onChange={(e) => updateField('emails', e.target.value)}
                        placeholder="example@mail.ru, user@gmail.com"
                        rows={2}
                      />
                      <p className="text-xs text-slate-500 mt-1">Электронные адреса через запятую</p>
                    </div>
                    <div>
                      <Label htmlFor="documents">Найденные документы</Label>
                      <Textarea 
                        id="documents"
                        value={reportData.documents}
                        onChange={(e) => updateField('documents', e.target.value)}
                        placeholder="Паспорт: XXXX XXXXXX, ИНН: XXXXXXXXXXXX"
                        rows={2}
                      />
                      <p className="text-xs text-slate-500 mt-1">Номера и типы найденных документов</p>
                    </div>
                    <div>
                      <Label htmlFor="addresses">Найденные адреса</Label>
                      <Textarea 
                        id="addresses"
                        value={reportData.addresses}
                        onChange={(e) => updateField('addresses', e.target.value)}
                        placeholder="г. Москва, ул. Примерная, д. 1, кв. 1"
                        rows={2}
                      />
                      <p className="text-xs text-slate-500 mt-1">Адреса регистрации и проживания</p>
                    </div>
                    <div>
                      <Label htmlFor="vehicles">Найденные автомобили</Label>
                      <Textarea 
                        id="vehicles"
                        value={reportData.vehicles}
                        onChange={(e) => updateField('vehicles', e.target.value)}
                        placeholder="А123БВ77, В456ГД177"
                        rows={2}
                      />
                      <p className="text-xs text-slate-500 mt-1">Государственные номера автомобилей</p>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="socialAccounts">Найденные аккаунты соцсетей и мессенджеров</Label>
                    <Textarea 
                      id="socialAccounts"
                      value={reportData.socialAccounts}
                      onChange={(e) => updateField('socialAccounts', e.target.value)}
                      placeholder="VK: vk.com/user123, Instagram: @username, Telegram: @username"
                      rows={3}
                    />
                    <p className="text-xs text-slate-500 mt-1">Ссылки на все найденные профили в социальных сетях</p>
                  </div>
                </div>

                {/* Suspicious VK Account */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2 text-orange-600">⚠️ Найден дополнительный аккаунт ВК</h3>
                  <div>
                    <Label htmlFor="additionalVkAccount">Анализ дополнительного профиля ВК</Label>
                    <Textarea 
                      id="additionalVkAccount"
                      value={reportData.additionalVkAccount}
                      onChange={(e) => updateField('additionalVkAccount', e.target.value)}
                      placeholder="Детальный анализ найденного профиля..."
                      rows={8}
                    />
                    <p className="text-xs text-slate-500 mt-1">Подробное описание анализа дополнительного аккаунта ВК. Используйте шаблон выше и адаптируйте под конкретный случай.</p>
                  </div>
                </div>

                {/* VK Profile Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Информация об основном профиле ВК</h3>
                  <div>
                    <Label htmlFor="profileHistory">История изменения профиля ВК</Label>
                    <Textarea 
                      id="profileHistory"
                      value={reportData.profileHistory}
                      onChange={(e) => updateField('profileHistory', e.target.value)}
                      placeholder="Смена имени: 15.02.2024, изменение фото: 20.03.2024..."
                      rows={4}
                    />
                    <p className="text-xs text-slate-500 mt-1">Хронология изменений в профиле с датами</p>
                  </div>
                </div>

                {/* Telegram Analysis */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2 text-blue-600">📱 Telegram анализ</h3>
                  <div>
                    <Label htmlFor="telegramAnalysis">Анализ активности в Telegram</Label>
                    <Textarea 
                      id="telegramAnalysis"
                      value={reportData.telegramAnalysis}
                      onChange={(e) => updateField('telegramAnalysis', e.target.value)}
                      placeholder="Активность в каналах: @channel1, @channel2. Частые контакты: @user1..."
                      rows={4}
                    />
                    <p className="text-xs text-slate-500 mt-1">Укажите найденную активность в Telegram: каналы, группы, контакты</p>
                  </div>
                </div>

                {/* Phone Book Records */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Записи в телефонных книгах</h3>
                  <div>
                    <Label htmlFor="phoneBookRecords">Как записана вторая половина у других</Label>
                    <Textarea 
                      id="phoneBookRecords"
                      value={reportData.phoneBookRecords}
                      onChange={(e) => updateField('phoneBookRecords', e.target.value)}
                      placeholder="Маша Работа, Ваня кафе с Мамбы, Лена спортзал..."
                      rows={3}
                    />
                    <p className="text-xs text-slate-500 mt-1">⚠️ Для интриги добавьте записи с упоминанием "Мамба" или подозрительные названия</p>
                  </div>
                </div>

                {/* Purchase History */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2 text-purple-600">💳 Анализ покупок</h3>
                  <div>
                    <Label htmlFor="purchases">Подозрительные покупки</Label>
                    <Textarea 
                      id="purchases"
                      value={reportData.purchases}
                      onChange={(e) => updateField('purchases', e.target.value)}
                      placeholder="Февраль 2025: магазин 585, золотое украшение 13499₽, карта ****2562..."
                      rows={4}
                    />
                    <p className="text-xs text-slate-500 mt-1">⚠️ Если найден номер карты - укажите подозрительные покупки: украшения, цветы, подарки</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-green-600 flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} />
                    Все изменения автоматически сохраняются в основном отчете
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}