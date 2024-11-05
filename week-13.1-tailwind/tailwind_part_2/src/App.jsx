function App() {
  return (
    <div className="h-screen bg-white dark:bg-black">
      <h1 className="text-black dark:text-white">hi there</h1>
      <button onClick={() => {
        document.querySelector("html").classList.toggle("dark")
      }} className=""></button>
    </div>
  )
}

export default App