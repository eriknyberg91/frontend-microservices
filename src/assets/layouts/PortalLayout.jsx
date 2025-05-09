import React from 'react'
import Nav from '../components/Nav'

export default function PortalLayout() {
  return (
    <div className="portal-wrapper">
        <Nav />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
