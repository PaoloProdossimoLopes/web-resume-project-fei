let resultComponent = document.getElementById('resultLabel');
let inputed = document.getElementById('chuteTextField');

function adivinhaNumero() {
    const chute = inputed.value;

    if (!isNumeric(chute)) {
        inputed.value = ''
        resultComponent.textContent = `Você digitou uma entrada incorreta!`;
        resultComponent.style.setProperty('background-color','#8f2135');
        return
    }

    let random = Math.random() * 100;
    random = Math.floor(random);

    if (chute == random) {
        resultComponent.textContent = 'Correto!';
        resultComponent.style.setProperty('background-color','#308f21' );
    } else if (chute > random) {
        resultComponent.textContent = `Incorreto. O numero era ${random}, seu chute foi maior!`;
        resultComponent.style.setProperty('background-color','#8f2135');
    } else {
        resultComponent.textContent = `Incorreto. O numero era ${random}, seu chute foi menor!`;
        resultComponent.style.setProperty('background-color','#8f2135');
    }
}

function isNumeric(number) {
    return (/^-?\d+$/.test(number))
}

