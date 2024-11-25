export default async function GetData(query: string) {
  try {
    const response = await fetch(
      `http://localhost:3001/calculate-radius?query=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
