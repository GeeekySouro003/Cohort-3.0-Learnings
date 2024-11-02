import './App.css'

function App() {

  return (
    <>
     {/* <div className='bg-blue-500'>Hi</div> */}
     <div className='grid grid-cols-12'>
      <div className='bg-blue-700 col-span-4'>
        child 1
      </div>
      <div className='bg-red-500 col-span-5'>
        child 2
      </div>
      <div className='bg-green-400 col-span-3'>
        child 3
      </div>
     </div>
    </>
  )
}

export default App
