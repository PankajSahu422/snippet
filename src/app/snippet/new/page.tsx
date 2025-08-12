import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import React from 'react'

const CreateSnippetPage = () => {

  async function CreateSnippet(fromData:FormData) {
    "use server" // use server direct
    const title = fromData.get("title") as string;
    const code = fromData.get("code") as string;
    
    // const snippet = await prisma.snippet.create({
    //   data:{
    //     title,
    //     code
    //   }
    // });
    // console.log("created snippet", snippet);
    
    //redirect("/");

  }
  return (
    <form action={CreateSnippet}>
      <div>
        <Label>Title</Label>
        <Input type='text' name='title' id='title' />
      </div>
      <div>
        <Label>Code</Label>
        <Textarea name='code' id='code' />
      </div>
      <Link href={""}><Button type='submit' className='my-4 bg-black text-white w-full'>New</Button></Link>
    </form>
  )
}

export default CreateSnippetPage
