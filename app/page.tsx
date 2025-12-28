import { Players } from "@/components/players";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center p-4">
        <Players />
      </main>
    </div>
  );
}
