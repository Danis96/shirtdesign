import React from 'react';

const imgURL = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';


const Settings = (props) => {

    const {color, lowerT , upperT, imgupload, textS, textColor, saveDesign} = props;

    return (
        <div className='card bg-light container' style={styles.marT}>
            <h3 className='text-center'>
                Settings
            </h3>
            <h4>
                Change T-shirt color
            </h4>
            <div className='tshirt-color'>
                <img onClick={color}  src={`${imgURL}white.png`} alt='shirtsmall' name='white' />
                <img onClick={color}  src={`${imgURL}black.png`} alt='shirtsmall' name='black' />
                <img onClick={color}  src={`${imgURL}grey.png`} alt='shirtsmall' name='grey' />
                <img onClick={color}  src={`${imgURL}blue.png`} alt='shirtsmall' name='blue' />
                <img onClick={color} src={`${imgURL}red.png`} alt='shirtsmall' name='red' />
            </div>
            <hr />
            <h4>Input Text</h4>
            <input onChange={upperT} type='text' name='upper' className='form-control form-control-sm mb-2' placeholder='Upper Text' />
            <input onChange={lowerT} type='text' name='lower' className='form-control form-control-sm mb-2' placeholder='Lower Text' />
            <hr />
            <h4>Upload Image</h4>
            <div className='form-group'>
                <input name='file' onChange={imgupload} type='file' className='form-control-file mb-2' />
            </div>
            <hr />
            <h4>Text Size</h4>
            <input name='range' onChange={textS} type='range' min='24' max='52' />
            <hr />
            <h4>Text Color</h4>
            <select onChange={textColor} className='form-control form-contro-sm mb-2'>
                <option name='white' >White</option>
                <option name='black' >Black</option>
                <option name='red' >Red</option>
                <option name='blue' >Blue</option>
                <option name='green' >Green</option>
            </select>
            <hr />
            <button onClick={saveDesign} className='btn btn-sm btn-secondary mb-2'>Save</button>

        </div>
    );
}

const styles = {
    marT: {
        marginTop: '15px'
    }
}

export default Settings;