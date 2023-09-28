/* 
  LEGAL:
    Licença Pública Mozilla, versão 2.0

    Este software está licenciado sob a Licença Pública Mozilla, versão 2.0 (a "Licença"); você pode não usar este arquivo, exceto em conformidade com a Licença. Você pode obter uma cópia da Licença em https://www.mozilla.org/MPL/2.0/.

    O(s) autor(es) detém(êm) os direitos autorais deste software. 2023 é o ano de criação deste software.

    De acordo com os termos da Licença, você pode usar, modificar e distribuir este software de acordo com os termos da Licença.

    Salvo disposição em contrário na Licença, o software é distribuído "COMO ESTÁ", SEM GARANTIAS OU CONDIÇÕES DE QUALQUER TIPO, expressas ou implícitas. Consulte a Licença para os detalhes específicos sobre as permissões e limitações sob a Licença.
    ---
    Desenvolvedor Original: LESS14(Felipe Maciel)
*/
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
