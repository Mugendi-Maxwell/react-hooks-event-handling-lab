// Code EyesOnMe Component Here
function EyesOnMe() {
    function eyesOn() {
        console.log("Good!")
    }
    function eyesOff(){
        console.log("Hey! Eyes on me!");
    }
    return(
        <div>
            <button onFocus={eyesOn}  onBlur={eyesOff}>Eyes on me</button>
        </div>
    )
}
 
export default EyesOnMe;