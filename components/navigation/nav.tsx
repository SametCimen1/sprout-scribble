import { auth } from '@/server/auth'
import { UserButton } from './user-button';
import { Button } from '../ui/button';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import Logo from './logo';
import CartDrawer from '../cart/cart-drawer';

export default async function Nav(){
    const session = await auth();


        return(
            <header className=' py-8'>
                <nav className=''>
                    <ul className='flex  justify-between items-center md:gap-8 gap-4 md:flex-row'>
                        <li className='flex flex-1'>
                            <Link href='/' aria-label='sprout and scribble logo'>
                                <Logo/>
                            </Link>
                        </li>
                        <li className='relative flex items-center hover:bg-muted'>
                            <CartDrawer />
                        </li>
                        {!session ? (
                            <li className='flex items-center justify-center'>
                                <Button asChild>
                                    <Link className='flex gap-2' href = "/auth/login">
                                        <LogIn size={20}/>
                                        <span>Login</span>
                                    </Link>
                                </Button>
                            </li>
                        ):(
                            <li className='flex items-center justify-center'>
                                <UserButton expires={session?.expires} user = {session?.user}/>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        )
}