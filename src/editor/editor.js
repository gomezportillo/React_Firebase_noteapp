import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      text: '',
      title: '',
      id: ''
    }
  }

  componentDidMount = () => {
    this.updateStateFromProps()
  }

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id)
    {
      this.updateStateFromProps()
    }
  }

  render()
  {
    const { classes } = this.props;
    return(
      <div className = {classes.editorContainer}>
        <ReactQuill value={this.state.text}
                    onChange={this.updateBody}
        />
      </div>
    )
  }

  updateStateFromProps = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id
    })
  }

  updateBody = async(val) =>
  {
    await this.setState({
      text: val
    })
    this.update()
  }

  update = debounce(() => {
    console.log("debouncing!!")
  }, 1500) // wait  1.5 secs from the moment the user stops writing
}

export default withStyles(styles)(EditorComponent)
