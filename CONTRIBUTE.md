# Bem-vindo(a) à documentação de contribuição do Dev-Help!
Desde já, queríamos agradecê-lo(a) por dedicar seu tempo à leitura deste documento. Qualquer contribuição será extremamente bem-vinda.

## Como começar?

### Issues
Na aba de [Issues](https://github.com/Dev-Help-Oficial/Blog/issues) você pode reportar problemas no site e também pode dar sugestões de melhorias.

Observação: Escreva em Português legível e também coloque Labels(Etiqueta) no Issue, caso for uma sugestão de melhoria, marque o Issue com a Label(Etiqueta) "Enhancement" e caso for um bug marque com a Label(Etiqueta) "Bug".

### Artigos
Contribuições com melhorias em artigos já existentes e contribuições com novos artigos são de extrema importância para nós.

Para contribuir com um novo artigo, siga os passos abaixo:
1. Crie um fork [deste repositório](https://github.com/Dev-Help-Oficial/Blog)
Para criar um fork, é extremamente simples, na aba "Code"(Código) do repositório existe o botão "Fork" basta clicar neste botão.
![](https://i.imgur.com/GPbu4ic.png)
2. No repositório de seu fork, entre na página posts e selecione a opção "Add file"(Adicionar arquivo) e após isso clique na opção "Create new file"(Criar novo arquivo).
![](https://i.imgur.com/D9Dmv3V.png)
![](https://i.imgur.com/HeNKLDZ.png)
3. Na caixa de texto com o título de "Name your file"(Nomeie seu arquivo) escreva o nome de seu artigo com a extensão .md(markdown). Por exemplo: "comecando-com-nextjs.md"(O nome do arquivo não pode conter letras maiúsculas, nem caracteres especiais como acentos, apenas letras e traços).
![](https://i.imgur.com/afSkCc9.png)
4. No começo do artigo, você deve colocar os metadados do artigo no formato abaixo:
```---
title: 'Título do artigo' // Titulo do seu artigo(Nesse você pode colocar caracteres especiais)
metaTitle: 'Título do artigo' // Coloque o mesmo título aqui
metaDesc: 'Descrição do artigo' // Aqui coloque a descrição do seu artigo
date: '24/9/2023' // Aqui coloque a data do artigo(Formato DD/MM/YY)
socialImage: 'images/thumb.jpg' // Aqui coloque o caminho para a thumbnail(Banner) do artigo(Você pode colocar a imagem no nosso repositório do Github na pasta public/images).
tags:
  - minha-tag // Aqui você coloca as tags, não pode conter espaço e nem caracteres especiais entre as tags e as tags sempre devem começar com um traço(-) no começo.
  - minha-tag-2
---```
5. Escreva o conteúdo do artigo usando o formato [Markdown do Github](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) para formatação, você também pode usar tags HTML(Hypertext Markup Language) para formatação mas não pode usar CSS(Cascading Style Sheets) nem Javascript.
![](https://i.imgur.com/C5vX57H.png)
6. Após terminar de escrever o artigo seguindo os passos acima, você deve fazer um commit do seu artigo clicando no botão "Commit changes"(Salvar mudanças).
![](https://i.imgur.com/rwTJBUG.png)
7. Após salvar as mudanças, finalmente você deve criar uma nova Pull request para finalizar sua contribuição, na aba "Pull requests" de seu fork clique no botão "Create new pull request"(Criar nova pull request) após isso confirme o Pull request clicando no botão "Create new pull request" na página que acabou de se abrir.
![](https://i.imgur.com/Znfi75S.png)
![](https://i.imgur.com/7ufyTqs.png)
![](https://i.imgur.com/neOfQNN.png)
8. E pronto, agora basta aguardar! Após fazer a pull request, pode demorar até 2 dias para que seu artigo seja aprovado, ele será avaliado por nós que administramos o repositório principal e caso seu artigo cumpra com todos os requisitos citados acima, ele será aprovado. 