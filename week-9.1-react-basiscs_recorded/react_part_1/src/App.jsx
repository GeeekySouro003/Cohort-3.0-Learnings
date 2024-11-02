function App() {

  return (
   <div style={{background:"#BFECFF",height:"100vh"}}>
    <div style={{display:"flex",justifyContent:"center"}}>
    <PostComponent/>
    </div>
   </div>
  )
}


const style={width:200,backgroundColor:"white",borderRadius:10,borderColor:"red",borderWidth:1,padding:20}
function PostComponent() {
return <div style={style}>
  <div style={{display:"flex"}}>
  <img src={"https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"}
  style={{
    width:35,
    height:35,
    borderRadius:25
  }} />
  <div  style={{fontSize:10,marginLeft:10}}>
    <b>
      100xDevs
    </b>
    <div>103.889 followers</div>
    <div>12m</div>
  </div>
  </div>
  <div style={{fontSize:13}}>
    Want to know how to win big?Win bounties worth of $6000
  </div>

</div>
}

export default App

