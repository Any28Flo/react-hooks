import React, {Component} from 'react'
import styled from 'styled-components'
import {Poster} from './MovieFunc'
import Overdrive from 'react-overdrive'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

class MovielDetail  extends Component{

    state={
        movieDetail : {}
    }

    async componentDidMount(){
        try{
            const res = await  fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=752c40ead27873575d61b3395b9911d8&language=en-US`)
            const movies = await res.json();
            console.log(movies)
            this.setState({
                movieDetail : movies
            })

        }catch(e){
            console.log(e);
        }
    }
    render(){
        const {movieDetail} = this.state;
        return(
            <MovieWrapper backdrop = {`${BACKDROP_PATH}${movieDetail.backdrop_path}`}>
                <MovieInfo>
                    <Overdrive id={movieDetail.id}>

                        <Poster  src={`${POSTER_PATH}${movieDetail.poster_path}`} alt={movieDetail.title}/>
                    </Overdrive>

                    <div>
                        <h1>{movieDetail.title}</h1>
                        <h3>{movieDetail.release_date}</h3>
                        <p>{movieDetail.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>
        )
    }
}

export default MovielDetail

const MovieWrapper = styled.div` 
  position:relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size:cover;
`
const MovieInfo = styled.div`
  background:white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div{
    margin-left: 20px;
  }
  img{
    position:relative;
    top: -5rem;
  }
`;