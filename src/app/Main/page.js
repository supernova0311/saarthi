import { SignOutButton } from "@clerk/nextjs";
import {
    ClerkProvider,
    ClerkLoading,
    ClerkLoaded,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
const Main =()=>{
    return (
        <div className="">
            U R Sign IN
            <header className="">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          </div>      
    );
};
export default Main;