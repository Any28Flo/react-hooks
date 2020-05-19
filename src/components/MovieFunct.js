import React  from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
//Functional component
//{movie} objectc destructuring

import styled from 'styled-components'
import Overdrive from 'react-overdrive'
//Route path for our images.
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const MovieFunct  = ({movie}) =>{
    if(!movie) return null;
    return(
        <div>
            <Link to={`/${movie.id}`} >
                <Overdrive id={movie.id}>

                    <Poster  src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
                </Overdrive>
            </Link>

        </div>
    )
}

export default MovieFunct
//Define default props
MovieFunct.propTypes={
    movie : PropTypes.shape({
        title : PropTypes.string.isRequired,
        poster_path : PropTypes.string.isRequired,
        id: PropTypes.string.isRequired

    }).isRequired,
    desc : PropTypes.string
}

export const Poster = styled.img`
    box-shadow : 0 0 35px black;

 `;