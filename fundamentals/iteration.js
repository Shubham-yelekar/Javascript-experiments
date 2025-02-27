let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
  ];

//   total food and utilityies ?? use reduce

let tasks = [
	{ description: "Write report", completed: false, priority: 2},
	{ description: "Send email", completed: true, priority: 3},
	{ description: "Prepare presentation", completed: false, priority: 1},
];

// give the array that have only incomplete task and priority sorted ?


let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
  ];

// Give average rating 

let averageRating =  movieRatings.map((movie)=>{
    let total = movie.ratings.reduce((sum, rating) => sum + rating, 0 )
    let average = total / movie.ratings.length
    return {title: movie.title, averageRating: average.toFixed(2)}
})
console.log(averageRating)
