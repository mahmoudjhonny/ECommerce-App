import React from 'react';
import '../Component/Products/Products.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Skeletonelements = () => {
    return (
        <>
            <div className="productsBody" style={{marginBottom: '20px'}}>
            {Array(8).fill().map((item, i) => (
                    <div className='productbody'  key={i}>
                        <div className='productImg'>
                            <Skeleton width='100%' height='20rem' borderRadius='4px'/>
                        </div>
                        <div className="productTitle">
                            <Skeleton width='226px' height='37px' borderRadius='4px'/>
                        </div>
                        <div className="productprice">
                            <Skeleton width='226px' height='28px' borderRadius='4px'/>
                        </div>
                    </div>
            ))} 
                           </div>
        </>
    );
}

export default Skeletonelements;
