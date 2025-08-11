import React from 'react'
import Tile from './Tile'

interface ChatTileProps {
  onNew: () => void
}

const ChatTile: React.FC<ChatTileProps> = ({ onNew }) => {
  const chats = ['Fraktion intern', 'Finanzausschuss', 'Presse']

  return (
    <Tile title="Chats" onNew={onNew}>
      <ul className="space-y-2">
        {chats.map((c, i) => (
          <li key={i} className="p-2 rounded-lg bg-gray-100">
            {c}
          </li>
        ))}
      </ul>
    </Tile>
  )
}

export default ChatTile
