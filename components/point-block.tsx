interface Props {
  point: number
}

export const PointBlock = ({ point }: Props) => {
  return (
    <div className="flex h-10 w-14 items-center justify-center rounded-md bg-zinc-900 text-lg font-semibold text-white">
      {point}
    </div>
  )
}
