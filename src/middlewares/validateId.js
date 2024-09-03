import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    // Создаем экземпляр ошибки, а не вызываем HttpError как функцию
    //throw new createHttpError.BadRequest('invalidIdObject: Bad request');
    throw createHttpError(400, `invalidIdObject:[${id}]: Bad request`);
  }

  next();
};
