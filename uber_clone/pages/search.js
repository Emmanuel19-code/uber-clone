import  { ArrowNarrowLeftIcon, PlusIcon, StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useState } from 'react'

const styles={
    wrapper:`bg-gray-200 h-screen `,
    Backcontainer: `bg-white px-4`,
    inputContainer:`bg-white flex items-center `,
    savedPlace:``,
    images:`w-10 flex flex-col mr-2 items-center`,
    inputBoxes:`flex flex-col flex-1`,
    input:`h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none`,
    plus:`h-10 w-10 rounded-full bg-gray-200 flex items-center ml-3`,
    savedPlace:`flex items-center bg-white px-4 py-2`,
    confirmlocation:`flex justify-center`,
    confirmbuttton:`bg-black text-white p-3 flex flex-1 m-2 items-center justify-center my-2`
}


function Search() {
   const [pickUp,setPickUp]=useState();
   const [drop,setDrop]=useState();
   console.log(pickUp)
   console.log(drop)
  return (
    <div className={styles.wrapper}>
       <div className={styles.Backcontainer}>
        <Link href="/">
          <ArrowNarrowLeftIcon className="h-12 w-12 cursor-pointer" />  
        </Link>
       </div>
       <div className={styles.inputContainer}>
               <div className={styles.images}>
                   <img src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' alt="" className='h-2.5 '/>
                   <img src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'  alt="" className='h-10'/>
                   <img src="https://img.icons8.com/windows/50/000000/square-full.png" alt="" className='h-3'/>
               </div>
             <div className={styles.inputBoxes}>
            <input type="text" placeholder='enter pickup location' 
             value={pickUp}
            className={styles.input} 
            onChange={(e)=>setPickUp(e.target.value)}
            />
            <input type="text"  placeholder="where to" 
            value={drop}
             onChange={(e)=>setDrop(e.target.value)}
            className={styles.input}/>
        </div>
        <div className={styles.plus}>
            <PlusIcon className='h-12 w-12'/>
        </div>
       </div>
       <div className={styles.savedPlace}>
         <StarIcon className='h-10 w-10 bg-gray-400 p-2 rounded-full mr-2'/>
         <h4>Saved Places</h4>
       </div>
       <Link href={{
        pathname:"/confirmpages",
        query:{
          pickUp:pickUp,
          dropOfn:drop
        }
      }}>
<div className={styles.confirmlocation}>
            <button className={styles.confirmbuttton}>CONFIRM LOCATIONS</button>
        </div>
       </Link>
        
    </div>
  )
}

export default Search