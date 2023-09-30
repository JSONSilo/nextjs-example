// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const header = {
      "Content-Type": "application/json",
      "X-SILO-KEY": process.env.JSONSILO_API_KEY,
    };

    const result = await fetch(
      "https://api.jsonsilo.com/98c362fd-a701-4194-a845-6b2ddb7e733c",
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
