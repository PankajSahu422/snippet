import { Button } from "@/components/ui/button";
//import { Prisma } from "@prisma/client/extension";
import Link from "next/link";
//import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const snippets = await Prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href={"/snippet/new"}><Button className="bg-black text-white">New</Button></Link>
      </div>
      {snippets.map((snippet) => (
        <div key={snippet.id} className="flex item-center justify-between bg-gray-200 p-2 rounded-md my-2">
          <h1>{snippet.title}</h1>
          <Link href={`/snippet/${snippet.id}`}>
            <Button>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

