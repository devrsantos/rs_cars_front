import { Component } from "react"

class Header extends Component {
    render(){
        const titulo = `Santos Veiculos`;
        return (
            <div className="header">
                <h1>{ titulo }</h1>
            </div>
        )
    }
}

export { Header }