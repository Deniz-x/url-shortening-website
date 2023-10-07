import ShortenIt from "./content/ShortenIt"
import {useState} from "react"
function ContentBottom() {

    const [allLinks, setAllLinks] = useState([]);

    const [inputLink, setInputLink] = useState("");

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    function handleChange(event) {
        setInputLink(event.target.value);
    }

    async function shortenUrl(inputLink) {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
        const data = await res.json();

        console.log(data.result.full_short_link)
        
        setAllLinks(prevLinks => [
            ...prevLinks,
            {
                inputLink: inputLink,
                shortLink: data.result.full_short_link
            }
        ]);

    }

    function handleSubmit(e){

        e.preventDefault();
        shortenUrl(inputLink);

        // Clear the input field
        setInputLink("");
    }

    const buttonClasses = `${isClicked ? 'bg-purple-950': 'bg-cyan-300 hover:bg-cyan-200'} text-white font-bold p-4 pt-2 pb-2 text-sm rounded-lg`



    return (

        <div>
            <ShortenIt handleChange={handleChange} handleSubmit={handleSubmit} inputLink={inputLink}/>
            <div className="bg-slate-100 w-screen pb-60">

            <div className="mr-44 ml-44 pt-20">
                {allLinks.map(link => {
                    return (
                        <div key={link.shortLink} className="grid grid-cols-7 bg-white p-3 mt-4 rounded-md text-slate-500">
                            <div className="flex justify-between col-span-6 items-center">
                                <p>{link.inputLink}</p>
                                <p className="text-cyan-400">{link.shortLink}</p>
                            </div>
                            <div className="col-span-1 flex justify-end items-center">
                                <button className={buttonClasses}
                                onClick={() => {
                                    handleClick();
                                    navigator.clipboard.writeText(link.shortLink);
                                }}
                                >{isClicked ? "Copied" : 'Copy'}</button>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
                
                <div className="flex flex-col justify-center items-center mt-10">
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
        </div>
    )
  }
  
export default ContentBottom