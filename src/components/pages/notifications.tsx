import React, { useEffect, useState } from 'react'
import { Bell, Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react'
import Navigation from '../navigationDiscovery'

type NotificationType = 'info' | 'success' | 'warning' | 'error'

interface Notification {
  id: number
  type: NotificationType
  message: string
  read: boolean
}

const initialNotifications: Notification[] = [
  { id: 1, type: 'info', message: 'Switched to React, revamped pages, new features soon', read: false },
  { id: 2, type: 'success', message: 'Regular updates will keep Saguenay dynamic.', read: false },
  { id: 3, type: 'warning', message: 'Saguenay is still in development, so some pages are unavailable.', read: false },
  { id: 4, type: 'error', message: 'For the moment, there are no errors', read: false },
]

const NotificationIcon: React.FC<{ type: NotificationType }> = ({ type }) => {
  switch (type) {
    case 'info':
      return <Info className="h-5 w-5 text-blue-500" />
    case 'success':
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    case 'error':
      return <XCircle className="h-5 w-5 text-red-500" />
  }
}

export default function Notification() {
  useEffect(() => {
    document.title = 'Messages - Saguenay';
  }, []);
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id))
  }

  const unreadCount = notifications.filter(notif => !notif.read).length

  return (
    <>
    <Navigation />
    <div className="bg-black">
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-3xl mx-auto">
        <div className="shadow rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium text-white">Notifications</h1>
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-gray-400 mr-2" />
                <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              </div>
            </div>
          </div>
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li key={notification.id} className={`p-4 sm:p-6 ${notification.read ? 'bg-gray-900' : 'bg-zinc-900'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <NotificationIcon type={notification.type} />
                    <p className={`ml-3 text-sm ${notification.read ? 'text-gray-500' : 'text-white font-medium'}`}>
                      {notification.message}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="mr-2 text-sm bg-zinc-800 text-white hover:text-white"
                      >
                        Mark as read
                      </button>
                    )}
                    <button
                      onClick={() => removeNotification(notification.id)}
                      className="bg-zinc-800 text-white hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {notifications.length === 0 && (
            <p className="text-center py-6 text-white">No notification</p>
          )}
        </div>
      </div>
    </div>
    </div>
    </>
  )
}