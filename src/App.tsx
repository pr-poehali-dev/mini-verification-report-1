import { useState } from 'react'
import { FileText, Heart, AlertTriangle, Eye, MessageSquare, CreditCard, Shield } from 'lucide-react'
import './index.css'

interface ReportData {
  date: string
  reportNumber: string
  clientInfo: string
  fullName: string
  phoneNumbers: string
  emails: string
  documents: string
  addresses: string
  cars: string
  socialAccounts: string
  phoneBookInfo: string
  vkActivity: string
  additionalVkAccount: string
  telegramAnalysis: string
  datingAnalysis: string
  purchases: string
  promotion: string
  fullCheckInfo: string
}

function App() {
  const [activeTab, setActiveTab] = useState<'report' | 'parameters'>('report')
  const [reportData, setReportData] = useState<ReportData>({
    date: new Date().toLocaleDateString('ru-RU'),
    reportNumber: 'В/П 06842-25',
    clientInfo: '',
    fullName: '',
    phoneNumbers: '',
    emails: '',
    documents: '',
    addresses: '',
    cars: '',
    socialAccounts: '',
    phoneBookInfo: '',
    vkActivity: '🔍 В основном профиле ВК обнаружена регулярная активность с определенными пользователями. Зафиксированы частые взаимодействия (Общение) с некоторыми скрытыми и открытыми друзьями ВК. 💬 В полной проверке вы узнаете профиле этих друзей, а так же их цифровую детализацию активности в сети.',
    additionalVkAccount: `🚨 Найден скрытый (Дополнительный) профиль ВК!

📱 Профиль: https://vk.com/id362****24 (создан 23.01.2025)
🔍 Найдено по совпадению цифровых отпечатков устройства

⚠️ КРАТКАЯ ЦИФРОВАЯ СВОДКА:
• Профиль активен несколько раз в месяц
• 18 друзей (2 пересекаются с основным профилем!)  
• 24 сообщества (4 совпадают с основным)
• Последняя активность: 21.08.2025

💡 Возникает вопрос: зачем нужен второй профиль?
🔓 Полный анализ покажет всю правду о скрытой активности!`,
    telegramAnalysis: '📱 ОБНАРУЖЕНА АКТИВНОСТЬ В ОСНОВНОМ АККАУНТЕ TELEGRAM!\n\n🕒 Ежедневная активность с 3-5 постоянными контактами\n💬 Регулярная переписка в вечернее время (20:00-23:00)\n👥 Участие в закрытых группах и каналах\n\n❓ С КЕМ именно общается ваша половина каждый день?\n🔍 Полная проверка раскроет ВСЕ секреты Telegram-активности!',
    datingAnalysis: `💔 Обнаружен профиль на сайте знакомств!

🌐 Сайт: Mamba.ru (профиль в архиве)
📅 Зарегистрирован: 12.04.2023 на номер проверяемого
📸 Загружено 2 фотографии
🗑️ Удален в архив: 08.09.2025

❗ ВОПРОСЫ БЕЗ ОТВЕТОВ:
• Почему профиль создавался в период отношений?
• Кто был найден через этот сайт?
• Были ли встречи и свидания?

🔍 Детальный анализ в полной проверке покажет ВСЮ правду!`,
    purchases: '💳 Отчет о совершенных последних покупках\n\nЗакажи полную проверку на верность и получите подробный отчет с информацией о покупках вашей второй половина за последние пол года в розничных магазинах и интернет-ресурсах.',
    promotion: `⏰ ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ - ДЕЙСТВУЕТ ТОЛЬКО СЕГОДНЯ!

Мини-отчет по проверке верности, как правило, содержит ограниченную информацию, которой недостаточно для полного развеивания сомнений и получения ответов на все интересующие вопросы.\n\nМы предлагаем вам воспользоваться услугой полной проверки верности вашей второй половины. В полном отчете вы получите исчерпывающую и точную информацию, которая позволит вам принять обоснованные решения и окончательно развеять все сомнения.

🎁 ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ:
Промокод PROMO888 = скидка 30% на полную проверку!

✅ Закажите сегодня и получите максимально детальный анализ всей цифровой жизни вашего партнера.`,
    fullCheckInfo: `🔍 ПОЛНАЯ ПРОВЕРКА РАСКРОЕТ ВСЕ СЕКРЕТЫ:

✅ Детальный анализ ВСЕХ социальных сетей и мессенджеров
✅ Список скрытых друзей и контактов с анализом отношений  
✅ История переписок и характер общения
✅ Полный отчет о сайтах знакомств и dating-приложениях
✅ Детализация всех покупок за 6 месяцев
✅ Временные метки активности и поведенческие паттерны
✅ Профессиональные выводы и рекомендации

🛡️ 100% конфиденциальность и анонимность гарантированы!`
  })

  const updateField = (field: keyof ReportData, value: string) => {
    setReportData(prev => ({ ...prev, [field]: value }))
  }

  const exportToPDF = () => {
    window.print()
  }

  const ReportView = () => (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl overflow-hidden print-page">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 print-section">
        <div className="flex justify-between items-center mb-6 no-print">
          <button
            onClick={() => setActiveTab('parameters')}
            className="flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            <Heart size={24} />
            <span className="font-semibold">Верность.Про</span>
          </button>
          <button
            onClick={exportToPDF}
            className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
          >
            <FileText size={24} />
            <span className="font-semibold">Конфиденциально!</span>
          </button>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">
            🔍 Результат мини-проверки на верность
          </h1>
          <p className="text-blue-100 text-lg">Профессиональный цифровой анализ</p>
        </div>
        
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold text-blue-100">Дата проверки</div>
              <div className="text-xl font-bold">{reportData.date}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold text-blue-100">Номер проверки</div>
              <div className="text-xl font-bold">{reportData.reportNumber}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold text-blue-100">Заказчик</div>
              <div className="text-lg">{reportData.clientInfo || 'Конфиденциально'}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8">
        {/* Информация о проверке */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-l-4 border-blue-500 print-section">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Информация о проверке</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              🔍 <strong>Профессиональная цифровая проверка</strong> проведена {reportData.date} под номером <strong>{reportData.reportNumber}</strong>.
              <br />
              📊 Проанализированы основные цифровые следы, социальные сети и публичная активность проверяемого лица.
              <br />
              ⚠️ <strong>Внимание:</strong> Данный мини-отчет содержит только базовую информацию. Полная картина доступна в расширенной проверке.
            </p>
          </div>
        </section>

        {/* Информация о заказчике */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500 print-section">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-purple-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Информация о заказчике</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              📋 <strong>Заказчик:</strong> {reportData.clientInfo || 'Конфиденциальная информация'}
              <br />
              🔒 Все данные заказчика защищены и не передаются третьим лицам
            </p>
          </div>
        </section>

        {/* Общая информация - КОМПАКТНЫЙ БЛОК */}
        <section className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 shadow-lg print-section">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="text-gray-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Общая информация</h2>
          </div>
          
          {/* Компактная сетка */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">👤 Личные данные</h3>
              <div className="text-sm text-gray-700 min-h-[50px] bg-white rounded p-3">
                {reportData.fullName || '🔒 Найдены совпадения'}
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">📱 Контакты</h3>
              <div className="text-sm text-gray-700 min-h-[50px] bg-white rounded p-3">
                {reportData.phoneNumbers || '🔒 Множественные номера'}
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">🌐 Соцсети</h3>
              <div className="text-sm text-gray-700 min-h-[50px] bg-white rounded p-3">
                {reportData.socialAccounts || '🔒 Скрытые профили'}
              </div>
            </div>
          </div>

          {/* Дополнительные поля в компактном виде */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 mb-2">📧 Email</h3>
              <div className="text-sm text-gray-600">{reportData.emails || '🔒 Скрыто'}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 mb-2">📄 Документы</h3>
              <div className="text-sm text-gray-600">{reportData.documents || '🔒 Найдены'}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 mb-2">🚗 Транспорт</h3>
              <div className="text-sm text-gray-600">{reportData.cars || '🔒 Данные есть'}</div>
            </div>
          </div>

          {/* Телефонная книга - отдельно */}
          <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
            <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
              📞 Как записана у других людей в телефонной книге
            </h3>
            <div className="bg-white rounded-lg p-4 text-gray-700">
              {reportData.phoneBookInfo || '💡 Найдены интересные записи...'}
            </div>
          </div>
        </section>

        {/* Цифровая активность ВК */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border-l-4 border-orange-500 shadow-lg print-section">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-orange-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Цифровая активность основного аккаунта ВК</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {reportData.vkActivity}
            </div>
          </div>
        </section>

        {/* Дополнительный аккаунт ВК */}
        <section className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border-l-4 border-red-500 shadow-lg print-section">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-red-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Обнаружен дополнительный аккаунт ВК</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-red-200">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line font-medium">
              {reportData.additionalVkAccount}
            </div>
          </div>
        </section>

        {/* Telegram анализ */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg print-section">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Цифровая активность в Telegram</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-blue-200">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line font-medium">
              {reportData.telegramAnalysis}
            </div>
          </div>
        </section>

        {/* Сайты знакомств */}
        <section className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-6 border-l-4 border-red-600 shadow-lg print-section">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-red-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Найдены аккаунты на сайтах знакомств</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-red-300">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line font-medium">
              {reportData.datingAnalysis}
            </div>
          </div>
        </section>

        {/* Покупки */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500 shadow-lg print-section">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="text-green-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Анализ покупок и трат</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-200">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line font-medium">
              {reportData.purchases}
            </div>
          </div>
        </section>

        {/* Промо-блок */}
        <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 border-2 border-green-300 shadow-xl print-section">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              🎯 Получите ПОЛНУЮ картину прямо сейчас!
            </h2>
            <div className="bg-white rounded-xl p-6 text-gray-700 leading-relaxed whitespace-pre-line">
              {reportData.promotion}
            </div>
          </div>
        </section>

        {/* Главная кнопка призыва к действию */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-center shadow-2xl no-print">
          <div className="text-white space-y-6">
            <h3 className="text-3xl font-bold mb-4">
              💡 Узнайте ВСЮ правду о вашей второй половине!
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="text-xl mb-4">
                🔥 <strong>Стоимость полной проверки от 500 рублей</strong>
              </p>
              <p className="text-blue-100">
                Цена зависит от сложности проверки и объема информации. 
                Точную стоимость рассчитает наш менеджер за 2 минуты.
              </p>
            </div>
            <a
              href="https://t.me/VernostService"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-12 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              🚀 РАССЧИТАТЬ СТОИМОСТЬ
            </a>
            <p className="text-blue-100 text-lg font-semibold mt-4">
              💬 Сообщите менеджеру промокод <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg">PROMO888</span> для скидки!
            </p>
          </div>
        </section>

        {/* Что получите */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg print-section">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🎁 Что вы получите в полной проверке
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {reportData.fullCheckInfo}
            </div>
          </div>
        </section>

        {/* Политика конфиденциальности */}
        <section className="bg-gray-100 rounded-2xl p-6 print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <Shield size={24} />
            Политика конфиденциальности
          </h2>
          <div className="bg-white rounded-xl p-6 text-sm leading-relaxed text-gray-600">
            🔒 <strong>100% конфиденциальность гарантирована.</strong> Данный отчет передается исключительно заказчику и автоматически удаляется с наших серверов после отправки. Мы не сохраняем копии и не передаем информацию третьим лицам ни при каких обстоятельствах.
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 bg-gray-50 p-6 border-t">
        © 2025 Верность.Про - Профессиональные проверки на верность
      </footer>
    </div>
  )

  const ParametersView = () => (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl overflow-hidden">
      <header className="border-b-2 border-gray-200 pb-6 mb-8 p-6 bg-gray-50">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setActiveTab('report')}
            className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            ← Вернуться к отчету
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Параметры отчета
          </h1>
        </div>
      </header>

      <div className="p-6 space-y-8">
        {/* Основные параметры */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Основные параметры</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Дата проверки
              </label>
              <input
                type="text"
                value={reportData.date}
                onChange={(e) => updateField('date', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="дд.мм.гггг"
              />
              <p className="text-xs text-gray-500 mt-1">Автоматически устанавливается сегодняшняя дата</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Номер проверки
              </label>
              <input
                type="text"
                value={reportData.reportNumber}
                onChange={(e) => updateField('reportNumber', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="В/П 06842-25"
              />
              <p className="text-xs text-gray-500 mt-1">Формат: В/П XXXXX-YY</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Информация о заказчике
              </label>
              <input
                type="text"
                value={reportData.clientInfo}
                onChange={(e) => updateField('clientInfo', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Номер телефона, VK ID или Telegram"
              />
              <p className="text-xs text-gray-500 mt-1">Данные для связи с заказчиком</p>
            </div>
          </div>
        </section>

        {/* Общая информация */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Общая информация о второй половине</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ФИО и дата рождения
              </label>
              <textarea
                value={reportData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[80px]"
                placeholder="Иванов Иван Иванович, 15.05.1990"
              />
              <p className="text-xs text-gray-500 mt-1">Полное ФИО и дата рождения в формате дд.мм.гггг</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Найденные номера телефонов
              </label>
              <textarea
                value={reportData.phoneNumbers}
                onChange={(e) => updateField('phoneNumbers', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[80px]"
                placeholder="+7 981 123-45-67, +7 921 987-65-43"
              />
              <p className="text-xs text-gray-500 mt-1">Все найденные номера телефонов через запятую</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Найденные E-mail адреса
              </label>
              <textarea
                value={reportData.emails}
                onChange={(e) => updateField('emails', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[80px]"
                placeholder="email@example.com, personal@gmail.com"
              />
              <p className="text-xs text-gray-500 mt-1">Все найденные электронные адреса</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Найденные документы
              </label>
              <textarea
                value={reportData.documents}
                onChange={(e) => updateField('documents', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[80px]"
                placeholder="Паспорт 4012 123456, СНИЛС 123-456-789 01"
              />
              <p className="text-xs text-gray-500 mt-1">Типы и номера найденных документов</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Найденные адреса
              </label>
              <textarea
                value={reportData.addresses}
                onChange={(e) => updateField('addresses', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[80px]"
                placeholder="г. Москва, ул. Ленина, д. 10, кв. 5"
              />
              <p className="text-xs text-gray-500 mt-1">Все найденные адреса проживания/регистрации</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Найденные автомобили
              </label>
              <textarea
                value={reportData.cars}
                onChange={(e) => updateField('cars', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[80px]"
                placeholder="А123БВ777, Х456УТ199"
              />
              <p className="text-xs text-gray-500 mt-1">Государственные номера найденных автомобилей</p>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Найденные аккаунты соцсетей и мессенджеров
            </label>
            <textarea
              value={reportData.socialAccounts}
              onChange={(e) => updateField('socialAccounts', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
              placeholder="VK: https://vk.com/id123, Instagram: @username, Telegram: @tg_username"
            />
            <p className="text-xs text-gray-500 mt-1">Ссылки на все найденные профили в соцсетях и мессенджерах</p>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📞 Как записана вторая половина у других людей в телефонной книге
            </label>
            <textarea
              value={reportData.phoneBookInfo}
              onChange={(e) => updateField('phoneBookInfo', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
              placeholder="Маша, Маша Мамба, Ваня кафе с Мамбы"
            />
            <div className="bg-yellow-100 border border-yellow-300 p-3 rounded mt-2">
              <p className="text-xs text-yellow-700 font-medium">💡 СЕКРЕТ ЭФФЕКТИВНОСТИ:</p>
              <p className="text-xs text-yellow-700">Обязательно добавляйте интригующие имена с "Мамба" или "кафе" для создания подозрений</p>
              <p className="text-xs text-yellow-700 mt-1">Примеры: "Маша Мамба", "Ваня кафе с Мамбы", "Лена из Мамбы"</p>
            </div>
          </div>
        </section>

        {/* ВК активность */}
        <section className="bg-orange-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Цифровая активность основного аккаунта ВК</h2>
          <div>
            <label className="block text-sm font-medium text-orange-600 mb-2 text-base">
              🔥 Активность ВК (ИНТРИГА ДЛЯ КЛИЕНТА)
            </label>
            <textarea
              value={reportData.vkActivity}
              onChange={(e) => updateField('vkActivity', e.target.value)}
              className="w-full p-3 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-h-[100px]"
            />
            <div className="bg-orange-50 border border-orange-200 p-3 rounded mt-2">
              <p className="text-xs text-orange-600 font-medium">💡 Этот блок мотивирует заказать полную проверку</p>
            </div>
          </div>
        </section>

        {/* Дополнительный аккаунт ВК */}
        <section className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Дополнительный аккаунт ВК</h2>
          <div>
            <label className="block text-sm font-medium text-red-600 mb-2 text-base">
              ⚠️ Найден дополнительный аккаунт ВК (ШАБЛОННЫЙ ТЕКСТ - СОЗДАЕТ ИНТРИГУ)
            </label>
            <textarea
              value={reportData.additionalVkAccount}
              onChange={(e) => updateField('additionalVkAccount', e.target.value)}
              className="w-full p-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 min-h-[150px]"
            />
            <div className="bg-red-50 border border-red-200 p-3 rounded mt-2">
              <p className="text-xs text-red-600 font-medium">🎯 ВАЖНО: Этот блок создает максимальную интригу!</p>
              <ul className="text-xs text-red-600 mt-1 space-y-1">
                <li>• Можно корректировать ссылки и ID профилей</li>
                <li>• Изменять даты активности и количество друзей</li>
                <li>• Этот текст мотивирует клиента заказать полную проверку</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Telegram */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Цифровой анализ Telegram</h2>
          <div>
            <label className="block text-sm font-medium text-blue-600 mb-2 text-base">
              📱 Анализ активности в Telegram
            </label>
            <textarea
              value={reportData.telegramAnalysis}
              onChange={(e) => updateField('telegramAnalysis', e.target.value)}
              className="w-full p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
            />
            <div className="bg-blue-50 border border-blue-200 p-3 rounded mt-2">
              <p className="text-xs text-blue-600 font-medium">📝 Добавлена информация об ежедневной активности</p>
              <p className="text-xs text-blue-600">Текст создает интригу и мотивирует заказать полную проверку</p>
            </div>
          </div>
        </section>

        {/* Сайты знакомств */}
        <section className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Сайты знакомств и флирта</h2>
          <div>
            <label className="block text-sm font-medium text-red-600 mb-2 text-base">
              💋 Аналитическое заключение (СОКРАЩЕННЫЙ ИНТРИГУЮЩИЙ ТЕКСТ)
            </label>
            <textarea
              value={reportData.datingAnalysis}
              onChange={(e) => updateField('datingAnalysis', e.target.value)}
              className="w-full p-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 min-h-[150px]"
            />
            <div className="bg-red-50 border border-red-200 p-3 rounded mt-2">
              <p className="text-xs text-red-600 font-medium">🎯 СОКРАЩЕН БЕЗ ПОТЕРИ ИНТРИГИ!</p>
              <ul className="text-xs text-red-600 mt-1 space-y-1">
                <li>• Основная информация сохранена</li>
                <li>• Убрана избыточная техническая информация</li>
                <li>• Сохранен мотивирующий эффект</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Покупки */}
        <section className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Покупки</h2>
          <div>
            <label className="block text-sm font-medium text-yellow-600 mb-2 text-base">
              💳 Отчет о покупках
            </label>
            <textarea
              value={reportData.purchases}
              onChange={(e) => updateField('purchases', e.target.value)}
              className="w-full p-3 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 min-h-[120px]"
              placeholder="Если найден номер карты, добавьте интригующую покупку в 585 или Цветы 24"
            />
            <div className="bg-yellow-100 border border-yellow-300 p-3 rounded mt-2">
              <p className="text-xs text-yellow-700 font-medium">💡 ПРИМЕРЫ ИНТРИГУЮЩИХ ПОКУПОК:</p>
              <ul className="text-xs text-yellow-700 mt-1 space-y-1">
                <li>• "Покупка в феврале 2025 года в магазине «585» - золотое украшение на 13 499₽"</li>
                <li>• "Покупка в мае 2025 года в «Цветы 24» - букет «Нежность» на 4 499₽"</li>
                <li>• Всегда добавляйте шаблонный текст в конце</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Промо-блок */}
        <section className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Промо-блок со скидкой</h2>
          <div>
            <label className="block text-sm font-medium text-green-600 mb-2 text-base">
              🎉 Текст акции (УБРАНО СЛОВО "БЕСПЛАТНЫЙ")
            </label>
            <textarea
              value={reportData.promotion}
              onChange={(e) => updateField('promotion', e.target.value)}
              className="w-full p-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 min-h-[120px]"
            />
            <div className="bg-green-100 border border-green-300 p-3 rounded mt-2">
              <p className="text-xs text-green-700 font-medium">✅ ОПТИМИЗИРОВАНО:</p>
              <ul className="text-xs text-green-700 mt-1 space-y-1">
                <li>• Убрано слово "бесплатный"</li>
                <li>• Текст подходит для любых мини-проверок</li>
                <li>• Сохранена мотивация к заказу</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Что получите */}
        <section className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Описание полной проверки</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📋 Что клиент получит при заказе полной проверки
            </label>
            <textarea
              value={reportData.fullCheckInfo}
              onChange={(e) => updateField('fullCheckInfo', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
            />
            <p className="text-xs text-gray-500 mt-1">Описание преимуществ и возможностей полной проверки</p>
          </div>
        </section>
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg mx-6 mb-6">
        <h3 className="font-semibold text-blue-800 mb-3 text-lg">📋 Инструкции для менеджеров:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-blue-700 mb-2">Общие правила:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Все изменения сохраняются автоматически</li>
              <li>• Данные синхронизируются с отчетом в реальном времени</li>
              <li>• Обязательно заполняйте все поля для полноты отчета</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-700 mb-2">Создание интриги:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Блоки с цветными рамками создают интригу</li>
              <li>• В телефонной книге добавляйте "Мамба" к именам</li>
              <li>• При наличии карты - интригующие покупки</li>
              <li>• Шаблонные тексты мотивируют заказ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-8 px-4">
      {activeTab === 'report' ? <ReportView /> : <ParametersView />}
    </div>
  )
}

export default App