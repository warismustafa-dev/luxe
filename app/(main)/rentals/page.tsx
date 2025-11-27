'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RentalsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/offerings');
  }, [router]);

  return null;
}
