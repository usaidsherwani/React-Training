import React from 'react'
import { buyCake } from '../Redux/Cake/cakeActions'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <img
                      src="./IMG_2430.avif"
                      alt='logo'
                      title='Home'
                      className='desktopLogo img-fluid'
                    />
            {/* <amp-img
                src="/IMG_2430.avif"
                alt='logo'
                width="264"
                height="195"

            >
                <nonscript>
                    <img
                      src="https://brainarator.com/static/images/logo.png"
                      alt='logo'
                      title='Home'
                      className='desktopLogo img-fluid'
                    />
                  </nonscript>
            </amp-img> */}
            <div>Number of Cakes: {props.numOfCaakes} </div>
            <button onClick={props.buycCake}>Buy Cake</button>
        </div>
    )
}

const mapStateTooProps = staate => {
    return {
        numOfCaakes: staate.cake.numOfCakes
    }
}

const mapDispatchTooProps = disspatch => {
    return {
        buycCake: () => disspatch(buyCake())
    }
}

export default connect(mapStateTooProps, mapDispatchTooProps)(CakeContainer)
