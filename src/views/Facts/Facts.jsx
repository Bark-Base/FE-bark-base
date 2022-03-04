import PetFacts from "../../Data/Facts";
import "./Facts.css";

export default function Facts() {
    return (
        <section className="facts-view">
            {PetFacts.map((fact) => (<section key={fact.title}>
<h2>{fact.title}</h2>
<p>{fact.copy}</p>
</section>
            )
            )} 
        </section>
    )
}