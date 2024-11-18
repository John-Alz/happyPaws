import React from 'react'
import SideBar from '../Dashboard/SideBar'
import HeaderProfile from '../Dashboard/HeaderProfile'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {

    return (
        <div>
            <div className="flex">
                <div>
                    <SideBar />
                </div>
                <div className="w-full">
                    <HeaderProfile />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
