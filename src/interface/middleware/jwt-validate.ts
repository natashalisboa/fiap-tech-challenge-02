import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { env } from "../../env";

const routeFreeList = ['POST-/usuario', 'POST-/usuario/signin'];

export function jwtValidate(req: Request, res: Response, next: NextFunction) {
try {
    const validateRoute = `${req.method}-${req.originalUrl.split('?')[0]}`;
    if (routeFreeList.includes(validateRoute)) return next();

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send({ message: 'unauthorized' });
    }

    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).send({ message: 'unauthorized' });
    }

    try {
      jwt.verify(token, env.JWT_SECRET as string);
      next();
    } catch (error) {
      return res.status(401).send({ message: 'unauthorized' });
    }
  } catch (error) {
    res.status(401).send({ message: 'unauthorized' });
  }
}