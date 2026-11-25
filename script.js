
const dadosPesquisa = {
    mediaNacionalDiaria: 4,
    alertaSaude: 6,

    sugestoes: [
        {
            limite: 2,
            mensagem: "Parabéns! Seu uso está equilibrado. Você tem mais tempo livre para hobbies e descanso."
        },
        {
            limite: 5,
            mensagem: "Atenção! Você está próximo da média nacional e já dedica bastante tempo às redes sociais."
        },
        {
            limite: 24,
            mensagem: "Cuidado! Seu uso é considerado muito alto. Isso pode afetar seu sono, foco e bem-estar. Que tal reservar mais momentos longe das telas?"
        }
    ]
};

document.getElementById("calcular").addEventListener("click", function() {

    const horasDigitadas = document.getElementById("horas").value;
    const horas = Number(horasDigitadas);
    const resultado = document.getElementById("resultado");

    if (horasDigitadas === "" || horas < 0 || horas > 24) {
        resultado.innerHTML = "<p>Digite um número entre 0 e 24 horas.</p>";
        return;
    }

    const semanal = horas * 7;
    const mensal = horas * 30;

    let comparacao;

    if (horas > dadosPesquisa.mediaNacionalDiaria) {
        comparacao = "Seu uso está acima da média nacional de 4 horas por dia.";
    } else if (horas === dadosPesquisa.mediaNacionalDiaria) {
        comparacao = "Seu uso está exatamente na média nacional de 4 horas por dia.";
    } else {
        comparacao = "Seu uso está abaixo da média nacional de 4 horas por dia.";
    }

    let mensagem;

    if (horas <= 2) {
        mensagem = dadosPesquisa.sugestoes[0].mensagem;
    } else if (horas <= 5) {
        mensagem = dadosPesquisa.sugestoes[1].mensagem;
    } else {
        mensagem = dadosPesquisa.sugestoes[2].mensagem;
    }

    resultado.innerHTML = `
        <h3>Seu resultado:</h3>
        <p>Você passa <strong>${semanal} horas por semana</strong> nas redes sociais.</p>
        <p>Em um mês, isso representa <strong>${mensal} horas</strong>.</p>
        <p>${comparacao}</p>
        <p><strong>Reflexão:</strong> ${mensagem}</p>
    `;
});
