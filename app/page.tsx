import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-6xl font-display font-semibold tracking-tight mb-6 leading-tight">
          Applications qui créent des connexions authentiques
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          ROMECK développe des applications mobiles qui favorisent les conversations 
          profondes et les moments de connexion sincères entre les gens.
        </p>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-display font-bold mb-4">100</div>
          <h2 className="text-2xl font-display font-semibold mb-4">Questions de la Vie</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Une application mobile qui transforme le jeu de cartes à succès en expérience 
            numérique. 160 questions soigneusement sélectionnées pour briser la glace et 
            créer des conversations authentiques entre couples, amis et familles.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Google Play →
            </a>
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              App Store →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-display font-semibold mb-4">À propos</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ROMECK est une société française spécialisée dans le développement d'applications 
            mobiles qui enrichissent les relations humaines.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nos produits sont conçus avec soin pour préserver l'authenticité et la simplicité 
            des expériences que nous créons, tout en exploitant la puissance du numérique pour 
            les rendre accessibles à tous.
          </p>
        </div>
      </div>

      <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
        <h2 className="text-3xl font-display font-semibold mb-4">Besoin d'aide ?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl">
          Notre équipe est disponible pour répondre à vos questions sur nos applications, 
          votre compte, ou tout autre sujet.
        </p>
        <Link 
          href="/support" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  );
}
