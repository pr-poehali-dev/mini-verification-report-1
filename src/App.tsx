import { useState } from 'react'
import { FileText, Heart } from 'lucide-react'
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
    vkActivity: 'Зафиксирована активность основного аккаунта ВК. В полной проверке доступна детальная информация о том, с кем именно общается вторая половина, включая анализ переписок и совместной цифровой активности с друзьями.',
    additionalVkAccount: `При поиске дополнительных профилей найден аккаунт ВК с совпадениями в цифровых параметрах. Профиль: https://vk.com/id362****24, регистрация: 23.01.2025. Выявлены совпадения: синхронизированная почта, параметры устройства, MAC/DNS/IP адреса. Активность: несколько раз в месяц, 18 друзей (2 пересекаются с основным профилем), 24 сообщества (4 совпадают). Последняя активность: 21.08.2025. Полный анализ всех профилей ВК с расширенными параметрами доступен в полной проверке.`,
    telegramAnalysis: 'В основном аккаунте зафиксирована ежедневная цифровая активность с несколькими постоянными пользователями. В полной проверке доступна детальная выгрузка цифровой активности в группах и каналах Telegram, включая информацию о том, с кем именно общается вторая половина и анализ совместной активности с друзьями.',
    datingAnalysis: `Зафиксирована удалённая анкета на Mamba.ru, зарегистрированная 12.04.2023 по номеру проверяемого. Ссылка: http://www.mamba.ru/anketa.phtml?oid=826****, 2 фотографии, удалена в архив: 09.06.2025. Поскольку анкета в архиве, стандартная мини-проверка не позволяет установить точную причастность. Однако возможен детальный анализ с использованием специализированных инструментов в полной проверке для установления связи с проверяемым лицом.`,
    purchases: 'В полной проверке доступен подробный отчет о покупках вашей второй половины за последние полгода в розничных магазинах и интернет-ресурсах.',
    promotion: `Мини-отчет по проверке верности содержит ограниченную информацию, которой недостаточно для полного развеивания сомнений и получения ответов на все интересующие вопросы. Специальное предложение: промокод PROMO888 дает скидку 30% на полную проверку при заказе в день получения мини-отчета. Закажите полную проверку, оставьте отзыв в нашем сообществе ВКонтакте и получите максимально детальную информацию о цифровой активности вашей второй половины.`,
    fullCheckInfo: `Что вы получите при заказе полной проверки на верность:
• Профессиональную проверку онлайн с анализом множества источников
• Глубокий анализ цифровой жизни партнера во всех соцсетях и мессенджерах  
• Информацию о скрытых и удаленных профилях в социальных сетях
• Подробный анализ активности: с кем, как часто и когда общается партнер
• Понятный структурированный отчет с проверкой на достоверность
• Отчет о покупках за последние полгода в магазинах и онлайн
• 100% конфиденциальность и анонимность проверки`
  })

  const updateField = (field: keyof ReportData, value: string) => {
    setReportData(prev => ({ ...prev, [field]: value }))
  }

  const exportToPDF = () => {
    window.print()
  }

  const ReportView = () => (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print-page">
      {/* Header */}
      <header className="border-b-2 border-gray-200 pb-6 mb-8 p-6 print-section">
        <div className="flex justify-between items-center mb-4 no-print">
          <button
            onClick={() => setActiveTab('parameters')}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Heart size={20} />
            Верность.Про
          </button>
          <button
            onClick={exportToPDF}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FileText size={20} />
            Конфиденциально!
          </button>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Результат мини-проверки на верность
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div>
            <strong>Дата проверки:</strong> {reportData.date}
          </div>
          <div>
            <strong>Номер проверки:</strong> {reportData.reportNumber}
          </div>
          <div>
            <strong>Информация о заказчике:</strong> {reportData.clientInfo || 'Не указана'}
          </div>
        </div>
      </header>

      <div className="p-6 space-y-8">
        {/* Информация о проверке - НОВЫЙ БЛОК */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Информация о проверке
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm leading-relaxed text-gray-800">
              Проверка проведена {reportData.date} под номером {reportData.reportNumber}. 
              В ходе мини-проверки проанализированы основные цифровые следы и публичная информация 
              о проверяемом лице с использованием стандартных методов поиска.
            </div>
          </div>
        </section>

        {/* Информация о заказчике - НОВЫЙ БЛОК */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Информация о заказчике
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm leading-relaxed text-gray-800">
              {reportData.clientInfo || 'Данные заказчика: конфиденциальная информация'}
            </div>
          </div>
        </section>

        {/* Общая информация */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Общая информация
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">ФИО и дата рождения</h3>
              <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
                {reportData.fullName || 'Данные не найдены'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Найденные номера телефонов</h3>
              <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
                {reportData.phoneNumbers || 'Данные не найдены'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Найденные E-mail адреса</h3>
              <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
                {reportData.emails || 'Данные не найдены'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Найденные документы</h3>
              <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
                {reportData.documents || 'Данные не найдены'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Найденные адреса</h3>
              <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
                {reportData.addresses || 'Данные не найдены'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Найденные автомобили</h3>
              <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
                {reportData.cars || 'Данные не найдены'}
              </div>
            </div>
            
            <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Найденные аккаунты соцсетей и мессенджеров</h3>
              <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
                {reportData.socialAccounts || 'Данные не найдены'}
              </div>
            </div>
          </div>
          
          {/* Как записана в телефонной книге */}
          <div className="mt-6">
            <h3 className="font-medium text-gray-700 mb-3 text-lg">
              Как записана ваша вторая половина в телефонной книге других людей
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
                {reportData.phoneBookInfo || 'Данные не найдены'}
              </div>
            </div>
          </div>
        </section>

        {/* Цифровая активность основного аккаунта ВК */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Цифровая активность основного аккаунта ВК
          </h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg shadow-sm">
            <div className="text-sm leading-relaxed text-gray-800">
              {reportData.vkActivity}
            </div>
          </div>
        </section>

        {/* Информация о дополнительном найденном аккаунте ВК */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Информация о дополнительном найденном аккаунте ВК
          </h2>
          <div>
            <h3 className="font-medium text-red-600 mb-3 flex items-center text-lg">
              ⚠️ Найден дополнительный аккаунт ВК
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-sm">
              <div className="text-sm leading-relaxed text-gray-800">
                {reportData.additionalVkAccount}
              </div>
            </div>
          </div>
        </section>

        {/* Цифровая активность основного аккаунта в Телеграм */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Цифровая активность основного аккаунта в Телеграм
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
            <div className="text-sm leading-relaxed text-gray-800">
              {reportData.telegramAnalysis}
            </div>
          </div>
        </section>

        {/* Информация о найденных аккаунтах на сайтах знакомств и флирта */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Информация о найденных аккаунтах на сайтах знакомств и флирта
          </h2>
          <div>
            <h3 className="font-medium text-red-600 mb-3 text-lg">Аналитическое заключение по результатам проверки</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-sm">
              <div className="text-sm leading-relaxed text-gray-800">
                {reportData.datingAnalysis}
              </div>
            </div>
          </div>
        </section>

        {/* Отчет о последних покупках */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Отчет о последних покупках в сети
          </h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-sm">
            <div className="text-sm leading-relaxed text-gray-800">
              {reportData.purchases}
            </div>
          </div>
        </section>

        {/* Промо-блок */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-green-600 border-b-2 border-green-200 pb-2">
            Успей получить скидку 50% на полную проверку на верность!
          </h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-sm">
            <div className="text-sm leading-relaxed text-gray-800">
              {reportData.promotion}
            </div>
          </div>
        </section>

        {/* Кнопки действий */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg print-section no-print">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Узнайте полную информацию, которую скрывает ваша вторая половина прямо сейчас!
            </h3>
            <p className="text-md text-gray-700 mb-4">
              Стоимость полной проверки от 500 рублей в зависимости от индивидуальной технической сложности 
              и объема информации. Точную сумму можно рассчитать прямо сейчас у нашего менеджера.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://vk.com/vernostpro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
              >
                Перейти в сообщество ВК
              </a>
              <a
                href="https://t.me/VernostService"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
              >
                Рассчитать стоимость
              </a>
            </div>
            <p className="text-sm text-gray-600 font-medium">
              Сообщите менеджеру ваш промокод со скидкой
            </p>
          </div>
        </section>

        {/* Что получите */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Что вы получите при заказе полной проверки на верность
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="text-sm leading-relaxed text-gray-800">
              {reportData.fullCheckInfo}
            </div>
          </div>
        </section>

        {/* Политика конфиденциальности */}
        <section className="print-section">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Политика конфиденциальности и обеспечения анонимности клиентов
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg border text-sm leading-relaxed">
            Политика конфиденциальности и обеспечения анонимности клиентов. В целях обеспечения максимальной конфиденциальности и полной анонимности наших клиентов данный отчет передается исключительно заказчику и не сохраняется в наших системах в виде копий. После успешной отправки, отчет автоматически удаляется с сервера отправителя, что исключает его дальнейшее хранение. Мы придерживаемся строгой политики конфиденциальности и гарантируем полную анонимность наших клиентов! Вся информация, связанная с заказом, не сохраняется на наших серверах после его выполнения и не передается третьим лицам с нашей стороны ни при каких обстоятельствах.
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 border-t bg-gray-50 p-4">
        © All Rights Reserved. Proverka.Vernosti 2025.
      </footer>
    </div>
  )

  const ParametersView = () => (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {activeTab === 'report' ? <ReportView /> : <ParametersView />}
    </div>
  )
}

export default App