import { verifyToken } from '@clerk/clerk-sdk-node';

const clerkSecretKey = process.env.CLERK_SECRET_KEY;

export const clerkMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace('Bearer ', '');

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

   
    const verifiedToken = await verifyToken(token, { secret: clerkSecretKey });

  
    req.userId = verifiedToken.sub;

    next();
  } catch (error) {
    console.error('Clerk token verification failed:', error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
