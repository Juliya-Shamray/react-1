export const required = (value) => {
    if (value) return undefined;
    return "Field is required "
}

export const maxlengthCreator = (maxlength) => (value) => {
    if (value && value.length > maxlength) return `field must be ${maxlength} characters or less`;

    return undefined
}