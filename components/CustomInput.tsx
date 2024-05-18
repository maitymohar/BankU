import React from 'react'
import { Control, FieldPath, Form } from 'react-hook-form'
import {FormControl ,FormField, FormLabel, FormMessage} from './ui/form'
import { Input } from './ui/input'
import {z} from 'zod'
import { authformSchema } from '@/lib/utils'
interface CustomInput{
    control: Control<z.infer<typeof authformSchema>>
    name: FieldPath<z.infer<typeof authformSchema>>,
    placeholder: string,
    label:string
}

const CustomInput = ({control, name, label, placeholder}: CustomInput) => {
  return (
    <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <div className='form-item'>
                        <FormLabel className='form-label'>
                            {label}
                        </FormLabel>
                        <div className='flex w-full flex-col'>
                            <FormControl>
                                <Input placeholder={placeholder}
                                className='input-class'
                                {...field}
                                type={name=== 'passoword' ? 'password': 'text'}/>
                            </FormControl>
                            <FormMessage className='form-message' />

                            
                        </div>
                    </div>
                )}
                />
  )
}

export default CustomInput