import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../store/sidebarSlice';
import { FaAngleRight } from "react-icons/fa6";

const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarOn = useSelector(getSidebarStatus);

    return (
        <>
            <aside className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg p-8 transition-transform duration-300 ${isSidebarOn ? 'translate-x-0' : '-translate-x-full'} z-50`}>

                <button type="button" className="absolute right-8 transition-colors duration-300 hover:text-orange-500" onClick={() => dispatch(setSidebarOff())}>
                <FaAngleRight />
                </button>
                
            </aside>

        </>
    )
}

export default Sidebar