// import { useEffect } from "react"
// import { topStreams } from "../../core/services/twitch/top_streamers"


function AddButton(props:{val: number}) {
    return (<button className="add_button" value={props.val-1}>+</button>)
}

function StreamerImg(props:{ src:string }) {
    return (<img className="streamer_img" src={props.src} />)
}

function StreamerItem(props:{TeamName:string, position: number, img: string}) {
    return (
        <li>
            <span className="number">{props.position}</span>
            <p className="team_name">{props.TeamName}</p>
            <div className="button_image">
                <StreamerImg src={props.img}/>
                <AddButton val={props.position}/>
            </div>
        </li>
    )
}


function Streamers(props:{streams:never[]}) {
    return (
        <ul>
            {props.streams.map((stream:{user_name:string;thumbnail_url:string},index)=>(
                <StreamerItem
                TeamName={stream.user_name.substring(0,15)}
                img={stream.thumbnail_url.replace("{width}","20").replace("{height}","20")}
                position={index+1}
                />
            ))}
        </ul>
    )
}

export default Streamers