import React from 'react'
import OutstandinTable from '../component/Outstanding/OutstandinTable'
import NavigationBar from '../component/Navbar/NavigationBar'
import SearchBar from '../component/Navbar/SearchBar'

function PayOutstanding() {
  return (
    <div className="mx-auto  px-2 overflow-auto my-0">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center bg-default mb-0 mt-1">
        <NavigationBar show="out" />
        <SearchBar />
      </div>
      <OutstandinTable/>
      </div>
  )
}

export default PayOutstanding