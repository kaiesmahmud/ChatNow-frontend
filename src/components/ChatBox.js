import React from 'react';
//icons
import {GiEmptyHourglass}from 'react-icons/gi'
import {BiSearchAlt}from 'react-icons/bi'
const ChatBox = () => {
    return (
        <div className=' my-2 p-5 w-[50vw] min-h-[70vh]  rounded-xl bg-white bg-opacity-10 shadow-lg'>
            
            <div className='flex flex-col justify-between  '>
                <div className='flex  justify-between  p-10'>
                    <GiEmptyHourglass className='text-[400px] mx-auto animate-pulse'/>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;