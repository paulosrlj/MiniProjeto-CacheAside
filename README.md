# MiniProjeto-CacheAside
Miniprojeto para a disciplina de Banco de dados II. Consiste em implementar uma estratégia primitiva de Cache-Aside (Lazy Loading) usando Postgres e Redis

# :blue_book: Instruções

<h4>:heavy_check_mark: Instalar dependências</h4>
<p><b>yarn</b> ou <b>npm i</b></p>

<h4>:heavy_check_mark: Criar um arquivo .env e configurar as variáveis do Postgres e Redis:</h4>
<p>DATABASE_HOST</p>
<p>DATABASE_USERNAME</p>
<p>DATABASE_PASSWORD</p>
<p>DATABASE</p>
<p>REDIS_HOST</p>
<p>REDIS_PORT</p>


<h4>:heavy_check_mark: Executar os comandos do sequelize para criar e povoar as tabelas:</h4>

--- Executa as migrations para criar a tabela ---
<p><b>yarn sequelize db:migrate</b> ou <b>npx sequelize db:migrate</b></p>

--- Executa as seeds para povoar a tabela ---
<p><b>yarn sequelize db:seed:all</b> ou <b>npx sequelize db:seed:all</b></p>

<h4>:heavy_check_mark: Executar o projeto</h4>
<p><b>yarn dev</b> ou <b>npm run dev</b></p>
