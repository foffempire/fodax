import React, { useEffect, useState } from 'react'

const PageLoader = () => {
    const [hideLoader, setHideLoader ] = useState(false);
    const [fadeLoader, setFadeLoader ] = useState(false);

    const hideIt = ()=>{
        setTimeout(() => {
            setFadeLoader(true);
        }, 1000);
        setTimeout(() => {
            setHideLoader(true);
        }, 1000);
    }


    useEffect(()=>{
        hideIt();
    }, []);
  return (
    <div className={`z-50 bg-slate-950 flex justify-center items-center w-[100%] h-[100vh] fixed left-[0] top-[0] ${hideLoader && 'hidden'} ${fadeLoader && 'fade-out'}`}>
        <span className="pageloader"></span>
    </div>
  )
}

export default PageLoader