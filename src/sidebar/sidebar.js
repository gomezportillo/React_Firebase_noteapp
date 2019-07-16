import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebaritem';

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

    if (notes)
    {
      return(
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick}
                  className={classes.newNoteBtn}>
            {
              this.state.addingNote ? 'Cancel' : 'New note'
            }
          </Button>
            {
              this.state.addingNote ?
                <div>
                  <input type="text"
                         className={classes.newNoteInput}
                         placeholder='Enter note title'
                         onKeyUp={(e) => this.updateTitle(e.target.value)}
                        />
                 <Button className={classes.newNoteSubmitBtn}
                         onClick={this.newNote}>
                    Submit note
                  </Button>
                </div> :
                null
            }
          <List>
            {
              notes.map((_note, _index) => {
                return (
                  <div key={_index}>
                    <SidebarItemComponent _note={_note}
                                          _index={_index}
                                          selectedNoteIndex={selectedNoteIndex}
                                          selectNote={this.selectNote}
                                          deleteNote={this.deleteNote}>
                    </SidebarItemComponent>
                    <Divider />
                  </div>
                )
              })
            }
        </List>
        </div>
      )
    }
    else
    {
      return <div/>
    }
  }

  newNoteBtnClick = () => {
    this.setState({
      addingNote: !this.state.addingNote,
      title: null
    })
  }

  updateTitle = (text) => {
    this.setState({
      title: text
    })
  }

  newNote = () => {
    console.log(this.state)
  }

  selectNote = (note, index) => {
    this.props.selecNote(note, index)
  }

  deleteNote = () => {
    console.log("delete note")
  }
}

export default withStyles(styles)(SidebarComponent)
