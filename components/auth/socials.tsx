'use client';

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Socials(){
    return(
        <div>
            <Button onClick={() => signIn('github', {
                redirect:false,
                callbackUrl:'/'
            })}>Signin with Github</Button>
        </div>
    )
}