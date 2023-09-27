import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-slate-900 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Tooltip title='Início'>
            <a
              href='/'
              onClick={(e) => {
                e.preventDefault();
                router.push('/');
              }}
            >
              <HomeIcon className='cursor-pointer' />
            </a>
          </Tooltip>
          <span className='mx-auto'>Dev Help Blog</span>{' '}        
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-slate-900 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; DevHelp - 2023 - 2024
        </div>
      </footer>
    </div>
  );
}
