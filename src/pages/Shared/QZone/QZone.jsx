import React from 'react';
import qzone1 from '../.././../assets/qZone1.png'
import qzone2 from '../.././../assets/qZone2.png'
import qzone3 from '../.././../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-light text-center my-4 py-4 '>
            <h4>QZone</h4>
            <div><img src={qzone1} alt="" /></div>
            <div><img src={qzone2} alt="" /></div>
            <div><img src={qzone3} alt="" /></div>

        </div>
    );
};

export default QZone;