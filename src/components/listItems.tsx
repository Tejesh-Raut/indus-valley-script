import * as React from 'react';
import { Link, useMatch } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Constants } from '../utils/Constants';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const MainListItems = () => (
    <div>
      <ListItem button component={Link} to={Constants.routes[0]} selected={!!useMatch(Constants.routes[0])}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Introduction" />
      </ListItem>
      <ListItem button component={Link} to={Constants.routes[1]} selected={!!useMatch(Constants.routes[1])}>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Texts" />
      </ListItem>
      <ListItem button component={Link} to={Constants.routes[2]} selected={!!useMatch(Constants.routes[2])}>
        <ListItemIcon>
          <FontDownloadIcon />
        </ListItemIcon>
        <ListItemText primary="Signs" />
      </ListItem>
    </div>
);

export const SecondaryListItems = () => (
    <div>
      <ListItem button component={Link} to={Constants.routes[3]} selected={!!useMatch(Constants.routes[3])}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="References" />
      </ListItem>
    </div>
);
