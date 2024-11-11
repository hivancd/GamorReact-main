import Streamers from "./Streamers"
import Options from "./Options"
import { topStreams } from "../../core/services/twitch/top_streamers"
import { ChangeEvent, useEffect, useState } from "react"

function GameAndStreamers() {
    const [searchState, setSearchState] = useState(false)
    const [search, setSearch] = useState("")
    const [streams, setStreams] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        const updateStreams = async () => {
            // await console.log("loading Streams");
            try {
                const streams = await topStreams();
                if (streams.data) {
                    // await console.log(streams);
                    setStreams(streams.data)
                    setData(streams.data)
                }
            } catch (error) {
                alert('updateStreams error')
            }
        }
        updateStreams()
    }
        , [])

    const click = async () => {
        setSearchState(!searchState)
        if (searchState) {
            const streams = await topStreams();
            if (streams.data) {
                // await console.log(streams);
                setStreams(streams.data)
                setData(streams.data)
            }
        }
    }
    const handleSearch = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setSearch(target.value)
    }

    useEffect(() => {
        const effect = async () => {
            const inputElement = await document.getElementById("search_input") as HTMLInputElement;
            if (inputElement) {
                const input = inputElement.value
                if (input) {
                    const results = await streams.filter((stream: { user_name: string }) => {
                        return stream.user_name.toLowerCase().includes(input.toLowerCase())
                    })
                    setData(results)
                }
                else {
                    setData(streams)
                }
            }
        }
        effect()
    }, [search])

    // Components functions
    // Search bar/Search Now button
    function BottomElement() {
        if (searchState) {
            return (
                <div id="bottom">
                    <input id="search_input" value={search} autoFocus onChange={handleSearch} type="text" />
                    <button className="add_buttom" id="bottom_ret_button" onClick={click}>&lt;=</button>
                </div>
            )
        }
        return (
            <button id="bottom" onClick={click}>Search Now</button>
        )
    }

    //Returns components
    return (
        <div id="game_streamers">
            <h5>TOP 100 STREAMS</h5>
            <hr></hr>
            <Streamers streams={data}/>
            <BottomElement></BottomElement>
        </div>
    )
}


function Right() {
    return (
        <div id="right">
            <div className="span"><span className="marked_number">01.</span><span>Platform</span> </div>
            <Options />
            <div className="span"><span className="marked_number">02.</span><span>Searching Game</span> </div>
            <GameAndStreamers />
        </div>
    )
}

export default Right