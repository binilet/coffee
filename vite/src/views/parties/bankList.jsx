import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BankList = () => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    // Fetch banks from your server
    // For now, we'll use dummy data
    const fetchData = async () => {
      const response = await fetch('/api/banks'); // Replace with your API endpoint
      const data = await response.json();
      setBanks(data);
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Bank Name</TableCell>
            <TableCell>SWIFT Code</TableCell>
            <TableCell>Account Number</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Remark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {banks.map((bank) => (
            <TableRow key={bank.id}>
              <TableCell>{bank.bankName}</TableCell>
              <TableCell>{bank.swiftCode}</TableCell>
              <TableCell>{bank.accountNo}</TableCell>
              <TableCell>{bank.branch}</TableCell>
              <TableCell>{bank.remark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BankList;
