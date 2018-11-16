import { useEffect } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root')

function Modal(props) {
  // Create a div that we'll render the modal into. Because each
  // Modal component has its own element, we can render multiple
  // modal components into the modal container.
  const el = document.createElement('div')
  useEffect(() => {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRoot.appendChild(el)
    return () => {
      // Remove the element from the DOM when we unmount
      modalRoot.removeChild(el)
    }
  }, []) // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.

  // Use a portal to render the children into the element
  return ReactDOM.createPortal(
    // Any valid React child: JSX, strings, arrays, etc.
    props.children,
    // A DOM element
    el
  )
}

export default Modal
