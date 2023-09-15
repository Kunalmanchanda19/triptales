import { Button, TextField } from '@mui/material'


export default function Auth() {
  return (
    <main className=" min-h-screen items-center justify-between p-24">
      <div className='flex flex-col items-center'>
        <img src='Login.jpg' className='h-24 w-24'/>
    <TextField label='UserName' type='text' className='w-80 m-2'/>
    <TextField label='Password' type='password'className='w-80 m-2'/>
    <Button variant="contained" className='w-80 m-2 bg-blue'>Login</Button>
    </div>
    </main>
  )
}
