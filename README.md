# Desenvolvimento da Tela
- Tela Desenvolvida em Angular, TypeSript, SASS
    - Estrtura do Projeto: 
        - Assets : Imagens da tela
        - Pages: Componente principal do projeto, possui: Controller, Template e Styles
        - SASS: Segregação de folhas de estilo em SASS
        - MODELS: Interfaces (Plataformas e Planos)   
        - SERVICES: Camada de serviços, acesso aos endPoints                
- Observações : Toda parte visual do projeto foi feita em SASS(css), poderia ter utilizado outros frameworks de front, mais optei em fazer tudo manualmente.
- Paulo Eduardo - pauloems@yahoo.com.br - (21) 98438-4352

# COMO RODAR O TESTE
- Utilizar o comando GIT CLONE #Link do Projeto;
- Rodar o comando # Npm i para instalar as dependências;
- Rodar o comando # ng serve --open para servir o navegador com o projeto.

# MEUS DADOS

- Paulo Eduardo - pauloems@yahoo.com.br - (21) 98438-4352
- Curriculo: em anexo na pasta _curriculo na raiz do repositorio



# COMPROVANTE QUE FINALIZEI O PRIMEIRO DESAFIO 

![Marca da Wooza](teste-js/logo.png "Wooza")

# Vaga: Front-End

Muito bom você ter chegado até aqui! :)

Através desse teste poderemos analisar o seu estilo de codificação, bibliotecas preferidas, raciocínio lógico, entre outros detalhes que poderão fazer a diferença na hora da sua entrevista.

Lembrando que esse teste é opcional, e daremos total prioridade na seleção para quem enviá-lo junto com o currículo. Podemos receber tanto um arquivo .zip com o projeto completo quanto um link publicado no seu repositório pessoal (seja github ou bitbucket).

Ah, mais um detalhe importante: essa vaga é presencial, e nosso escritório fica localizado aqui na Barra da Tijuca, Rio de Janeiro/RJ. Por enquanto, não temos previsão de trabalho remoto.

---
### O que devo fazer agora? ###

* Implemente sua solução para a proposta do teste.
* Documente todos os passos necessários para executá-la
* Envie por e-mail para selecao@wooza.com.br junto com o seu currículo.

---
### Ok, mas... como é esse teste? ###

Aqui na Wooza trabalhamos com aplicações completas em AngularJS 1.6, que consomem serviços externos e gerenciam as informações durante todo o fluxo de navegação do usuário. Por isso, queremos conhecer um pouco da sua experiência com o AngularJS pois aqui você irá trabalhar 90% do seu tempo com ele! ;)

A sua aplicação deverá listar as plataformas da seguinte API: 
```
http://private-59658d-celulardireto2017.apiary-mock.com/plataformas 
```
Com essa listagem, você deverá possibilitar ao usuário navegar pelos respectivos planos (vinculados pelo sku) de cada plataforma. Abaixo segue as URL's da API de planos:

```
http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01 (tablet)
http://private-59658d-celulardireto2017.apiary-mock.com/planos/CPT02 (computador)
http://private-59658d-celulardireto2017.apiary-mock.com/planos/WF03 (wi-fi)
```

Costumamos separar essas etapas em rotas diferentes. A última tela deverá ser um formulário simples, e com os seguintes campos: Nome, E-mail, Nascimento, CPF e Telefone.
No botão de submit do formulário, basta printar as informações no console do navegador (inclusive os dados do plano selecionado nas etapas anteriores).

Em resumo, essas são as etapas da aplicação:

* Selecionar plataforma
* Selecionar plano
* Preencher dados pessoais

A parte visual fica ao seu critério, faça como achar melhor. Não esqueça de criar um Readme na raiz do projeto nos orientando sobre como rodar sua aplicação, ok? Lembrando que quanto menos comandos precisarmos para isso, melhor! ;)

---
### O que iremos analisar ###

* Boa organização de código
* Automatização de tarefas (Grunt, Gulp, Webpack)
* Reutilização e Componentização
* Organização dos estilos (OOCSS, BEM, SMACSS)
* Noções de UI/UX
* Testes serão um excelente **diferencial**

---

## Boa sorte! ##