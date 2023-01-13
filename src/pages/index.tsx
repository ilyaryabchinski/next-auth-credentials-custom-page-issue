import { Button } from '@mantine/core';
import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {

  const {data: session} = useSession();

  return (
    <>
    <Button onClick={session ? () => signOut() : () => signIn()}>
      {session ? "Sign Out" : "Sign In"}
      </Button>
    </>
  )
}
