import React from 'react'

export default function LoadingSipinner (){
  return (
    <div className="absolute inset-0 flex justify-center items-center z-[13]">
        <div className="spinner-border animate-spin border-4 border-primary-color dark:border-primary-color-dark !border-t-transparent rounded-full w-12 h-12" />
    </div>
  )
}
