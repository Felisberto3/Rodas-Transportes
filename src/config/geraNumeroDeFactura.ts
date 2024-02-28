function geraNumeroDeFactura() {
    const firstNumber = new Date().getUTCMilliseconds()
    const secondNumber = new Date().getUTCMilliseconds()
    const year = new Date().getFullYear()

    return `${firstNumber}.${secondNumber}/${year}`;
}

export { geraNumeroDeFactura }