import Joi from "joi";

export const createPurchaseSchema = Joi.object({
    productId: Joi.string()
        .guid({ version: ['uuidv4'] })
        .required()
        .messages({
            "any.required": "Product id is required",
            "string.empty": "Product id cannot be empty",
            "string.guid": "Product id must be a valid UUID"

        }),
    quantity: Joi.number()
        .required()
        .min(1)
        .messages({
            "any.required": "Quantity is required",
            "number.base": "Quantity must be a number",
            "number.min": "Quantity must be greater than 0"
        }),
    purchasePrice: Joi.number()
        .required()
        .min(1)
        .messages({
            "any.required": "purchasePrice is required",
            "number.base": "price must be a number",
            "number.min": "Price cannot be negative"
        }),
    purchaseDate: Joi.date()
        .required()
        .messages({
            "any.required": "purchaseDate is required",
            "date.base": "purchaseDate must be a valid date"
        })

})
    .unknown(false)
    .messages({
        "object.unknown": "Extra field {{#key}} is not allowed in request body"
    });
