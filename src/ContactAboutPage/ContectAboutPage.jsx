import React from 'react';

const ContectAboutPage = (probs)=>{
    return(
        <>
            <div className = "outer-div" style = {{margin : 'auto 0', height:'100vh'}} >
                <h1> 🔥 Hi This is {probs.name} page 🔥 </h1>
                <h1>{probs.dis} 👍 </h1>
            </div>
        </>
    )
}
export default ContectAboutPage;