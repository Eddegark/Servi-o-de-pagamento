const assert = require('assert');
const ServicoDePagamento = require('../src/servicoDePagamento');

describe('ServicoDePagamento', () => {
  let servico;

  beforeEach(() => {
    servico = new ServicoDePagamento();
  });

  describe('pagar()', () => {
    it('deve realizar um pagamento e retornar o objeto do pagamento', () => {
      const pagamento = servico.pagar('0987-7656-3475', 156.87);

      assert.strictEqual(pagamento.codigoBarras, '0987-7656-3475');
      assert.strictEqual(pagamento.empresa, 'Nike');
      assert.strictEqual(pagamento.valor, 156.87);
    });

    it('deve categorizar como "cara" quando valor é maior que 100.00', () => {
      const pagamento = servico.pagar('0987-7656-3475', 156.87);
      assert.strictEqual(pagamento.categoria, 'cara');
    });

    it('deve categorizar como "padrão" quando valor é igual a 100.00', () => {
      const pagamento = servico.pagar('1234-5678-9012', 100.00);
      assert.strictEqual(pagamento.categoria, 'padrão');
    });

    it('deve categorizar como "padrão" quando valor é menor que 100.00', () => {
      const pagamento = servico.pagar('1234-5678-9012', 50.00);
      assert.strictEqual(pagamento.categoria, 'padrão');
    });

    it('deve armazenar múltiplos pagamentos', () => {
      servico.pagar('0001-0001-0001', 150.00);
      servico.pagar('0002-0002-0002', 75.00);
      servico.pagar('0003-0003-0003', 200.00);

      assert.strictEqual(servico.pagamentos.length, 3);
    });
  });

  describe('consultarUltimoPagamento()', () => {
    it('deve retornar o último pagamento realizado', () => {
      servico.pagar('0001-0001-0001', 150.00);
      servico.pagar('0987-7656-3475', 156.87);

      const ultimoPagamento = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimoPagamento.codigoBarras, '0987-7656-3475');
      assert.strictEqual(ultimoPagamento.empresa, 'Nike');
      assert.strictEqual(ultimoPagamento.valor, 156.87);
      assert.strictEqual(ultimoPagamento.categoria, 'cara');
    });

    it('deve retornar null quando nenhum pagamento foi realizado', () => {
      const resultado = servico.consultarUltimoPagamento();
      assert.strictEqual(resultado, null);
    });

    it('deve retornar apenas o último pagamento e não toda a lista', () => {
      servico.pagar('0001-0001-0001', 150.00);
      servico.pagar('0002-0002-0002', 75.00);

      const ultimoPagamento = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimoPagamento.codigoBarras, '0002-0002-0002');
      assert.strictEqual(ultimoPagamento.empresa, 'Nike');
    });
  });
});
