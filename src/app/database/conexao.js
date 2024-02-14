import mysql from 'mysql'

const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'bdcopa'
})

conexao.connect()

/**
 * Escura um código sql com ou sem valores
 * @param {string} sql instrução sql a ser escutada
 * @param {string=id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagenReject mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores='', mensagenReject) => {
  return new Promise((resolve, reject) => {
      conexao.query(sql, valores, (erro, resultado) => {
        if(erro) return reject(mensagenReject)
        // fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
      })
    })
}

export default conexao
