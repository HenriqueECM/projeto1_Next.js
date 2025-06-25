import Link from 'next/link';

export default function Header({ title }) {
  return (
    <header className="p-7 flex justify-around items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <nav className="flex gap-4 text-blue-900">
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </header>
  );
}