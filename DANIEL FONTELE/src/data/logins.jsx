let userData = [
    {
        username: 'admin',
        password: 'admin',
        money: 99999999.99,
        history: [{ valor: 99999999.99, operacao: '+', descricao: 'Privilégios de Administrador', data: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` }]
    },
    {
        username: 'user',
        password: 'user',
        money: 1000,
        history: [{ valor: 1000, operacao: '+', descricao: 'Abertura de Conta', data: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` }]
    }
]

export default userData