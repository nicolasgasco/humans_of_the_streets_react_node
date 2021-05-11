import "./AnimatedLogo.css";

function AnimatedLogo() {
  return (
  // <div>
  //   <h1 className="main-logo">Humans <span>of the</span> Streets</h1>
  //   <div class="wrapper">
  //     <div class="typing-demo">Write their story.</div>
  //   </div>
  // </div>

<div className="animated-title">
<div className="text-top">
  <div>
    <span>Humans of</span>
    <span>the Streets</span>
  </div>
</div>
<div className="text-bottom">
  <div style={{"font-size": "1.5rem"}}>Read their stories...</div>
</div>
</div>
  )
  
}

export default AnimatedLogo;