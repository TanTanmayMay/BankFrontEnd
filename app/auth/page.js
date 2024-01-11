import React from 'react'
import Login from './login'
import { Info } from './info'
import Reg from './register'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const page = () => {
  return (
    <div>
      <div className='flex'>
        <div className='w-1/2 h-[100vh]'>
          <Info/>
        </div> 
        <div className='w-1/2 flex  bg-black pb-44  h-[100vh] text-white justify-center'>
          <Tabs defaultValue="register" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2 bg-gray-700 rounded-xl mt-20 border">
              <TabsTrigger className="hover:bg-black hover:text-white rounded-xl" value="register">Register</TabsTrigger>
              <TabsTrigger className="hover:bg-black hover:text-white rounded-xl" value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Login className="border border-white"/>
            </TabsContent>
            <TabsContent value="register">
              <Reg />
            </TabsContent>
          </Tabs>
        </div>
        
      </div>
    </div>
  )
}

export default page