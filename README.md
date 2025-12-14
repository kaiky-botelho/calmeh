# 🕯️ Calmeh - Bem-Estar e Beleza Artesanal

Landing page moderna e responsiva para produtos artesanais de bem-estar e beleza, desenvolvida com Next.js 16, React 19 e Tailwind CSS 4.

## 📋 Sobre o Projeto

Calmeh é uma aplicação web que apresenta uma linha de produtos artesanais, incluindo velas, difusores e cosméticos naturais. O site oferece uma experiência completa com seções de produtos, depoimentos, história da marca e FAQ.

## ✨ Funcionalidades

- 🏠 **Página Inicial**: Apresentação impactante da marca com CTA para orçamento
- 🎯 **Diferenciais**: Destaque dos valores e benefícios (grid responsivo 2x2 no mobile)
- 📖 **Nossa História**: Narrativa sobre a origem da marca
- 🛍️ **Produtos**: Catálogo completo de produtos artesanais
- 💬 **Depoimentos**: Avaliações de clientes satisfeitos
- ❓ **FAQ**: Perguntas frequentes com accordion interativo
- 💼 **Orçamento**: Seção de contato via WhatsApp com design moderno
- 📱 **Design Responsivo**: Adaptado para todos os dispositivos
- 🎨 **Paleta de Cores**: #FFF6EF (bege) e #b3be4c (verde oliva)

## 🚀 Tecnologias

- **Next.js 16**: Framework React com App Router
- **React 19.2**: Biblioteca JavaScript para UI
- **TypeScript 5**: Tipagem estática
- **Tailwind CSS 4**: Framework CSS utility-first
- **ESLint**: Linting e qualidade de código

## 📦 Estrutura do Projeto

```
calmeh/
├── app/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── CardDepoimento.tsx
│   │   ├── cardDiferenciais.tsx
│   │   ├── CardInfo.tsx
│   │   ├── cardProdutos.tsx
│   │   ├── Header.tsx
│   │   ├── ItemFAQ.tsx
│   │   └── Pill.tsx
│   ├── pages/           # Seções da página
│   │   ├── depoimentos.tsx
│   │   ├── diferencias.tsx
│   │   ├── Footer.tsx
│   │   ├── inicio.tsx
│   │   ├── nossaHistoria.tsx
│   │   ├── orcamento.tsx
│   │   ├── perguntasFrequentes.tsx
│   │   └── produtos.tsx
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página inicial
├── public/
│   └── assets/          # Imagens e recursos estáticos
└── ...
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/kaiky-botelho/calmeh.git
cd calmeh
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
## 🎨 Componentes Principais

- **Header**: Navegação principal do site
- **Pill**: Badge/etiqueta para destaques
- **CardProdutos**: Exibição de produtos
- **CardDepoimento**: Card para depoimentos de clientes
- **CardDiferenciais**: Destaque de diferenciais da marca (grid responsivo)
- **ItemFAQ**: Item de pergunta/resposta expansível com borda colorida
- **Footer**: Rodapé com informações de contato

## 🎨 Paleta de Cores

- **Primária**: `#b3be4c` (Verde Oliva)
- **Secundária**: `#FFF6EF` (Bege Claro)
- **Branco**: `#FFFFFF`
- **Cinza**: Tons de gray para textos

## 📱 Seções da Landing Page

1. **Início** - Hero section com imagem e CTA
2. **Diferenciais** - Cards com ícones (Ingredientes Naturais, Feito à Mão, Sustentabilidade, Aromas Exclusivos)
3. **Nossa História** - Narrativa da marca
4. **Produtos** - Catálogo de produtos artesanais
5. **Depoimentos** - Feedback de clientes
6. **FAQ** - Perguntas frequentes com accordion
7. **Orçamento** - Card moderno com integração WhatsApp
8. **Footer** - Informações de contato e navegaçãoível
- **Footer**: Rodapé com informações de contato

## 🌐 Deploy

O projeto está configurado para deploy na Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kaiky-botelho/calmeh)

## 📄 Licença

Este projeto é privado e de uso exclusivo.

## 👤 Autor

**Kaiky Botelho**

- GitHub: [@kaiky-botelho](https://github.com/kaiky-botelho)

---

Desenvolvido com ❤️ e Next.js
