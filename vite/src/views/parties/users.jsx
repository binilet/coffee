import React, { useState } from 'react';
import { Grid, TextField, Button, Checkbox, FormControlLabel, Tabs, Tab, Box, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard'; // Assuming MainCard is a custom component you have
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UserList from './usersList'; // Import the UserList component

// Define initial values
const initialValues = {
  fullName: '',
  username: '',
  email: '',
  password: '',
  role: '',
  active: true,
};

// Validation schema
const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
  role: Yup.string().required('Required'),
  active: Yup.boolean(),
});

const User = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handlePasswordChange = () => {
    // Handle password change logic
    console.log('New Password:', newPassword);
    setOpenDialog(false);
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
    <MainCard title="User">
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Create/Edit User" />
        <Tab label="Browse Users" />
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
                label="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.role && Boolean(formik.errors.role)}
                helperText={formik.touched.role && formik.errors.role}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Guest">Guest</MenuItem>
              </TextField>
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
              <Button color="secondary" variant="outlined" onClick={handleDialogOpen} style={{ marginLeft: '10px' }}>
                Change Password
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box hidden={tabIndex !== 1} p={3}>
        <UserList />
      </Box>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            label="Old Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="New Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePasswordChange} color="primary">
            Change Password
          </Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default User;
