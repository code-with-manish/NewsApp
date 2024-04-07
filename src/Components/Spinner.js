import React from 'react'
import loading from './loading.gif'

const Spinner = ()=> {

    return (
      <div className='text-center'>
        <img className='my-3' src={loading} height="50px" width="50px" alt="loading" />
      </div>
    )

}

export default Spinner
