import './styles.css'

const CarsCard = ({ data }) => (
    <div key={data.id_veiculo} className="car">
        <h1>{data.modelo_veiculo}</h1>
        <p>{data.descricao_veiculo}</p>
        <img src={data.imagem_veiculo} alt="" className='imagem_veiculo'></img>
        <p>Valor: {data.valor_veiculo},00</p>
    </div>
)
export { CarsCard }