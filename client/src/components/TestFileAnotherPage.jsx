import React from 'react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const TestFileAnotherPage = () => {
  return (
    <div style={{border: '2px dashed black', maegin: '15px', padding: '10px'}}>
        testFileAnotherPage to check how routing works
        <Button
            component={Link}
            to='/'
            variant='outlined'
        >
            home route
        </Button>
    </div>
  )
}

export default TestFileAnotherPage