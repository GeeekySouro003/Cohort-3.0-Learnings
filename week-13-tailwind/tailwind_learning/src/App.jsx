import './App.css'

function App() {

  return (
    <>
     {/* <div className='bg-blue-500'>Hi</div>  */}
      <div className=' sm:grid-cols-12 grid grid-cols-1'>
      <div className='col-span-1 bg-blue-700 sm:col-span-5'>
        child 1
      </div>
      <div className='col-span-1 bg-red-500 sm:col-span-5'>
        child 2
      </div>
      <div className='col-span-1 bg-green-400 sm:col-span-2'>
        child 3
      </div>
     </div>

     {/* <div className='md:bg-green-400 sm:bg-blue-400 bg-red-700'>
      hello there
     </div> */}
    </>
  )
}

export default App
