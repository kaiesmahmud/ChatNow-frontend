import React from 'react';
//icons
import {BiSearchAlt} from 'react-icons/bi'
import {BsPersonCircle} from 'react-icons/bs'
const ChatList = () => {
    const msgs = [
        {
            id:1,
            name:"Nehal",
            msg:"how are you? "
        },
        {
            id:2,
            name:"Sohel",
            msg:"how are you? "
        },
        {
            id:3,
            name:"Karim",
            msg:"how's your day? "
        },
        {
            id:4,
            name:"Jahid",
            msg:"how's your day? "
        },
        {
            id:5,
            name:"Jahid",
            msg:"how's your day? "
        },
        {
            id:6,
            name:"Jahid",
            msg:"how's your day? "
        },
        {
            id:7,
            name:"Jahid",
            msg:"how's your day? "
        },
    ]
    return (
        <div className=' my-2 p-5 w-[30vw] h-full rounded-xl bg-white bg-opacity-10 shadow-lg text-start'>
            <div className='flex justify-between mb-3'>
                <input type="text" className=' bg-inherit bg-slate-800 rounded-lg p-3 w-[80%] shadow-md active:border-none' placeholder='Search.. ' />
                <button type="submit" className='p-3 border rounded-lg hover:bg-slate-900  transition-all duration-200 overflow-hidden'>
                    <BiSearchAlt className='text-2xl text-center'/>
                </button>
            </div>
            {/*============ Chatlist  --------------------------------------------------*/}
            <div className=' h-[87%]  overflow-y-clip'>
            {
                msgs.map(obj=>(
                    <div key={obj.id} className=' my-1 py-5 px-3 flex gap-x-7 items-center shadow-md rounded-lg opacity-60 
                    hover:opacity-100 hover:cursor-pointer border border-slate-800 hover:border-slate-300'>
                        <div>
                            <BsPersonCircle className='text-4xl'/>
                        </div>
                        <div>
                            <h5>{obj.name}</h5>
                            <h6>{obj.msg}</h6>
                        </div>
                    </div>
                ))
            }
            </div>
            
        </div>
    );
};

export default ChatList;