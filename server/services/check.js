const exist = require("../services/exist")

const validateEmail = async (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reg.test(String(email).toLowerCase()))
        return true
    return { email: "format" }
}

const validatePassword = async (password) => {
    const reg = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/

    if (reg.test(password))
        return true
    return { password: "format" }
}

const validateConfirmation = async (password, confirmation) => {
    if (password === confirmation)
        return true

    return { confirmation: "format" }
}

const validateSign = ({ email, password, confirmation, id }, fct) => {
    return new Promise(async (resolve, reject) => {
        await Promise.all([
            validateEmail(email),
            validatePassword(password),
            validateConfirmation(password, confirmation),
            exist.existEmail(email, id)
        ])
            .then((values) => {
                const error = values.filter(
                    (value) => typeof (value) === "object"
                )

                error.length === 0 ? resolve(fct) : reject({ status: 422, error })
            })
    })
}

module.exports = {
    validateSign
}