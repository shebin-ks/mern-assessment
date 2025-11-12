import Joi from "joi";

export const createProductSchema = Joi.object({
    productName: Joi.string()
        .required()
        .min(3)
        .messages({
            "any.required": "Product name is required",
            "string.empty": "Product name cannot be empty",
            "string.base": "Product name must be a string",
            "string.min": "Product name must be atleast 3 characters"

        }),
    currentStock: Joi.number()
        .optional()
        .min(0)
        .messages({
            "number.base": "Current stock must be a number",
            "number.min": "Current stock cannot be negative"
        }),

    taxPercentage: Joi.number()
        .optional()
        .min(0)
        .messages({
            "number.base": "Tax percentage must be a number",
            "number.min": "Tax percentage cannot be negative"

        }),

})
    .unknown(false)
    .messages({
        "object.unknown": "Extra field {{#key}} is not allowed in request body"
    });
