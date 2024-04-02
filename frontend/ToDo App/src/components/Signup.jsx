import { Password } from "@mui/icons-material"
import { Button, Card, TextField, Typography } from "@mui/material"
import { useState } from "react"

function Signup() {

  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  return <div style={{ display: "flex", justifyContent: "center", marginTop: '99px' }}>
    <div>
      <Card style={{ padding: '40px' }}>
        <div>
          <Typography color={"gray"} variant="h6">Welcome</Typography>
          <Typography color={"gray"} marginBottom={"15px"} variant="h6">Signup to continue</Typography>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            variant="outlined" label="email" type="email" />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <TextField

            onChange={(e) => {
              setPass(e.target.value)
            }}
            variant="outlined" label="Password" type="password" />

        </div>
        <div>
          <Button
            onClick={() => {

            }}
            variant="contained" >Signup</Button>


        </div>
      </Card>
    </div>

  </div>
}


export default Signup
