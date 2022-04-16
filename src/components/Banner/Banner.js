import React from 'react';

const Banner = () => {
    return (
        <>
            <section class="overflow-hidden text-gray-700 ">
                <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
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
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md mb-10 md:max-w-2xl mt-10">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <img class="rounded h-52 w-full object-cover md:h-full md:w-48" src="https://i.ibb.co/VSF7v9s/1.jpg" alt=""></img>
                    </div>
                    <div class="p-8">
                        <a href="https://en.wikipedia.org/wiki/Muhammed_Zafar_Iqbal" target='_blank' class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">The most famous writer of Bangladesh</a>
                        <p class="mt-2 text-slate-500">“কে আমাকে নিয়ে কি ভাবল তাতে আমার কিছু যায় আসেনা , কারন যে আমাকে চেনে সে তো জানেই আমি কেমন , আর যে আমাকে চেনেনা , সে আমাকে নিয়ে কি ভাবল তাতে কি !” <br /> <small>By Zafar Iqbal</small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;