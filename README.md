<p align="center">
  <a href="" rel="noopener">
 <img width=200px src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" alt="Project logo"></a>
</p>

<h3 align="center">Desafio 01: Desenvolvendo APIs e Middlewares</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/languages/count/fcsouza/challenges-and-modules-rocketseat)]()
[![GitHub Pull Requests](https://img.shields.io/github/last-commit/fcsouza/challenges-and-modules-rocketseat)]()
[![Made By](https://img.shields.io/badge/Made%20By-Fabricio%20Cavalcante-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p>Esse desafio é o primeiro desafio da GoStack da rocketseat, tendo como objetivo colocar os conceitos iniciais de express e node à prova.</p>

## :rocket: Sobre o desafio

O objetivo do desafio é utilizar o conceito de rotas, portanto, os dados ainda estão sendo manipulados diretamente na aplicação, sem utilizar banco de dados.


### **Um pouco sobre as ferramentas**

- Express;
- Sucrase + Nodemon;


### **Inicializar API**

- yarn dev
- yarn dev:debug (verificar pasta .vscode para configurações)


### **Rotas**

Abaixo estão descritas as rotas do sistema.

  #### - Projects (/projects)
  
  | Resource | Method | Params (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /projects    | GET   | {/} | {/} |
| /projects    | POST    | {id, title} | {/} |
| /projects/:id/tasks    | POST    | {title} | {/} |
| /projects/:id    | PUT    | {title} | {/} |
| /projects/:id    | DELETE    | {/} | {/} |

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Proposto com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
