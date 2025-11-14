export const BASE_URL = 'http://localhost:3000/api/v1/';

export const API_ROUTES = {
    AUTH: {
        REGISTER: `/auth/register`,
        LOGIN: `/auth/login`,
    },
    PRODUCT: {
        ADD_PRODUCT: `/product`,
        GET_ALL_PRODUCTS: '/product',
    },
    PURCHASE: {
        ADD_PURCHASE: `/purchase`,
        GET_ALL_PURCHASE: '/purchase',
    },
    SALE: {
        CREATE_SALE: `/sale`,
    },

}