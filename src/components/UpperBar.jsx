import React from 'react'

const UpperBar = ({icon , title}) => {
    return (
        <>
            <div className="space-x-3 flex w-full self-center">
                <svg width="50" height="50" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={icon} fill="#252323" stroke="black" strokeWidth="0.4"/>
                </svg>

                <span className = "font-bold text-2xl w-full self-center">{title}</span>
                
                <div className="">
                      <div className="">
                        <div className=""><i className="self-center fas fa-plus"></i>
                          <span>Crear proyecto </span>
                        </div>
                      </div>
                </div>
                
                <div className ="w-full flex justify-end self-center">
                    <div className= "bg-white border border-gray-500 rounded-xl">
                        <i className="fas fa-search text-gray-500 pl-4 mr-3"></i>
                        <input className= "outline-none w-96 h-9 rounded-xl" type="text" placeholder="hola"/>
                    </div>
                    {/* <svg width="20" height="20" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.9683 17.9993C7.61303 17.8595 7.51886 17.5942 7.51961 17.2536C7.52599 14.641 7.51849 12.0283 7.52786 9.41568C7.52937 9.00954 7.39468 8.683 7.10281 8.38676C4.83609 6.08621 2.57574 3.78038 0.313147 1.47666C-0.0462566 1.11067 -0.0995294 0.718972 0.175839 0.348756C0.337908 0.130713 0.563755 0.0074257 0.853004 -0.000323811C0.865384 -0.000676062 0.87814 -0.000676062 0.89052 -0.000676062C6.63048 -0.000676062 12.3704 -0.00102831 18.1104 2.84392e-05C18.6957 2.84392e-05 19.1245 0.513257 18.9691 1.04128C18.9264 1.18676 18.8303 1.33154 18.7204 1.4439C16.4878 3.72613 14.25 6.00343 12.0129 8.28144C11.7972 8.50124 11.5691 8.71435 11.5147 9.02715C11.4948 9.14163 11.4858 9.25928 11.4858 9.37553C11.4839 10.9631 11.4806 12.5507 11.4877 14.138C11.4892 14.4835 11.3823 14.7773 11.141 15.0365C10.2913 15.9496 9.44756 16.8672 8.5952 17.7774C8.50891 17.8697 8.37835 17.9257 8.26806 17.9986C8.16789 17.9993 8.0681 17.9993 7.9683 17.9993Z" fill="#BABABA"/>
                    </svg> */}
                </div>

                
                
            </div>

        </>
    )
}




export default UpperBar
