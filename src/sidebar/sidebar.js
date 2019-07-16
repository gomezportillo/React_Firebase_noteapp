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
    this.state = {
      addingNote: false,
      title: null
    }
  }

  render()
  {
    const { notes, classes, selectedNoteIndex } = this.props;

    return(
      <div className={classes.sidebarContainer}>
        <button onClick={this.newNoteBtnClick}
                className={classes.newNoteBtn}>
          {
            this.state.addingNote ? 'Cancel' : 'New note'
          }
        </button>
        {
          this.state.addingNote ?
            <div>
              <input type="text"
                     className={classes.newNoteInput}
                     placeholder='Enter note title'
                     onKeyUp={(e) => this.updateTitle(e.target.value)}/>
            </div> :
            null
        }
      </div>
    )
  }

  newNoteBtnClick = () => {
    console.log("clicked!")
    this.setState({
      addingNote: !this.state.addingNote,
      title: null
    })
  }

  updateTitle = (text) => {
    console.log("title", text)
  }
}

export default withStyles(styles)(SidebarComponent)
