import React from 'react'



const styles={
    wrapper:`flex-1 p-4`,
    Header:`flex justify-between items-center`,
    image:`h-28`,
    userImage:`h-14 w-14 rounded-full border-gray-200 p-px`,
    details:`flex items-center`,
    name:`mr-4 w-20 text-sm`
}

function Profile() {
  return (
    <div>
        <div className={styles.Header}>
          <img src='data:image/png;base64,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'
           alt="" className={styles.image}/>
           <div className={styles.details}>
              <h4 className={styles.name}>Emmanuel</h4>
              <img src="https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="" className={styles.userImage}/>
           </div>
        </div>
    </div>
  )
}

export default Profile