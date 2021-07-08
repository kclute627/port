import React from 'react'
import pic from '../../assets/pic.png'

const Left = () => {
    return (
        <div className='home-left'>
            <img src={pic} alt="" className="home-left-img" />
            <div className="home-left-text">
                <h4>Kyle Clutter</h4>
                <h6>Full-Stack Web Developer</h6>
            </div>
        </div>
    )
}

export default Left
