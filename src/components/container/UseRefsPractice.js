import React, {useState, useEffect} from 'react'
import {useForm, useFieldArray} from 'react-hook-form'
import Layout from '../navbar/Layout'

const UseRefsPractice = () => {
    const [form, setForm] = useState("")
    const {register, handleSubmit, control, errors,watch} = useForm()
    const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
        control,
        name:"testArray"
    })
    const onSubmit = data => {
        console.log(data)
        setForm(data)
    }
    useEffect(()=>{
        console.log(`Hello`)
    },[form])
    //console.log(watch("firstName"))

    const {firstName, lastName} = watch()
    return (
        <Layout>
        <div>
       
            <form onSubmit={handleSubmit(onSubmit)} >
              <input ref={register({required:true})} name="firstName" type="text" placeholder="firstName" />
               <input ref={register({required:true})} name="lastName" type="text" placeholder="lastName" />
              
               <div>
                   {fields.map((item, index)=>{
                       console.log(item)
                       return(
                        
                            <div key={item.id}>
                             <input ref={register} name={`testArray[${index}].firstName`} />
                                <input ref={register} name={`testArray[${index}].lastName`} />
                                <button type="button" onClick={()=>remove(index)} >Delete</button>
                            </div>
                        
                       )
                   })}
               </div>
               <button type="button" onClick={()=>append({firstName:"", lastName:""})} >Append</button>
               <button type="submit">Submit</button>

            </form>
        </div>
        </Layout>
    )
}

export default UseRefsPractice
