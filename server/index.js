import express from "express";
import cors from "cors";

import initializeRoutes from "./routes/index";

const app = express();
const port = 3030;

app.use(cors());
app.use(express.json());

initializeRoutes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
