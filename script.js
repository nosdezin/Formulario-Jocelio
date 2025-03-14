// sistema para colocar simbolos no cpf e impedir caracteres que não são números
document.getElementById("cpf").oninput = (e) => {
    const input = e.target
    const valor = input.value

    if (isNaN(valor[valor.length - 1])) {
        input.value = valor.substring(0, valor.length - 1);
        return;
    }

    input.setAttribute("maxlength", "14");
    if (valor.length == 3 || valor.length == 7) input.value += ".";
    if (valor.length == 11) input.value += "-";
}

// adicionando paises no select de nacionalidade
fetch("https://raw.githubusercontent.com/juliolvfilho/lista-paises/refs/heads/master/paises-array.json").then(resp => resp.json()).then(paises => {
    paises.forEach(pais => {
        document.getElementById("nacionalidade").innerHTML += `<option>${pais['nome']}</option>`
    })
})

// adicionando as cidades ao selecionar o estado
document.getElementById("estado").onclick = () => {
    console.log(document.getElementById("estado").value);
    const valorestado = document.getElementById("estado").value
    fetch('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/refs/heads/master/Cidades.json').then(resp => resp.json()).then(cidades => {
        cidades.forEach(cidade => {
            if (cidade['Estado'] == valorestado) {
                document.getElementById("cidade").innerHTML += `<option>${cidade['Nome']}</option>`
            }
        })
    })
}

// adicionando os estados no select de estados
fetch("https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/refs/heads/master/Estados.json").then(resp => resp.json()).then(Estados => {
    Estados.forEach(estado => {
        document.getElementById("estado").innerHTML += `<option value="${estado['ID']}">${estado['Sigla']}</option>`
    });
})