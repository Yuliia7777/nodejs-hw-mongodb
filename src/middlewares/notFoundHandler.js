export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'notFoundHandler: WARNING: Not found',
  });
};
