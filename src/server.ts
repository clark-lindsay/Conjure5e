import express from "express";
import { Application } from "express";
import { sources } from "./sources";
import { Creature } from "./Creature";
import { conjureAnimals } from "./conjurationSpells";

export function setupServer(): Application {
  const app = express();

  app.use("*", (req, res) => {
    const result = conjureAnimals({
      challengeRating: 1,
      terrains: ["Land"],
      sources: [sources.MM, sources.BR, sources.DMG]
    });
    res.send(
      `<h1>${result.map((creature: Creature) => creature.name).toString()}</h1>`
    );
  });

  return app;
}

const app = setupServer();
const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`hosting @${PORT}`));
