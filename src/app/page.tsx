import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Welcome to Typing Speed Game</h1>
      <Link href="/game">
        <button className="mt-8 bg-blue-500 px-6 py-3 rounded-md text-xl">
          Start Game
        </button>
      </Link>
    </main>
  );
}
