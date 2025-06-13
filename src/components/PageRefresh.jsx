
export default function(){
  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <>
    
    <button
    onClick={handleRefresh}
    className="bg-red-500 hover:bg-red-600 group text-white px-4 py-2 rounded flex items-center flex-row gap-1"
    >
    Reset
    <img className="h-5 w-5 group-hover:animate-spin" src="refresh.png" alt="" />
  </button>
    </>
  )
}