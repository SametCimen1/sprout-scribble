'use server'
import { LoginSchema } from '@/types/login-schema';
import { createSafeActionClient } from 'next-safe-action'
import { db } from '..';
import {users} from '../schema'
import { eq } from 'drizzle-orm';
import { generateEmailVerificationToken } from './tokens';
import { sendVerificationEmail } from './email';
import { signIn } from "../auth"
import { AuthError } from 'next-auth';

const action = createSafeActionClient();

export const emailSignin = action(LoginSchema, async({email, password, code}) => {

    try {
        
        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email)
        })

        if(existingUser?.email !== email){
            return {error: "Email not found"}
        }

        //If the user is not verified
        if(!existingUser.emailVerified){
            const verificationToken = await generateEmailVerificationToken(existingUser.email);
            await sendVerificationEmail(verificationToken[0].email, verificationToken[0].token)
            return {success: "Confirmation Email sent"}
        }

        await signIn("credentials", {
            email,
            password,
            redirectTo: "/",
        })

        return {sucess: email}

    } catch (error) {
        console.log(error);
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {error: "Email or Password incorrect"}
                case "AccessDenied":
                    return {error: error.name}
                case "OAuthSignInError":
                    return {error: error.name}
                default:
                    return {error: "Something went wrong"}
            }   
        }
        throw error
    }

})
