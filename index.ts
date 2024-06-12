import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercise } from './exerciseCalculator';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const bmi = calculateBmi(height, weight);

  return res.json({ weight, height, bmi });
});


app.post('/exercises', express.json(), (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target }: { daily_exercises: number[], target: number } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).json({ error: 'parameters missing' });
  }

  if (isNaN(Number(target)) || daily_exercises.some((d: number) => isNaN(Number(d)))) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const result = calculateExercise(target, daily_exercises);

  return res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});