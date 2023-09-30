import { TextField } from '@mui/material'
import Image from 'next/image'
import Auth from './Auth'


export default function Home() {
  return (
    <main className=" min-h-screen items-center justify-between ">
        <Auth/>
    </main>
  )
}
