const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('Alcool gel', 'Mascara'))).toEqual(true);
    expect(productDetails('Alcool gel', 'Mascara')).toHaveLength(2);
    expect(typeof Object.keys(productDetails('Alcool gel', 'Mascara'))).toEqual('object');
    expect(productDetails('Alcool gel', 'Mascara')[0].name).toBe('Alcool gel') && (productDetails('Alcool gel', 'Mascara')[1].name).toBe('Mascara');
    expect(productDetails('Alcool gel', 'Mascara')[0].details.productId).toContain('123') && (productDetails('Alcool gel', 'Mascara')[1].details.productId).toContain('123');
  });
});
