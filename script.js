const horarios = {
    quarta: [
        ["07:00 - 07:40", "Física"],
        ["07:50 - 08:40", "Geografia"],
        ["08:40 - 09:30", "Química"],
        ["09:30 - 09:50", "Lanche"],
        ["09:50 - 10:40", "Biologia"],
        ["10:40 - 11:30", "Língua Portuguesa"],
        ["11:30 - 12:20", "Língua Portuguesa"]
    ],
    quinta: [
        ["07:00 - 07:40", "Física"],
        ["07:50 - 08:40", "Língua Portuguesa"],
        ["08:40 - 09:30", "Língua Portuguesa"],
        ["09:30 - 09:50", "Lanche"],
        ["09:50 - 10:40", "Matemática"],
        ["10:40 - 11:30", "Matemática"],
        ["11:30 - 12:20", "Química"]
    ],
    sexta: [
        ["07:00 - 07:40", "Matemática"],
        ["07:50 - 08:40", "Matemática"],
        ["08:40 - 09:30", "Biologia"],
        ["09:30 - 09:50", "Lanche"],
        ["09:50 - 10:40", "História"],
        ["10:40 - 11:30", "Inglês"],
        ["11:30 - 12:20", "Inglês"]
    ]
};

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function obterProximoDia() {
    const hoje = new Date().getDay();  // 0 = Domingo, 1 = Segunda-feira, ... 3 = Quarta-feira, 4 = Quinta-feira, 5 = Sexta-feira

    if (hoje === 3) { // Quarta-feira
        return 'quinta';
    } else if (hoje === 4) { // Quinta-feira
        return 'sexta';
    } else if (hoje === 5) { // Sexta-feira
        return 'quarta';
    } else if (hoje === 6) { // Sábado
        return 'quarta';
    } else { // Domingo ou Segunda-feira
        return 'quarta';
    }
}

function responder() {
    const pergunta = removerAcentos(document.getElementById('pergunta').value.toLowerCase());
    let resposta = '';

    // Esconde a tela principal (home)
    document.getElementById('home').style.display = 'none';

    // Mostra a tabela correspondente ao dia
    if (pergunta.includes('quarta')) {
        document.getElementById('quarta').style.display = 'block';
    } else if (pergunta.includes('quinta')) {
        document.getElementById('quinta').style.display = 'block';
    } else if (pergunta.includes('sexta')) {
        document.getElementById('sexta').style.display = 'block';
    } else if (pergunta.includes('amanha') || pergunta.includes('proximo dia')) {
        const diaProximo = obterProximoDia();

        if (diaProximo) {
            document.getElementById(diaProximo).style.display = 'block';
        }
    } else {
        alert('Desculpe, não entendi. Pergunte sobre as aulas de quarta, quinta, sexta ou sobre as aulas de amanhã.');
    }
}

function voltar() {
    // Esconde as tabelas de aulas
    document.getElementById('quarta').style.display = 'none';
    document.getElementById('quinta').style.display = 'none';
    document.getElementById('sexta').style.display = 'none';

    // Mostra a tela inicial
    document.getElementById('home').style.display = 'block';
}
