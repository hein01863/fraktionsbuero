import React from 'react'
import { Settings } from 'lucide-react'

interface HeaderProps {
  onSettings: () => void
}

const Header: React.FC<HeaderProps> = ({ onSettings }) => {
  const date = new Date().toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <header className="flex items-center justify-between mb-6">
      <div className="text-lg text-gray-600">{date}</div>
      <h1 className="text-2xl font-bold">Fraktionsbüro</h1>
      <button
        className="p-2 rounded-full hover:bg-gray-200"
        onClick={onSettings}
        aria-label="Einstellungen"
      >
        <Settings className="w-6 h-6" />
      </button>
    </header>
  )
}

export default Header
