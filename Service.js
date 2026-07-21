// export async function createMaincategoryAPI(data)
// {
//     var response= await fetch ("http://localhost:8000/Maincategory",
//         {
//             method:"post",
//             headers:
//             {
//                "content-type":"application/json" 
//             },
//             body:JSON.stringify(data)
//         }
//     )

// return await response.json();
// }

// export async function getMaincategoryAPI()
// {
//     var response= await fetch ("http://localhost:8000/Maincategory",
//         {
//             method:"get",
//             headers:
//             {
//                "content-type":"application/json" 
//             },
           
//         }
//     )

// return await response.json();
// }

// export async function updateMaincategoryAPI(data)
// {
//     var response= await fetch ("http://localhost:8000/Maincategory",
//         {
//             method:"put",
//             headers:
//             {
//                "content-type":"application/json" 
//             },
//             body:JSON.stringify(data)
//         }
//     )

// return await response.json();
// }
// export async function daleteMaincategoryAPI(data)
// {
//     var response= await fetch ("http://localhost:8000/Maincategory"+data.id
// ,        {
//             method:"delete",
//             headers:
//             {
//                "content-type":"application/json" 
//             },
//             body:JSON.stringify(data)
//         }
//     )

// return await response.json();
// }


export async function createMaincategoryAPI(data)
{
    var response= await fetch("http://localhost:8000/maincategory",
        {
            method:"post",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
return await response.json();
}



export async function getMaincategoryAPI()
{
    var response= await fetch("http://localhost:8000/maincategory",
        {
            method:"get",
            headers:
            {
                "content-type":"application/json"
            }
        })
return await response.json();
}



export async function updateMaincategoryAPI(data)
{
    var response= await fetch("http://localhost:8000/maincategory/"+data.id,
        {
            method:"put",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
return await response.json();
}



export async function deleteMaincategoryAPI(data)
{
    var response= await fetch("http://localhost:8000/maincategory/"+data.id,
        {
            method:"delete",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
return await response.json();
}
