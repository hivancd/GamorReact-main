// import { useState } from "react";

// let display_streamer_count = 1;

// const add_buttons = document.getElementsByClassName("add_button");


{/* <div className="displayed_streamer" id="displayed_streamer1"></div>
<div className="displayed_streamer" id="displayed_streamer2"></div>
<div className="displayed_streamer" id="displayed_streamer3"></div> */}

function DisplayedStreamer(props: { i: number , left?:string, right?:string,top?:string,bottom?:string}) {
    // const [Class, setClass] = useState("displayed_streamer_hidden")
    
    const iString = props.i.toString
    const idVal = "displayed_streamer" + iString;
    const myStyle = {
        display: "block",
        position: "relative",
        left: props.left,
        right: props.right,
        top: props.top,
        bottom: props.bottom,
        width: "15%",
        height: "15%",
        backgroundColor: "#000000",
        borderRadius: "10%",
        Visibility: "visible",
        backgroundSize:"cover"//,
      //backgroundImage = "url(" + imgs[index] + ")";
    } as React.CSSProperties
    return (
        <div style = {myStyle} /*className={Class}*/ id={idVal}></div>
    )
}

// function displayStreamer(element: HTMLElement) {
//     // console.log("display_streamer");
//     const id = "displayed_streamer" + display_streamer_count;
//     let streamer = document.getElementById(id) as HTMLInputElement;
//     setBackgroundToDiv(streamer, element.value);
//     // LLevando la div donde colocar la img
//     display_streamer_count++;
//     if (display_streamer_count > 3) {
//         display_streamer_count = 1;
//     }
// }

// for (let i = 0; i < add_buttons.length; i++) {
//     add_buttons[i].addEventListener("click", () => displayStreamer(add_buttons[i]));
// }

export default DisplayedStreamer