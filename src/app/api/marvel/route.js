import { MD5 } from "crypto-js";

export async function GET(request) {
  const PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
  const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;

  if (!PUBLIC_KEY || !PRIVATE_KEY) {
    return new Response(
      JSON.stringify({ error: "Faltam as chaves da Marvel na env." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const ts = Date.now().toString();
    const hash = MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

    const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=12`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(`https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=12`);

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro na API Marvel:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno no servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}