import React from 'react';
import Button from '@mui/material/Button';

const BlueButton = (props) => {
  return(
    <Button 
    fullWidth
    style={{backgroundColor: '#1F9EBC', color: '#FFFFFF'}}
    > { props.name } </Button>
  )
}

export default BlueButton;
