'use client'

import { useState } from "react"
import { PlayerBlock } from "./player-block"
import { RoundCounter } from "./round-counter"

interface Player {
  id: string
  name: string
  point: number
}

const createPlayer = (): Player => ({
  id: Math.random().toString(36).slice(2),
  name: "",
  point: 0,
})

export const Players = () => {
  const [players, setPlayers] = useState<Player[]>([createPlayer(), createPlayer()])
  const [round, setRound] = useState(1)

  const addPlayer = () => {
    if (players.length < 4) setPlayers((prev) => [...prev, createPlayer()])
  }

  const removePlayer = (id: string) => {
    if (players.length > 2) setPlayers((prev) => prev.filter((p) => p.id !== id))
  }

  const updatePlayer = (id: string, data: Partial<Player>) => {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, ...data } : p)))
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Round counter */}
      <RoundCounter
        round={round}
        onIncrement={() => setRound((r) => r + 1)}
        onDecrement={() => setRound((r) => Math.max(1, r - 1))}
      />

      {/* Players grid */}
      <div className="grid grid-cols-2 gap-6">
        {players.map((player) => (
          <PlayerBlock
            key={player.id}
            name={player.name}
            point={player.point}
            setName={(name) => updatePlayer(player.id, { name })}
            setPoint={(point) => updatePlayer(player.id, { point })}
            onRemove={players.length > 2 ? () => removePlayer(player.id) : undefined}
          />
        ))}
      </div>

      {/* Add player */}
      <button
        onClick={addPlayer}
        disabled={players.length >= 4}
        className="h-10 rounded-md bg-black px-5 text-sm font-medium text-white disabled:opacity-40"
      >
        Add player
      </button>
    </div>
  )
}
