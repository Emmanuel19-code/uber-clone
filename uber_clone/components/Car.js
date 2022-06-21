import React from 'react'

const styles={
    wrapper:`flex items-center p-4`
}

function Car({service,img}) {
  return (
    <div className={styles.wrapper}>
       <div className='w-14 mr-4'>
        <img src={img} alt=""/>  
       </div>
        <div className='flex-1'>
            <h4 className='font-medium'>{service}</h4>
            <p className='text-sm text-blue-500'>time</p>
        </div>
         <div className='text-sm'>
            price
         </div>
    </div>
  )
}

export default Car