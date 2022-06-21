import mapboxgl from '!mapbox-gl'
import {useEffect} from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';





const styles={
  wrapper:`flex flex-1 h-1/2`
}


mapboxgl.accessToken='pk.eyJ1IjoiZW1tYW51ZWwtYiIsImEiOiJjbDRsOGI4cmYwbnF5M3FsaHFld2ZleWhkIn0.H7XyA3dXw5vByZYOFHH63Q';

function Map({pickUpLocation,dropOfLocation}) {
      useEffect(()=>{
      const map=new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom:3
       })
        AddToMap(map)
          {
            /*
            if(pickUpLocation){
            AddToMap(map,pickUpLocation)
           }
            */
          }
          {
            /*
            adding fit bounds
            if(pickUpLocation && dropOfLocation){
              map.fitBounds(
                [
                  pickUpLocation,
                  dropOfLocation
                ],{
                  padding:50
                }
              )
            }
            
            */
          }
    },[pickUpLocation,dropOfLocation])
    const AddToMap=(map)=>{
          const marker1=new mapboxgl.Marker().setLngLat([1.11111,2.222222]).addTo(map);
    }
  return (
    <div id="map" className={styles.wrapper}>
        map
    </div>
  )
}

export default Map