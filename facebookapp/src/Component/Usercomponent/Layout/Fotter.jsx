import React from 'react'

export default function Footer() {
    return (
        <footer className="card">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
                <h5 style={{color:"black"}}>copyright &copy;{new Date().getFullYear() }</h5>
          
        </div>
      </footer>
  )
}
