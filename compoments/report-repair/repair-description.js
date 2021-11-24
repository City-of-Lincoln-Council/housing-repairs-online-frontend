import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Button from '../button';

const RepairDescription = ({handleChange, values}) => {
  const [state, setState] = useState({error: {}});
  const [selectedImage, setSelectedImage] = useState(null);

  const Continue = () => {
    if (selectedImage) {
      return handleChange('image', selectedImage);
    }
    return setState({error: {msg: 'Required'}})
  }

  const OnChange = (event) => {
    const file = event.target.files[0]
    if (file.type !== 'image/jpeg') {
      return setState({error: {msg: 'Only JPEG file format can be uploaded'}})
    }
    let size = (file.size / 1024 / 1024).toFixed(2);
    if (size > 10) {
      return setState({error: {msg: `File too big, maximum is 10MB. Your file size is: ${size}MB` }})
    }
    const image = URL.createObjectURL(file)
    setSelectedImage(image);
    setState({error: {msg: false}});
  }

  return <div className="govuk-grid-row">
    <div>
      <h1>Repair Description</h1>
      <div className={state.error.msg ? 'govuk-form-group--error' : 'govuk-form-group'}>
        <label className="govuk-label" htmlFor="upload-a-photo">
          Upload a file
        </label>
        <span id="upload-a-photo-error" className="govuk-error-message">
          {state.error.msg}
        </span>
        <input className="govuk-file-upload govuk-file-upload--error"
          id="upload-a-photo" name="upload-a-photo" type="file"
          aria-describedby="upload-a-photo-error" onChange={OnChange}/>
        <div>
          {selectedImage && (
            <table>
              <tr>
                <td align="center" valign="center">
                  <img alt="not fount" width="200px" src={selectedImage} />
                </td>
                <td align="center" valign="center">
                  <button className="govuk-button govuk-button--warning" onClick={()=>setSelectedImage(null)}>Remove</button>
                </td>
              </tr>
            </table>
          )}
        </div>
      </div>
      <br/>
      <Button onClick={Continue} >Continue</Button>
    </div>
  </div>
};

RepairDescription.propTypes = {
  storeAddresses: PropTypes.func,
  values: PropTypes.object,
  handleChange: PropTypes.func,
}

export default RepairDescription;
