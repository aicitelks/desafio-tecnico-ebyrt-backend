const {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_MSG,
} = require('../utils/statusCodes');

module.exports = (err, _req, res, _next) => {
  // ERRO DO JOI
  if (err.isJoi) {
    return res.status(BAD_REQUEST).json({ message: err.details[0].message });
  }

  // ERRO DESCONHECIDO
  if (err.code === 500 || err.code === undefined) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: INTERNAL_SERVER_ERROR_MSG });
  }
  // ERRO DE DOMÍNIO QUE VEM DO THROW
  res.status(err.code).json({ message: err.message });
};
