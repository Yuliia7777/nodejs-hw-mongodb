import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateId = (req, res, next) => {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) {
    // Создаем экземпляр ошибки, а не вызываем HttpError как функцию
    throw new createHttpError.BadRequest('invalidIdObject: Bad request');
  }

  next();
};
