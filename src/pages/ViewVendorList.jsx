import React from 'react'
import NavigationBar from '../component/Navbar/NavigationBar'
import SearchBar from '../component/Navbar/SearchBar'
import VendorList from '../component/VendorList'
function ViewVendorList() {
  return (
    <div className="mx-auto px-2 overflow-auto my-1 ">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center bg-default">
        <NavigationBar />
        <SearchBar show="Vendor" />
      </div>
      <VendorList/>
    </div>  
  )
}

export default ViewVendorList