import React, {Component} from 'react';

class MovieList extends Component{

    render(){
        const movieNodes = this.props.movieData.map( movie => {
        return <movie key="movie.id" url="movie.url">{movie.name}</movie>
        })



        return(
         <>
          {movieNodes}
         </>
        )
    }

}

export default MovieList;