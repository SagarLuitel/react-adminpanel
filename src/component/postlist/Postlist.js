import "./postlist.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';


export const Postlist = () => {
    const columns = [
        {
            field: 'blogimage',
            headerName: 'image',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 110, 
            renderCell:(params) =>{
            return(
                <div>
                    <img className="bloglistImage" src={params.row.blogimage} alt=""></img>
                </div>
            )
        }
          },
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'title', headerName: 'Blog Title', width: 150 },
        { field: 'content', headerName: 'Blog Content', width: 170 },
        {
          field: 'date',
          headerName: 'Date',
          width: 110,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 110, 
            renderCell:(params) =>{
                return(
                    <>
                    <Link to={"/post/"+params.row.id}><EditIcon className="postlistEditIcons"/></Link>
                    <DeleteOutlineIcon className="postlistDeleteIcons"/>
                    </>
                    
                )
            }
            

            }
            
        
      ];
      
      const rows = [
        { blogimage:"https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",id: 1, title: 'Snow', content: 'Jon', date: 35 },
        { blogimage:"https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",id: 2, title: 'Snow', content: 'Jon', date: 35},
      ];
  return (
    <>
      <Link to="/Newpost"><AddIcon /> </Link>
      <div style={{ height: 400, width: '100%' }} className="postlist">
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
        </>
    )
}
