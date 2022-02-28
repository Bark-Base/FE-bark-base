import { useState } from "react";
import Accordion from "../../components/Accordion/Accordion";

export default function EditPet() {

const [pet, setPet] = useState()

const contact = (<>
        <input
          className=""
          type=""
          id="website"
          required
          placeholder="website"
        //   value={pet.contact.vet.website}
        //   onChange={(e) => setPet(e.target.value)}
        />
        <input
          className=""
          type=""
          id="phone"
          required
          placeholder="phone"
        //   value={pet.contact.vet.website}
        //   onChange={(e) => setPet(e.target.value)}
        />
        <input
          className=""
          type=""
          id="address"
          required
          placeholder="address"
        //   value={pet.contact.vet.website}
        //   onChange={(e) => setPet(e.target.value)}
        />
</>)

    return (
        <section>
        <button>{
            //pet.name
            }
            </button>
        <button>Remove Pet</button>
        <input />
        <input />
<Accordion heading='vet'
copy={contact}/>
<Accordion heading='walker'
copy={contact}/>
<Accordion heading='trainer'
copy={contact}/>
<button>cancel</button>
<button>save</button>
        </section>
    )

}