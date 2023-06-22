import React from 'react';
import { Inter } from 'next/font/google';
import Landing from '../components/landing';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Landing/>
   </>
  )
}
