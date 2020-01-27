import React, {Component} from 'react';

class Movie extends Component{

    render(){
        return(
            <div>
                <li className="Movies">
                    <a href={this.props.url}>{this.props.children}</a>
                    <br>
                    </br>
                </li>
            </div>
        )
    }

}

export default Movie;