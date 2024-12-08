
import React from "react"

export default function Footer() {
  return (
    <footer>
      <img
        src={`${process.env.PUBLIC_URL}/assets/img/LogoFooter.png`}
        alt="logo Kasa blanc sur noir"
      />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

