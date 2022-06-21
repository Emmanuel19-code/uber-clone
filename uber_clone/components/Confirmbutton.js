import RideSelector from "./RideSelector"




const styles={
    wrapper:`flex flex-1 flex-col`,
     confirmlocation:`flex justify-center border-t-2`,
    confirmbuttton:`bg-black text-white p-3 flex flex-1 m-2 items-center justify-center my-2 `
}


function Confirmbutton() {
  return (
    <div className={styles.wrapper}>
       <RideSelector/>
       <div className={styles.confirmlocation}>
            <button className={styles.confirmbuttton}>CONFIRM PICK</button>
        </div>
    </div>
  )
}

export default Confirmbutton