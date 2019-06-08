import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Swiper from 'react-id-swiper'

function FullPage() {
  return (
    <div>
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
              </div>
              <div className="section">
                <p>Section 2</p>
                <Swiper>
                  <div>Slide 1</div>
                  <div>Slide 2</div>
                  <div>Slide 3</div>
                  <div>Slide 4</div>
                  <div>Slide 5</div>
                </Swiper>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export default FullPage

// https://github.com/alvarotrigo/react-fullpage#usage
// https://github.com/kidjp85/react-id-swiper
