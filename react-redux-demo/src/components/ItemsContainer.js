import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../Redux/Cake/cakeActions'
import {buyIceCream} from '../Redux/IceCream/IceCreamActions'

function ItemsContainer(props) {
    return (
        <div>
            <div>Items: {props.item}</div>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps)=>{
    const itemCount = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return{
        item: itemCount
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    const dispatchFunction = ownProps.cake ? ()=> dispatch(buyCake()) : ()=> dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemsContainer)
