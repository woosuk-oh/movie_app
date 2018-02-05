/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
//import MoviePoster from './MoviePoster';

const Movie = ({title, poster, genres, synopsis}) => {
    // 함수에 const 쓰는 이유
    // https://hyunseob.github.io/2016/11/21/misunderstanding-about-const/


    return (
        <div>
            <div className="Movie">

                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1> {title} </h1>
                <div className="Movie_Generes">
                    {genres.map((genre, index) => <MovieGeneres genre={genre} key={index}/>)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
};

function MoviePoster({poster, alt}) {
    return (
        //alt 태그는 이미지에 대한 설명
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGeneres({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}


MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired
};


Movie.defaultProps = {};

MovieGeneres.propTypes = {
    genre: PropTypes.string.isRequired
};

export default Movie;
