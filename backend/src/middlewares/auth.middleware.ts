import { NextFunction, Request, Response } from "express";
import { ApiError } from "../util/common/apiError";
import { verifyAccessToken } from "../util/auth/jwtToken";


export const authenticate = async (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization

    if (!authHeader?.startsWith("Bearer ")) {
        return next(new ApiError("Unauthorized: Access token missing", 401));
    }

    try {

        const token = authHeader.split(" ")[1]

        const decoded = verifyAccessToken(token)

        if (!decoded || typeof decoded === 'string' || !decoded.userId) {
            return next(new ApiError("Unauthorized: Invalid or expired token", 401));
        }

        

        (req as any).user = decoded

        next()


    } catch (error) {
        return next(new ApiError("Unauthorized: Invalid or expired token", 401));
    }
}
