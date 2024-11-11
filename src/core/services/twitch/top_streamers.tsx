export const topStreams= async ()=>{
    try {
        const response=await fetch(
            `https://api.twitch.tv/helix/streams?first=100`,
            {
                method:"GET",
                headers:{
                    "Client-ID": import.meta.env.VITE_TWITCH_CLIENT_ID,
                    Authorization: `Bearer ${localStorage.getItem("twitch_access_token")}`
                }
            }
        )
        await console.log(response.json);
        
        return (await response).json();
    } catch (error) {
        alert("Could not get top streams list")
    }
}
