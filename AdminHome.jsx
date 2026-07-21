import React from 'react'
import NavLeft from './NavLeft'
import { Link } from 'react-router-dom'

export default function AdminHome() {
  return (
    <>
    <div className="container-fluid my-5">
        <div className="row">
            <div className="col-lg-2 col-12">
               <NavLeft/>
            </div>
            <div className="col-lg-10 col-12">
               <div className="row">
                <div className="col-md-6">
                    <img src="assets/images/p11.jpg" alt="" height="455px" width="100%"/>
                </div>

                <div className="col-md-6">
                    <h5 className="bg-primary text-light text-center">Admin Home</h5>
                    <table className="table-bordred" style={{width:"100%", height:"70%"}}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>adil Khan</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>+91 9990701742</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>Admin</td>
                            </tr>
                              
                            <tr>
                                <td colSpan={2}><Link to="/update-profile" type="button" className="btn btn-primary w-100">Update Profile</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}