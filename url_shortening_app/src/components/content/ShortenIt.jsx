
function ShortenIt() {
 

    return (
        <div className="w-full flex justify-center">

            <form className="w-full mr-44 mt-10 p-10 bg-purple-950 bg-shorten-it flex justify-between items-center rounded-lg">
                
                <input className="w-full mr-10 h-12 p-5 rounded-lg" type="text" name="link" id="link" placeholder="Shorten a link here..." />
                <button className="bg-cyan-300 text-white font-bold pl-5 pr-5 p-2 rounded-lg text-base w-40 h-12">Shorten It!</button>
            </form>

        </div>
    )
  }
  
  export default ShortenIt