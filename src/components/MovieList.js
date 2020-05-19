import React, { useState, useEffect} from 'react'
import MovieFunct from "./MovieFunct"
import styled from 'styled-components'

const MovieList = () => {
    const [movies ,setMovies] = useState([]);

    useEffect( ()=>{
      async  function fetchingData (){
          const res = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key=752c40ead27873575d61b3395b9911d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
          res
              .json()
              .then( res => setMovies(res.results))
              .catch(e  => console.log(e))

      }
      fetchingData();
    }, [])

    return(
        <MovieGrid>
            {
                movies.map( (movie, id) => (<MovieFunct key={id} movie={movie}/>))

            }
        </MovieGrid>

    )
}
const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6 , 1fr);
  grid-row-gap: 1rem;
`;
export default MovieList;