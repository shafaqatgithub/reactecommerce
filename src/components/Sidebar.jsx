import React, { useEffect } from 'react'
import { Link, replace } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../store/sidebarSlice';
import { FaAngleRight } from "react-icons/fa6";
import { fetchAsyncCategories, getAllCategories } from '../store/categorySlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarOn = useSelector(getSidebarStatus);
    const categories = useSelector(getAllCategories);

    useEffect(() => {
        dispatch(fetchAsyncCategories())
    },[dispatch])

    return (
        <>
            <aside className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg p-8 transition-transform duration-300 ${isSidebarOn ? 'translate-x-0' : '-translate-x-full'} z-50`}>

                <button type="button" className="absolute right-8  duration-300 hover:text-orange-500" onClick={() => dispatch(setSidebarOff())}>
                <FaAngleRight />
                </button>

                <div className="mt-4">
                    <div className="text-lg font-semibold text-uppercase tracking-tight pb-4">All Categories</div>
                    <ul className="overflow-y-scroll h-[calc(100vh-60px)]">
                        {
                            categories.map((category, idx) => (
                                <li className='' key={idx} onClick={()=> dispatch(setSidebarOff())}>
                                    <Link to= {`category/${category}`} className="block py-2 mr-3 border-b border-gray-200  transition-colors duration-300 hover:text-orange-500 hover:ml-3 capitalize">
                                    {category}
                                  </Link>
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </aside>

        </>
    )
}

export default Sidebar