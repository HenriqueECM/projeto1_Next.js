import "../styles/globals.css";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 min-h-screen p-10">
      <section>
        <h1 className="text-4xl font-bold">Olá, Eu sou Henrique Menel</h1>
        <h2 className="text-2xl pt-3">Sobre mim</h2>
        <p className="pt-2">
          Olá! Me chamo Henrique Menel e atualmente sou aprendiz de Desenvolvimento de Sistemas no CentroWeg...
        </p>
      </section>
    </div>
  );
}
