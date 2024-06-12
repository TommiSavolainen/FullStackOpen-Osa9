export const calculateExercise = (target: number, daily_exercises: Array<number>): Result => {
    const average = daily_exercises.reduce((a, b) => a + b, 0) / daily_exercises.length;
    const rating = average >= target ? 3 : average >= target - 1 ? 2 : 1;
    const ratingDescription = rating === 3 ? 'Excellent' : rating === 2 ? 'Not too bad but could be better' : 'Poor';
    return {
        periodLength: daily_exercises.length,
        trainingDays: daily_exercises.filter(d => d > 0).length,
        success: average >= target,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    };
};

type Result = {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
};

// if (process.argv.length < 4) {
//     throw new Error('Not enough arguments');
// }

// const target = Number(process.argv[2]);
// const daily_exercises = process.argv.slice(3).map(d => Number(d));

// if (isNaN(target) || daily_exercises.some(d => isNaN(d))) {
//     throw new Error('Provided values were not numbers!');
// }

// console.log(calculateExercise(target, daily_exercises));