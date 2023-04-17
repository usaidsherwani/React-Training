import React from 'react'
import { reduxForm, Field, formValues } from 'redux-form'
import isValidEmail from 'sane-email-validation'


var provinces = ["punjab", "KPK", "Sindh", "Balochistan", "Gilgit"]

const validate = formValues => {
    const errors = {}

    if (!formValues.firstName) {
        errors.firstName = ' * '
    }
    if (!formValues.lastName) {
        errors.lastName = ' * '
    }
    if (!formValues.email) {
        errors.email = ' * '
    } else if (!isValidEmail(formValues.email)) {
        errors.email = " Invalid Email "
    }
    if (!formValues.province) {
        errors.province = ' * '
    }


    return errors
}

const createRenderer = render => ({ input, meta, label, ...rest }) => {
    return (
        <div className={
            [
                meta.error && meta.touched ? 'error' : '',
                meta.active ? 'active' : ''
            ].join(' ')
        }>
            {/* <pre>{JSON.stringify(meta,0,2)}</pre> */}
            <label> {label} </label>
            {
                render(input, label, rest)
            }

            {
                meta.error && <span>{meta.error}</span>
            }
        </div>
    )
}

const renderInput = createRenderer((input, label) => {
    return (
        <input {...input} placeholder={label} />
    )
})


const renderSelect = createRenderer((input,label,{ children }) => {
    return (
        <select {...input}  >{children}</select>
    )
})


function FormDemo({ handleSubmit, submitting }) {
    //console.log(props)
    return (
        <form onSubmit={handleSubmit((formValues) => {
            alert(`${formValues.firstName}, ${formValues.lastName}, ${formValues.email}, ${formValues.province}`)
        })}>
            <Field type="text" name="firstName" label="firstName" component={renderInput} />
            <Field type="text" name="lastName" label="lastName" component={renderInput} />
            <Field type="text" name="email" label="email" component={renderInput} />
            <Field name="province" label="province" component={renderSelect}>
                {
                    provinces.map(province => <option key={province} value={province}>{province}</option>)
                }
            </Field>
            <button type="submit" disabled={submitting}>Submit</button>
        </form>
    )
}

export default reduxForm({
    form: "myForm",
    destroyOnUnmount: false,
    validate
})(FormDemo)
