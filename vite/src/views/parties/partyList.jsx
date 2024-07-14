import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PartyList = () => {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    // Fetch parties from your server
    // For now, we'll use dummy data
    const fetchData = async () => {
      const response = await fetch('/api/parties'); // Replace with your API endpoint
      const data = await response.json();
      setParties(data);
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Address 1</TableCell>
            <TableCell>Address 2</TableCell>
            <TableCell>Phone 1</TableCell>
            <TableCell>Phone 2</TableCell>
            <TableCell>Representative</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parties.map((party) => (
            <TableRow key={party.id}>
              <TableCell>{party.fullName}</TableCell>
              <TableCell>{party.address1}</TableCell>
              <TableCell>{party.address2}</TableCell>
              <TableCell>{party.phone1}</TableCell>
              <TableCell>{party.phone2}</TableCell>
              <TableCell>{party.representative}</TableCell>
              <TableCell>{party.active ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PartyList;
