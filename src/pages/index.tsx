import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from 'components/styles/Home.module.css'
import HomePageComponent from "../components/HomePageComponent"
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="text-xl text-center h-screen">
        <h1>Queue-R (Coming Soon).</h1>
        <HomePageComponent/>
        <p>Check link after logging in with Supabase!</p>
      </div>
  )
}
