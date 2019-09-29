/**
 * Calcula o tempo que leva para o dinheiro render uma quantia
 * @param {*} c capital
 * @param {*} j juros
 * @param {*} m montante
 */
export function tempo  ( c , j , m ){
    if( c === 0 || typeof c == 'undefined' || isNaN(c) ){
        throw(  "Valor de capital é invalido")
    }
    const left = Math.log10( m / c );
    const rigth = Math.log10( 1 + j / 100 ); 

    const resultado =  (left / rigth) 
    return resultado.toFixed(2);
    // return resultado;

}

/**
 * 
 * @param {*} c capital 
 * @param {*} t tempo
 * @param {*} m monte
 */
export function tjuros ( c , t , m) {
    
    if( isNaN(c) ) throw "Erro Capital não é valido" 
    if( isNaN(t) ) throw "Erro Tempo não é valido" 
    if( isNaN(m) ) throw "Erro Montante não é valido" 

    const prim =  m/c;

    let juros = Math.pow(prim, 1 / t) ;
 
    juros = juros - 1

    juros = juros.toFixed(2)

    return juros;

}

/**
 * 
 * M = C( 1+ ( j / 100 ) )^t 
 * @param {*} c = capital
 * @param {*} j = juros 
 * @param {*} t = tempo
 * A função retorna o montante!
 */
export function montante( c , j , t , aporte = null) {
   
    if( c === undefined || j === undefined || t === undefined){
        throw("Erro valores não definidos")
    }

    if( isNaN(c) ) throw "Erro Capital não é valido" 
    if( isNaN(j) ) throw "Erro Juros não é valido" 
    if( isNaN(t) ) throw "Erro Tempo não é valido" 
  
    const resultado  = ( c * Math.pow(  1+  j/100 , t ) ).toFixed(2)
     
    return resultado
}

export function montanteAporte( c,j,t,aporte = 1){
    const resultado = c +   ( aporte * ( ( ( ( Math.pow( ( 1 + ( j /100 ) ) , t + 1)  -1 )/ ( j / 100)) ) -1 ) );
    
    return resultado.toFixed(2);
}