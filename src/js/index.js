const botao = document.getElementById('botaoConselho');
const conselhoGerado = document.getElementById('conselhoGerado');
const conselhoId = document.getElementById('conselhoId');

async function gerarConselho() {
    const url = await fetch("https://api.adviceslip.com/advice");
    const conselho = await url.json();
    const idConselho = `Conselho #${conselho.slip.id}`;
    const textoConselho = `"${conselho.slip.advice}"`;

    conselhoId.innerHTML = idConselho;
    conselhoGerado.innerHTML = textoConselho;
}

botao.addEventListener('click', gerarConselho);

gerarConselho();