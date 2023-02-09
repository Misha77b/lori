import React from 'react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Header

      <Button 
        component={Link}
        to='/another-page'
        variant='outlined'
      >
        Another page
      </Button>
    </div>
  )
}

export default Header