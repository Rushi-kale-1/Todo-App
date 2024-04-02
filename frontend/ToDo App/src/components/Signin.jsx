import { Button, Card, TextField, Typography } from "@mui/material"
function Signin() {

  return <div>
    <div style={{ display: "flex", justifyContent: "center", marginTop: '99px' }}>
      <div>
        <Card style={{ padding: '40px' }}>
          <div>
            <Typography color={"gray"} variant="h6">Welcome Back!</Typography>
            <Typography color={"gray"} marginBottom={"15px"} variant="h6">SignIn to continue</Typography>
            <TextField variant="outlined" label="email" type="email" />
          </div>
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <TextField variant="outlined" label="Password" type="password" />

          </div>
          <div>
            <Button variant="contained" onClick={(e)={

            }}>SignIn</Button>


          </div>
        </Card>
      </div>

    </div>
  </div>
}

export default Signin
