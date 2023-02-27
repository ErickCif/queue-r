'use client'
import HomePageComponent from "components/components/HomePageComponent";
import React, { createContext } from "react";
import {useRouter} from "next/navigation";



export default function Home() {

  return(
      <div className="text-xl text-center h-screen">
        <h1>Queue-R (Coming Soon).</h1>
          <HomePageComponent/>
          <p>Check link after logging in with Supabase!</p>
      </div>
  )
}
