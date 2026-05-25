# Serviço de Pagamento

Classe para gerenciar pagamentos com armazenamento de histórico e categorização automática.

Funcionalidades
Realizar pagamento (pagar): Registra um novo pagamento com código de barras, empresa e valor
Consultar último pagamento (consultarUltimoPagamento): Retorna o último pagamento realizado
Categorização automática: Pagamentos com valor > R$ 100,00 são categorizados como "cara", caso contrário como "padrão"

## Propriedades do Pagamento

- `codigoBarras`: String
- `empresa`: String (Nike)
- `valor`: Number
- `categoria`: String ('cara' se valor > 100.00, 'padrão' caso contrário)
