const exerciseCalculator = (daily_exercises: Array<number>, target: number): Result => {
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

console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 2));