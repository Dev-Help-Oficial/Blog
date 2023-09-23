---
title: 'Aula | Gerenciamento de memória'
metaTitle: 'Condições: if e else'
metaDesc: 'cpp, c++, c, javascript, js, programacao, programação, code, hacktoberfest, github, youtube, how to code'
date: '9-9-2023'
socialImage: 'images/memorymanagement.png'
tags:
  - nextjs
---
Gerenciamento de Memória: Noção básica

O gerenciamento de memória é um aspecto fundamental no desenvolvimento de software, pois afeta diretamente a eficiência e a segurança das aplicações. Neste artigo, vamos explorar os princípios básicos do gerenciamento de memória em C++. Embora esse artigo seja baseado em C++, os conceitos apresentados aqui podem ser aplicados a outras linguagens de programação.

# Princípios do gerenciamento de memória

1. ## Alocação Dinâmica de Memória

A alocação dinâmica de memória é um método que permite que os desenvolvedores reservem espaço na memória em tempo de execução do programa. Isso proporciona maior flexibilidade no gerenciamento de recursos e é particularmente útil quando você não sabe antecipadamente o tamanho exato que um conjunto de dados precisará.

Exemplo de Alocação Dinâmica de Memória em C++:

```
int* array = new int[10];
```

Neste exemplo, um array de inteiros com tamanho 10 é alocado dinamicamente na memória.

Liberar Memória com delete

Após a alocação dinâmica de memória, é crucial liberar a memória alocada quando ela não for mais necessária para evitar vazamentos de memória. Isso é feito usando o operador delete (ou delete[] para arrays) para desalocar a memória alocada anteriormente.

Exemplo de liberação de memória:

```
delete[] array;
```

Lembre-se de que é responsabilidade do desenvolvedor garantir que a memória seja liberada adequadamente, pois o C++ não possui coleta de lixo automática.

2. ## Smart Pointers

Smart pointers são uma ferramenta poderosa no C++ que auxilia no gerenciamento automático de memória, reduzindo significativamente a possibilidade de vazamentos de memória e erros de desalocação. O tipo mais comum de smart pointer é std::unique_ptr, que garante que o recurso seja liberado automaticamente quando não é mais necessário.

Exemplo de uso de std::unique_ptr:

``` 
#include <memory> 
std::unique_ptr<int> smartPtr = std::make_unique<int>(42);
```

Neste caso, a memória alocada para um inteiro com valor `42` será automaticamente liberada quando smartPtr sair de escopo.

3. ## Contêineres em C++

Os contêineres da Standard Template Library (STL) do C++ são projetados para gerenciar automaticamente a memória associada aos elementos que eles armazenam. Isso significa que você não precisa se preocupar com a alocação e desalocação de memória ao usar contêineres STL.

Exemplo de uso de um std::vector:

```
#include <vector>

std::vector<int> Vetor;
Vetor.push_back(1);
Vetor.push_back(2);
```

O std::vector gerencia automaticamente a memória para os elementos inseridos.

4. ## Regra dos Três/Cinco

Quando você cria suas próprias classes que alocam recursos, como memória dinâmica, é essencial seguir a `Regra dos Três` ou a `Regra dos Cinco`. Essas regras definem os construtores, operadores e destrutores especiais que você deve implementar para garantir que os recursos sejam gerenciados corretamente.

A `Regra dos Três` envolve a implementação de:

    1. Construtor de cópia
    2. Operador de atribuição
    3. Destrutor

A `Regra dos Cinco` adiciona dois outros métodos à `Regra dos Três`:

    1. Construtor de movimento
    2. Operador de atribuição de movimento

Esses métodos garantem que os recursos sejam alocados, copiados e liberados corretamente quando objetos da sua classe são manipulados.

# Possíveis problemas com mau gerenciamento de memória
* Pode levar a Memory Leak, que por sua levará o seu programa a travar;
* Pode gerar problemas de segurança.

O mau gerenciamento de memória pode levar a graves problemas de segurança, como Buffer Overflow, Stack Overflow, Memory Flooding, Code Injection, então sempre gerencie a memória do usuário com cuidado.

Lembra do infame "Não Respondendo" do Windows? Pois então, geralmente a causa de um programa não responder no Windows é por mau gerenciamento de memória que por sua vez leva a falhas como Memory Leak.

# Precauções
O gerenciamento de memória se feito do jeito incorreto, pode gerar diversos problemas como Memory Leak e Out Of Memory.

Como me precaver desse tipo de problema?

### Para se precaver de Memory Leak(Vazamento de memória):
* Sempre libere a memória após o uso.
### Para se precaver de Out Of Memory(Falta de memória)
* Aloque memória com cuidado, tentando nunca alocar mais do que você precisa;
* Monitore o uso de memória, para sempre ter a certeza de que seu programa não vai usar mais do que o necessário.


# Conclusões
O gerenciamento de memória é um conceito que todo desenvolvedor deveria aprender.

Mas como vimos nesse artigo, o mau gerenciamento de memória pode levar de problemas de desempenho no programa até graves falhas de segurança(Exploits).

Então sempre gerencie memória com cuidado.
