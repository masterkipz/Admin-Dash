import React from 'react'
import Header from './Header'
import Footer from './Footer'
import InventoryContent from './Content/InventoryContent'

function Inventory() {
  return (
    <div className="main-container">
    <Header />
    <InventoryContent />
    <Footer />
  </div>
  )
}

export default Inventory