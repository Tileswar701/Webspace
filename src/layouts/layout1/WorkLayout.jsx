import React from 'react'
import Workspace from '../../Pages/pages1/Workspace'
import { Outlet } from 'react-router'

const WorkLayout = () => {
  return (
    <>
      <div className="workspace-container">
        <div className="workspace-header">
          <Workspace />
        </div>
        <div className="workspace-body">
          <div className="workspace-content">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkLayout