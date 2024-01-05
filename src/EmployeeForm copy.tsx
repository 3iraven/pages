import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, TextField, Button, Typography, Paper, Grid } from '@mui/material';

interface FormState {
  nom: string;
  postNom?: string; // Optional field
  address: string;
  phone: string;
  // Add additional fields as needed
}

const EmployeeForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormState>({
    nom: '',
    postNom: '',
    address: '',
    phone: '',
    // Initialize additional fields here
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Process form data here
    console.log(formValues);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={5} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h6" align="center">
          Employee Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Nom"
                name="nom"
                autoComplete="family-name"
                value={formValues.nom}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Post-Nom"
                name="postNom"
                autoComplete="additional-name"
                value={formValues.postNom}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Address"
                name="address"
                autoComplete="street-address"
                value={formValues.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Phone"
                name="phone"
                autoComplete="tel"
                value={formValues.phone}
                onChange={handleChange}
              />
            </Grid>
            {/* Add additional fields for assets, licenses, etc. here */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '20px 0' }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EmployeeForm;
