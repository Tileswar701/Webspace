import React from 'react'
import Form from '../components/Forms/form1/Form'
const Tileswar = () => {
  return (
    <>
      <div className="workspace-page">
          <div className="workspace-header">
            <div className="head-text w-full text-center bg-teal-200 p-3">
              <h1>This is Tileswar's Workspace</h1>
              <p>Tileswar's Workspace is the place where San can work on his projects</p>
            </div>
          </div>
          <div className="workspace-content flex justify-center p-4">
            <Form />
          </div>
      </div>
    </>
  )
}

export default Tileswar