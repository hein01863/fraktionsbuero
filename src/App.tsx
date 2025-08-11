import React, { useState } from 'react'
import Header from './components/Header'
import ChatTile from './components/ChatTile'
import MeetingTile from './components/MeetingTile'
import CalendarTile from './components/CalendarTile'
import TaskBoard from './components/TaskBoard'
import ActionTiles from './components/ActionTiles'
import Modal from './components/Modal'

const App: React.FC = () => {
  const [modal, setModal] = useState<{ open: boolean; title: string }>({ open: false, title: '' })

  const openModal = (title: string) => setModal({ open: true, title })
  const closeModal = () => setModal({ open: false, title: '' })
  const saveModal = () => closeModal()

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Header onSettings={() => openModal('Einstellungen')} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <ChatTile onNew={() => openModal('Neuer Chat')} />
        <MeetingTile onNew={() => openModal('Neue Sitzung')} />
        <CalendarTile onNew={() => openModal('Neuer Kalendereintrag')} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TaskBoard onNew={() => openModal('Neue Aufgabe')} />
        </div>
        <ActionTiles onAction={(name) => openModal(name)} />
      </div>

      <Modal isOpen={modal.open} title={modal.title} onClose={closeModal} onSave={saveModal}>
        <input type="text" placeholder="Titel" className="w-full mb-4 p-2 border rounded-lg" />
        <textarea placeholder="Beschreibung" className="w-full p-2 border rounded-lg" />
      </Modal>
    </div>
  )
}

export default App
