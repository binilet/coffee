import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your server
    // For now, we'll use dummy data
    const fetchData = async () => {
      const response = await fetch('/api/products'); // Replace with your API endpoint
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price Per MT</TableCell>
            <TableCell>Is Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.code}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.pricePerMT}</TableCell>
              <TableCell>{product.isActive ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
