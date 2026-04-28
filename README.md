# DevBank Angular

Projeto DevBank migrado de React (Vite + React Router + Context API) para **Angular 17** com Standalone Components e Signals.

## Tecnologias utilizadas

- Angular 17 (Standalone Components)
- Angular Router (substitui react-router-dom)
- Angular HttpClient (substitui axios)
- Angular Signals (substitui useState / Context API)
- CSS puro (mesmo visual do projeto original)

## Como rodar

### Pré-requisitos
- Node.js 18+
- Angular CLI: `npm install -g @angular/cli`

### Instalação e execução

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
ng serve

# Acessar no navegador
http://localhost:4200
```

### Build para produção

```bash
ng build
```

## Estrutura do projeto

```
src/
├── app/
│   ├── app.component.ts          # Componente raiz (equivalente ao App.tsx)
│   ├── app.config.ts             # Providers: Router + HttpClient
│   ├── app.routes.ts             # Rotas (equivalente ao AppRouter.tsx)
│   ├── services/
│   │   └── conta.service.ts      # Estado global (equivalente ao assessment-context.tsx)
│   ├── components/
│   │   ├── card/                 # Componente de cédula (equivalente ao Card.tsx)
│   │   └── registro/             # Componente de transação (equivalente ao Registro.tsx)
│   └── pages/
│       ├── tela-login/           # Tela de login
│       ├── tela-home/            # Tela principal
│       ├── tela-deposito/        # Tela de depósito
│       ├── tela-sacar/           # Tela de saque
│       └── tela-transacoes/      # Histórico de transações
└── assets/
    └── img/                      # Copie as imagens do projeto React aqui
        ├── image.webp
        ├── depositar.png
        ├── sacar.png
        └── transacao.png
```

## Imagens

Copie as imagens do projeto React original para `src/assets/img/`:
- `image.webp` → logo do banco
- `depositar.png`, `sacar.png`, `transacao.png` → ícones dos botões

## Tabela de equivalências React → Angular

| React                         | Angular                            |
|-------------------------------|------------------------------------|
| `useState`                    | `signal()`                         |
| `useEffect`                   | `ngOnInit()`                       |
| `useContext` / Context API    | `ContaService` com `signal()`      |
| `react-router-dom`            | `@angular/router`                  |
| `axios`                       | `HttpClient`                       |
| `BrowserRouter / Routes`      | `app.routes.ts` + `<router-outlet>`|
| Props com interface           | `@Input()`                         |
| `JSX`                         | Templates HTML (`.component.html`) |
| `@mui/material Alert`         | `<div>` com CSS próprio            |
