const URL = "http://localhost:7890";
// const URL = 'https://boiling-meadow-81167.herokuapp.com'

export async function addPet({ ownerId, name, birthday, imageUrl }) {
  try {
    const res = await fetch(`${URL}/api/v1/pet`).send(ownerId, name, birthday, imageUrl);
    const results = await res.json();
    return results;
  } catch (error) {
    console.error(error.message);
    return {};
  }
}
export async function addContact({ type, name, phone, email, address, ownerId, petId }) {
  try {
    const res = await fetch(`${URL}/api/v1/contact`).send(type, name, phone, email, address, ownerId, petId);
    const results = await res.json();
    return results;
  } catch (error) {
    console.error(error.message);
    return {};
  }
}
