const URL = "http://localhost:7890";
// const URL = 'https://boiling-meadow-81167.herokuapp.com'

export async function addPet({ ownerId, name, birthday=null, imageUrl=null }) {
  try {
    const res = await fetch(`${URL}/api/v1/pet`, {
      credentials: "include",
      mode: "cors",
      method: "post",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ ownerId: +ownerId, name, birthday, imageUrl  }),
    });
    const results = await res.json();
    return results;
  } catch (error) {
    console.error(error.message);
    return {};
  }
}
export async function addContact({ type='', name='', phone=null, email=null, address=null, ownerId, petId }) {
  try {
    const res = await fetch(`${URL}/api/v1/contact`, {
      credentials: "include",
      mode: "cors",
      method: "post",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ type, name, phone, email, address, ownerId: +ownerId, petId: +petId }),
    });
    const results = await res.json();
    return results;
  } catch (error) {
    console.error(error.message);
    return {};
  }
}

// export async function getPets(ownerId) {
//   try {
//   const res = await fetch(`${URL}/api/v1/pet/all/${ownerId}`, {
//     credentials: "include",
//     mode: "cors",
//   });
//   const { body } = res.json();
//   return body;
// } catch (error) {
//   console.error(error.message);
//   return [];
// }
// }
