function ContentBottom() {

    return (

        <div className="bg-slate-100 w-screen pb-60 pt-36">
            <div className="flex flex-col justify-center items-center">
                <p className="text-4xl font-extrabold mb-5 text-slate-700">Advanced Statistics</p>
                <p className=" text-slate-400 font-semibold w-2/5 text-center">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            
            <div className="flex justify-between ml-44 mr-44">
                <div>
                    <div className="w-16 h-16 rounded-full flex justify-center items-center relative top-8 left-8 bg-purple-950">
                        <img className="w-10 h-10" src="../../images/icon-brand-recognition.svg" alt="" />
                    </div>
                    <div className="bg-white w-72 p-10 rounded-md">
                        <p className="font-bold text-2xl mb-5">Brand Recognition</p>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>

                    </div>
                </div>

                <div className="relative top-14">
                    <div className="w-16 h-16 rounded-full flex justify-center items-center relative top-8 left-8 bg-purple-950">
                        <img className="w-10 h-10" src="../../images/icon-detailed-records.svg" alt="" />
                    </div>
                    <div className="bg-white w-72 p-10 rounded-md">
                        <p className="font-bold text-2xl mb-5">Detailed Records</p>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>

                    </div>
                </div>

                <div className="relative top-28">
                    <div className="w-16 h-16 rounded-full flex justify-center items-center relative top-8 left-8 bg-purple-950">
                        <img className="w-10 h-10" src="../../images/icon-fully-customizable.svg" alt="" />
                    </div>
                    <div className="bg-white p-10 w-72 rounded-md">
                        <p className="font-bold text-2xl mb-5">Fully Customizable</p>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>

                    </div>
                </div>
            </div>
        </div>
    )
  }
  
export default ContentBottom