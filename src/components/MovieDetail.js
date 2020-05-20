import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Poster} from "./MovieFunct";
import Overdrive from 'react-overdrive'
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'
const MovieDetail = props =>{
    const [movieDetail, setMovieDetail] = useState({})
    useEffect(() =>{
       async function fetchData () {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=752c40ead27873575d61b3395b9911d8&language=en-US`);
            res
                .json()
                .then( res=> setMovieDetail(res))
                .catch( e => console.log(e))
        }
        fetchData()
    }, [])

    if(!movieDetail.id) return null
    return(
        <MovieWrapper backdrop = {`${BACKDROP_PATH}${movieDetail.backdrop_path}`}>
            <MovieInfo>
                <Overdrive id={movieDetail.id}>

                    <Poster  src={`${POSTER_PATH}${movieDetail.poster_path}`} alt={movieDetail.title}/>
                </Overdrive>

                <div>
                    <h1 data-testid="movie-title">{movieDetail.title}</h1>
                    <h3 data-testid="movie-release_date">{movieDetail.release_date}</h3>
                    <p data-testid="movie-detail">{movieDetail.overview}</p>
                </div>
            </MovieInfo>
        </MovieWrapper>
    )
}


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
export default MovieDetail;