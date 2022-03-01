import React from 'react'

export const TotalHours = () => {
  return (
    <>
    <div class="ttl-bad text-end text-light">Total time saved = <span id="totalhourssaved">0</span> hours</div>
   
    <div class="row mt-3 pb-5 fs-3 fw-bolder text-light">
        <div class="col text-center">
            Total time allocated this week = <span id="totalHours">0</span> hours
        </div>
    </div>
    </>
  )
}
