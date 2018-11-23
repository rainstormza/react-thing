import React from 'react'

let Native = {
  closeWebView: () => {}
}
let Android = {
  closeWebView: () => {}
}

// function getMobileOperatingSystem() {
//   const userAgent = navigator.userAgent || navigator.vendor || window['opera']
//   // Windows Phone must come first because its UA also contains "Android"
//   if (/windows phone/i.test(userAgent)) {
//     return 'Windows Phone'
//   }
//   if (/android/i.test(userAgent)) {
//     return 'Android'
//   }
//   // iOS detection from: http://stackoverflow.com/a/9039885/177710
//   if (/iPad|iPhone|iPod/.test(userAgent) && !window['MSStream']) {
//     return 'iOS'
//   }
//   return 'unknown'
// }

// const checkDevice = getMobileOperatingSystem()

function CallMobileMethod() {
  return (
    <div>
      <button
        onClick={() => {
          Native.closeWebView()
        }}
      >
        Click iOS
      </button>

      <button
        onClick={() => {
          Android.closeWebView()
        }}
      >
        Click Android
      </button>
    </div>
  )
}

export default CallMobileMethod
