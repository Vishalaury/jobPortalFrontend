// // import * as React from "react"

// // export function Button({ children, className = "", ...props }) {
// //   return (
// //     <button
// //       {...props}
// //       className={`
// //         text-sm text-blue-600 
// //         bg-transparent 
// //         border-none 
// //         p-0 
// //         shadow-none 
// //         outline-none 
// //         focus:outline-none 
// //         focus:ring-0 
// //         hover:underline 
// //         ${className}
// //       `}
// //     >
// //       {children}
// //     </button>
// //   )
// // }


// // import * as React from "react"

// // export function Button({ children, className = "", ...props }) {
// //   return (
// //     <button
// //       {...props}
// //       className={`
// //         inline-flex items-center justify-center
// //         px-4 py-2
// //         rounded-md
// //         bg-blue-600 text-white
// //         hover:bg-blue-700
// //         disabled:opacity-50 disabled:cursor-not-allowed
// //         ${className}
// //       `}
// //     >
// //       {children}
// //     </button>
// //   )
// // }


// import * as React from "react"

// export function Button({ children, className = "", ...props }) {
//   return (
//     <button
//       {...props}
//       className={`
//         inline-flex items-center justify-center
//         px-4 py-2
//         rounded-md
//         text-sm font-medium
//         transition-colors
//         focus:outline-none
//         disabled:opacity-50 disabled:cursor-not-allowed
//         ${className}
//       `}
//     >
//       {children}
//     </button>
//   )
// }


export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        px-4 py-2
        rounded-md
        text-sm font-medium
        transition-colors
        focus:outline-none
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  )
}
