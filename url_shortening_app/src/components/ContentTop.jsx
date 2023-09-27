import ShortenIt from "./content/ShortenIt"
function ContentTop() {
 

    return (

        <div className="ml-44 -mb-16">
            <div className="overflow-hidden flex items-center">
                <div className="pt-5 pb-5">
                    <h1 className="text-5xl font-bold pb-2">More than just shorter links</h1>
                    <p className="text-slate-400">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <button className="mt-5 bg-cyan-300 text-white font-bold pl-5 pr-5 p-2 rounded-3xl text-sm">Get Started</button>
                </div>
                <img className="pl-10 max-w-2xl" src="../../images/illustration-working.svg" alt="desktop pic" />
                
            </div>
            <ShortenIt/>
        </div>
    )
  }
  
  export default ContentTop