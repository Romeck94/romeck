export default function Support() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-display font-semibold tracking-tight mb-4">
        Support et contact
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Nous sommes là pour vous aider. Trouvez des réponses ou contactez-nous directement.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <div className="text-4xl mb-4">📧</div>
          <h2 className="text-2xl font-display font-semibold mb-3">Email</h2>
          <p className="text-gray-600 mb-4">
            Pour toute question, suggestion ou problème technique, contactez-nous par email.
          </p>
          <a 
            href="mailto:100questionsvie@gmail.com" 
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            100questionsvie@gmail.com
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Nous répondons généralement sous 24-48 heures
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <div className="text-4xl mb-4">📍</div>
          <h2 className="text-2xl font-display font-semibold mb-3">Courrier</h2>
          <p className="text-gray-600 mb-4">
            Pour toute correspondance officielle, vous pouvez nous écrire à :
          </p>
          <address className="not-italic text-gray-700">
            <strong>ROMECK</strong><br />
            24 rue Descartes<br />
            94200 Ivry-sur-Seine<br />
            France
          </address>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-16">
        <h2 className="text-3xl font-display font-semibold mb-6">Questions fréquentes</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Comment fonctionne l'abonnement premium ?</h3>
            <p className="text-gray-700">
              L'abonnement premium (4,99€/mois) vous donne accès aux 160 questions sans publicité. 
              Vous bénéficiez d'un essai gratuit de 3 jours. L'abonnement se renouvelle automatiquement 
              chaque mois sauf annulation via votre compte App Store ou Google Play.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Comment annuler mon abonnement ?</h3>
            <p className="text-gray-700">
              <strong>Sur iOS</strong> : Paramètres → [votre nom] → Abonnements → 100 Questions de la Vie → Annuler<br />
              <strong>Sur Android</strong> : Google Play Store → Menu → Abonnements → 100 Questions de la Vie → Annuler
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Puis-je obtenir un remboursement ?</h3>
            <p className="text-gray-700">
              Les remboursements sont gérés par Apple ou Google selon votre plateforme. 
              Contactez le support Apple ou Google pour toute demande de remboursement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Mes données sont-elles sécurisées ?</h3>
            <p className="text-gray-700">
              Oui, nous prenons la sécurité de vos données très au sérieux. Nous utilisons 
              Firebase pour l'authentification et le stockage sécurisé. Consultez notre 
              <a href="/privacy" className="text-blue-600 hover:text-blue-800 ml-1">politique de confidentialité</a> 
              pour plus de détails.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">L'application fonctionne-t-elle hors ligne ?</h3>
            <p className="text-gray-700">
              Une connexion internet est requise lors de la première utilisation et pour 
              synchroniser votre progression. Les questions déjà chargées restent accessibles 
              hors ligne.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Puis-je utiliser l'application sur plusieurs appareils ?</h3>
            <p className="text-gray-700">
              Oui, connectez-vous avec le même compte sur vos différents appareils. 
              Votre progression et votre abonnement seront synchronisés automatiquement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Comment supprimer mon compte ?</h3>
            <p className="text-gray-700">
              Pour supprimer votre compte et toutes vos données associées, contactez-nous 
              à 100questionsvie@gmail.com avec votre demande. Nous traiterons votre demande 
              sous 30 jours conformément au RGPD.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Je rencontre un bug, que faire ?</h3>
            <p className="text-gray-700">
              Envoyez-nous un email à 100questionsvie@gmail.com en décrivant le problème 
              et votre appareil (modèle, système d'exploitation). Nous corrigeons les bugs 
              rapidement et vous tiendrons informé.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-display font-semibold mb-4">Informations légales</h2>
        <p className="text-gray-600 mb-4">
          Pour consulter nos documents légaux et politiques :
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/privacy" 
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            Politique de confidentialité →
          </a>
          <a 
            href="/terms" 
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            Conditions d'utilisation →
          </a>
          <a 
            href="/legal" 
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            Mentions légales →
          </a>
        </div>
      </div>
    </div>
  );
}
