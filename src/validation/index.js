const re = {
    phone: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
}

const notEmpty = (value) => {
    return value.trim().length !== 0
}
const validFormat = (value, field) => {
    return (re[field].test(value) && notEmpty(value))
}


export { notEmpty, validFormat }