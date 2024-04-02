import Paper from '@mui/material/Paper';
import { Button, Divider, TextField, Typography } from "@mui/material"
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function ToDo() {
  const [Todos, setTodos] = useState(['titile', 'gitile', 'titititit', 'wewewwe'])

  return <> <div style={{ display: 'flex', marginTop: '20px', marginBottom: '10px', justifyContent: 'center' }}>
    <div style={{ marginLeft: '10px', marginRight: '10px' }}>
      <TextField type="text" placeholder="Title" variant="standard"></TextField>
    </div>

    <TextField type="text" style={{ marginRight: '15px', width: '400px' }} placeholder="Description" variant="standard"></TextField>
    <Button variant="outlined" color='primary'>Create ToDo</Button>
  </div>
    <Divider variant='middle' component='li'></Divider>
    {Todos.map((e) => {
      return <>
        <TodoItems title={e}></TodoItems>

      </>
    })}


  </>
}

function TodoItems(props) {
  return <>
    <center style={{ marginTop: '10px' }}>
      <div style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
        <Checkbox {...label} />
        <Paper style={{ width: '70%', height: '6vh', marginRight: "10px" }} elevation={2}><Typography variant='body1'>{props.title}</Typography></Paper>
        <Fab style={{ marginRight: '10px' }} color="primary" size='small' aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab color='warning' size='small' aria-label="delete">
          <DeleteIcon />
        </Fab>

      </div>
    </center>
  </>
}

export default ToDo
