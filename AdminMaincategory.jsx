
import React, { useEffect } from 'react'
import NavLeft from './NavLeft'
import { Link,useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMaincategory, getMaincategory } from '../../Store/ActionCreators/MaincategoryActionCreators'

import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const paginationModel = {page: 0, pageSize: 5};

export default function AdminMaincategory(){
  var maincategory = useSelector((state)=>state.MaincategoryStateData)
  var dispatch = useDispatch()
  var navigate = useNavigate()

  const columns =[
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    {field:"edit",
      headerName:"Edit",
      sortable:"false",
      renderCell:({row})=>
        <Button onClick={()=>{navigate("/admin-update")}}>
          Edit
        </Button>,

    },
    {
      field:"delete",
      headerName:"Delete",
      sortable:false,
      renderCell:({row})=>
        <Button onClick={()=>dispatch(deleteMaincategory({id : row.id}))}>
          Delete
        </Button>,
    },
  ];

  const rows = [];
    for (let item of maincategory){
      rows.push(item)
    }
  useEffect(()=>
    {
        dispatch(getMaincategory())
    },[])


  return (
    <>
    <br></br>
    <br></br>
    <div className="cantainer-fluid my-5">
    <div className="row">
        <div className="col-lg-2 col-12">
            <NavLeft />
        </div>
        <div className="col-lg-9 col-12">
        <h5 className="bg-primary text-center text-light p-1"> Main Category
     <Link to="/admin-add-maincategory" className="float-right">
     <span class="material-symbols-outlined text-light">
add
</span></Link></h5>

         <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
       />
    </Paper>
             </div>
          </div>
     </div>  
   </>
  )
}





























































