import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import Hooks from './Hooks'
import Worker from './WebWorker'
import ModalContainer from './Modal'
import NewWindow from './NewWindow'
import GreenSock from './GreenSock'
import RenderTesting from './RenderTesting'
import CallMobileMethod from './CallMobileMethod'
import FooterFixed from './FooterFixed'
// import ReduxTools from './ReduxTools'
import IntersectionObserver from './IntersectionObserver'
import AOSAnimation from './ScrollAnimation'
import ScrollMagic from './ScrollMagic'
import FullPage from './FullPage'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/worker">Worker</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
          <li>
            <Link to="/new-window">NewWindow</Link>
          </li>
          <li>
            <Link to="/greensock">GreenSock</Link>
          </li>
          <li>
            <Link to="/render-testing">RenderTesting</Link>
          </li>
          <li>
            <Link to="/call-mobile-method">CallMobileMethod</Link>
          </li>
          <li>
            <Link to="/footer-fixed">FooterFixed</Link>
          </li>
          <li>
            <Link to="/fullpage">FullPage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          )}
        />
        <Route path="/hooks" exact component={Hooks} />
        <Route path="/worker" exact component={Worker} />
        <Route path="/modal" exact component={ModalContainer} />
        <Route path="/new-window" exact component={NewWindow} />
        <Route path="/greensock" exact component={GreenSock} />
        <Route path="/render-testing" exact component={RenderTesting} />
        <Route path="/call-mobile-method" exact component={CallMobileMethod} />
        <Route path="/footer-fixed" exact component={FooterFixed} />
        <Route path="/fullpage" exact component={FullPage} />
      </Switch>
      <AOSAnimation />
      <ScrollMagic />
      <IntersectionObserver />
    </div>
  )
}

export default App

// https://github.com/bitworking/react-scrollmagic
// http://scrollmagic.io/examples/expert/bezier_path_animation.html
