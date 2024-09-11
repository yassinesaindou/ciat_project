 

import estimation from "../assets/estimation.png";
import plans from "../assets/plans.png";
import execution from "../assets/execution.png";

export default function Service() {
  return (
    <>
    <div className="grid max-w-[350px] md:max-w-[600px] lg:max-w-[100%] mx-auto lg:grid-cols-[1fr_2fr] gap-3 text-[1rem] text-blue-950 shadow-[0px_2px_5px_0px_rgba(34, 17, 192, 0.1)] bg-blue-50 my-5 ">
      <img
        src={plans}
        alt="Image"
        />
      <div className="px-[10px] py-2">
        <h2 className="font-bold text-blue-950 text-[1.2rem] mb-2">Plans de maison en 2D et 3D</h2>
        <p>
          <span className="text-blue-950 font-bold">Conception 2D sur mesure :</span>Des plans architecturaux détaillés qui offrent une compréhension claire de l'agencement spatial et des dimensions de votre future maison.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Visualisation 3D : </span>Des modèles 3D réalistes qui vous aident à visualiser l'aspect final de votre maison avant le début de la construction. Ce service permet aux clients de voir le design dans les moindres détails, y compris les vues intérieures et extérieures.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Révisions et modifications : </span>Permet aux clients de demander des modifications aux plans jusqu'à ce qu'ils soient entièrement satisfaits.
        </p>
       
      </div>
    </div>
    <div className="grid max-w-[350px] md:max-w-[600px] lg:max-w-[100%] mx-auto lg:grid-cols-[2fr_1fr] gap-3 text-[1rem] text-blue-950 shadow-[0px_2px_5px_0px_rgba(34, 17, 192, 0.1)] bg-blue-50 my-5 ">
      
      <div className="px-[10px] py-2">
        <h2 className="font-bold text-blue-950 text-[1.2rem] mb-2">Exécution sur site</h2>
        <p>
          <span className="text-blue-950 font-bold">Gestion de projet de bout en bout: </span>Depuis les fondations jusqu'aux finitions, nous supervisons chaque aspect du processus de construction, garantissant des normes de qualité élevées et une réalisation dans les délais.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Équipe de construction qualifiée :  </span>Une équipe de constructeurs expérimentés qui donne vie à vos plans avec précision et expertise.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Collaboration avec les entrepreneurs : </span>Coordination avec des entrepreneurs et fournisseurs de confiance pour garantir un processus de construction fluide
        </p>
       
        </div>
        <img
        src={execution}
        alt="Image"
        />
    </div>
    <div className="grid max-w-[350px] md:max-w-[600px] lg:max-w-[100%] mx-auto lg:grid-cols-[1fr_2fr]  gap-3 text-[1rem] text-blue-950 shadow-[0px_2px_5px_0px_rgba(34, 17, 192, 0.1)] bg-blue-50 my-5 ">
      <img
        src={estimation}
        alt="Image"
        />
      <div className="px-[10px] py-2">
        <h2 className="font-bold text-blue-950 text-[1.2rem] mb-2">Estimation des coûts</h2>
        <p>
          <span className="text-blue-950 font-bold">Estimations précises des coûts de construction : </span>Nous fournissons des estimations détaillées qui couvrent tous les aspects de la construction, des matériaux à la main-d'œuvre, afin que vous sachiez à quoi vous attendre financièrement.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Planification budgétaire :  </span>Nous vous aidons à planifier votre budget pour éviter les coûts imprévus et garantir que votre projet reste dans les limites financières.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Recommandations de matériaux :  </span>Suggestions pour des matériaux économiques sans compromettre la qualité.
        </p>
       
      </div>
    </div>
        </>
  );
}
