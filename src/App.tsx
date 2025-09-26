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
  additionalVkAccount: string
  vkHistory: string
  hiddenFriends: string
  vkActivity: string
  telegramAnalysis: string
  datingAnalysis: string
  phoneBookInfo: string
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
    additionalVkAccount: `Краткий цифровой анализ найденного дополнительного профиля ВК и сравнение его с основным профилем ВК: Основание для цифрового анализа найденного профиля ВК – В ходе поиска дополнительных профилей и аккаунтов в социальных сетях второй половины заказчика, был найден аккаунт ВК, в котором выявлены совпадения в цифровых параметрах учетных записей и устройств проверяемого лица. Сведения о проверяемом профиле ВК: Ссылка на профиль: https://vk.com/id362****24; Дата регистрации профиля: 23.01.2025; В ходе анализа профиля зафиксированы следующие совпадающие параметры: - Совпадения синхронизированного почтового адреса; - Совпадения цифровых параметров устройства при входе в профиль; - Идентичность MAC-адреса DNS-адреса IP-адреса. Результата цифрового анализа профиля id362****24 и сравнения с основным профилем ВК: - Активность: фиксируется с периодичностью несколько раз в месяц; - Друзья: 18 пользователей, из которых 2 совпадают с друзьями основного профиля; - Сообщества: 24 сообщества с разными тематиками, из них 4 совпадают с сообществами основного профиля; - Последняя зафиксированная активность 21.08.2025 года. Вывод: Выявленные совпадения (почтовый адрес, цифровые характеристики устройств, MAC-адрес, DNS-адрес IP-адрес), а также пересечения в списках друзей и сообществ с основным профилем, позволяют предположить принадлежность данного профиля одному и тому же пользователю. Полный цифровой анализ профилей ВК с расширенными параметрами предоставляется в отчете «Полная проверка на верность», который включает в себя: - ссылки на дополнительные найденные профили ВКонтакте; - выгрузка списка друзей, в том числе скрытых; - выгрузка перечня сообществ; - детализированный отчет о цифровой активности профиля; - сравнительный анализ активности профиля и его друзей; - синхронизацию временных меток совместной активности пользователя и его друзей.`,
    vkHistory: '',
    hiddenFriends: 'В основном аккаунте ВК найдены скрытые друзья. К сожалению мини-проверка не предусматривает выгрузку скрытых друзей. Для выгрузки всех друзей профиля, в том числе и скрытых закажите услугу «Полная проверка на верность» и получите полный подробный отчет о всех друзьях вашей второй половины.',
    vkActivity: 'К сожалению, мини-проверка не предусматривает выгрузку информации об активности основного профиля ВК с другими профилями. Для полной выгрузки всей цифровой активности профиля ВК вашей второй половины с другими пользователями ВК, в том числе и скрытыми друзьями, закажите услугу «Полная проверка на верность» и получите полный подробный отчет и узнайте, кому больше всего уделяет время в общении ваша половина ВКонтакте.',
    telegramAnalysis: 'Закажите услугу «Полная проверка на верность» и получите детальный отчёт о цифровой активности вашей второй половины в мессенджере Telegram. В отчёте будет представлена информация о скрытых интересах, включая: - на каких каналах и в каких группах пользователь проводит наибольшее количество времени; - подробные сведения о взаимодействии с другими пользователями, с указанием их Username; - расширенный анализ цифровой активности в Telegram.',
    datingAnalysis: `В ходе проведённого поиска была зафиксирована удалённая анкета пользователя на сайте знакомств и флирта Mamba.ru, зарегистрированная 12.04.2023 года по идентичному номеру телефона проверяемого. Ссылка на удалённую анкету в архив сайта с загруженными 2 фотографиями: http://www.mamba.ru/anketa.phtml?oid=826**** Дата удаления анкеты в архив: 09.06.2025 года. Имеются технические ограничения проверки данного аккаунта, а именно: так как анкета на текущий момент удалена (переведена в архив), идентифицировать дополнительные совпадения и цифровые параметры (по загруженным фотографиям, синхронизированным почтовым адресам, характеристикам устройства при входе, MAC-адресу, DNS- и IP-адресам) стандартным упрощенным способом, предусмотренным при проведении мини-проверки на верность не представилось возможным. Однако, с учётом того, что анкета удалена только в архив сайта и отсутствует подтверждение на полное удаления аккаунта с сайта Mamba.ru, которое приходит как правило на электронную почту, представляется техническая возможность проведение более детального цифрового анализа аккаунта с использованием специализированных сервисов и инструментов. Такой анализ позволит установить точную причастность указанного аккаунта к проверяемому партнёру. Рекомендации Верность.Про: Для более углублённого исследования найденного удалённого профиля на сайте Mamba.ru закажите отчёт по услуге «Полная проверка на верность», который включает в себя: - просмотр анкет на сайтах знакомств с опубликованными фотографиями пользователей, в том числе архивных анкет; - полный цифровой отчёт о найденных профилях с детальным анализом возможной причастности проверяемого лица ко всем обнаруженным страницам и учетным записям на сайтах и сервисах знакомств и флирта.`,
    phoneBookInfo: '',
    purchases: 'Закажи полную проверку на верность и получите подробный отчет с информацией о покупках вашей второй половина за последние пол года в розничных магазинах и интернет-ресурсах.',
    promotion: `Уведомляем, что бесплатный мини-отчет по проверке верности, как правило, содержит ограниченную информацию, которой недостаточно для полного развеивания сомнений и получения ответов на все интересующие вопросы. Мы предлагаем вам воспользоваться услугой полной проверки верности вашей второй половины. В полном отчете вы получите исчерпывающую и точную информацию, которая позволит вам принять обоснованные решения и окончательно развеять все сомнения. Специальное предложение: акция «Скидка 50% на полную проверку за отзыв!» Ваш индивидуальный промокод: PROMO888. Условия акции: закажите полную проверку в день получения мини-отчета, отправив нам сообщение с промокодом "PROMO888". Полная проверка за отзыв» в наше сообщество ВКонтакте. Вы получите скидку 30% на анонимную, детальную проверку вашей второй половины с полной информацией. После получения результата, пожалуйста, оставьте небольшой отзыв о нашей работе или просто поставьте «лайк» в нашем сообществе ВКонтакте. Мы рады помочь вам получить достоверную информацию для уверенности и спокойствия!`,
    fullCheckInfo: `Что вы получите воспользовавшись услугой «Полная проверка на верность»: - Профессиональную проверку на верность онлайн: Мы собираем и анализируем информацию из множества источников, предоставляя вам максимально полный и точный отчет о проведенной проверке на верность. - Глубокий анализ цифровой жизни вашего партнера: Мы тщательно исследуем цифровой след вашего партнера, включая все действующие и актуальные соцсети, мессенджеры и сообщества. - Информацию о скрытых аккаунтах: Мы обнаруживаем скрытые и удаленные профили в социальных сетях и на сайтах знакомств. Мы найдем все, что скрыто от ваших глаз! - Подробный анализ активности в социальных сетях и мессенджерах: Вы узнаете, с кем, как часто и в какое время общается ваш партнер. - Понятный и структурированный отчет: Вся собранная информация проходит многоуровневую проверки на актуальность и достоверность. Мы представляем результаты в удобном и понятном структурированном отчете. - Отчет о покупках вашей второй половины за последние полгода: Найдем и структурируем подробный отчет о совершенных покупках вашей второй половины в розничных магазинах и интернет-ресурсах. - Конфиденциальность и анонимность 100%! Ваши подозрения и вся информация о проведенной проверки на верность останутся гарантированно только между вами и нами.`
  })

  const updateField = (field: keyof ReportData, value: string) => {
    setReportData(prev => ({ ...prev, [field]: value }))
  }

  const exportToPDF = () => {
    window.print()
  }

  const ReportView = () => (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <header className="border-b-2 border-gray-200 pb-6 mb-8 p-6">
        <div className="flex justify-between items-center mb-4">
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
        {/* Общая информация */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Общая информация о второй половине
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
          
          <div className="mt-6">
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

        {/* Дополнительная информация о ВК */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Дополнительная информация об основном профиле ВК проверяемого
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">История изменения основного профиля ВК с момента создания</h3>
              <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
                {reportData.vkHistory || 'Данные не найдены'}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-orange-600 mb-3 text-lg">Скрытые друзья</h3>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg shadow-sm">
                <div className="text-sm leading-relaxed text-gray-800">
                  {reportData.hiddenFriends}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-orange-600 mb-3 text-lg">Отчет и анализ цифровой активности основного профиля ВК с другими пользователями</h3>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg shadow-sm">
                <div className="text-sm leading-relaxed text-gray-800">
                  {reportData.vkActivity}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Telegram анализ */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Цифровой анализ аккаунта Телеграм
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
            <div className="text-sm leading-relaxed text-gray-800">
              {reportData.telegramAnalysis}
            </div>
          </div>
        </section>

        {/* Сайты знакомств */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Отчёт о зарегистрированных аккаунтах на сайтах знакомств и флирта, включая удалённые
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

        {/* Телефонная книга */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Отчет о том как записана ваша вторая половина у других людей в телефонной книге
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="bg-white p-3 rounded border min-h-[60px] text-sm">
              {reportData.phoneBookInfo || 'Данные не найдены'}
            </div>
          </div>
        </section>

        {/* Покупки */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Отчет о совершенных последних покупках вашей второй половины в розничных магазинах и интернет-ресурсах
          </h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-sm">
            <div className="text-sm leading-relaxed text-gray-800">
              {reportData.purchases}
            </div>
          </div>
        </section>

        {/* Промо-блок */}
        <section>
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
        <section className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Получите полный отчет со скидкой 30% прямо сейчас!
            </h3>
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
                Написать менеджеру
              </a>
            </div>
            <p className="text-sm text-gray-600 font-medium">
              Сообщите менеджеру ваш промокод со скидкой
            </p>
          </div>
        </section>

        {/* Что получите */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-200 pb-2">
            Что вы получите при заказе полной проверки на верность
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="text-sm leading-relaxed text-gray-800">
              {reportData.fullCheckInfo}
            </div>
          </div>
        </section>

        {/* Финальная кнопка */}
        <section className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Узнайте полную информацию, которую скрывает ваша вторая половина прямо сейчас!
          </h3>
          <a
            href="https://vk.com/vernostpro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Получить полный отчет!
          </a>
        </section>

        {/* Политика конфиденциальности */}
        <section>
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
            <label className="block text-sm font-medium text-red-600 mb-2 text-base">
              ⚠️ Найден дополнительный аккаунт ВК (ШАБЛОННЫЙ ТЕКСТ - СОЗДАЕТ ИНТРИГУ)
            </label>
            <textarea
              value={reportData.additionalVkAccount}
              onChange={(e) => updateField('additionalVkAccount', e.target.value)}
              className="w-full p-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 min-h-[200px]"
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

        {/* ВК информация */}
        <section className="bg-orange-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Дополнительная информация о ВК</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                История изменения основного профиля ВК
              </label>
              <textarea
                value={reportData.vkHistory}
                onChange={(e) => updateField('vkHistory', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                placeholder="Профиль создан 15.03.2015, последние изменения..."
              />
              <p className="text-xs text-gray-500 mt-1">Хронология изменений профиля ВК с момента создания</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-600 mb-2 text-base">
                🔥 Скрытые друзья (ИНТРИГА ДЛЯ КЛИЕНТА)
              </label>
              <textarea
                value={reportData.hiddenFriends}
                onChange={(e) => updateField('hiddenFriends', e.target.value)}
                className="w-full p-3 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-h-[100px]"
              />
              <div className="bg-orange-50 border border-orange-200 p-3 rounded mt-2">
                <p className="text-xs text-orange-600 font-medium">💡 Этот блок мотивирует заказать полную проверку</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-600 mb-2 text-base">
                🔥 Отчет о цифровой активности ВК (ИНТРИГА)
              </label>
              <textarea
                value={reportData.vkActivity}
                onChange={(e) => updateField('vkActivity', e.target.value)}
                className="w-full p-3 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-h-[100px]"
              />
              <div className="bg-orange-50 border border-orange-200 p-3 rounded mt-2">
                <p className="text-xs text-orange-600 font-medium">💡 Создает желание узнать подробности активности</p>
              </div>
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
              <p className="text-xs text-blue-600 font-medium">📝 Инструкция:</p>
              <p className="text-xs text-blue-600">Добавьте небольшую найденную информацию в начало + шаблонный текст в конце</p>
            </div>
          </div>
        </section>

        {/* Сайты знакомств */}
        <section className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Сайты знакомств и флирта</h2>
          <div>
            <label className="block text-sm font-medium text-red-600 mb-2 text-base">
              💋 Аналитическое заключение (ШАБЛОННЫЙ ТЕКСТ - СИЛЬНАЯ ИНТРИГА)
            </label>
            <textarea
              value={reportData.datingAnalysis}
              onChange={(e) => updateField('datingAnalysis', e.target.value)}
              className="w-full p-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 min-h-[200px]"
            />
            <div className="bg-red-50 border border-red-200 p-3 rounded mt-2">
              <p className="text-xs text-red-600 font-medium">🎯 МАКСИМАЛЬНАЯ ИНТРИГА!</p>
              <ul className="text-xs text-red-600 mt-1 space-y-1">
                <li>• Можно корректировать даты регистрации и удаления</li>
                <li>• Изменять ссылки и ID анкет</li>
                <li>• Этот блок создает сильную ревность у клиента</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Телефонная книга */}
        <section className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Телефонная книга</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📞 Как записана вторая половина у других людей
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
              🎉 Текст акции (можно корректировать)
            </label>
            <textarea
              value={reportData.promotion}
              onChange={(e) => updateField('promotion', e.target.value)}
              className="w-full p-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 min-h-[150px]"
            />
            <div className="bg-green-100 border border-green-300 p-3 rounded mt-2">
              <p className="text-xs text-green-700 font-medium">✏️ Можно изменить:</p>
              <ul className="text-xs text-green-700 mt-1 space-y-1">
                <li>• Промокод (сейчас: PROMO888)</li>
                <li>• Размер скидки (сейчас: 30%)</li>
                <li>• Условия акции</li>
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