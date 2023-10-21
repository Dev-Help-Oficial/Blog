/* 
  LEGAL:
    Licença Pública Mozilla, versão 2.0

    Este software está licenciado sob a Licença Pública Mozilla, versão 2.0 (a "Licença"); você pode não usar este arquivo, exceto em conformidade com a Licença. Você pode obter uma cópia da Licença em https://www.mozilla.org/MPL/2.0/.

    O(s) autor(es) detém(êm) os direitos autorais deste software. 2023 é o ano de criação deste software.

    De acordo com os termos da Licença, você pode usar, modificar e distribuir este software de acordo com os termos da Licença.

    Salvo disposição em contrário na Licença, o software é distribuído "COMO ESTÁ", SEM GARANTIAS OU CONDIÇÕES DE QUALQUER TIPO, expressas ou implícitas. Consulte a Licença para os detalhes específicos sobre as permissões e limitações sob a Licença.
    ---
    Desenvolvedor Original: LESS14(Felipe Maciel)
    Editor/Mantainer: TanF12
*/
import { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Tooltip from '@mui/material/Tooltip';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (scrollTop === 0) {
      setIsScrollingUp(true);
    } else if (isScrollingUp && scrollTop > 0) {
      setIsScrollingUp(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    if (isVisible) {
      scrollToTop();
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:fixed lg:bottom-8 lg:right-8 lg:flex lg:items-center lg:cursor-pointer lg:block hidden">
      <Tooltip title={isScrollingUp ? 'Voltar ao topo' : 'Rolar para Baixo'}>
        <div onClick={handleScrollToTop}>
          <div className="bg-slate-800 rounded-full p-2">
            {isScrollingUp ? (
              <KeyboardArrowDownIcon style={{ fontSize: 24, color: '#fff' }} />
            ) : (
              <KeyboardArrowUpIcon style={{ fontSize: 24, color: '#fff' }} />
            )}
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default ScrollToTopButton;
