function Category(props: { p1: string, p2: string }) {
    return (
        <div className="category">
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    )
}
function CategoriesSection() {
    return (
        <div id="Categories_container">
            <h2>Trending Categories</h2>
            <div id="flex_categories">
                <Category p1="01" p2="Action Games" />
                <Category p1="02" p2="Sports Games" />
                <Category p1="03" p2="Adventure Games" />
                <Category p1="04" p2="Arcade Games" />
                <Category p1="05" p2="Fantasy Games" />
                <Category p1="06" p2="Strategy Games" />
                <div id="shooter" className="category">
                    <p>07</p><br /><br />
                    <p>Shooter Games</p>
                    <div></div>
                </div>
                <Category p1="VIEW ALL" p2="All Categories" />
            </div>
        </div>
    )
}

export default CategoriesSection