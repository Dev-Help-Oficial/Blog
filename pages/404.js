import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();
  return (
    <div className="text-center">
      <h1 className="text-3xl">Página não encontrada.</h1>
      <div className="p-3">
        <p>A página que você está procurando não existe.</p>
        <a
          className="link text-indigo-500 hover:underline"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            router.push(`/`);
          }}
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default Page404;
