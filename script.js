//notes object for a guitar note
const notes ={
    first:"A-major",
    second:"A-sharp",
    third:"A-minor",
    fourth:"C-major",
    fifth:"D-major",
    sixth:"D-minor",
    seventh:"E-major",
    eighth:"E-minor",
    nineth:"F-major"
}

//React
class MainComponent extends React.Component{
    constructor(props){
      super(props);
      

      //state tracking notes which are suppose to be displayed
      this.state={
          note:""
      }

      this.handleChange1=this.handleChange1.bind(this);
      this.handleChange2=this.handleChange2.bind(this);
      this.handleChange3=this.handleChange3.bind(this);
      this.handleChange4=this.handleChange4.bind(this);
      this.handleChange5=this.handleChange5.bind(this);
      this.handleChange6=this.handleChange6.bind(this);
      this.handleChange7=this.handleChange7.bind(this);
      this.handleChange8=this.handleChange8.bind(this);
      this.handleChange9=this.handleChange9.bind(this);
      this.handleKey=this.handleKey.bind(this);
    }

    //A-major handle on click and handle Q key pressed
    handleChange1(){
        document.getElementById("Q").play();
        this.setState({
            note:notes.first
        });
       
    }

    //A-sharp handle on click and handle W key pressed
    handleChange2(){
        document.getElementById("W").play();
       this.setState({
            note:notes.second
        });
    }

    //A-minor handle on click and handle E key pressed
    handleChange3(){
        document.getElementById("E").play();
       this.setState({
        note:notes.third
    });
    }

    //C-major handle on click and handle A key pressed
    handleChange4(){
        document.getElementById("A").play();
        this.setState({
            note:notes.fourth
        });
    }

    //D-major handle on click and handle S key pressed
    handleChange5(){
        document.getElementById("S").play();
       this.setState({
            note:notes.fifth
        });
    }

    //D-minor handle on click and handle D key pressed
    handleChange6(){
        document.getElementById("D").play();
       this.setState({
            note:notes.sixth
        });
    }

    //E-major handle on click and handle Z key pressed
    handleChange7(){
        document.getElementById("Z").play();
        this.setState({
            note:notes.seventh
        });
    }

    //E-minor handle on click and handle X key pressed
    handleChange8(){
        document.getElementById("X").play();
        this.setState({
            note:notes.eighth
        });
    }


    //F-major handle on click and handle C key pressed
    handleChange9(){
        document.getElementById("C").play();
       this.setState({
            note:notes.nineth
        });
    }

    //handle key pressed based on key code and call corresponding function
    handleKey(e){
        if(e.keyCode==81){
            this.handleChange1();
        }else if(e.keyCode==87){
            this.handleChange2();
        }else if(e.keyCode==69){
            this.handleChange3();
        }else if(e.keyCode==65){
            this.handleChange4();
        }else if(e.keyCode==83){
            this.handleChange5();
        }else if(e.keyCode==68){
            this.handleChange6();
        }else if(e.keyCode==90){
            this.handleChange7();
        }else if(e.keyCode==88){
            this.handleChange8();
        }else if(e.keyCode==67){
            this.handleChange9();
        }

    }

    //add eventlistner after component mounted and key is pressed
    componentDidMount(){
        document.addEventListener("keydown",this.handleKey);
    }

    //remove eventlistner after component is unmounted
    componentWillUnmount(){
        document.removeEventListener("keydown",this.handleKey);
    }

    //render method
    render(){
        $("#display").text(this.state.note);
        return(
            <div id="main" className="container-fluid">
            <div className="row align-items-start" id="top-row">
                <div className="col">
                    <button className="btn-light drum-pad " onClick={this.handleChange1} id={notes.first}>Q
                    <audio className="clip" id="Q" src="a-major.mp3" preload="auto">
                    </audio>
                    </button>
                </div>
                <div className="col">
                    <button className="btn-light drum-pad"onClick={this.handleChange2 } id={notes.second}>W
                    <audio className="clip" id="W" src="a.wav" preload="auto">
                    </audio>
                    </button>
                </div>
                <div className="col">
                    <button className="btn-light drum-pad" onClick={this.handleChange3}id={notes.third}>E
                    <audio className="clip" id="E" src="a-minor.mp3" preload="auto">
                    </audio>
                    </button>
                </div>
            </div>
           
            <div className="row align-items-center" id="middle-row">
                <div className="col">
                    <button className="btn-light drum-pad" onClick={this.handleChange4} id={notes.fourth}>A
                    <audio className="clip" id="A" src="c-major.mp3" preload="auto">
                    </audio>
                    </button>
                </div>
                <div className="col">
                    <button className="btn-light drum-pad" onClick={this.handleChange5} id={notes.fifth}>S
                    <audio className="clip" id="S" src="d-major.mp3" preload="auto">
                    </audio>
                    </button>
                </div>
                <div className="col">
                    <button className="btn-light drum-pad" onClick={this.handleChange6} id={notes.sixth}>D
                    <audio className="clip" id="D" src="d-minor.mp3" preload="auto">
                    </audio>
                    </button>
                </div>
            </div>
            <div className="row align-items-end" id="third-row">
                <div className="col">
                    <button className="btn-light drum-pad" onClick={this.handleChange7} id={notes.seventh}>Z
                    <audio className="clip" id="Z" src="e-major.mp3" preload="auto">
                    </audio>
                    </button>   
                </div> 
                <div className="col">
                    <button className="btn-light drum-pad" onClick={this.handleChange8} id={notes.eighth}>X
                    <audio className="clip" id="X" src="e-minor.mp3" preload="auto">
                    </audio>
                    </button>  
                </div>
                <div className="col"> 
                    <button className="btn-light drum-pad" onClick={this.handleChange9} id={notes.nineth}>C
                    <audio className="clip" id="C" src="f-major.wav" preload="auto">
                    </audio>
                    </button>
                </div>
            </div>
                <div id="displayContainer">
                    <p id="display"></p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<MainComponent />,document.getElementById("drum-machine"));