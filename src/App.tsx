import { useState, useEffect, useCallback } from 'react'
import './index.css'

// Типы состояний приложения
type AppState = 'searching' | 'payment' | 'checking' | 'success' | 'cancelled' | 'timeout'

// Генератор уникального номера транзакции
const generateTransactionId = () => {
  return `TXN${Date.now()}${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`
}

function App() {
  const [currentState, setCurrentState] = useState<AppState>('searching')
  const [timeLeft, setTimeLeft] = useState(600) // 10 минут в секундах
  const [transactionId, setTransactionId] = useState('')

  // Функция перезагрузки приложения
  const resetApp = useCallback(() => {
    setCurrentState('searching')
    setTimeLeft(600)
    setTransactionId('')
  }, [])

  // Обработка начальной загрузки
  useEffect(() => {
    if (currentState === 'searching') {
      // Анимация поиска реквизитов 10-15 секунд
      const searchTimeout = setTimeout(() => {
        setCurrentState('payment')
      }, 12000 + Math.random() * 3000) // 12-15 секунд

      return () => clearTimeout(searchTimeout)
    }
  }, [currentState])

  // Таймер обратного отсчета для страницы оплаты
  useEffect(() => {
    if (currentState === 'payment' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setCurrentState('timeout')
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [currentState, timeLeft])

  // Обработка нажатия кнопки "Оплачено"
  const handlePaymentClick = () => {
    setCurrentState('checking')
    // Анимация проверки 7-10 секунд
    setTimeout(() => {
      setTransactionId(generateTransactionId())
      setCurrentState('success')
    }, 7000 + Math.random() * 3000)
  }

  // Форматирование времени MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Компонент подвала
  const Footer = () => (
    <footer className="bg-black text-white text-xs p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>Платежный сервис по приему платежей. © 2025</p>
        <p className="mt-1">
          Для оплаты переводите точную сумму в размере 999 рублей на указанный номер (Оплата по системе быстрых платежей)
        </p>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex-1 container mx-auto px-4 py-8">
        
        {/* Состояние поиска реквизитов */}
        {currentState === 'searching' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Поиск реквизитов для оплаты</h1>
                <p className="text-gray-600">Подождите, система подбирает оптимальный способ оплаты...</p>
              </div>
              <div className="bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{width: '70%'}}></div>
              </div>
            </div>
          </div>
        )}

        {/* Состояние страницы оплаты */}
        {currentState === 'payment' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <h1 className="text-xl font-bold">Реквизиты найдены</h1>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-4">Детали оплаты</h2>
                  <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <p className="text-gray-700 mb-3">
                      Для оплаты переведите точную сумму в размере <span className="font-bold text-xl text-green-600">499 рублей</span> по номеру телефона:
                    </p>
                    <div className="bg-white p-3 rounded-lg border-2 border-dashed border-gray-300 text-center">
                      <p className="font-mono text-2xl font-bold text-gray-800">+7 981 848 79 57</p>
                      <p className="text-sm text-gray-600 mt-1">Яндекс Банк (Людмила Ивановна С.)</p>
                    </div>
                    <p className="text-sm text-red-600 mt-2 font-medium">в течение 5 минут</p>
                  </div>
                </div>

                <div className="mb-6 text-xs text-gray-500 bg-gray-50 p-3 rounded">
                  <p><strong>ООО «Верность»</strong></p>
                  <p>194021, г. Санкт-Петербург, проспект 2-й Муринский, д. 53.</p>
                </div>

                <div className="mb-6 space-y-2">
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      ℹ️ После выполненного перевода нажмите кнопку "Оплачено" для подтверждения платежа в системе.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
                    <p className="text-amber-800 text-sm">
                      ⚠️ <strong>Внимание:</strong> Переведите ровно ту сумму, которая указана для оплаты.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handlePaymentClick}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-lg"
                  >
                    Оплачено
                  </button>
                  <button
                    onClick={resetApp}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
                  >
                    Отменить
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Состояние проверки платежа */}
        {currentState === 'checking' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Проверка платежа</h1>
                <p className="text-gray-600">Обрабатываем ваш платеж...</p>
              </div>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}

        {/* Состояние успешной оплаты */}
        {currentState === 'success' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h1 className="text-2xl font-bold">Платеж успешно выполнен</h1>
              </div>
              
              <div className="p-8">
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-6">
                  <h2 className="font-semibold text-green-800 mb-3">Подтверждение транзакции</h2>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Номер транзакции:</span>
                      <span className="font-mono font-bold">{transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Сумма:</span>
                      <span className="font-bold">499 рублей</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Статус:</span>
                      <span className="text-green-600 font-semibold">Успешно обработан</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Время:</span>
                      <span>{new Date().toLocaleString('ru-RU')}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Ваш платеж подтвержден системой. Спасибо за оплату!
                  </p>
                  <button
                    onClick={resetApp}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-200"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Состояние отмены по таймауту */}
        {currentState === 'timeout' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <h1 className="text-2xl font-bold">Платеж отменён</h1>
              </div>
              
              <div className="p-8 text-center">
                <p className="text-gray-600 mb-6">
                  Время ожидания истекло. Платеж был автоматически отменен.
                </p>
                <button
                  onClick={resetApp}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
                >
                  Повторить оплату
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Состояние отмены пользователем */}
        {currentState === 'cancelled' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-500 to-slate-600 text-white p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✕</span>
                </div>
                <h1 className="text-2xl font-bold">Операция отменена</h1>
              </div>
              
              <div className="p-8 text-center">
                <p className="text-gray-600 mb-6">
                  Платеж был отменен пользователем.
                </p>
                <button
                  onClick={resetApp}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
                >
                  Повторить оплату
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
}

export default App