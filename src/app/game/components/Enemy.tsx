import React from 'react'
import Image from 'next/image'
import { wordList } from '../../../../utils/wordList'

const Enemy = () => {
    const word = wordList[Math.floor(Math.random() * wordList.length)]

    return (
        <div className='flex flex-col gap-2 justify-center items-center rounded-md'>
            <div className='flex justify-center items-center p-2 bg-white bg-opacity-15'>
                <h1>
                    {word}
                </h1>
            </div>
            <Image src="/enemy.png" width={80} height={80} alt='enemy'/>
        </div>
    )
}

export default Enemy