import React from 'react'

export const TotalHours = ({totalhours}) => {

  return (
    <>
   
    <div className="row mt-3 pb-5 fs-3 fw-bolder text-light">
        <div className="col text-center">
            Total time allocated this week = <span id="totalHours">{totalhours}</span> hours
        </div>
    </div>
    </>
  )
}
