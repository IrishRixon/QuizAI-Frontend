import { Button } from 'primereact/button'
import React from 'react'

interface Props {
  isReady: boolean;
  isHost: boolean;
}

function KickButton({isReady, isHost}: Props) {
  return (
    <div className='flex gap-4 items-center'>
        {isReady && <div className='bg-green-600 h-[10px] w-[10px] rounded-full'></div>}
      {isHost && <Button icon="pi pi-times" rounded text severity="danger" aria-label="Kick" pt={{
        root: {
            className: "focus:shadow-none!"
        }
      }}/>}
    </div>
  )
}

export default KickButton
