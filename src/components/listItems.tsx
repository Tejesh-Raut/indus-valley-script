import * as React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const mainListItems = (
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Introduction" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Texts" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FontDownloadIcon />
        </ListItemIcon>
        <ListItemText primary="Signs" />
      </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="References" />
      </ListItem>
    </div>
);
