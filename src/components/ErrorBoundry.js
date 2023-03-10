import { Component } from "react";

class ErrorBoundary extends Component(){
    constructor(){
        super()
        this.state= {hasError: false}
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        return this.state.hasError? <h1>opps check your connection</h1>:(this.props.children)
    }

}


export default ErrorBoundary