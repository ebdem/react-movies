This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## fetch api
//FETCH API
     deleteMovie = async (movie) => {
         const baseURL = `http://localhost:3002/movies/${movie.id}`;
         await fetch(baseURL, {
             //fetch de method kullanmamız gerekmez ise default olarak GET methodu olur
             method:'DELETE'
         })
         const newMovieList = this.state.movies.filter(
             m => m.id !== movie.id
         );
        // eğer herhangi bir state nesnemiz olmasaydı bunu kullanabilirdik
          this.setState({
              movies:newMovieList
          })
      
         //state nesnemiz olduğu için bunu kullanıyoruzzzzz güncelleme yapıyoruz
         this.setState(state => ({
             movies:newMovieList
         }))
     }

## delete movie by pure react

   deleteMovie = (movie) => {
         const newMovieList = this.state.movies.filter(
             m => m.id !== movie.id
         );
       // eğer herhangi bir state nesnemiz olmasaydı bunu kullanabilirdik
         this.setState({
             movies:newMovieList
         })
  
            // state nesnemiz olduğu için bunu kullanıyoruzzzzz güncelleme yapıyoruz
         this.setState(state => ({
             movies:newMovieList
         }))
     }


## fetch url acces
  async componentDidMount(){
         const baseURL = 'http://localhost:3002/movies';
         const response =await fetch(baseURL);
         console.log(response);
         const data =await response.json()
         console.log(data)
         this.setState({movies:data})
     }

## serialize 
const newMovie = serialize(e.target, {hash:true})

//kullanımı bu şekildedir ve girilen key valuelarını objeye çevirir


## Sorting by id greater

sort((a, b) => {
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0
    })

## Truncate func
const truncateOwerview = (string, maxLength) =>{
      if(!string) return null;
      if(string.length <= maxLength) return string;
      return `${string.substring(0,maxLength)} ...`
    }

## Edit Screen 
async componentDidMount() {
        const id = this.props.match.params.id
        
        //console.log(id)
        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        //console.log(response.data)

        const movie = response.data;

        this.setState({
            name:movie.name,
            rating:movie.rating,
            imageURL:movie.imageURL,
            overwiev:movie.overview
        })
    }


## value change edit event
onInputChange = (e) => {
        //console.log(e.target.name)
        //console.log(e.target.value)

        this.setState({
            [e.target.name] : e.target.value
        })

    }
