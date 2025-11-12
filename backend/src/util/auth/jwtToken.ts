
import jwt from 'jsonwebtoken'
import { ApiError } from '../common/apiError'


const JWT_SECRET = process.env.JWT_SECRET
const REFRESH_SECRET = process.env.REFRESH_SECRET

export const REFRESH_TOKEN_TTL_SECONDS = 604800;

export const generateAccessToken = (payload: Object) => {
    try {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })

    } catch (error) {
        console.log(error);

    }
}


export const verifyAccessToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (error) {
        throw new ApiError("Invalid or expired access token", 401)
    }
}


// ------------ Refresh Token --------

export const generateRefreshToken = (payload: Object) => {
    try {
        return jwt.sign(payload, REFRESH_SECRET, { expiresIn: '7d' })

    } catch (error) {
        console.log(error);

    }
}


export const verifyRefreshToken = (token: string) => {
    try {
        return jwt.verify(token, REFRESH_SECRET)
    } catch (error) {
        throw new ApiError("Invalid or expired refresh token", 401)
    }
}
