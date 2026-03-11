export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-display font-semibold tracking-tight mb-4">
        Conditions générales d'utilisation
      </h1>
      <p className="text-gray-600 mb-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

      <div className="prose">
        <h2>1. Acceptation des conditions</h2>
        <p>
          En téléchargeant, installant ou utilisant les applications mobiles développées par 
          ROMECK (ci-après "l'Application" ou "nos Applications"), vous acceptez d'être lié 
          par les présentes Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas 
          ces conditions, veuillez ne pas utiliser nos Applications.
        </p>

        <h2>2. Définitions</h2>
        <ul>
          <li><strong>ROMECK</strong> : ROMECK SASU, SIRET 99449372400011</li>
          <li><strong>Application</strong> : toute application mobile développée et publiée par ROMECK</li>
          <li><strong>Utilisateur</strong> : toute personne utilisant l'Application</li>
          <li><strong>Contenu</strong> : questions, textes, images et autres éléments de l'Application</li>
          <li><strong>Services</strong> : fonctionnalités et services fournis par l'Application</li>
        </ul>

        <h2>3. Description des services</h2>
        <h3>3.1 Application "100 Questions de la Vie"</h3>
        <p>
          L'Application propose 160 questions soigneusement sélectionnées pour favoriser les 
          conversations authentiques. Elle offre :
        </p>
        <ul>
          <li>40 questions gratuites avec publicité (AdMob)</li>
          <li>120 questions premium accessibles via abonnement</li>
          <li>Mode Jeu Rapide pour des questions aléatoires</li>
          <li>Mode Parties Sauvegardées pour suivre la progression</li>
        </ul>

        <h2>4. Compte utilisateur</h2>
        <h3>4.1 Création de compte</h3>
        <p>
          L'utilisation complète de l'Application nécessite la création d'un compte via Firebase 
          Authentication. Vous devez fournir une adresse email valide et créer un mot de passe.
        </p>
        <h3>4.2 Sécurité du compte</h3>
        <p>
          Vous êtes responsable de la confidentialité de vos identifiants de connexion et de 
          toutes les activités effectuées sous votre compte. Vous devez nous informer immédiatement 
          de toute utilisation non autorisée de votre compte.
        </p>

        <h2>5. Abonnement et paiements</h2>
        <h3>5.1 Formule d'abonnement</h3>
        <p>
          L'abonnement premium donne accès à l'intégralité des 160 questions sans publicité :
        </p>
        <ul>
          <li><strong>Prix</strong> : 4,99 € / mois</li>
          <li><strong>Essai gratuit</strong> : 3 jours</li>
          <li><strong>Renouvellement</strong> : automatique chaque mois sauf annulation</li>
        </ul>
        <h3>5.2 Traitement des paiements</h3>
        <p>
          Les paiements sont traités par Apple App Store ou Google Play Store selon votre 
          plateforme. Les abonnements sont gérés via RevenueCat.
        </p>
        <h3>5.3 Annulation</h3>
        <p>
          Vous pouvez annuler votre abonnement à tout moment via les paramètres de votre compte 
          App Store ou Google Play. L'annulation prend effet à la fin de la période d'abonnement en cours.
        </p>
        <h3>5.4 Remboursements</h3>
        <p>
          Les demandes de remboursement sont gérées conformément aux politiques d'Apple et Google. 
          Nous ne proposons pas de remboursements directs. Pour toute demande, contactez le support 
          de votre plateforme.
        </p>

        <h2>6. Publicité</h2>
        <p>
          Les utilisateurs de la version gratuite verront des publicités via AdMob toutes les 3 
          questions. Les abonnés premium n'ont pas de publicité. Nous ne contrôlons pas le contenu 
          des publicités tierces affichées.
        </p>

        <h2>7. Propriété intellectuelle</h2>
        <h3>7.1 Droits de ROMECK</h3>
        <p>
          L'Application, son contenu, ses fonctionnalités et tous les droits de propriété 
          intellectuelle associés sont la propriété exclusive de ROMECK et sont protégés par 
          les lois françaises et internationales sur le droit d'auteur et la propriété intellectuelle.
        </p>
        <h3>7.2 Licence d'utilisation</h3>
        <p>
          Nous vous accordons une licence personnelle, non exclusive, non transférable et révocable 
          pour utiliser l'Application à des fins personnelles et non commerciales, conformément 
          aux présentes CGU.
        </p>
        <h3>7.3 Restrictions</h3>
        <p>Vous vous engagez à ne pas :</p>
        <ul>
          <li>Copier, modifier, distribuer ou créer des œuvres dérivées de l'Application</li>
          <li>Désassembler, décompiler ou tenter d'extraire le code source</li>
          <li>Utiliser l'Application à des fins commerciales sans autorisation écrite</li>
          <li>Supprimer ou modifier les mentions de droits d'auteur</li>
          <li>Utiliser l'Application d'une manière qui viole les lois applicables</li>
        </ul>

        <h2>8. Utilisation acceptable</h2>
        <p>Vous acceptez de :</p>
        <ul>
          <li>Utiliser l'Application conformément aux lois applicables</li>
          <li>Fournir des informations exactes lors de la création de votre compte</li>
          <li>Ne pas tenter de contourner les mesures de sécurité ou les systèmes de paiement</li>
          <li>Ne pas utiliser l'Application pour harceler, menacer ou nuire à autrui</li>
          <li>Ne pas surcharger ou perturber le fonctionnement de l'Application</li>
        </ul>

        <h2>9. Disponibilité et modifications</h2>
        <h3>9.1 Disponibilité</h3>
        <p>
          Nous nous efforçons de maintenir l'Application disponible 24h/24 et 7j/7, mais nous 
          ne garantissons pas une disponibilité ininterrompue. Nous pouvons suspendre l'accès 
          temporairement pour maintenance ou mises à jour.
        </p>
        <h3>9.2 Modifications de l'Application</h3>
        <p>
          Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie de 
          l'Application à tout moment, avec ou sans préavis. Nous ne serons pas responsables 
          envers vous ou des tiers pour toute modification, suspension ou interruption.
        </p>

        <h2>10. Résiliation</h2>
        <h3>10.1 Par l'utilisateur</h3>
        <p>
          Vous pouvez cesser d'utiliser l'Application et supprimer votre compte à tout moment 
          en nous contactant ou via les paramètres de l'Application.
        </p>
        <h3>10.2 Par ROMECK</h3>
        <p>
          Nous pouvons suspendre ou résilier votre accès à l'Application immédiatement, sans 
          préavis ni responsabilité, en cas de violation des présentes CGU.
        </p>

        <h2>11. Limitation de responsabilité</h2>
        <p>
          L'Application est fournie "en l'état" sans garantie d'aucune sorte. Dans toute la 
          mesure permise par la loi applicable, ROMECK décline toute garantie, expresse ou 
          implicite, concernant l'Application.
        </p>
        <p>
          ROMECK ne sera pas responsable des dommages indirects, accessoires, spéciaux, 
          consécutifs ou punitifs, y compris la perte de profits, de données, d'utilisation 
          ou autres pertes intangibles résultant de votre utilisation de l'Application.
        </p>

        <h2>12. Indemnisation</h2>
        <p>
          Vous acceptez d'indemniser et de dégager ROMECK de toute responsabilité en cas de 
          réclamations, dommages, obligations, pertes, responsabilités, coûts ou dettes, et 
          dépenses résultant de votre utilisation de l'Application ou de votre violation des 
          présentes CGU.
        </p>

        <h2>13. Droit applicable et juridiction</h2>
        <p>
          Les présentes CGU sont régies par le droit français. Tout litige relatif à 
          l'interprétation ou à l'exécution des présentes sera soumis aux tribunaux compétents 
          de Créteil, France, sauf disposition légale contraire.
        </p>

        <h2>14. Divisibilité</h2>
        <p>
          Si une disposition des présentes CGU est jugée invalide ou inapplicable, les autres 
          dispositions resteront pleinement en vigueur.
        </p>

        <h2>15. Modifications des CGU</h2>
        <p>
          Nous nous réservons le droit de modifier ces CGU à tout moment. Nous vous informerons 
          de tout changement significatif via l'Application ou par email. Votre utilisation 
          continue de l'Application après la publication des modifications constitue votre 
          acceptation des nouvelles CGU.
        </p>

        <h2>16. Contact</h2>
        <p>
          Pour toute question concernant ces CGU, contactez-nous à :<br />
          <strong>Email</strong> : 100questionsvie@gmail.com<br />
          <strong>Courrier</strong> : ROMECK, 24 rue Descartes, 94200 Ivry-sur-Seine, France
        </p>
      </div>
    </div>
  );
}
