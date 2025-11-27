'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ExcursionsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/offerings');
  }, [router]);

  return null;
}
