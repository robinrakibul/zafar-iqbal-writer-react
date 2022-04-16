import React from 'react';

const Banner = () => {
    return (
        <>
            <section class="overflow-hidden text-gray-700 ">
            <div id='banner' className="font-[poppins] text-xl text-blue-600 text-center mt-10 mb-4">Banner</div>
                <div class="container px-5 mx-auto lg:pt-5 lg:px-32">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/5">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/41XfFH1/gallery6.jpg"></img>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/5">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/Yp4q5C0/gallery2.jpg                                    "></img>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/5">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/pnC08gH/gallery4.jpg"></img>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/5">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/3FFmMpz/gallery3.jpg"></img>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/5">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/GP3C63y/gallery5.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;