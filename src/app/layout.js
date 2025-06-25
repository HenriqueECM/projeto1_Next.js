import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Feito com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header title="Bem-vindo ao meu Portfólio Pessoal" />
        <main className="p-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
