import React from 'react'


const styles={
    wrapper:`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg text-sm m-2 mb-5`,
    input:` bg-gray-200 my-2 rounded-2 p-2 outline-none border-none`
}

function InputButton() {
  return (
    <div className={styles.wrapper}>
       where to ?
       <input type="text" className={styles.input}/>
    </div>
  )
}

export default InputButton