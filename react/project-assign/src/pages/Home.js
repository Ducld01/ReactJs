import React from 'react'
import Banner from '../component/Banner';
import ViewProduct from '../component/ViewProduct';
const Home = (props) => {
    return (
        <div>
            <div>
                <Banner/>
            </div>
           <div>
                <ViewProduct {...props}/>
           </div>
        </div>
    )
}

export default Home
