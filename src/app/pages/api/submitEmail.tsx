import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      const docRef = await addDoc(collection(db, "waitlist"), { email });
      res.status(200).json({ id: docRef.id });
    } catch (e) {
      res
        .status(500)
        .json({ error: "Error adding document: " + (e as Error).message });
    }
  } else {
    res.status(405).end();
  }
}
