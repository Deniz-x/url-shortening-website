
function Navbar() {
 

    return (
      <div className="pt-12 pb-5 mr-44 ml-44 flex items-center">
        <div className="flex items-center mr-auto">
            <h1 className="inline pr-8 text-4xl font-bold">Shortly</h1>
            <div className="inline-flex">
                <p className="pr-5 font-semibold text-base text-slate-400">Features</p>
                <p className="pr-5 font-semibold text-base text-slate-400">Pricing</p>
                <p className="font-semibold text-base text-slate-400">Resources</p>
            </div>
        </div>
        <div className="flex items-center">
            <p className="pr-5 p-1 font-semibold text-base text-slate-400">Login</p>
            <p className="font-semibold text-base bg-cyan-300 text-white pr-4 pl-4 pt-2 pb-2 rounded-3xl border-cyan-400 border">Sign Up</p>
        </div>
        
      </div>
    )
  }
  
  export default Navbar