import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import Button from '../button';
import TextLink from '../textLink';
import TextInput from '../textInput';
import TextArea from '../textArea';

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
      return setState({error: {msg: 'The selected file must be a JPG'}})
    }
    let size = (file.size / 1024 / 1024).toFixed(2);
    if (size > 10) {
      return setState({error: {msg: `The selected file must be smaller than 10MB. Your file size is: ${size}MB` }})
    }
    const image = URL.createObjectURL(file)
    setSelectedImage(image);
    setState({error: {msg: false}});
  }

  const uploader = useRef(null);
  const preview = useRef(null);

  const [upLoadedPhotos, setupLoadedPhotos] = useState([]);

  const renderPhoto = (fsizename, i, fname, fsize) => {
    return (
      <div className="govuk-summary-list__row"
        id={fsizename + (i + 1)}>
        <dt className="govuk-summary-list__key">File {i + 1}</dt>
        <dd className="govuk-summary-list__value">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a download="" href="/">{fname}</a>
        </dd>
        <dd className="govuk-summary-list__actions">
          <a className="govuk-link"
            onClick="deleteFile(' + fsizename + (i + 1) + ')">
            Delete<span className="govuk-visually-hidden"> file 1</span>
          </a>
        </dd>
      </div>
    )
  }

  const uploadPhotos = (event)=>{
    event.preventDefault();
    const fi = uploader.current
    console.log(fi)

    // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
    if (fi.files.length > 0) {
      const i = upLoadedPhotos.length
      var filename = fi.files.item(i).name;      // THE NAME OF THE FILE.
      var fileSize = fi.files.item(i).size;      // THE SIZE OF THE FILE.
      var fileSizeText = Math.round((fileSize / 1024))+' KB';
      setupLoadedPhotos(upLoadedPhotos => [...upLoadedPhotos,renderPhoto(fileSize, i, filename, fileSizeText)] );
    }
    else {
      alert('Please select a file.')
    }
  }
  const label = (
    <div>
      <p>Please describe:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the size and location of the problem</li>
        <li>the source of the problem</li>
        <li>how long you have been experiencing the problem</li>
        <li>how many items are damaged, for example 3 floor tiles</li>
      </ul>
      <div className="govuk-inset-text">
        Please report <strong>only one problem</strong> at a time. You will have
        a chance to report another repair after this one.
      </div>
    </div>
  )

  return <div className="govuk-grid-row">
    <div className="govuk-grid-column-two-thirds">
      <TextArea
        value={values.postcode}
        name={'postcode'}
        onSubmit={Continue}
        validation={'Validation'}
        label={label}
        title="Describe your problem in more detail"
        buttonText={'wrong'}
      ></TextArea>
      <h1>Upload a photo (maximum of 3)</h1>
      <div className="govuk-form-group" id="conditional-contract">
        <label className="govuk-label" htmlFor="upload-photo">
          Select file(s)
        </label>
        <dl className="govuk-summary-list" id="photo-file" ref={preview}>
          {upLoadedPhotos}
        </dl>
        <input className="govuk-file-upload" ref={uploader} id="upload-photo"
          name="upload-photo" type="file"
          aria-describedby="upload-photo"/>
        <button className="govuk-button govuk-button--secondary"
          onClick={uploadPhotos}
          data-module="govuk-button">Upload
        </button>
      </div>
      {/*<div className={state.error.msg ? 'govuk-form-group--error' : 'govuk-form-group'}>*/}
      {/*  <label className="govuk-label" htmlFor="upload-a-photo">*/}
      {/*    Upload a file*/}
      {/*  </label>*/}
      {/*  <span id="upload-a-photo-error" className="govuk-error-message">*/}
      {/*    {state.error.msg}*/}
      {/*  </span>*/}
      {/*  <input className="govuk-file-upload govuk-file-upload--error"*/}
      {/*    id="upload-a-photo" name="upload-a-photo" type="file"*/}
      {/*    aria-describedby="upload-a-photo-error" onChange={OnChange}/>*/}
      {/*  <div>*/}
      {/*    {selectedImage && (*/}
      {/*      <table>*/}
      {/*        <tr>*/}
      {/*          <td align="center" valign="center">*/}
      {/*            <img alt="not fount" width="200px" src={selectedImage} />*/}
      {/*          </td>*/}
      {/*          <td align="center" valign="center">*/}
      {/*            <button className="govuk-button govuk-button--warning" onClick={()=>setSelectedImage(null)}>Remove</button>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*        <tr>*/}
      {/*          <td colSpan={2}>*/}
      {/*            <TextLink href="#">*/}
      {/*              Upload another photo (optional)*/}
      {/*            </TextLink>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*      </table>*/}
      {/*    )}*/}

      {/*  </div>*/}
      {/*</div>*/}
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
