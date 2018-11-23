import React, { Fragment } from 'react'
import styled from 'styled-components'

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
`

const SiteContent = styled.div`
  flex: 1;
  background: salmon;
`

function FooterFixed() {
  return (
    <Fragment>
      <Site>
        <SiteContent>Content</SiteContent>
        <footer>Footer</footer>
      </Site>
    </Fragment>
  )
}

export default FooterFixed

// https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
