import london_night from '../london_night.jpeg'


function FlitWelcome() {
  
    return(
      <div className="weclome-banner" style={{backgroundImage:`url(${london_night})`}}>
        
        <div className="welcome-text">
          <h1>Welcome to Flit AI.</h1>
          <p>Tell me a date, I will make you flit from one best place to another.</p>
          
        </div>
        <div className="welcome-input">
            <input type="date" id="travel_date" name="flitDate"></input>
            <button id="go_flit_button">Go</button>
        </div>
        
        
          
        
      </div>
      
    );
  }

  export function FlitHeader() {
    return (
      <div className="flitHeader">
        <div className='flit_logo'>Flit AI</div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Other</a></li>
            </ul>
        </nav>
      </div>
    );
  }

  

  export default FlitWelcome;