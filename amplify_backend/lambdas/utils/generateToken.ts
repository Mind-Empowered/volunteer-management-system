import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, secret, { expiresIn: '30d' });
};
