import React from "react";
import {connect} from 'react-redux';
import {getMovieList} from '../actions/actions';
import Movie from "./Movie";


class MovieList extends React.Component {
    componentWillMount() {
        this.props.getMovieList();
    }
    render() {
        return (
            <div>
                {
                    this.props.movies.map((each) => {
                        return (<Movie movie={each}/>)
                    })
                }
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps =({
    getMovieList
});
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);

