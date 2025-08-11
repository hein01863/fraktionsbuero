import React from 'react'
import Tile from './Tile'

interface MeetingTileProps {
  onNew: () => void
}

const MeetingTile: React.FC<MeetingTileProps> = ({ onNew }) => {
  const meetings = [
    { date: '12.10.2023', title: 'Fraktionssitzung' },
    { date: '18.10.2023', title: 'Ratssitzung' },
  ]

  return (
    <Tile title="Bevorstehende Sitzungen" onNew={onNew}>
      <ul className="space-y-2">
        {meetings.map((m, i) => (
          <li key={i} className="p-2 rounded-lg bg-gray-100 flex justify-between">
            <span>{m.title}</span>
            <span className="text-sm text-gray-500">{m.date}</span>
          </li>
        ))}
      </ul>
    </Tile>
  )
}

export default MeetingTile
