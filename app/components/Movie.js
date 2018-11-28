import React from 'react';
import './Movie.scss'

class Movie extends React.Component{

    render() {
        const url = `https://image.tmdb.org/t/p/original/${this.props.movie.poster_path}`;
        return (
            <div className="movie">
                <div>
                    <img src={url}/>
                    <div>
                        <span className="movie__title">{this.props.movie.original_title}</span>
                        <span>{this.props.movie.overview}</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Movie;