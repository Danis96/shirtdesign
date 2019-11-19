import React from 'react';
import './Design.css';


const Design = ({display, format}) => {
    return ( 
        <div className='card card-content' style={styles.marT}>
           <div className='imgTshirt text-center'>
            <img className='img-responsive'
                 alt='shirt'
                 src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.imgColor}`}  />
           </div>
           <div className='memeText text-center'>
               <div className='upperText'>
                    <p  style={{fontSize: format || '12px', color: display.textColor }}>{display.upperText}</p>
               </div>
               <img  src={`${display.url}` || 'http://via.placeholder.com/400x300'} alt='memeIMG' />
               <div className='lowerText'>
                    <p  style={{fontSize: format, color: display.textColor}}>{display.lowerText}</p>
               </div>
           </div>
        </div>
     );
}

const styles = {
    marT: {
        marginTop: '15px'
    }
}
 
export default Design;