import React, {Component} from 'react';
import './App.css';
import Movie from './movie.js';

// Render : componentWillMount() -> render() -> componentDidMount()
// Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

class App extends Component {

  state = { }

  componentDidMount() {

    this._getMovies();
    /*
    setTimeout(() => {
      this.setState({ // this.state.movies='...' (x)
        movies: [
          {
            title: "강철비",
            poster: "http://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F29e145adc47af5158ef8269c330a93e52d9d9a90"
          }, {
            title: "코코",
            poster: "http://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0ff1ab772dd3070b07297f5998c588305cfb5b07"
          }, {
            title: "그것만이 내 세상",
            poster: "http://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd01572b0c0851e1746daeea012f0a8841d2253a4"
          }, {
            title: "메이즈러너 : 데스큐어",
            poster: "http://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc24258a9c4c8658cb332d2418fe9fff563186600"
          }, {
            title: "신과함께",
            poster: "http://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fff9d430c0d2df2a1c659ccba8b621ad2251f6f02"
          }
        ]
      }) // state를 변경하면 새로운 state와 함께 render가 다시 작동된다.
    }, 3000)
    */
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    //callApi 작업이 완료되기 전까지 실행되지 않음(성공이든 실패든)
    this.setState({
      movies
    })
  }

  _callApi = ()=> {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  /* my function _function name */
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie
              title={movie.title_english}
              poster={movie.medium_cover_image}
              key={movie.id}
              genres={movie.genres}
              synopsis={movie.synopsis} />
    })
    return movies
  }

  render() {
    return (<div className={this.state.movies ? "App" : "App-loading"}>
      {
        this.state.movies
          ? this._renderMovies()
          : 'Loading...'
      }
    </div>)
  }
}

export default App;
