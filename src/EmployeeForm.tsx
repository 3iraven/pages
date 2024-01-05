import React, { useState } from 'react';
import { Paper,Divider, Typography, Box, Grid, Tabs, Tab } from '@mui/material';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const EmployeeForm: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
<Box sx={{ width: '90vw', height: '90vh', overflow: 'hidden', p: 3 }}>
    
      <Paper sx={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', overflow: 'auto', my: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Employee
        </Typography>

        <Box sx={{ height: 100, width: '100%', display: 'flex', alignItems: 'center', backgroundColor:'whitesmoke'}}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="body1">LEFT</Typography>
        </Grid>
     
          <Divider orientation="vertical" flexItem sx={{ height: 100, borderColor: 'red' }} />
      
        <Grid item>
          <Typography variant="body1">RIGHT</Typography>
        </Grid>
      </Grid>
    </Box>
        {/* Tabs */}
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Assets" />
          <Tab label="Licenses" />
          <Tab label="Misc" />
        </Tabs>
        {/* Tab Panels it here where we shall listed all items */}
        <TabPanel value={tabValue} index={0}>
          {/* Assets Content */}
          <Typography>Laptop</Typography>
          <Typography>Monitor</Typography>
          <Typography>Credit Cards</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {/* Licenses Content */}
          <Typography>Microsoft</Typography>
          <Typography>Linked Learning</Typography>
          <Typography>Udemy</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          {/* Misc Content */}
          <Typography>HR Stuffs</Typography>
        </TabPanel>
      </Paper>
    </Box>
  );
};

export default EmployeeForm;


