import React, { useState } from 'react';
import { Grid, TextField, Button, Checkbox, FormControlLabel, Tabs, Tab, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PartyList from './partyList'; // Import the PartyList component

// Define initial values
const initialValues = {
  fullName: '',
  address1: '',
  address2: '',
  phone1: '',
  phone2: '',
  representative: '',
  active: true,
};

// Validation schema
const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  address1: Yup.string().required('Required'),
  address2: Yup.string(),
  phone1: Yup.string().required('Required'),
  phone2: Yup.string(),
  representative: Yup.string().required('Required'),
  active: Yup.boolean(),
});

const CustomerPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      // Submit form data to the server
    }
  });

  return (
    <MainCard title="Party">
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Create/Edit Party" />
        <Tab label="Browse Party" />
      </Tabs>
      <Box hidden={tabIndex !== 0} p={3}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
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
                label="Representative"
                name="representative"
                value={formik.values.representative}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.representative && Boolean(formik.errors.representative)}
                helperText={formik.touched.representative && formik.errors.representative}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="active"
                    checked={formik.values.active}
                    onChange={formik.handleChange}
                  />
                }
                label="Active"
              />
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" variant="contained" type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box hidden={tabIndex !== 1} p={3}>
        <PartyList />
      </Box>
    </MainCard>
  );
};

export default CustomerPage;
