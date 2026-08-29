import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Great_Vibes } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Baby Shower de Santiago | Angie & Luis',
  description:
    'Te invitamos a celebrar el Baby Shower de Santiago. Sábado 26 de Septiembre de 2026 en el Salón Social 2, Conjunto Navarra.',
  openGraph: {
    title: 'Baby Shower de Santiago | Angie & Luis',
    description:
      'Acompáñanos a celebrar la dulce espera de Santiago. Sábado 26 de Septiembre de 2026.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${jakarta.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-slate-900 bg-[#f8fafc] selection:bg-sky-200">
        {children}
      </body>
    </html>
  );
}
