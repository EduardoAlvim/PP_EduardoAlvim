let validar = document.getElementById('val');
const enviar = document.getElementById('sub');
enviar.disabled = true;

validar.addEventListener('click', (e) => {
    Validacao(e);
});

function Validacao(e) {
    let valueradio;
    const CPF = document.getElementById('cpf');
    const Nome = document.getElementById('nome');
    const Email = document.getElementById('email');
    const cb1 = document.getElementById('rec');
    const cb2 = document.getElementById('duv');
    const cb3 = document.getElementById('outro');
    const r1 = document.getElementById('masc');
    const r2 = document.getElementById('fem');

    const spanCPF = document.getElementById('cpfSpan');
    const spanNome = document.getElementById('nomeSpan');
    const spanEmail = document.getElementById('emailSpan');
    const spanCb = document.getElementById('checkSpan');
    const spanR = document.getElementById('radioSpan');

    if (CPF.value === "") {
        spanCPF.textContent = 'O campo de CPF não pode estar vazio';
        CPF.style.borderColor = 'red';
        enviar.disabled = true;
    }

    else if (Nome.value === "") {
        spanNome.textContent = 'O campo de nome não pode estar vazio';
        Nome.style.borderColor = 'red';
        enviar.disabled = true;
    }

    else if (Email.value === "") {
        spanEmail.textContent = 'O campo de nome não pode estar vazio';
        Email.style.borderColor = 'red';
        enviar.disabled = true;
    }

    else if (r1.checked === false && r2.checked == false) {
        spanR.textContent = 'Você deve escolher pelo menos uma opção';
        enviar.disabled = true;
    }

    else if (cb1.checked === false && cb2.checked == false && cb3.checked == false) {
        spanCb.textContent = 'Você deve escolher pelo menos uma opção';
        enviar.disabled = true;
    }

    else {
        spanCPF.textContent = ' ';
        spanNome.textContent = ' ';
        spanEmail.textContent = ' ';
        spanCb.textContent = ' ';
        spanR.textContent = ' ';
        CPF.style.borderColor = 'black';
        Nome.style.borderColor = 'black';
        Email.style.borderColor = 'black';
        enviar.disabled = false;
    }
}