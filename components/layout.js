import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-slate-900 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <Tooltip title='Início'>
            <a><HomeIcon className='cursor-pointer' /></a>
            </Tooltip>
          </Link>
          <span className='mx-auto'>Blog</span>{' '}        
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-slate-900 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; DevHelp - 2023
        </div>
      </footer>
    </div>
  );
}
