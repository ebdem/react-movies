import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    // npx json-server --watch src/api/movies.json --port 3002 --> json server izleme
    //fetch asenkron olarak network sorguları yapmamızı sağlayan bir javascript fonksiyonu ve bize bir promise döner
    //fetch yapıcaksak componentDidMount içinde yapmak en mantıklısı
    movies: [],

    search: "",
  };

  async componentDidMount() {
    //axios http istekleri yapmak iiçin kullanılan promise tabanlı bir kütüphane
    const response = await axios.get("http://localhost:3002/movies");

    this.setState({ movies: response.data });
  }

  //AXIOS API
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <Router>
        <div className="container">
            <Switch>
            <Route path='/' exact render={() => (
                        <React.Fragment>
                            <div className="row">
                        <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                        </div>
                    </div>
                    <MovieList
                        movies={filteredMovies}
                        deleteMovieProps={this.deleteMovie}
                    />
                     
            </React.Fragment>
         )}> 
         </Route>
          


        <Route path='/add' render={() => (
            <AddMovie/>

        )}> 

        </Route> 
            </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
