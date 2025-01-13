import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { taskId } = req.params;
  if (!isValidObjectId(taskId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};
