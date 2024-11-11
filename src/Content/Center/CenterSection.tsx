import DisplayedStreamer from "./DisplayStreamer"

function Center() {
    return (
        <div id="center">
            <h2>Fortnite New Season</h2>
            <p>Join live stream</p>
            <button>+</button>
            <div id="time">
                <span style={{paddingRight: "10px"}}>11</span>
                :
                <span style={{ paddingLeft: "10px" }}>45</span>
            </div>
            <DisplayedStreamer i={1} left="80%"></DisplayedStreamer>
            <DisplayedStreamer i={2} bottom="18%" left="20%"></DisplayedStreamer>
            <DisplayedStreamer i={3} ></DisplayedStreamer>
        </div>
    )
}

export default Center