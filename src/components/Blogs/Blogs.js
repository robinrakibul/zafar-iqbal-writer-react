import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='p-5 text-center font-[poppins] text-3xl font-bold'>Blogs</h1>
            <div className='flex justify-center mt-5 mb-48'>
                <div class="accordion accordion-flush w-3/4" id="accordionFlushExample">
                    <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                What are the difference between authorization and authentication?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Authorization is the action which is taken to verify who is someone by accessing their information such as name, image, address etc. Another way, If a system has to verify a user who tries to access a protected file or data, then this is called authentication system.
                                The differenes between them,
                                <div className='p-4'>
                                    <li>Authorization determines if user is who he/she claims to be. Ahentication determines if the user can and cannot access the file or data.</li>
                                    <li>Authorization comes before doing authentication</li>
                                    <li>Authorization system uses an unique id, auhentication system uses an access token</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingTwo">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                Why are you using firebase? What other options do you have to implement authentication?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">
                                I am using firebase because it is provided by google, it is a secured system where I can host an app, use the database to store my data, easy authentication system where I can easily use the email/password login or google/facebook/github login system. Firebase also is providing a great user experience.
                                <br /><br />
                                The other options I know I can use to implement the authentication are such as amazon aws cognito, mongodb, auth0 etc which are also competitive to firebase.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingThree">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                What other services does firebase provide other than authentication?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">
                                Firebase provides a lot of services. Most useful services are:
                                <li>App Hosting</li>
                                <li>Web App Hosting</li>
                                <li>Authentication</li>
                                <li>Cloud Firestore</li>
                                <li>Cloud Functions</li>
                                <li>Cloud Storage</li>
                                <li>Google Analytics</li>
                                <li>Cloud Messanging</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;