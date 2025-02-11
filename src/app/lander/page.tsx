/* "use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; */
import { First_Section } from "@/app/components/first_seciton"

export default function RedirectPage() {
  /* const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []); */

  return( 
  
  <main>
    <First_Section/>
  </main>

  );
}