import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';



class App extends React.Component {

    state = {
        movies: [
            {
                "name": "The Matrix 3",
                "rating": "8.1",
                "overview": " The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
                "id": 1
              },
              {
                "name": "The Matrix Reloaded",
                "rating": "6.9",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
                "overview": " Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition.",
                "id": 2
              },
              {
                "name": "Saw 3D",
                "rating": "7.5",
                "overview": "Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
                "id": 3
              },
              {
                "name": "Hostage",
                "rating": "6.3",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
                "overview": " t, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
                "id": 13
              }, {
                "id": 4,
                "name": "Rogue",
                "rating": 7.4,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
            },

            {
                "id": 5,
                "name": "Project Power",
                "rating": 6.7,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
            },

            {
                "id": 6,
                "name": "Superman",
                "rating": 7.6,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
            },
            {
                "id": 23,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },

            {
                "id": 21,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },

            {
                "id": 22,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            },

            {
                "id": 25,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },

            {
                "id": 26,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            }
        ],
        search:''
    }

    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        //eğer herhangi bir state nesnemiz olmasaydı bunu kullanabilirdik
        // this.setState({
        //     movies:newMovieList
        // })
        
            //state nesnemiz olduğu için bunu kullanıyoruzzzzz güncelleme yapıyoruz
        this.setState(state => ({
            movies:newMovieList
        }))
    }

    searchMovie = (event) => {
        this.setState({search:event.target.value})
    }

    render(){

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        )
        return(
            <div className='container'>

                <div className='row'>
                    <div className='col-lg-12'>
                        <SearchBar searchMovieProp={this.searchMovie}/>
                    </div>
                    
                </div>
                <MovieList 
                movies={filteredMovies}
                deleteMovieProps= {this.deleteMovie}
                
                />

                
            </div>
            
        );
    }
}

export default App;
