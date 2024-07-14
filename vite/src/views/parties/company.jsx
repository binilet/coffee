import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Define initial values
const initialValues = {
  companyName: '',
  address1: '',
  address2: '',
  address3: '',
  phone1: '',
  phone2: '',
  phone3: '',
  remark: '',
};

// Validation schema
const validationSchema = Yup.object({
  companyName: Yup.string().required('Required'),
  address1: Yup.string().required('Required'),
  address2: Yup.string(),
  address3: Yup.string(),
  phone1: Yup.string().required('Required'),
  phone2: Yup.string(),
  phone3: Yup.string(),
  remark: Yup.string(),
});

const Company = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      // Submit form data to the server
    }
  });

  return (
    <MainCard title="Create/Edit Company">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
              helperText={formik.touched.companyName && formik.errors.companyName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address 1"
              name="address1"
              value={formik.values.address1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address1 && Boolean(formik.errors.address1)}
              helperText={formik.touched.address1 && formik.errors.address1}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address 2"
              name="address2"
              value={formik.values.address2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address2 && Boolean(formik.errors.address2)}
              helperText={formik.touched.address2 && formik.errors.address2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address 3"
              name="address3"
              value={formik.values.address3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address3 && Boolean(formik.errors.address3)}
              helperText={formik.touched.address3 && formik.errors.address3}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone 1"
              name="phone1"
              value={formik.values.phone1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone1 && Boolean(formik.errors.phone1)}
              helperText={formik.touched.phone1 && formik.errors.phone1}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone 2"
              name="phone2"
              value={formik.values.phone2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone2 && Boolean(formik.errors.phone2)}
              helperText={formik.touched.phone2 && formik.errors.phone2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone 3"
              name="phone3"
              value={formik.values.phone3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone3 && Boolean(formik.errors.phone3)}
              helperText={formik.touched.phone3 && formik.errors.phone3}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Remark"
              name="remark"
              value={formik.values.remark}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.remark && Boolean(formik.errors.remark)}
              helperText={formik.touched.remark && formik.errors.remark}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default Company;
