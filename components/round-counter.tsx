'use client'

interface RoundCounterProps {
  round: number
  onIncrement: () => void
  onDecrement: () => void
}

export const RoundCounter = ({
  round,
  onIncrement,
  onDecrement,
}: RoundCounterProps) => {
  return (
    <div className="flex items-center gap-2 rounded-full border bg-white px-3 py-1 shadow-sm">
      <button
        onClick={onDecrement}
        className="h-8 w-8 rounded-full bg-zinc-900 text-white text-sm"
      >
        −
      </button>

      <span className="min-w-[64px] text-center text-md font-medium">
        Round {round}
      </span>

      <button
        onClick={onIncrement}
        className="h-8 w-8 rounded-full bg-zinc-900 text-white text-sm"
      >
        +
      </button>
    </div>
  )
}
