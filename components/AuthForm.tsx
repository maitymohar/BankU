'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Divide, Loader2 } from 'lucide-react'
import CustomInput from './CustomInput'
import { authformSchema } from '@/lib/utils'
import { Libre_Franklin } from 'next/font/google'

const AuthForm = ({type}: {type:string}) => {
    const [user, setuser] = useState(null);
    const [isLoading, setisLoading] = useState(false)

    // 1. Define your form.
  const form = useForm<z.infer<typeof authformSchema>>({
    resolver: zodResolver(authformSchema),
    defaultValues: {
      email: "",
      passoword: ""
      
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authformSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true);
    console.log(values)
    setisLoading(false);
  }

  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/"
    className='cursor-pointer flex items-center gap-1 px-4'>
       <Image
       src = "/icons/logo.svg"
       width={34}
       height={34}
       alt='BankU Logo'
       className='size-[25px] max-xl:size-14'
       /> 
       <h1 className='text-26 font-ibm-flex-serif font-bold text-black-1'>BankU</h1>
    </Link>
    <div className='flex flex-col gap-1 md:gap-3'>
        <h1 className='text-24 lg-text-36 font-semibold text-grey-900'>
            {user
            ? 'Link Account ': 
            type ===  'sign-in'
            ? 'Sign-In'
        : 'Sign-Up'}
        <p className='text-16 font-normal text-grey-600'>
            {user
            ?'Link Your Account'
            :'Please enter your deails'}
        </p>
        </h1>
    </div>
        </header>
        {user ?(
            <div className='flex flex-col gap-4'></div>
        ): (
            <>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                <CustomInput 
                control={form.control}
                name='email'
                label='Email'
                placeholder='Enter your Email'
                />
                <CustomInput 
                control={form.control}
                name='passoword'
                label='Password'
                placeholder='Enter your Password'
                />
               
                
                <Button type="submit" disabled={isLoading} className='form-btn'>
                  {
                    isLoading? 
                    (<>
                      <Loader2 size={20} className='animate-spin'/> &nbsp;
                      Loading...
                    </>)
                    : type==='sign-in' ? "Sign-In": 'Sign-Up'
                  }
                </Button>
            </form>
            </Form>
            <footer className='flex justify-center gap-1'>
              <p className='text-14 font-normal '>
                {type==='sign-in' ? "Dont' have an account ?" : "Already have an account?"}
              </p>
             <Link href={type==='sign-in'? "/sign-up": "/sign-in"}>
             {type==='sign-in'? "Sign Up": "Sign In"}
             </Link>
            </footer>
            </>
            
        )}
    </section>
  )
}

export default AuthForm