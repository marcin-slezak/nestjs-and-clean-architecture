import { Formik } from 'formik';
import { FunctionComponent } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ApplicationFormSchema} from './validation'

const initialValues = { email: '', firstName: '', lastName: '' }

type ApplicationFormProps = {
  onSubmit: (values: typeof initialValues) => void
}

export const ApplicationForm: FunctionComponent<ApplicationFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ApplicationFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values)
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField 
            id="firstName" 
            label="First name"
            variant="outlined"
            size="small"
            error={!!errors.firstName && !!touched.firstName && !!errors.firstName}
            helperText={errors.firstName && touched.firstName && errors.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            fullWidth
            sx={{mb:2}}
          />
          
          <TextField 
            id="lastName" 
            label="Last name"
            variant="outlined"
            size="small"
            error={!!errors.lastName && !!touched.lastName && !!errors.lastName}
            helperText={errors.lastName && touched.lastName && errors.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            fullWidth
            sx={{mb:2}}
          />
         
          <TextField 
            id="email"
            type="email" 
            label="Email address"
            variant="outlined"
            size="small"
            error={!!errors.email && !!touched.email && !!errors.email}
            helperText={errors.email && touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            fullWidth
            sx={{mb:2}}
          />
          
          <Button type="submit" disabled={isSubmitting} variant="contained">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};
