// http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
export function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;

    if (strCPF === null || strCPF === undefined)
        return false
    strCPF = strCPF.replace(/\D/g, '')
    if (strCPF === "00000000000")
        return false;
    for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11))
        Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) {
        return false;

    }
    Soma = 0;
    for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11))
        Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) {
        return false;
    }
    return true;
}