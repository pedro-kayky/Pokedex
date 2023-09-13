# Projeto Pokédex

![site](/src/components/imgs/site.png)
O projeto é uma aplicação de página única (SPA) desenvolvida em React.js e utiliza vários componentes reutilizáveis para criar uma experiência interativa para os usuários. Ele se conecta à API PokeAPI para obter dados sobre os Pokémon, como nomes, tipos e imagens. Os temas claro e escuro estão disponíveis para a interface do usuário, e os usuários podem carregar mais Pokémon à medida que navegam pela lista. É uma aplicação divertida e informativa para os fãs de Pokémon!

## Índice
- <a href="#📱funcionalidades-do-projetofuncionalidades">Funcionalidades do projeto </a>
 - <a href="#como-rodar-este-projeto">Como rodar este projeto? </a>
- <a href="#🛠️-tecnologias-utilizadas">Tecnologias utilizadas </a>



## 📱Funcionalidades Do Projeto

#### Barra de Pesquisa
- [x] Permite aos usuários pesquisar Pokémon pelo nome.
- [x] Fornece sugestões à medida que o usuário digita.


![search](src/components/imgs/search.gif)

#### Botão de Alternância de Tema
- [x] Oferece suporte a dois temas: claro e escuro.


![theme](src/components/imgs/theme.gif)

#### Lista de Filtro
- [x] Permite aos usuários filtrar Pokémon com base em seus tipos.


![filter](src/components/imgs/fillter.gif)


#### Detail Page
- [x] Permite aos usuários ver detalhes completos de um Pókemon.


![select](src/components/imgs/select.gif)



#### Botão de Carregamento Adicional
- [x] Permite aos usuários expandir a lista de Pokémon.
- [x] Carrega mais 10 Pokémon de cada vez.


![button](src/components/imgs/button%20add.gif)

## Como rodar este Projeto?
```bash
# Clone este Repositório
$git clone LinkRepo

# Instale as depêndencias
$npm install

#execute a aplicação
$npm run start

```
## 🛠️ Tecnologias Utilizadas
1. [react](https://react.dev/)
2. [react Router](https://reactrouter.com/en/main)
3. [react autosuggest](https://react-autosuggest.js.org/)