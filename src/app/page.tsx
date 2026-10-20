export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-accent text-5xl font-bold">Hello, World</h1>
      <p className="text-gray-600">Tailwind is working.</p>
      <a
        href="https://nextjs.org"
        className="bg-accent/10 text-accent hover:bg-accent rounded-full px-6 py-2 transition-colors hover:text-white"
      >
        Next.js
      </a>
    </main>
  );
}
