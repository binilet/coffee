import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SalesContractList = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    // Fetch purchase contracts from your server
    // For now, we'll use dummy data
    const fetchData = async () => {
      const response = await fetch('/api/purchasecontracts'); // Replace with your API endpoint
      const data = await response.json();
      setContracts(data);
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Purchase Contract Number</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Seller</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((contract) => (
            <TableRow key={contract.id}>
              <TableCell>{contract.purchaseContractNum}</TableCell>
              <TableCell>{contract.date}</TableCell>
              <TableCell>{contract.seller}</TableCell>
              <TableCell>{contract.product}</TableCell>
              <TableCell>{contract.totalAmount}</TableCell>
              <TableCell>{contract.state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesContractList;
