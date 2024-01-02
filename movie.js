// create a class Movie  with the following properties title,studio,Rating

class movie {
    constructor(Title,Studio,Rating = "PG") {
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating;
    }
 // create a method for filtering the PG rated movies

static getPG(movies) {
        return movies.filter(movie => movie.Rating == "PG")
        }
}

// creating instances(objects) for the movie class

const  movie1 = new movie("Casino Royale","Eon Productions","PG13")
const  movie2 = new movie("Rebel Moon","Marvel productions","PG");
const  movie3 = new movie("Iron man","Marvel studios","R")
const  movie4 = new movie("Sarkar","Sun pictures","U/A")
const  movie5 = new movie("Thunivu","Zee studios","U/A")
const  movie6 = new movie("The hulk","Marvel studios","PG")
const  movies = [movie1,movie2,movie3,movie4,movie5,movie6];
console.log(movies);

//  filtering the PG rated movies using the getPG method()

const PGmovies = movie.getPG(movies);
console.log('\n\n',PGmovies)
