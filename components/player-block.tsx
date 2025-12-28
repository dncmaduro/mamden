'use client'

import { PointBlock } from "./point-block"
import { PointActions } from "./point-actions"

interface PlayerBlockProps {
  name: string
  setName: (name: string) => void
  point: number
  setPoint: (point: number) => void
  onRemove?: () => void
}

export const PlayerBlock = ({
  name,
  setName,
  point,
  setPoint,
  onRemove,
}: PlayerBlockProps) => {
  return (
    <div className="w-[340px] rounded-2xl border bg-white p-4 shadow-sm">
      {/* Row: name + point + remove */}
      <div className="flex items-center gap-3">
        <input
          placeholder="Player name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-10 flex-1 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
        />

        <PointBlock point={point} />

        {onRemove && (
          <button onClick={onRemove} className="text-sm text-red-500">
            ✕
          </button>
        )}
      </div>

      {/* Actions row */}
      <div className="mt-4">
        <PointActions
          onPlus1={() => setPoint(point + 1)}
          onPlus2={() => setPoint(point + 2)}
          onPlus3={() => setPoint(point + 3)}
          onMinus1={() => setPoint(point - 1)}
        />
      </div>
    </div>
  )
}
