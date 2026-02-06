# Padrões de Git - Compliance

Padronização de branches e mensagens de commit para manter consistência nos projetos.

## Branches

### Branches principais
- `main` - branch de produção estável
- `production` - branch de produção
- `develop` - branch de development
- `beta` - branch beta

### Branches de desenvolvimento

Devem seguir o padrão: `<tipo>/<id-tarefa>-<descrição>`

**Tipos permitidos:**
- `feature` - nova funcionalidade
- `bugfix` - correção de bug
- `improvement` - otimização ou melhoria
- `hotfix` -  aplicação de hotfix
- `conflict` - Branch para resolução de conflito
- `chore` - branch para ajustes diversos

**Exemplos:**
```
feature/AQG-2341-nova-feature
bugfix/AQG-2345-corrigindo-bug
improvement/AQG-5231-otimizacao-thumbnail
```

## Mensagens de Commit

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) conforme a [configuração padrão do commitlint](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

### Formato

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapés opcionais]
```

### Regras obrigatórias

- **Tipo** (obrigatório): `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`
- **Descrição** (obrigatória): 
  - Começar com letra minúscula
  - Máximo 100 caracteres na primeira linha
  - Descrições adicionais devem usar o corpo do commit

### Exemplos

```
feat: adicionar autenticação de dois fatores

fix: corrigir validação de email

docs: atualizar guia de instalação
```


