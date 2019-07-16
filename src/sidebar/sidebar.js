import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class SidebarComponent extends React.Component
{
  constructor()
  {
    super()
  }

  render()
  {
    return({
      <div>
        Hello from the sidebar
      </div>
    })
  }
}

export default withStyles(styles)(SidebarComponent)
