import { db } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(
  req: { method: string; body: { email: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { id?: any; error?: string }): void; new (): any };
      end: { (): void; new (): any };
    };
  }
) {
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      const docRef = await addDoc(collection(db, "waitlist"), { email });
      res.status(200).json({ id: docRef.id });
    } catch (e) {
      const error = e as Error;
      res
        .status(500)
        .json({ error: "Error adding document: " + error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
