import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost, Pinyon_Script } from 'next/font/google';
import './globals.css';
import { ToileDefs } from '@/components/toile/ToileDefs';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ui',
  display: 'swap',
});

const pinyon = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
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
      className={`${cormorant.variable} ${jost.variable} ${pinyon.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-toile-navy bg-toile-porcelain selection:bg-toile-powder">
        <div className="grain" aria-hidden="true" />
        <ToileDefs />
        {children}
      </body>
    </html>
  );
}
