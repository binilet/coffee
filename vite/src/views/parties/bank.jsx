import React, { useState } from 'react';
import { Grid, TextField, Button, Tabs, Tab, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BankList from './bankList'; // Import the BankList component

// Define initial values
const initialValues = {
  bankName: '',
  swiftCode: '',
  accountNo: '',
  branch: '',
  remark: '',
};

// Validation schema
const validationSchema = Yup.object({
  bankName: Yup.string().required('Required'),
  swiftCode: Yup.string().required('Required'),
  accountNo: Yup.string().required('Required'),
  branch: Yup.string().required('Required'),
  remark: Yup.string(),
});

const Bank = () => {
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
    <MainCard title="Bank">
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Create/Edit Bank" />
        <Tab label="Browse Bank" />
      </Tabs>
      <Box hidden={tabIndex !== 0} p={3}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Bank Name"
                name="bankName"
                value={formik.values.bankName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bankName && Boolean(formik.errors.bankName)}
                helperText={formik.touched.bankName && formik.errors.bankName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="SWIFT Code"
                name="swiftCode"
                value={formik.values.swiftCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.swiftCode && Boolean(formik.errors.swiftCode)}
                helperText={formik.touched.swiftCode && formik.errors.swiftCode}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Account Number"
                name="accountNo"
                value={formik.values.accountNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.accountNo && Boolean(formik.errors.accountNo)}
                helperText={formik.touched.accountNo && formik.errors.accountNo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Branch"
                name="branch"
                value={formik.values.branch}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.branch && Boolean(formik.errors.branch)}
                helperText={formik.touched.branch && formik.errors.branch}
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
      </Box>
      <Box hidden={tabIndex !== 1} p={3}>
        <BankList />
      </Box>
    </MainCard>
  );
};

export default Bank;
