import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="quote">Quote</label>
                <Field
                    component={Input}
                    type="text"
                    name="quote"
                    id="quote"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="reference">reference</label>
                <Field
                    component={Input}
                    type="text"
                    name="reference"
                    id="reference"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="tags">Tags</label>
                <Field
                    component={Input}
                    type="text"
                    name="tags"
                    id="tags"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
