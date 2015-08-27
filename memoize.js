/**
 * $memoize
 * 
 * Uma técnica útil para otimização de cache os resultados das chamadas de função de
 * tal forma que as pesquisas longos ou cálculos recursivos caros pode ser minimizado sempre que possível
 * 
 * @module $memoize
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $memoize(function (a) {
 *          return Function('x', $reduce(steps, a, $lambda('(a, b) => b(a)')));
 *        });
 * 
 */
this.Ninja.module('$memoize', ['$apply'], function ($apply) {
  
  /**
   * Uma técnica útil para otimização de cache os resultados das chamadas de função de
   * tal forma que as pesquisas longos ou cálculos recursivos caros pode ser minimizado sempre que possível
   * 
   * @public
   * @method $memoize
   * @param {Function} a Funcao que sera memoizado
   * @return {Function} Funcao proxy que memoiza o resultado
   * @example
   * 
   *        $memoize(function (a) {
   *          return Function('x', $reduce(steps, a, $lambda('(a, b) => b(a)')));
   *        });
   * 
   */
  function memoize(a) {
    
    var cache = {};
    
    /**
     * Funcao intermediaria para devolver a retorno da funcao callback
     * caso cacheando o mesmo se ainda nao foi executado
     */
    return function () {
      return cache[JSON.stringify(arguments)] || (cache[JSON.stringify(arguments)] = $apply(a, arguments));
    };
    
  };
  
  /**
   * Revelacao do servico $memoize, encapsulando a visibilidade das funcoes
   * privadas
   */
  return memoize;
  
});
