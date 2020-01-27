import React, {Component} from 'react';
import Movie from './movie';

class MovieList extends Component{

    render(){
        const movieNodes = this.props.movieData.map( movie => {
        return <Movie key={movie.id }url={movie.url}>{movie.name}</Movie>
        })



        return(
         
          movieNodes
         
        )
    }

}

export default MovieList;