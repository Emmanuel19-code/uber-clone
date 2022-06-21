import Car from "./Car"
import cars from '../Carlist'
import { useEffect, useState } from "react"
const styles={
  wrapper:`flex-1`
}


function RideSelector({pickUpLocation,dropOfLocation}) {
  const [rideduration,setRideduration]=useState();
   useEffect(()=>{
         fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpLocation[0]},${pickUpLocation[1]};${dropOfLocation[0]},${dropOfLocation[1]}?`
              +
              new URLSearchParams({
                 access_token:'pk.eyJ1IjoiZW1tYW51ZWwtYiIsImEiOiJjbDRsOGI4cmYwbnF5M3FsaHFld2ZleWhkIn0.H7XyA3dXw5vByZYOFHH63Q',
              })
         )
   },[])
  return (
    <div className={styles.wrapper}>
      <div className="text-center py-2 text-gray-500 text-sm border-b">
        <h4 className="">Choose your ride , or swipe up for more</h4>
      </div>
      <div className="overflow-y-auto">
        {
          cars.map((car,index)=>{
               return(
                <Car
                key={index}
                 service={car.service}
                 img={car.img}
                />
               )
          })
        }
            
      </div>
    </div>
  )
}

export default RideSelector