export const BASE_URL = 'http://localhost:3000/api/v1/';

export const API_ROUTES = {
    AUTH: {
        REGISTER: `/auth/register`,
        LOGIN: `/auth/login`,
    },
    DASHBOARD: {
        GET_DASHBOARD_DATA: '/dashboard',
    },
    PRODUCT: {
        ADD_PRODUCT: `/product`,
        UPDATE_PRODUCT: `/product`,
        DELETE_PRODUCT: `/product`,
        GET_ALL_PRODUCTS: '/product',
        GET_LOW_STOCK_PRODUCTS:'/product/low-stock'
    },
    PURCHASE: {
        ADD_PURCHASE: `/purchase`,
        GET_ALL_PURCHASE: '/purchase',
    },
    SALE: {
        CREATE_SALE: `/sale`,
        GET_SALE:'/sale'
    },

}