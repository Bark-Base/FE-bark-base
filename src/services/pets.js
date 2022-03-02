export async function addPet({ ownerId, name, birthday='', imageUrl='' }) {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/pet`, {
      credentials: "include",
      mode: "cors",
      method: "POST",
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
export async function updatePet( { petId, name, birthday, imageUrl } ) {  
  console.log(petId, name, birthday, imageUrl)
  try {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/pet/${petId}`, {
    credentials: "include",
    mode: "cors",
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, birthday, imageUrl}),
  });
  const body  = res.json();
  return body;
} catch (error) {
  console.error(error.message);
  return {};
}
}
export async function addContact({ type='', name='', phone='', email='', address='', ownerId, petId }) {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/contact`, {
      credentials: "include",
      mode: "cors",
      method: "POST",
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

export async function getPets(ownerId) {
  try {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/pet/all/${+ownerId}`, {
    credentials: "include",
    method: "get",
    mode: "cors",
  });
  const body  = res.json();
  return body;
} catch (error) {
  console.error(error.message);
  return [];
}
}
export async function updateContacts({contact_id, name, email, phone, address} ) {
  try {
    console.log(contact_id, name, email, phone, address)
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/contact/${+contact_id}`, {
    credentials: "include",
    mode: "cors",
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, email, phone, address}),
  });
  const body  = res.json();
  return body;
} catch (error) {
  console.error(error.message);
  return {};
}
}