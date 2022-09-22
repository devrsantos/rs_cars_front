const btn_geral = document.querySelector(".geral");
const btn_individual = document.querySelector(".individual");
const btn_cadastrar = document.querySelector(".cadastrar");
const btn_alterar = document.querySelector(".alterar");
const btn_deletar = document.querySelector(".deletar");

const geral = () => {
    fetch('http://localhost:3000/geral', {
        method: 'GET',
        headers: {
            'Accept': '*/* , application/json, text/plain',
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json().then(data => console.log(data)));
};

const individual = () => {
    fetch('http://localhost:3000/individual?modelo_veiculo=JAGUAR F-TYPE', {
        method: 'GET',
        headers: {
            'Accept': '*/* , application/json, text/plain',
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json().then(data => console.log(data)));
};

const cadastrar = () => {
    fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {
            'Accept': '*/* , application/json, text/plain',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "modelo_veiculo": "JAGUAR F-TYPE", 
                "descricao_veiculo": "2.0 P300 GASOLINA R-DYNAMIC BLACK CABRIO AUTOMÁTICO",
                "valor_veiculo": "R$ 700.000",
                "cor_veiculo": "Preto", 
                "portas_veiculo": 2, 
                "combustivel_veiculo": "Gasolina", 
                "categoria_veiculo": "Conversível",
                "cambio_veiculo": "Automática",
                "kilometragem_veiculo": 0,
                "ano_veiculo": "2021/2022",
                "imagem_veiculo": "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202208/20220804/jaguar-ftype-2.0-p300-gasolina-rdynamic-black-cabrio-automatico-wmimagem16125461710.jpg"
            }
        )
    }).then(resp => resp.json().then(data => console.log(data)));
};

const alterar = () => {
    fetch('http://localhost:3000/alterar', {
        method: 'PUT',
        headers: {
            'Accept': '*/* , application/json, text/plain',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "modelo_veiculo": "JAGUAR F-TYPE", 
                "descricao_veiculo": "2.0 P300 GASOLINA R-DYNAMIC BLACK CABRIO AUTOMÁTICO",
                "valor_veiculo": "R$ 700.000",
                "cor_veiculo": "Preto", 
                "portas_veiculo": 2, 
                "combustivel_veiculo": "Gasolina", 
                "categoria_veiculo": "Conversível",
                "cambio_veiculo": "Automática",
                "kilometragem_veiculo": 0,
                "ano_veiculo": "2022/2022",
                "imagem_veiculo": "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202208/20220804/jaguar-ftype-2.0-p300-gasolina-rdynamic-black-cabrio-automatico-wmimagem16125461710.jpg"
            }
        )
    }).then(resp => resp.json().then(data => console.log(data)));
};

const deletar = () => {
    fetch('http://localhost:3000/deletar?modelo_veiculo=JAGUAR F-TYPE', {
        method: 'DELETE',
        headers: {
            'Accept': '*/* , application/json, text/plain',
            'Content-Type': 'application/json'
        }
    });
}

btn_geral.addEventListener("click", e => {
    geral();
});

btn_individual.addEventListener("click", e => {
    individual();
});

btn_cadastrar.addEventListener("click", e => {
    cadastrar();
});

btn_alterar.addEventListener("click", e => {
    alterar();
});

btn_deletar.addEventListener("click", e => {
    deletar();
});