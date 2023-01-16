const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  return response.status(500).send({ error: 'Algo deu errado, tente novamente.' })
}

module.exports = errorHandler