import React from 'react'

 class MovieList extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-4' >
                    <div className='card mb-4 shadow-sm'>
                        <img 
                        src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg'
                        className='card-img-top'
                        alt='Sample Movie'/>
                        <div className='card-body'>
                            <h5 className='card-title'>Sample Movie</h5>
                            <p className='card-text'>Sample Movie Text</p>
                            <div className='d-flex justify-content-between  align-items-center'>
                                <button type='button' className='btn btn-md btn-outline-danger'>DELETE</button>
                                <h2><span className='badge badge-info'>9</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default MovieList;
