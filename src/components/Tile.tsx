import React, { ReactNode } from 'react'

interface TileProps {
  title: string
  onNew?: () => void
  children: ReactNode
}

const Tile: React.FC<TileProps> = ({ title, onNew, children }) => (
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col h-full">
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      {onNew && (
        <button
          onClick={onNew}
          className="px-3 py-1 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          + Neu
        </button>
      )}
    </div>
    <div className="flex-1 overflow-auto">{children}</div>
  </div>
)

export default Tile
