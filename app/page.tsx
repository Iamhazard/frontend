'use client'


import Nabar from "@/components/Home/Navbar"
  //import {Landing} from  "../components/index"
export default function Home() {
  return (
  <main>
  <div className="bg-blue-900">
    <Nabar/>
  </div>
  <div className="container mx-auto py-8">
   
    <h1 className="text-3xl font-bold text-gray-800">Welcome to Your App</h1>
    <p className="mt-4 text-gray-600">
      This is where your main content will be displayed.
    </p>
  </div>
</main>

  )
}
