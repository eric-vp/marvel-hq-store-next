export async function GET() {
  const apiKey = process.env.COMICVINE_API_KEY;
  const url = `https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&limit=50&filter=volume.publisher:10`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; HQStoreApp/1.0; +https://yourdomain.com)",
      }
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Erro na API Comic Vine" }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    console.log("Resposta da API Comic Vine:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Erro interno no servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}