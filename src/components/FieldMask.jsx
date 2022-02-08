import { Field } from 'formik';
import InputMask from 'react-input-mask';

function FieldMask({ props, name, mask, className, ...rest }) {
    return (
        <Field name={name} >
            {({ field }) => (
                <InputMask {...field} name={name} mask={mask} className={className} type="text" onChange={props.handleChange} {...rest}>
                    {/* {({ inputProps }) => <input {...inputProps} {...field} type="text" />} */}
                </InputMask>
            )}
        </Field>
    );
}

export default FieldMask;
