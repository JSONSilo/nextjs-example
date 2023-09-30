// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const header = {
      "Content-Type": "application/json"
    };

    const result = await fetch(
      "https://api.jsonsilo.com/public/cd140031-5515-4e1c-aef5-d51fa6df021b",
      { headers: header }
    );

    if (!result.ok) {
      throw new Error("Failed to fetch data from the external API");
    }

    const data = await result.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}