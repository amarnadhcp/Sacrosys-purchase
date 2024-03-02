import React from 'react'
import NavigationBar from '../component/Navbar/NavigationBar'
import SearchBar from '../component/Navbar/SearchBar'
import ReturnList from '../component/ReturnList'

function ViewReturnList() {
  return (
    <div className="mx-auto px-2 overflow-auto my-0">
    <div className="flex flex-col md:flex-row-reverse justify-between items-center bg-default mb-0 mt-1">
      <NavigationBar/>
      <SearchBar show="Return" />
    </div>
    <ReturnList/>
    </div>

  )
}

export default ViewReturnList