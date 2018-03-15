import React from 'react';
import './movie.css';
import PropTypes from 'prop-types';

/* functional component (dumb) */
function Movie({title,poster,genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie-columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie-columns">
        <h1>{title}</h1>
        <div className="Movie-genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie-synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}

function MoviePoster({poster,alt}) {
  return (<img src={poster} alt={alt} title={alt} className="Movie-poster" />
  )
}

function MovieGenre({genre}) {
  return (<span className="Movie-genre">{genre} </span>
  )
}



Movie.propTypes={
  title:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.array.isRequired,
  synopsis:PropTypes.string.isRequired
}

MoviePoster.propTypes={
  poster:PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired
}

MovieGenre.propTypes={
  genre:PropTypes.string.isRequired
}


/* class component(smart) */
/*

class Movie extends Component {

  static propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
  }

  render(){
    console.log(this.props);
    return (
      <div>
      <h1 className="">{this.props.title}</h1>
      <MoviePoster poster={this.props.poster}/>
      </div>
    )
  }
}

class MoviePoster extends Component {

  static propTypes = {
    poster : PropTypes.string.isRequired
  }

  render(){
    return(
      <img src={this.props.poster} />
    )
  }
}
*/


export default Movie;
