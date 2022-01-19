import * as React from 'react';
import { Typography } from '@mui/material';

export const References = () => (
    <div>
      <Typography component={'span'} variant={'body2'} align={'left'}>
        <h1>References:</h1>
        <ol>
          <li>
            <p><cite><a href={'https://www.oxbowbooks.com/bookinfo.cfm/ID/90121'}>Interactive Corpus of Indus Text (ICIT)</a> (ISBN 978-1-84217-994-9)</cite> by Bryan Kenneth Wells. Finished in 2006.</p>
          </li>
          <li>
            <p><cite><a href={'https://www.indus.epigraphica.de/'}>ICIT Database of Indus Writing</a></cite> developed by Bryan K. Wells and Andreas Fuls as a co-operative effort.</p>
          </li>
        </ol>
      </Typography>
    </div>);
