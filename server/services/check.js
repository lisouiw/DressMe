const exist = require("../services/exist");
const utils = require("../services/utils");

const validateEmail = async email => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (reg.test(String(email).toLowerCase())) return true;
  return { email: "format" };
};

const validatePassword = async password => {
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/;

  if (reg.test(password)) return true;
  return { password: "format" };
};

const validateConfirmation = async (password, confirmation) => {
  if (password === confirmation) return true;
  return { confirmation: "format" };
};

const validateSign = (args, model, name, tops) => {
  return new Promise(async (resolve, reject) => {
    await Promise.all([
      validateEmail(args.email),
      validatePassword(args.password),
      validateConfirmation(args.password, args.confirmation),
      exist.existEmail(args.email, args.id)
    ])
      .then(values => {
        const error = values.filter(value => typeof value === "object");

        if (error.length === 0) {
          utils
            .hashedPassword(args.password)
            .then(e => resolve(model({ ...args, password: e }, name, tops)))
            .catch(err => reject(err));
        } else reject({ status: 422, error });
      })
      .catch(() => reject({ status: 500, error: "error" }));
  });
};

module.exports = {
  validateSign
};
