## Conta-certa

### Descrição do Projeto
O projeto Conta-certa é um aplicativo de controle financeiro pessoal, que tem como objetivo auxiliar o usuário a controlar suas finanças, de forma simples e intuitiva. O aplicativo permite que o usuário cadastre suas receitas e despesas, e a partir disso, o aplicativo gera relatórios e gráficos que auxiliam o usuário a visualizar como está sua situação financeira.

### Integrantes
- [Rinaldo Uchôa](https://github.com/Rinaldo-JR1)
- [Davi Castro](https://github.com/yotta0)

### Como contribuir com o projeto utilizando o Docker
1. Clone o repositório
```bash
git clone https://github.com/yotta0/Conta-certa.git
```
2. Instale o Docker e o Docker Compose
[Instalação do Docker](https://docs.docker.com/get-docker/)
[Instalação do Docker Compose](https://docs.docker.com/compose/install/)

3. Copie o arquivo .env.example para .env e configure as variáveis de ambiente
```bash
cp .env.example .env
```

4. Execute o comando abaixo para subir o ambiente de desenvolvimento
```bash
docker-compose up --build -d
````
5. Acesse o container da aplicação
```bash
docker exec -it conta-certa-app bash
```
6. Pronto! Agora você pode contribuir com o projeto