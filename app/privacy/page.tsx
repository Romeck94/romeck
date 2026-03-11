export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-display font-semibold tracking-tight mb-4">
        Politique de confidentialité
      </h1>
      <p className="text-gray-600 mb-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

      <div className="prose">
        <h2>1. Introduction</h2>
        <p>
          ROMECK (ci-après "nous", "notre" ou "nos") s'engage à protéger la vie privée 
          des utilisateurs de ses applications mobiles. Cette politique de confidentialité 
          explique comment nous collectons, utilisons, partageons et protégeons vos données 
          personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
        </p>

        <h2>2. Responsable du traitement</h2>
        <p>
          <strong>ROMECK</strong><br />
          SASU au capital variable<br />
          SIRET : 99449372400011<br />
          24 rue Descartes<br />
          94200 Ivry-sur-Seine<br />
          Email : 100questionsvie@gmail.com
        </p>

        <h2>3. Données collectées</h2>
        <h3>3.1 Application "100 Questions de la Vie"</h3>
        <p>Nous collectons les données suivantes :</p>
        <ul>
          <li><strong>Données de compte</strong> : adresse email, identifiant utilisateur</li>
          <li><strong>Données d'utilisation</strong> : progression dans les questions, parties sauvegardées</li>
          <li><strong>Données d'abonnement</strong> : statut d'abonnement, historique des paiements via RevenueCat</li>
          <li><strong>Données publicitaires</strong> : identifiant publicitaire via AdMob pour les utilisateurs gratuits</li>
          <li><strong>Données techniques</strong> : type d'appareil, version du système d'exploitation, identifiant de l'application</li>
        </ul>

        <h2>4. Base légale et finalités du traitement</h2>
        <ul>
          <li><strong>Exécution du contrat</strong> : fourniture des services de l'application, gestion de votre compte</li>
          <li><strong>Intérêt légitime</strong> : amélioration de nos services, analyses statistiques anonymisées</li>
          <li><strong>Consentement</strong> : publicités personnalisées (vous pouvez retirer ce consentement à tout moment)</li>
          <li><strong>Obligation légale</strong> : conservation des données de facturation selon les obligations comptables</li>
        </ul>

        <h2>5. Partage des données</h2>
        <p>Vos données sont partagées uniquement avec :</p>
        <ul>
          <li><strong>Firebase / Google Cloud</strong> : hébergement et base de données</li>
          <li><strong>RevenueCat</strong> : gestion des abonnements</li>
          <li><strong>AdMob (Google)</strong> : affichage de publicités pour les utilisateurs gratuits</li>
          <li><strong>Apple App Store / Google Play Store</strong> : traitement des paiements</li>
        </ul>
        <p>
          Nous ne vendons jamais vos données personnelles à des tiers. Nos prestataires sont 
          contractuellement tenus de protéger vos données et de les utiliser uniquement aux 
          fins pour lesquelles nous les leur transmettons.
        </p>

        <h2>6. Transferts internationaux</h2>
        <p>
          Certaines données sont hébergées sur des serveurs situés aux États-Unis (Firebase, RevenueCat). 
          Ces transferts sont encadrés par les clauses contractuelles types approuvées par la 
          Commission européenne et les mécanismes de conformité appropriés.
        </p>

        <h2>7. Durée de conservation</h2>
        <ul>
          <li><strong>Compte actif</strong> : tant que votre compte est actif</li>
          <li><strong>Compte inactif</strong> : 3 ans après la dernière connexion, puis suppression</li>
          <li><strong>Données de facturation</strong> : 10 ans conformément aux obligations légales</li>
          <li><strong>Données anonymisées</strong> : conservation illimitée à des fins statistiques</li>
        </ul>

        <h2>8. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
          <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
          <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
          <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
          <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
          <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
          <li><strong>Droit de retirer votre consentement</strong> : à tout moment pour les traitements basés sur le consentement</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à : <strong>100questionsvie@gmail.com</strong>
        </p>
        <p>
          Vous avez également le droit d'introduire une réclamation auprès de la Commission 
          Nationale de l'Informatique et des Libertés (CNIL) : <a href="https://www.cnil.fr">www.cnil.fr</a>
        </p>

        <h2>9. Sécurité</h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
          protéger vos données contre la perte, l'utilisation abusive, l'accès non autorisé, 
          la divulgation, l'altération ou la destruction, notamment :
        </p>
        <ul>
          <li>Chiffrement des données en transit (HTTPS/TLS)</li>
          <li>Authentification sécurisée Firebase</li>
          <li>Règles de sécurité Firestore strictes</li>
          <li>Accès limité aux données par nos équipes</li>
          <li>Audits de sécurité réguliers</li>
        </ul>

        <h2>10. Cookies et technologies similaires</h2>
        <p>
          Nos applications mobiles n'utilisent pas de cookies. Les technologies de suivi 
          sont limitées aux SDK nécessaires au fonctionnement de l'application (Firebase, 
          AdMob, RevenueCat) dont vous êtes informé dans cette politique.
        </p>

        <h2>11. Données des mineurs</h2>
        <p>
          Nos services ne sont pas destinés aux personnes de moins de 18 ans. Nous ne collectons 
          pas sciemment de données personnelles auprès de mineurs. Si vous êtes parent ou tuteur 
          et découvrez que votre enfant nous a fourni des données, contactez-nous immédiatement.
        </p>

        <h2>12. Modifications de cette politique</h2>
        <p>
          Nous pouvons mettre à jour cette politique de confidentialité occasionnellement. 
          Nous vous informerons de tout changement significatif via l'application ou par email. 
          La date de "Dernière mise à jour" en haut de cette page indique la dernière révision.
        </p>

        <h2>13. Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité ou vos données 
          personnelles, contactez-nous à :<br />
          <strong>Email</strong> : 100questionsvie@gmail.com<br />
          <strong>Courrier</strong> : ROMECK, 24 rue Descartes, 94200 Ivry-sur-Seine
        </p>
      </div>
    </div>
  );
}
