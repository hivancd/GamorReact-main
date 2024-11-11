export const twitch_access_token = async () =>{
    try {
        const response = await fetch(
            `https://id.twitch.tv/oauth2/token?client_id=${import.meta.env.VITE_TWITCH_CLIENT_ID}&client_secret=${import.meta.env.VITE_TWITCH_SECRET}&grant_type=client_credentials`,
            {
                method: "POST",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }
        );
        const token = await response.json()        
        await localStorage.setItem("twitch_access_token",token.access_token)
    } 
    catch (error) {
        alert("Could not get Twitch access token")   
    }
} 
