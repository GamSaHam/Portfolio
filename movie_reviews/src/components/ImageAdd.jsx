import React, { Component } from 'react';
import styles from './ImageAdd.scss';

export default class ImageAdd extends Component {
  // Start the popover closed
  state = {
    url: '',
    open: false,
    imageURL: ''
  };

  constructor(props) {
    super(props);

    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:3900/upload', {
      method: 'POST',
      body: data
    }).then(response => {
      response.json().then(body => {
        this.setState({ imageURL: `http://localhost:3900/${body.file}` });
      });
    });
  }

  handleChange = files => {
    if (files.length > 0) {
      const data = new FormData();
      data.append('file', files[0]);
      // data.append('filename', this.fileName.value);

      fetch('http://localhost:3900/upload', {
        method: 'POST',
        body: data
      }).then(response => {
        response.json().then(body => {
          this.setState({ imageURL: `http://localhost:3900/${body.file}` });
        });
      });
    }
  };

  // When the popover is open and users click anywhere on the page,
  // the popover should close
  componentDidMount() {
    document.addEventListener('click', this.closePopover);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover);
  }

  // Note: make sure whenever a click happens within the popover it is not closed
  onPopoverClick = () => {
    this.preventNextClose = true;
  };

  openPopover = () => {
    if (!this.state.open) {
      this.preventNextClose = true;
      this.setState({
        open: true
      });
    }
  };

  closePopover = () => {
    if (!this.preventNextClose && this.state.open) {
      this.setState({
        open: false
      });
    }

    this.preventNextClose = false;
  };

  addImage = () => {
    const { editorState, onChange } = this.props;
    onChange(this.props.modifier(editorState, this.state.url));
  };

  changeUrl = evt => {
    this.setState({ url: evt.target.value });
  };

  handleClick = event => {
    console.log(event);
  };

  render() {
    const popoverClassName = this.state.open
      ? styles.addImagePopover
      : styles.addImageClosedPopover;
    const buttonClassName = this.state.open
      ? styles.addImagePressedButton
      : styles.addImageButton;

    return (
      <React.Fragment>
        <a className="btn btn-light">
          <label class="custom-file-upload">
            <input
              type="file"
              className="d-none"
              onChange={e => this.handleChange(e.target.files)}
            />
            <i class="far fa-images" type="file"></i>
          </label>
          <img src={this.state.imageURL} alt="img" />
        </a>
      </React.Fragment>
    );
  }
}

/*
          <input
            type="text"
            placeholder="Paste the image url …"
            className={styles.addImageInput}
            onChange={this.changeUrl}
            value={this.state.url}
          />
 <button className="" type="button" onClick={this.addImage}></button>
*/
