import { Button } from '@/components/ui/button'
import { SignInButton , SignUpButton} from '@clerk/clerk-react'

type Props = {}

function FirstScreen({}: Props) {
  return (
    <>
    <div className='h-screen w-screen  flex flex-col justify-center items-center'>
    <h1 className='text-3xl font-bold capitalize'>Start Your Personal Development Journy From here .... </h1>
    <div className='flex flex-row gap-3 mt-5'>
    <SignInButton >
    <Button  className="h-10-w-20 "> Login </Button>
    </SignInButton>
    <SignUpButton>
    <Button variant={'outline'}  className="h-10-w-20 ">Create New Account </Button>
    </SignUpButton>
    </div>
    
    </div>
    </>
  )
}

export default FirstScreen