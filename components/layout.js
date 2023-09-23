import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import Temperature from './weather';
import { Suspense } from 'react';
import Loading from './loading';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-gray-100 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <Tooltip title='Home'>
            <a><HomeIcon className='cursor-pointer' /></a>
            </Tooltip>
          </Link>
          <span className='mx-auto'>Blog</span>{' '}
          <p><Temperature /></p>          
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-gray-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; Leonard - 2023
        </div>
      </footer>
    </div>
  );
}
