import { Button } from 'primereact/button'
import React from 'react'

function KickButton() {
  return (
    <div className='flex gap-4 items-center'>
        <div className='bg-green-600 h-[10px] w-[10px] rounded-full'></div>
      <Button icon="pi pi-times" rounded text severity="danger" aria-label="Kick" pt={{
        root: {
            className: "focus:shadow-none!"
        }
      }}/>
    </div>
  )
}

export default KickButton
