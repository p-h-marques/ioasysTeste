# Anotações

- revisar componentes
- mudança de ícone do olhinho
- descrever, depois, a estrutura de arquivos
- descrever certinho as paradas do `store`
- dar uma revisada nos requisitos

### TODOs
- precisa ir validando as infos a cada requisição
- caso o request dê errado, fazer o processo de logout
- deixar requisições fetch centralizadas
- colocar loading na requisição das empresas
- deixar as "imagens" dinâmicas
- verificar o local storage em todas as páginas

### VALIDANDO CREDENCIAIS
- verifica state. se houver, usar ele no actualAuth - ok
- se não houver, verificar localstorage. se houver, usar ele no actualAuth - ok
- se o actualAuth tiver vazio, já retorna um false
- se o actualAuth tiver infos, tenta uma requisição qualquer
- se retornar 200, retornar true. caso contrário, retornar false