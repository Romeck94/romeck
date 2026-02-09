import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ROMECK - Applications qui créent des connexions authentiques",
  description: "ROMECK développe des applications mobiles qui favorisent les conversations authentiques et les connexions humaines.",
  keywords: "ROMECK, 100 Questions de la Vie, application mobile, conversations, connexions",
  other: {
    'google-site-verification': 'mdwCtKnY2TNuhqZttTC9NBu2avl7BYWGAZqaj1R-eqk'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-gray-200">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <Link href="/" className="text-2xl font-display font-semibold tracking-tight hover:opacity-70 transition-opacity">
                ROMECK
              </Link>
              <div className="flex gap-8 text-sm">
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Confidentialité
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                  CGU
                </Link>
                <Link href="/support" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Support
                </Link>
                <Link href="/legal" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Mentions légales
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-gray-200 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">ROMECK</h3>
                  <p className="text-gray-600 text-sm max-w-md">
                    Applications qui créent des connexions authentiques
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Politique de confidentialité
                  </Link>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Conditions d'utilisation
                  </Link>
                  <Link href="/support" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Support
                  </Link>
                  <Link href="/legal" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Mentions légales
                  </Link>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
                © {new Date().getFullYear()} ROMECK. Tous droits réservés.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
