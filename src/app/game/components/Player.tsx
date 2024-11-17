import React from 'react'
import Image from 'next/image'
const Player = () => {
    return (
        <div>
            <Image src="/player.png" width={80} height={80} alt='player'/>
        </div>
    )
}

export default Player