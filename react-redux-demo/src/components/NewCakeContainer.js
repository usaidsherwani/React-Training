import React from 'react'
import {buyCake} from '../Redux/Cake/cakeActions'
import { connect } from 'react-redux'
import {useState} from 'react'

function NewCakeContainer(props) {
    
    const [number, setNumber] = useState(1)

    return (
        <div>
            <div>Number of Cakes: {props.numOfCaakes} </div>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buycCake(number)}>Buy Cake</button>
        </div>
    )
}

const mapStateTooProps = staate =>{
    return{
        numOfCaakes: staate.cake.numOfCakes
    }
}

const mapDispatchTooProps = disspatch =>{
    return{
        buycCake: (number)=> disspatch(buyCake(number))
    }
}

export default connect(mapStateTooProps, mapDispatchTooProps)(NewCakeContainer)
