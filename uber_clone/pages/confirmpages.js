import React, { useEffect, useState } from 'react'
import Confirmbutton from '../components/Confirmbutton'
import Map from '../components/Map'
import useRouter from 'next/router'
import Link from 'next/link'
import  { ArrowNarrowLeftIcon} from '@heroicons/react/solid'
const styles={
    wrapper:`h-screen flex flex-col`,
}


function Confirmpages() {
  //const router=useRouter();
 // const {pickUp,drop}=router.query;
   //taking the pick location
  const [pickUpLocation,setPickUpLocation]=useState([0,0]);
  //taking the drop of location
  const [dropOfLocation,setDropOfLocation]=useState([0,0]);
  
   const getPickUpCoordinates=()=>{
      const pickUp="Accra"
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?`+
       new URLSearchParams({
             access_token:'pk.eyJ1IjoiZW1tYW51ZWwtYiIsImEiOiJjbDRsOGI4cmYwbnF5M3FsaHFld2ZleWhkIn0.H7XyA3dXw5vByZYOFHH63Q',
             limit:1
       })
      ).then(response=>response.json())
      .then(data=>{
         setPickUpLocation(data?.features?.[0])
      })
   }

   const getDropOfCoordinates=()=>{
        const dropOf="Madina"
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOf}.json?`+
       new URLSearchParams({
             access_token:'pk.eyJ1IjoiZW1tYW51ZWwtYiIsImEiOiJjbDRsOGI4cmYwbnF5M3FsaHFld2ZleWhkIn0.H7XyA3dXw5vByZYOFHH63Q',
             limit:1
       })
      ).then(response=>response.json())
      .then(data=>{
         setDropOfLocation(data?.features?.[0])
      })
   }
   useEffect(()=>{
     getPickUpCoordinates()
     getDropOfCoordinates()
  },[])

  return (
    <div className={styles.wrapper}>
         <Map
         pickUpLocation={pickUpLocation}
         dropOfLocation={dropOfLocation}
        />
        <Confirmbutton/>
    </div>
  )
}

export default Confirmpages