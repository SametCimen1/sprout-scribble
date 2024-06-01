'use client';

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export const UserButton = ({user}: Session) => {
    return(
        <div>
            <h1>{user?.email}</h1>
            <button className="bg-red-500 p-2 rounded-md" onClick={() => signOut()}>Sign out</button>
        </div>
    )
}