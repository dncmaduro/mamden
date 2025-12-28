interface Props {
  onPlus1: () => void
  onPlus2: () => void
  onPlus3: () => void
  onMinus1: () => void
}

const Action = ({ text, onClick }: { text: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="h-10 w-16 rounded-md bg-zinc-900 text-sm font-medium text-white"
  >
    {text}
  </button>
)

export const PointActions = ({ onPlus1, onPlus2, onPlus3, onMinus1 }: Props) => {
  return (
    <div className="flex gap-2">
      <Action text="+1" onClick={onPlus1} />
      <Action text="+2" onClick={onPlus2} />
      <Action text="+3" onClick={onPlus3} />
      <Action text="-1" onClick={onMinus1} />
    </div>
  )
}
