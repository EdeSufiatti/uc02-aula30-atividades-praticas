const selectOperacao = document.getElementById('select-operacao')
const btnCalcular = document.getElementById('btn-calcular')
const divRoot = document.getElementById("root")
const textResultado = document.createElement("h3")
divRoot.appendChild(textResultado)

btnCalcular.addEventListener('click', (event) => {
    event.preventDefault()
    // ENTRADA
    // Pegar os dois valores e a operação

    const inputValor1 = Number(document.getElementById("valor1").value);

    const inputValor2 = Number(document.getElementById("valor2").value);

    const operacao = selectOperacao.value
    console.log(operacao)

    // lógica de fazer a operação baseado na operação selecionada
    let resultado = 0
    switch (operacao) {

        case "Somar":
            resultado = inputValor1 + inputValor2;
            break;
        case "Subtrair":
            resultado = inputValor1 - inputValor2;
            break;
        case "Dividir":
            if (inputValor2 > 0)
                resultado = inputValor1 / inputValor2;
            break;
        case "Multiplicar":
            resultado = inputValor1 * inputValor2;
            break

    }
    console.log(resultado)

    // Mostrar o resultado 
    textResultado.textContent = resultado
})