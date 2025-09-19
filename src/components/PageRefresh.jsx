
export default function(){
  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <>
    
    <button
  onClick={handleRefresh}
  className="bg-[#1e1e2e]/60 hover:bg-[#2a2a40]/80 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md backdrop-blur-md transition-all duration-300 group"
>
  <span className="text-sm font-medium tracking-wide">Reset</span>
  <img
    src="refresh.png"
    alt="Refresh"
    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
  />
</button>

    </>
  )
}