import Link from 'next/link'
import React from 'react'


export default function Navigation() {
  return (
    <div className='flex justify-center mt-5 m-2'>
    <div className="navbar bg-gray-700 max-w-4xl  rounded-lg">
      <div className="flex-1">
        <Link
          href={"/"}
          className="btn btn-ghost normal-case text-md lg:text:lg xl:text-lg md:text-lg sm:text-md text-orange-300"
        >
          Pulse
        </Link>
      </div>
      <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
          <li>
            <Link href={"/r/popular"}>Saved</Link>
          </li>
          <li className='text-white'>
          <Link href={"/r/popular"}>Log In</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}
