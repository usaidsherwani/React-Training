import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../Redux/Cake/cakeActions'

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <div>Number of Cakes by Hook:  {numOfCakes}</div>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake from Hook</button>
        </div>
    )
}

export default HooksCakeContainer
