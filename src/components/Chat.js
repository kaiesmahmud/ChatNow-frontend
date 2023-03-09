import React from 'react';
import ChatBox from './ChatBox';
import ChatList from './ChatList';
//icons 
import {AiOutlineSend} from 'react-icons/ai';
const Chat = () => {
    return (
        <div className=' my-2 p-5 min-h-[90vh]   rounded-xl flex justify-center items-start gap-x-4'>
            <ChatList/>
            <div>
                <ChatBox/>
                <div className='flex justify-between min-h-[30%]'>
                    <input type="text" className=' bg-inherit bg-slate-800 rounded-lg p-3 w-[92%] shadow-md active:border-none' placeholder='Write Something.. ' />
                    <button type="submit" className='p-3 border rounded-lg hover:bg-slate-900  transition-all duration-200 overflow-hidden'>
                        <AiOutlineSend className='text-2xl text-center'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;