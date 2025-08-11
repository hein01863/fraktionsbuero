import React from 'react'
import Tile from './Tile'
import BoardColumn from './BoardColumn'

interface TaskBoardProps {
  onNew: () => void
}

const TaskBoard: React.FC<TaskBoardProps> = ({ onNew }) => {
  const todo = ['Protokoll schreiben', 'Budget prüfen']
  const doing = ['Pressemitteilung']
  const done = ['Antrag X']

  return (
    <Tile title="Aufgabenboard" onNew={onNew}>
      <div className="flex space-x-4 overflow-x-auto">
        <BoardColumn title="To-Do" items={todo} />
        <BoardColumn title="In Bearbeitung" items={doing} />
        <BoardColumn title="Erledigt" items={done} />
      </div>
    </Tile>
  )
}

export default TaskBoard
