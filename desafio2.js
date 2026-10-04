const dados = {
    estoque: [
        {
            codigoProduto: 101,
            descricaoProduto: "Caneta Azul",
            estoque: 150
        },
        {
            codigoProduto: 102,
            descricaoProduto: "Caderno Universitário",
            estoque: 75
        },
        {
            codigoProduto: 103,
            descricaoProduto: "Borracha Branca",
            estoque: 200
        },
        {
            codigoProduto: 104,
            descricaoProduto: "Lápis Preto HB",
            estoque: 320
        },
        {
            codigoProduto: 105,
            descricaoProduto: "Marcador de Texto Amarelo",
            estoque: 90
        }
    ]
};


const movimentacoes = [
    {
        id: 1,
        produto: 105,
        tipo: "ENTRADA",
        quantidade: 150
    },
    {
        id: 2,
        produto: 105,
        tipo: "SAÍDA",
        quantidade: 20
    }
];


for (let i = 0; i < movimentacoes.length; i++) {

    for (let j = 0; j < dados.estoque.length; j++) {

        if (dados.estoque[j].codigoProduto === movimentacoes[i].produto) {

            if (movimentacoes[i].tipo === "ENTRADA") {

                dados.estoque[j].estoque =
                    dados.estoque[j].estoque + movimentacoes[i].quantidade;

            } else {

                dados.estoque[j].estoque =
                    dados.estoque[j].estoque - movimentacoes[i].quantidade;

            }

            console.log(
                dados.estoque[j].descricaoProduto,
                "Estoque final:",
                dados.estoque[j].estoque
            );
        }
    }
}