import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h1 className='fw-bold text-danger mt-4'>My Services</h1>

            <div className='blog-container container'>

                <div className='blog-div  '>
                    <h2 className='mt-4'>Difference between Authorization and Authentication</h2>
                    <hr />
                    <p className='blog-text'>1.Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process.Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege. <br /> 2.Authentication verifies who the user is.Authorization determines what resources a user can access. <br /> 3.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.</p>
                </div>
                <div className='blog-div'>
                    <h2 className='mt-1'>Why are you using firebase? What other options do you have to implement Authentication</h2>
                    <hr />
                    <p className='blog-text'>Google Firebase is a platform that offers active backend as a service for building dynamic web and mobile apps.We should use Firebase because, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.Firebase removes the need to worry about the technicalities of cloud server configuration. <br />Authentication methods include something users know, something users have and something users are. Not every authentication type is created equal to protect the network, however; these authentication methods range from offering basic protection to stronger security. we can use Password-based authentication, Two-factor or multifactor authentication, Biometric authentication etc.</p>
                </div>
                <div className='blog-div'>
                    <h2 className='mt-3'>What other services does firebase provide other than Authentication</h2>
                    <hr />
                    <p className='blog-text'> There are many services which Firebase provides, Most useful of them are:
                        <br />
                        <span>.</span> Cloud Firestore <br />
                        <span>.</span> Cloud Functions <br />
                        <span>.</span> Authentication <br />
                        <span>.</span>  Hosting <br />
                        <span>.</span>  Cloud Storage <br />
                        <span>.</span>  Google Analytics <br />
                        <span>.</span> Predictions <br />
                        <span>.</span> Cloud Messaging <br />
                        <span>.</span>  Dynamic Links <br />
                        <span>.</span>  Remote Config</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;
