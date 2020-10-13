import React from 'react';
import { Link } from 'react-router-dom';

 class SearchBar extends React.Component {

   

    handleFormSubmit = (event) => {

        //preventDefault varsayılan hareketi engeller
        event.preventDefault();
    }

    render() {

        

        return (
            <div>
               <form onSubmit={this.handleFormSubmit} className='form-row mb-5 mt-3'>
                   <div className='col-10'>
                       <input onChange={this.props.searchMovieProp}
                        type='text' className='form-control' 
                        placeholder='Search a Movie'
                        
                        />
                   </div>
                    <div className='col-2'>
                        <Link to='/add' 
                        type='button'
                        className='btn btn-md btn-danger'
                        style={{float:'right'}}
                        >
                            Add Movie
                        </Link>
                    </div>
               </form>
                
            </div>
        )
    }
}

export default SearchBar;
