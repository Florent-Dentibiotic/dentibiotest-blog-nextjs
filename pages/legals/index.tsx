import Link from "next/link";
import Container from "../../components/container";
import Layout from "../../components/layout";

export default function Legals() {
  return (
    <Layout>
      <div className="p-5 max-w-2xl mx-auto">
        <h2 className="text-2xl text-center font-bold my-4">
          Mentions Légales
        </h2>
        <h3 className="text-xl font-bold my-2">Éditeur :</h3>
        <p>
          <strong>La Forge Med</strong>, SAS au capital de 1000 euros
          <br />
          Société inscrite au RCS de Cusset sous le numéro : 951 195 072
        </p>
        <ul className="list-inside ml-2 my-2">
          <li>75 rue Pierre Semard</li>
          <li>03260 Saint-germain-des-fossés</li>
          <li>mail : contact@laforgemed.fr</li>
        </ul>

        <p className="mt-4 mb-2">Site réalisé par La Forge Med</p>

        <h3 className="text-xl font-bold my-2">Hébergements :</h3>
        <p>Site internet et hébergement des données : </p>

        <ul className="list-inside ml-2 my-2">
          <li>OVH, SAS au capital de 10 174 560 euros</li>
          <li>Siret : 424 761 419 00045</li>
          <li>2 rue Kellermann - 59100 Roubaix</li>
        </ul>

        <Link href="/" className="hover:underline mt-4">
          retour
        </Link>
      </div>
    </Layout>
  );
}
