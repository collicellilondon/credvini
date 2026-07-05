# CredVini 2.0

Sistema financeiro local para gestão de clientes, empréstimos, parcelas e recebimentos. Nenhum dado é enviado para servidores externos: tudo é armazenado no `localStorage` do navegador.

## Executar

```bash
pnpm install
pnpm dev
```

Acesse `http://localhost:3000`.

Login demonstrativo:

- E-mail: `vinicius@credvini.com`
- Senha: `CredVini@2026`

## Persistência e backup

- Chave local: `credvini_data_v3`
- Os dados permanecem após recarregar ou fechar a página.
- O primeiro acesso começa com a base vazia, sem dados fictícios.
- Em **Configurações**, use **Baixar backup** para exportar um arquivo JSON.
- **Apagar todos os dados** limpa a base local após confirmação.

Importante: limpar os dados do navegador remove a carteira local. Faça backups periódicos.

## Fluxo de teste

1. Entre com o login demonstrativo.
2. Cadastre um cliente em **Clientes**.
3. Crie um contrato em **Empréstimos**, escolha pagamento semanal ou mensal e informe o valor por período.
4. Registre uma baixa integral ou parcial em **Pagamentos**.
5. Atualize a página e confirme que os dados permanecem.
6. Consulte **Alertas**, **Extratos** e **Relatórios**.
7. Use **Imprimir / PDF** e escolha “Salvar como PDF” no navegador.

## Produção local

```bash
pnpm build
pnpm start
```
