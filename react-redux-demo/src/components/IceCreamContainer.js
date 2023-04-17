import React from 'react'
import {buyIceCream} from '../Redux/IceCream/IceCreamActions'
import { connect } from 'react-redux'

function iceCreamContainer(props) {
    return (
        <div>
            <div>Number of Icecreams: {props.numOfIceCreams} </div>
            <button onClick={props.buycCake}>Buy Icecreams</button>
        </div>
    )
}

const mapStateTooProps = staate =>{
    return{
        numOfIceCreams: staate.iceCream.numOfIceCreams
    }
}

const mapDispatchTooProps = disspatch =>{
    return{
        buycCake: ()=> disspatch(buyIceCream())
    }
}

export default connect(mapStateTooProps, mapDispatchTooProps)(iceCreamContainer)
