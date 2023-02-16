export default async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}
