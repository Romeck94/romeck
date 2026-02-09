export default function Legal() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-display font-semibold tracking-tight mb-4">
        Mentions légales
      </h1>
      <p className="text-gray-600 mb-12">Informations légales relatives au site romeck.vercel.app</p>

      <div className="prose">
        <h2>1. Éditeur du site</h2>
        <p>
          Le présent site web romeck.vercel.app est édité par :
        </p>
        <p>
          <strong>ROMECK</strong><br />
          Société par Actions Simplifiée Unipersonnelle (SASU)<br />
          Capital social : Variable<br />
          SIRET : 99449372400011<br />
          Siège social : 24 rue Descartes, 94200 Ivry-sur-Seine, France
        </p>
        <p>
          <strong>Directeur de la publication</strong> : Roman Eisemberg<br />
          <strong>Contact</strong> : 100questionsvie@gmail.com
        </p>

        <h2>2. Hébergement</h2>
        <p>
          Le site est hébergé par :
        </p>
        <p>
          <strong>Vercel Inc.</strong><br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789<br />
          États-Unis<br />
          Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
        </p>

        <h2>3. Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, 
          logiciels) est la propriété exclusive de ROMECK, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation de tout 
          ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est 
          interdite sans autorisation écrite préalable de ROMECK.
        </p>
        <p>
          Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il 
          contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément 
          aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
        </p>

        <h2>4. Liens hypertextes</h2>
        <p>
          Le site peut contenir des liens hypertextes vers d'autres sites internet. ROMECK 
          ne dispose d'aucun moyen de contrôle sur le contenu de ces sites et décline toute 
          responsabilité quant au contenu de ces sites ou aux conséquences de leur utilisation.
        </p>

        <h2>5. Protection des données personnelles</h2>
        <p>
          Les informations recueillies sur ce site font l'objet d'un traitement informatique 
          destiné à la gestion de nos services et applications mobiles.
        </p>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez 
          d'un droit d'accès, de rectification, de suppression et d'opposition aux données 
          personnelles vous concernant.
        </p>
        <p>
          Pour exercer ces droits ou pour toute question relative à la protection de vos données, 
          vous pouvez nous contacter à : <strong>100questionsvie@gmail.com</strong>
        </p>
        <p>
          Pour plus d'informations, consultez notre 
          <a href="/privacy"> politique de confidentialité</a>.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Ce site web n'utilise pas de cookies. Les applications mobiles développées par 
          ROMECK peuvent utiliser des technologies de suivi nécessaires à leur fonctionnement, 
          comme décrit dans notre politique de confidentialité.
        </p>

        <h2>7. Limitation de responsabilité</h2>
        <p>
          ROMECK s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées 
          sur ce site. Toutefois, ROMECK ne peut garantir l'exactitude, la précision ou 
          l'exhaustivité des informations mises à disposition sur ce site.
        </p>
        <p>
          ROMECK ne pourra être tenue responsable des dommages directs ou indirects résultant 
          de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les 
          pertes de données, détériorations, destructions ou virus qui pourraient affecter 
          l'équipement informatique de l'utilisateur.
        </p>

        <h2>8. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont soumises au droit français. En cas de litige et 
          à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de 
          Créteil, France.
        </p>

        <h2>9. Crédits</h2>
        <p>
          <strong>Conception et développement</strong> : ROMECK<br />
          <strong>Design</strong> : ROMECK<br />
          <strong>Rédaction</strong> : ROMECK
        </p>

        <h2>10. Contact</h2>
        <p>
          Pour toute question concernant les mentions légales ou le site web, vous pouvez 
          nous contacter :
        </p>
        <p>
          <strong>Email</strong> : 100questionsvie@gmail.com<br />
          <strong>Courrier</strong> : ROMECK, 24 rue Descartes, 94200 Ivry-sur-Seine, France
        </p>

        <h2>11. Date de mise à jour</h2>
        <p>
          Les présentes mentions légales ont été mises à jour le : {new Date().toLocaleDateString('fr-FR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    </div>
  );
}
