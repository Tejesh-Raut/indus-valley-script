import * as React from 'react';
import { Typography } from '@mui/material';

export const Home = () => {
  return (
      <Typography component={'span'} variant={'body2'} align={'left'}>
        <p> The Indus script, also known as the Harappan script, is a corpus of symbols produced by
          the Indus Valley Civilisation. In spite of many attempts, the 'script' has not yet been
          deciphered, but efforts are ongoing. There is no known bilingual inscription to help
          decipher the script, and the script shows no significant changes over time. </p>
        <p> This website allows browsing through the signs and texts discovered till date.</p>
      </Typography>);
};
