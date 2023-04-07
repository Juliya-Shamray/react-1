import classes from "./FormControls.module.css"

export const FormControls = ({ input, meta, child, ...props }) => {
    const showError = meta.touched && meta.error

    return (
        <div className={classes.formControl + " " + (showError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            {showError && <span >{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return (
        <FormControls {...props}>
            <textarea {...input} {...restProps} />
        </FormControls>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props

    return (
        <FormControls {...props}>
            <input {...input} {...restProps} />
        </FormControls>
    )
}