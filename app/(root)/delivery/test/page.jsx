import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';
import React from 'react'

export default async function Test() {
  // let preloadedTasks = (await preloadQuery(api.order.get))._valueJSON;
  // console.log(preloadedTasks)
    
  return (
    <div className='mt-20'>
      {/* {preloadedTasks.map(item => (
        <div key={item._id}>{item._id}</div>
      ))} */}
    </div>
  )
}
