import Joi from "joi";

export const saleCreateSchema = Joi.object({
    customerNumber: Joi.number()
        .optional()
        .messages({
            "number.base": "Customer number must be a number",
        }),

    products: Joi.array().items(
        Joi.object({
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
                    "number.base": "Quantity must be a number",
                    "number.min": "Quantity must be greater than 0"
                }),
        })
    ).required().messages({
        "any.required": "Products array is required"
    })
})
    .unknown(false)
    .messages({
        "object.unknown": "Extra field {{#key}} is not allowed in request body"
    });
