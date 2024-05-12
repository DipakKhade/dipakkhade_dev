'use client';
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { Fredericka_the_Great } from "next/font/google";

type Inputs = {
    email: string
    password: string
  }



export default function Page(){
    const [isAdmin ,setisAdmin]=useState<boolean>(false)
    const [messagedata , setMessagedata]=useState([])
    const [loading, setLoading]=useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> =async(data)=>{
        setLoading(true)
         const fetched= await axios.post('http://localhost:3000/api/admin',
            data
          )

          if(fetched.data.success===true){
            setMessagedata(fetched.data.usermessages)
            setisAdmin(true)
            toast('welcome Dipak')
            setLoading(false)

          }else{

            toast.error('you are not admin')
            setLoading(false)
          }
      }
    



    return <>
    <main>

    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Prove that you are admin
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
              {...register("email")} 
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
              {...register("password")} 
              id="password"
              name="password"
              type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                />
            </div>
          </div>


          <div>
  
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">


{
  loading ? 'Processing ...' : 'Verify'
}
        </button>
          </div>
        </form>

   
      </div>
    </div>
    {
    isAdmin ? <div className="overflow-x-auto p-6 pb-20">
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-green-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-green-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-green-500 uppercase tracking-wider">
            Subject
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-green-500 uppercase tracking-wider">
            Message
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-green-500 uppercase tracking-wider">
            Created At
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 text-slate-800">
        {messagedata?.map((msg:any,index:number) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">{msg._id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{msg.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{msg.subject}</td>
            <td className="px-6 py-4 whitespace-nowrap">{msg.message}</td>
            <td className="px-6 py-4 whitespace-nowrap">{msg.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> :'only user have access to this page'
       }
                </main>
    </>
}