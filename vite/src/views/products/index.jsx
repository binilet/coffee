// material-ui
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Grid, TextField, Button, Checkbox, FormControlLabel, Tabs, Tab, Box } from '@mui/material';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import ProductList from './ProductList'; 

// ==============================|| TYPOGRAPHY ||============================== //

const initialValues = {
    code: '',
    name: '',
    type: '',
    grade: '',
    uom: '',
    category: '',
    pricePerMT: '',
    harvest: '',
    beginning: '',
    note: '',
    isActive: true,
    remark: ''
  };

  // Validation schema
const validationSchema = Yup.object({
    code: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    grade: Yup.string().required('Required'),
    uom: Yup.string().required('Required'),
    category: Yup.string(),
    pricePerMT: Yup.number().required('Required').positive('Must be positive'),
    harvest: Yup.date(),
    beginning: Yup.number(),
    note: Yup.string(),
    isActive: Yup.boolean(),
    remark: Yup.string()
  });
  

  const Products = () => {
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
      <MainCard title="Products and Items">
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Create Products" />
          <Tab label="Browse Products" />
        </Tabs>
        <Box hidden={tabIndex !== 0} p={3}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Code"
                  name="code"
                  value={formik.values.code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.code && Boolean(formik.errors.code)}
                  helperText={formik.touched.code && formik.errors.code}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.type && Boolean(formik.errors.type)}
                  helperText={formik.touched.type && formik.errors.type}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Grade"
                  name="grade"
                  value={formik.values.grade}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.grade && Boolean(formik.errors.grade)}
                  helperText={formik.touched.grade && formik.errors.grade}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="UOM"
                  name="uom"
                  value={formik.values.uom}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.uom && Boolean(formik.errors.uom)}
                  helperText={formik.touched.uom && formik.errors.uom}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Category"
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.category && Boolean(formik.errors.category)}
                  helperText={formik.touched.category && formik.errors.category}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Price Per MT"
                  name="pricePerMT"
                  type="number"
                  value={formik.values.pricePerMT}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.pricePerMT && Boolean(formik.errors.pricePerMT)}
                  helperText={formik.touched.pricePerMT && formik.errors.pricePerMT}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Harvest"
                  name="harvest"
                  type="date"
                  value={formik.values.harvest}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.harvest && Boolean(formik.errors.harvest)}
                  helperText={formik.touched.harvest && formik.errors.harvest}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Beginning"
                  name="beginning"
                  type="number"
                  value={formik.values.beginning}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.beginning && Boolean(formik.errors.beginning)}
                  helperText={formik.touched.beginning && formik.errors.beginning}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Note"
                  name="note"
                  value={formik.values.note}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.note && Boolean(formik.errors.note)}
                  helperText={formik.touched.note && formik.errors.note}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isActive"
                      checked={formik.values.isActive}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Is Active"
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
          <ProductList />
        </Box>
      </MainCard>
    );
  };
  
  export default Products;