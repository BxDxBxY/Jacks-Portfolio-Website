// Import the express module
import express, { urlencoded } from "express";
import cors from "cors";
import { sendEmail } from "./mailer.js";

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(cors());
app.post("/sendemail", async (req, res) => {
  try {
    let user = req.body;
    console.log(user);
    await sendEmail(user.name, user.email, user.message);
    return res.send("Hello, World!");
  } catch (error) {
    return res.send({ error: error.message });
  }
});

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
