import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Feito com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <html lang="pt-BR" suppressHydrationWarning>
        <head />
        <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}>
          <Header title="Bem-vindo ao meu Portfólio Pessoal" />
          <ThemeSwitcher />
          <main className="p-20 min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
