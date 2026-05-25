# Serviço de Pagamento

Classe para gerenciar pagamentos com armazenamento de histórico e categorização automática.

## Funcionalidades

- **Realizar pagamento** (`pagar`): Registra um novo pagamento com código de barras, empresa e valor
- **Consultar último pagamento** (`consultarUltimoPagamento`): Retorna o último pagamento realizado
- **Categorização automática**: Pagamentos com valor > R$ 100,00 são categorizados como "cara", caso contrário como "padrão"

## Instalação

```bash
npm install
```

## Uso

```javascript
const ServicoDePagamento = require('./src/servicoDePagamento');

const servico = new ServicoDePagamento();

// Realizar um pagamento
servico.pagar('0987-7656-3475', 'Samar', 156.87);

// Consultar o último pagamento
const ultimoPagamento = servico.consultarUltimoPagamento();
console.log(ultimoPagamento);
// {
//   codigoBarras: '0987-7656-3475',
//   empresa: 'Samar',
//   valor: 156.87,
//   categoria: 'cara'
// }
```

## Testes

Execute os testes com:

```bash
npm test
```

## Estrutura

```
src/
  servicoDePagamento.js    # Classe principal
test/
  servicoDePagamento.test.js # Testes com Mocha e Node Assert
```

## Propriedades do Pagamento

- **codigoBarras**: String com o código de barras do pagamento
- **empresa**: String com o nome da empresa
- **valor**: Number com o valor do pagamento
- **categoria**: String com a categorização ('cara' ou 'padrão')
