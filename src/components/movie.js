import React, {Component} from 'react';

class Movie extends Component{

    render(){
        return(
            <div>
                <li>
                    <a href={this.props.url}>{this.props.children}</a>
                </li>
            </div>
        )
    }

}

export default Movie;