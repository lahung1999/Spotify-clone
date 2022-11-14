import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import { FaVolumeUp } from 'react-icons/fa'

const Volume = () => {
    const [{token}] = useStateProvider()
    const setVolumn = async (e) => {
        await axios.put('https://api.spotify.com/v1/me/player/volume',{
            params: {
                volume_percent: parseInt(e.target.value)
            },
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
    }
    return (
        <Container>
            <FaVolumeUp />
            <input type='range' onMouseUp={(e)=>setVolumn(e)} min={0} max={100}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
        font-size: 1.5rem;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
    }
    input {
        width: 10rem;
        border-radius: 2rem;
        height: 0.5rem;
    }
`

export default Volume