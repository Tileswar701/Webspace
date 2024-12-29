import React from 'react'
import './workspace.css'
import { useNavigate } from 'react-router'
const Workspace = () => {
    const Navigate = useNavigate();
  return (
    <>
        <div className="workspace-page">
            <div className="workspace-header">
                <div className="head-text w-full text-center bg-teal-200 p-3">
                    <h1>This is Workspace</h1>
                    <p>Workspace is the place where you can work on your projects</p>
                </div>
                <div className="user-container w-full bg-red-300 p-3">
                    <div className="btn-title p-5">Select your userspace</div>
                    <div className="user-btn flex justify-around">
                        <button className='user-btn' onClick={()=>Navigate('sanb',{replace:true})}>San B</button>
                        <button className='user-btn' onClick={()=>Navigate('tileswar',{replace:true})}>Tileswar</button>
                    </div>
                </div>
            </div>
            <div className="user-space">
            </div>
        </div>
    </>
  )
}

export default Workspace