import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex p-5 bg-slate-200'>
        <Link href={"/"} className='mr-5'>Home</Link>
        <Link href={"/users"} className='mr-5'>Users</Link>
        <Link href={"/admin"} className='mr-5'>Admin</Link>
    </div>
  )
}

export default NavBar