import Image from "next/image";
import Link from "next/link";
import React from "react";

const Features = () => {
    return (
        <>

        {/* First Part of Features */}
            <div className="max-w-7xl mx-auto relative my-24 p-[28px] lg:p-[0px]">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4">
                <div
                    style={{ backgroundImage: `url('/images/features/exchange3.jpg')` }}
                    className="col-span-2 row-span-2 min-h-[556px] md:min-h-[572px] relative bg-no-repeat bg-cover bg-center p-2"
                >
                    <div className="bg-[rgba(45,139,192,0.75)] absolute bottom-0 left-0 w-full md:w-2/3 h-[250px] md:h-[238px] text-white flex justify-center items-center flex-col">
                    <div className="space-y-6">
                        <h2 className="text-[24px] font-bold max-w-[199px]">
                        Top Product Of the Week
                        </h2>
                        <div>
                        <Link
                            href={"/"}
                            className="text-[12px] md:text-[14px] py-[13px] px-[26px] md:py-[15px] md:px-[30px] inline-block border border-white rounded-[5px] transition duration-300 hover:bg-white hover:text-[rgba(45,139,192,0.75)]"
                        >
                            EXPLORE ITEMS
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url('/images/features/exchange2.png')` }}
                    className="col-span-2 min-h-[398px] md:min-h-[289px] relative bg-no-repeat bg-cover bg-center"
                >
                    <div className="bg-[rgba(45,139,192,0.75)] absolute bottom-0 left-0 w-full md:w-3/4 h-[250px] md:h-[170px] text-white flex justify-center items-center flex-col p-2">
                    <div className="space-y-6">
                        <h2 className="text-[20px] font-[400] max-w-[258px]">
                        Top Product Of the Week
                        </h2>
                        <div>
                        <Link
                            href={"/"}
                            className="text-[12px] md:text-[14px] py-[13px] px-[26px] md:py-[15px] md:px-[30px] inline-block border border-white rounded-[5px] transition duration-300 hover:bg-white hover:text-[rgba(45,139,192,0.75)]"
                        >
                            EXPLORE ITEMS
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url('/images/features/exchange1.png')` }}
                    className="col-span-2 min-h-[398px] md:min-h-[289px] relative bg-no-repeat bg-cover bg-center"
                >
                    <div className="bg-[rgba(45,139,192,0.75)] absolute bottom-0 left-0 w-full md:w-3/4 h-[250px] md:h-[170px] text-white flex justify-center items-center flex-col p-2">
                    <div className="space-y-6">
                        <h2 className="text-[20px] font-[400] max-w-[258px]">
                        Top Product Of the Week
                        </h2>
                        <div>
                        <Link
                            href={"/"}
                            className="text-[12px] md:text-[14px] py-[13px] px-[26px] md:py-[15px] md:px-[30px] inline-block border border-white rounded-[5px] transition duration-300 hover:bg-white hover:text-[rgba(45,139,192,0.75)]"
                        >
                            EXPLORE ITEMS
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Second Part of Features */}
            <div className="max-w-7xl mx-auto relative my-24 p-[28px] lg:p-[0px]">
                <div className="flex items-center gap-7 flex-col-reverse md:flex-row">

                    <div className="grid grid-cols-5 gap-2 w-full md:w-[50%]">
                        <div 
                            style={{ backgroundImage: `url('/images/features/featurebig1.png')` }}     
                            className="relative bg-no-repeat bg-cover bg-center min-h-[498px] col-span-2 bg-red-800"></div>
                        <div
                            style={{ backgroundImage: `url('/images/features/featurebig2.png')` }} 
                            className="relative bg-no-repeat bg-cover bg-center min-h-[498px] col-span-3 bg-blue-900"></div>
                    </div>

                    <div className="w-full md:w-[50%] space-y-4 flex flex-col items-ce">
                        <h3 className="font-bold text-[#23A6F0] text-[16px] lg:max-w-[158px]">Featured Products</h3>
                        <h2 className="font-bold text-[#252B42] text-[35px] lg:text-[40px] max-w-[431px]">We love what we do</h2>
                        <div className="text-[#737373] text-[14px] space-y-4 max-w-[351px]">
                            <p>
                                Problems trying to resolve the conflict between 
                                the two major realms of Classical physics: 
                                Newtonian mechanics.
                            </p>
                            <p>
                                Problems trying to resolve the conflict between 
                                the two major realms of Classical physics: 
                                Newtonian mechanics 
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
