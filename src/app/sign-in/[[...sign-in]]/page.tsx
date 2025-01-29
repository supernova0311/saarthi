import { SignIn } from '@clerk/nextjs'
import { div } from 'framer-motion/dist/client';

export default function Page() {

  return (

        <div className="flex items-center justify-center h-full ">
            <SignIn afterSignInUrl="/Main"/>
      
    </div>
  );
}