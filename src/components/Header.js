import Link from 'next/link';
import '../styles/globals.css';

export default function Header({ title }) {
  return (
    // Aqui defini header fixo para as três páginas assim só vou alterar titulo do header
    <header className="header">
      <h1>{title}</h1>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </header>
  );
}
