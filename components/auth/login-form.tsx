'use client';

import { AuthCard } from "./auth-card";

export const LoginForm = () => {
    return(
        <AuthCard 
            cardTitle="Welcome Back!"
            backButtonHref="/auth/register"
            backButtonLabel="create a new account"
            showSocials
        >
            <div>
                <h1>Hey</h1>
            </div>
        </AuthCard>
    )
}