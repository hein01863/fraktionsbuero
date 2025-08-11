import React from 'react'
import Tile from './Tile'

interface ActionTilesProps {
  onAction: (name: string) => void
}

const actions = [
  'Anfrage stellen',
  'Antrag einreichen',
  'Historie',
  'Laufender Haushalt',
  'Meine Dokumente',
  'Fraktionsdokumente',
  'Meine Reden',
  'An Sitzung teilnehmen',
]

const ActionTiles: React.FC<ActionTilesProps> = ({ onAction }) => (
  <Tile title="Schnellaktionen">
    <div className="grid grid-cols-2 gap-3">
      {actions.map((a) => (
        <button
          key={a}
          className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-left"
          onClick={() => onAction(a)}
        >
          {a}
        </button>
      ))}
    </div>
  </Tile>
)

export default ActionTiles
