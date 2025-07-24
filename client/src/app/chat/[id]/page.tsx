import React from 'react'
import Conversations from '@/app/chat/conversations';

export default  function Page ({params} : {params: {id:string}}) {
    const {id} =  params;
    return <Conversations id={id}/>
}