
function Footer() {
 

    return (
      <div className=" bg-slate-800 text-slate-400 text-sm">
        <div className="mr-44 ml-44 flex pt-14 pb-14 justify-between">

          <p className=" text-2xl text-slate-100">Shortly</p>

          <div className="flex flex-col">
            <p className=" font-semibold text-slate-100 pb-4">Features</p>
            <a href="" className="hover:text-cyan-600">Link Shortening</a>
            <a href="" className="hover:text-cyan-600">Branded Links</a>
            <a href="" className="hover:text-cyan-600">Analytics</a>
          </div> 

          <div className="flex flex-col">
            <p className=" font-semibold text-slate-100 pb-4">Resources</p>
            <a href="" className="hover:text-cyan-600">Blog</a>
            <a href="" className="hover:text-cyan-600">Developers</a>
            <a href="" className="hover:text-cyan-600">Support</a>
          </div>

          <div className="flex flex-col">
            <p className=" font-semibold text-slate-100 pb-4">Company</p>
            <a href="" className="hover:text-cyan-600">About</a>
            <a href="" className="hover:text-cyan-600">Careers</a>
            <a href="" className="hover:text-cyan-600">Contact</a>
          </div>
        </div>
        
        
      </div>
    )
  }
  
  export default Footer