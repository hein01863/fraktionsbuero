import React from 'react'

interface BoardColumnProps {
  title: string
  items: string[]
}

const BoardColumn: React.FC<BoardColumnProps> = ({ title, items }) => (
  <div className="bg-gray-100 rounded-xl p-3 flex-1 min-w-[150px]">
    <h3 className="font-semibold mb-2">{title}</h3>
    <ul className="space-y-2">
      {items.map((i, idx) => (
        <li key={idx} className="p-2 bg-white rounded-lg shadow">
          {i}
        </li>
      ))}
    </ul>
  </div>
)

export default BoardColumn
