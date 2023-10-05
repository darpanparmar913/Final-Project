import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './Component/Header/Header.jsx'
import ProductLive from './Component/ProductLive/ProductLive.jsx'
import ProductTable from './Component/ProductTable/ProductTable.jsx'
import ProductEdit from './Component/ProductEdit/ProductEdit.jsx'





function App() {
  return (
	<>
		<Header />	

		<Routes>
			<Route path='/' element={<ProductLive/>}></Route>
			<Route path='/view' element={<ProductTable/>}></Route>
			<Route path='/editpr/:id' element={<ProductEdit/>}></Route>
		</Routes>
	</>
  )
}

export default App