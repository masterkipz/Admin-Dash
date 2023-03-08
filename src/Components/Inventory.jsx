import React from 'react'
import Header from './Header'
import Footer from './Footer'
import InventoryContent from './Content/InventoryContent'
import Side from './Side'

function Inventory() {
  return (
    <div className="main-container">
    <Header />
    <Side />
    <InventoryContent />
    <Footer />
  </div>
  )
}

export default Inventory