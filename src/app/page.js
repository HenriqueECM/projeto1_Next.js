import Header from "../components/Header";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header title="Bem-vindo ao meu Portfólio Pessoal " />
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contato</Link>
    </div>
  );
}
