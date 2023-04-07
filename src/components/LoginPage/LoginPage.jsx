import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validator/validator'
import { Input } from '../common/FormControls/FormControls'
import { loginAC } from "./../../redux/Auth-reducer"
import classes from "./../common/FormControls/FormControls.module.css"

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Input} validate={[required]} type="password" />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button >Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.loginAC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { loginAC })(LoginPage)