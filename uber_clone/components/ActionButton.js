import Link from 'next/link'

const styles={
    wrapper:`flex `,
    button:`bg-gray-200 flex-1 m-2  h-32 flex flex-col items-center
    text-xl justify-center rounded-lg transform hover:scale-100 transition cursor-pointer`,
    buttonimage:`h-3/5`
}


function ActionButton() {
  return (
    <div className={styles.wrapper}>
         <Link href="/search">
            <div className={styles.button}>
        <img src="https://i.ibb.co/cyvcpfF/Uberx.png" alt="" className={styles.buttonimage}/>
               Ride 
       </div>
         </Link>
       <div className={styles.button}>
          <img src="https://i.ibb.co/n776JLm/bike.png" alt="" className={styles.buttonimage}/>
        wheels
       </div>
       <div className={styles.button}>
          <img src="https://i.ibb.co/5RjchBg/uberschedule.png" alt="" className={styles.buttonimage}/>
        reserve
       </div>
    </div>
  )
}

export default ActionButton