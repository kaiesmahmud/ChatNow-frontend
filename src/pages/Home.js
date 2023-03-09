import React from 'react';
import { Chat } from '../components';

//icons
import {BsPersonCircle} from 'react-icons/bs'
import {IoSettingsOutline} from 'react-icons/io5'
import {AiOutlineLogout} from 'react-icons/ai'
const Home = () => {
    return (
        <div className='text-sky-100 h-[90vh] my-4 px-10 flex flex-col items-center'>
            <div className='flex justify-between w-[90%] px-6 min-h-[10vh]'>
                <h1 className='font-light text-[40px] rounded-xl bg-white bg-opacity-10 shadow-lg w-fit  px-3 py-1'>ChatNow !</h1>
                <div className='flex justify-between items-center gap-5'>
                    <h2>Kaies Mahmud Nehal</h2>
                    <BsPersonCircle className='text-4xl'/>
                    <IoSettingsOutline className='text-4xl hover:cursor-pointer'/>
                    <AiOutlineLogout className='text-4xl hover:cursor-pointer'/>
                </div>
            </div>
            
            <Chat/>
        
        </div>
    );
};

export default Home;