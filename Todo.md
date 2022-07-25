# To Do -Topics

_Dar inicio ao custom hooks [x]_
_implementar regras propostas pelo Samuel [x]_
_Deixar a tabela visuaulmente agradável []_

# Passo a Passo

{_Se a página atual for até 5 (não incluso) deverá ser mostrado a paginação de 1 até current +3_
_Se a paǵina atual for 5 deverá ser mostrado a paginação de 1 até 7_
_Se a página atual for maior que 5 e menor que (total/pageSize - 5) deverá mostrar current - 3 até_ _current +3_
_Se a página atual for maior (inclusive) que (total/pageSize -5) deverá mostrar current -2 até (total/pageSize)_

# --Não esqueça--

# Ex:Verficar com === 5 para dar continuação na paginação anterior caso tenha parado no 5

_outro Ex:_ **if (props.current < 5) {**
**pages = R.range(1, props.current + rangeFromCurrent + 1)**
**return ["|<","<",...pages,">",">|"]**
**}**  
 **if (props.current === 5) {**
**pages = R.range(1, props.current + rangeFromCurrent )**
**return ["|<","<",...pages,">",">|"]**
**}**
_}_

- Página atual precisa aparecer Selecionada ex:( < ... 7, 8, 9 [10] 11, 12 ,13 ... > )
- Estilizar Botão

      <--Link da Documentação-->

  **https://ramdajs.com/docs/#range**
