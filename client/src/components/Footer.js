import React from 'react'

export const Footer = () => {
    return (
       <footer>
           <div className="container uk-text-center">
               <p className="uk-text-meta">
                   @Powered by <a href="//github.com/yrogovich" rel="noreferrer" target="_blank">
                        <span uk-icon="github" className="uk-text-meta"></span> yRogovich
                   </a>
               </p>
           </div>
       </footer>
    )
}