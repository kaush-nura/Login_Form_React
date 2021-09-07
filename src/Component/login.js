import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen';
const Login=()=>{

    const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'20px 0px 20px 0px'}
    /*top||bottom|left*/
    return(
        <Grid>
            <Paper elevation={8} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Please Enter username' type='text' fullWidth required/>
                <TextField label='Password' placeholder='Please Enter password' type='password' fullWidth required/>
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                <Link href="./forgetpass" >
                        Forget Password
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="./register" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login