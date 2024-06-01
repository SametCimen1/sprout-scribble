
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    return (
      <main className="">
        <p>Welcome to Next.js</p>
        <Link href = 'api/auth/signin'><Button>Button</Button></Link>
      </main>
    );
}

