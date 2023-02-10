import './App.css'

const movies = [
    {
        title: "Star Wars",
        genre: "Sci-fi",
        length: "2hr 13mins",
    },
    {
        title: "Rush Hour",
        genre: "Comedy",
        length: "1hr 30mins",
    }
]

function DisplayMovies() {
    console.log("display movies ran")
    return(
        movies.map(movie => {
            console.log(movie)
            return (
                <div className="movie"> 
                    <li className="title"> {movie.title} </li>
                    <li > {movie.genre} </li>
                    <li > {movie.length} </li>
                </div>
            )
        })
    )
}



function App() {

    return (
        <div className="App">
            <DisplayMovies/>
            <div>App </div>
        </div>
    )
}

export default App
