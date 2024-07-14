import React, { useState } from 'react';
import { Grid, TextField, Button, Checkbox, FormControlLabel, Tabs, Tab, Box, MenuItem } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SalesContractList from './salesContractList'; // Import the PurchaseContractList component

// Define initial values
const initialValues = {
  purchaseContractNum: '',
  date: '',
  void: false,
  approved: false,
  seller: '',
  bank: '',
  product: '',
  packing: '',
  qtyInPacking: '',
  weight: '',
  totalQuantity: '',
  unitPricePerMT: '',
  totalAmount: '',
  markings: '',
  shipment: '',
  loadingPort: '',
  dischargePort: '',
  paymentType: '',
  state: '',
  note: '',
  remark: '',
};

// Validation schema
const validationSchema = Yup.object({
  purchaseContractNum: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  seller: Yup.string().required('Required'),
  bank: Yup.string().required('Required'),
  product: Yup.string().required('Required'),
  packing: Yup.string().required('Required'),
  qtyInPacking: Yup.number().required('Required'),
  weight: Yup.number().required('Required'),
  totalQuantity: Yup.number().required('Required'),
  unitPricePerMT: Yup.number().required('Required'),
  totalAmount: Yup.number().required('Required'),
  markings: Yup.string().required('Required'),
  shipment: Yup.string().required('Required'),
  loadingPort: Yup.string().required('Required'),
  dischargePort: Yup.string().required('Required'),
  paymentType: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  note: Yup.string(),
  remark: Yup.string(),
});

const SalesContract = () => {
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
    <MainCard title="Purchase Contract">
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Create/Edit Purchase Contract" />
        <Tab label="Browse Purchase Contracts" />
      </Tabs>
      <Box hidden={tabIndex !== 0} p={3}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Purchase Contract Number"
                name="purchaseContractNum"
                value={formik.values.purchaseContractNum}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.purchaseContractNum && Boolean(formik.errors.purchaseContractNum)}
                helperText={formik.touched.purchaseContractNum && formik.errors.purchaseContractNum}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="void"
                    checked={formik.values.void}
                    onChange={formik.handleChange}
                  />
                }
                label="Void"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="approved"
                    checked={formik.values.approved}
                    onChange={formik.handleChange}
                  />
                }
                label="Approved"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Seller"
                name="seller"
                value={formik.values.seller}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.seller && Boolean(formik.errors.seller)}
                helperText={formik.touched.seller && formik.errors.seller}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Bank"
                name="bank"
                value={formik.values.bank}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bank && Boolean(formik.errors.bank)}
                helperText={formik.touched.bank && formik.errors.bank}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Product"
                name="product"
                value={formik.values.product}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.product && Boolean(formik.errors.product)}
                helperText={formik.touched.product && formik.errors.product}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Packing (UOM)"
                name="packing"
                value={formik.values.packing}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.packing && Boolean(formik.errors.packing)}
                helperText={formik.touched.packing && formik.errors.packing}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Quantity in Packing"
                name="qtyInPacking"
                type="number"
                value={formik.values.qtyInPacking}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.qtyInPacking && Boolean(formik.errors.qtyInPacking)}
                helperText={formik.touched.qtyInPacking && formik.errors.qtyInPacking}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Weight"
                name="weight"
                type="number"
                value={formik.values.weight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                helperText={formik.touched.weight && formik.errors.weight}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Total Quantity"
                name="totalQuantity"
                type="number"
                value={formik.values.totalQuantity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.totalQuantity && Boolean(formik.errors.totalQuantity)}
                helperText={formik.touched.totalQuantity && formik.errors.totalQuantity}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Unit Price Per MT"
                name="unitPricePerMT"
                type="number"
                value={formik.values.unitPricePerMT}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.unitPricePerMT && Boolean(formik.errors.unitPricePerMT)}
                helperText={formik.touched.unitPricePerMT && formik.errors.unitPricePerMT}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Total Amount"
                name="totalAmount"
                type="number"
                value={formik.values.totalAmount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.totalAmount && Boolean(formik.errors.totalAmount)}
                helperText={formik.touched.totalAmount && formik.errors.totalAmount}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Markings"
                name="markings"
                value={formik.values.markings}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.markings && Boolean(formik.errors.markings)}
                helperText={formik.touched.markings && formik.errors.markings}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Shipment"
                name="shipment"
                value={formik.values.shipment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.shipment && Boolean(formik.errors.shipment)}
                helperText={formik.touched.shipment && formik.errors.shipment}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Loading Port"
                name="loadingPort"
                value={formik.values.loadingPort}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.loadingPort && Boolean(formik.errors.loadingPort)}
                helperText={formik.touched.loadingPort && formik.errors.loadingPort}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Discharge Port"
                name="dischargePort"
                value={formik.values.dischargePort}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.dischargePort && Boolean(formik.errors.dischargePort)}
                helperText={formik.touched.dischargePort && formik.errors.dischargePort}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Payment Type"
                name="paymentType"
                value={formik.values.paymentType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.paymentType && Boolean(formik.errors.paymentType)}
                helperText={formik.touched.paymentType && formik.errors.paymentType}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
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
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box hidden={tabIndex !== 1} p={3}>
        <SalesContractList />
      </Box>
    </MainCard>
  );
};

export default SalesContract;
