import React, { useState } from 'react';


export default function CardModel1({...props}) {
  const [isHovered, setIsHovered] = useState(false);

  const customizedIcon = React.cloneElement(props.icon, {
    color: isHovered ? '#292524': '#d97706',
    size: 48
  });

  return (
    <div 
      className='h-72 w-96 border-b-amber-600 border-b bg-stone-800 hover:bg-amber-600 text-zinc-300 hover:text-stone-800 hover:border-b-zinc-300 hover:scale-105 hover:border-b-2 transition-transform transform' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='p-6'>
        {customizedIcon}
        <p className='font-semibold text-2xl py-6'>{props.name}</p>

        <p className='w-5/6 font-semibold'>{props.description}</p>
      </div>

    </div>
  )
}