import React from 'react';

const SingleCard = () => {
    return (
        <div>
            <div id='quote' className="font-[poppins] text-xl text-blue-600 text-center mt-10 mb-4">Quotes</div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md mb-10 md:max-w-2xl mt-10">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="rounded h-52 w-full object-cover md:h-full md:w-48" src="https://i.ibb.co/VSF7v9s/1.jpg" alt=""></img>
                    </div>
                    <div className="p-8">
                        <a href="https://en.wikipedia.org/wiki/Muhammed_Zafar_Iqbal" target='_blank' className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">The most famous writer of Bangladesh</a>
                        <p className="mt-2 text-slate-500">“কে আমাকে নিয়ে কি ভাবল তাতে আমার কিছু যায় আসেনা , কারন যে আমাকে চেনে সে তো জানেই আমি কেমন , আর যে আমাকে চেনেনা , সে আমাকে নিয়ে কি ভাবল তাতে কি !” <br /> <small>By Zafar Iqbal</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;