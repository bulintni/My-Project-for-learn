import React from 'react'

function Banner() {
  let bannerData = {
    title:"React landing page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus molestiae, placeat qui illo voluptatibus dicta, perspiciatis culpa, velit iure eum sint ut asperiores dolor cumque accusantium illum ipsa enim."
  }

  return (
    <div className='banner-bg'>
      <div className='container'>
        <div className='banner-con'>
          <div className='banner-text'>
            <h1>{bannerData.title}</h1>
            <p>
              {bannerData.desc}
            </p>
            <a href="#" className='banner-btn'>Learn more</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner