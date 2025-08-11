import React from 'react'
import Tile from './Tile'

interface CalendarTileProps {
  onNew: () => void
}

const CalendarTile: React.FC<CalendarTileProps> = ({ onNew }) => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <Tile title="Kalender" onNew={onNew}>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map((d) => (
          <div key={d} className="p-1 rounded-lg hover:bg-gray-200 cursor-pointer">
            {d}
          </div>
        ))}
      </div>
    </Tile>
  )
}

export default CalendarTile
