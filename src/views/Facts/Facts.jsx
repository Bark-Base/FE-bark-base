import PetFacts from "../../Data/Facts";
import "./Facts.css";

export default function Facts() {
    return (
        <section className="facts-view">
            {PetFacts.map((fact) => (<span key={fact.title}>
<h2>{fact.title}</h2>
<div>{fact.copy}</div>
</span>
            )
            )} 
        </section>
    )
}