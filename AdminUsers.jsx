import React from 'react'
import NavLeft from './NavLeft'

export default function AdminUsers() {
  return (
    <>
        <h2 className='text-center'>Admin User</h2>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-12'>
                    <NavLeft/>
                </div>
            </div>
        </div>
    </>
  )
}
