import Left from "./Left/LeftSection.tsx";
import Center from "./Center/CenterSection.tsx";
import Right from "./Right/RightSection.tsx";
import CategoriesSection from "../Categories/Categories.tsx";

function Panel(){
    return(
        <div id="panel">
            <Left/>
            <Center/>
            <Right/>
        </div>
    )
}
function Content() {
    return(
        <div id="content">
            <Panel/>
            <CategoriesSection/>
        </div>
    )
}

export default Content