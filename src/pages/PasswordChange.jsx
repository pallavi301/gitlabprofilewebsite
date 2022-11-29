import React from 'react'
import { useFormik} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    currentPassword: '',
    newPassword: '',
    passwordConfirmation: '' 
    
}
const onSubmit= values=>{
    console.log('Form data',values)
}

const validate= values => {
    let errors = {}
    if(!values.currentPassword){
        errors.currentPassword = 'Required'
    }
    if(!values.newPassword){
        errors.newPassword = 'Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.newPassword)){
        errors.newPassword='Invalid password'
    }

    if(!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Required'
    }

    return errors
}

/*const validationSchema = Yup.object({
    currentPassword : Yup.string().required('Required!'),

    newPassword: Yup.string().newPassword('Invalid password').required('Required'),

    passwordConfirmation: Yup.string().required('Required')
})*/


function Passwordchange () {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
        //validationSchema
           
    })
    console.log('Visited fields', formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='current password'>Current password</label>
                    <input type= 'text'
                    id='current password'
                    name='currentPassword' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    values={formik.values.currentPassword}
                    />
                    {formik.touched.currentPassword && formik.errors.currentPassword ? <div className='error'>{formik.errors.currentPassword}</div> : null}
                 </div>


                <div className='form-control'>
                <label htmlFor='new password'>New password</label>
                <input type='text'
                 id='new password'
                name='newPassword' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                values={formik.values.newPassword}
                />
                {formik.touched.newPassword && formik.errors.newPassword ? <div className='error'>{formik.errors.newPassword}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='password confirmation'>Password confirmation</label>
                <input type='text'
                 id='password confirmation' 
                 name='passwordConfirmation' 
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur} 
                 value={formik.values.passwordConfirmation}
                />
                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? <div className='error'>{formik.errors.passwordConfirmation}</div> : null}
                </div>

                <button type='submit'>Save password</button>


            </form>

        </div>
    );
};

export default Passwordchange;