const Menu =({x,y,showMenu})=>{
    console.log('heloo')
    const style = ()=>{
        return{
            height:100,
            width: 150,
            borderRadius:10,
            backgroundColor: "#FFSC58",
            color: "#FCD2D1",
            display: "flex",
            flexDirection: "column",
            padding:10,
            top: y,
            left: x,
            position: "absolute",
            display: showMenu ? "flex" : "none",
        }
    }
    
    return (
        <div style={style()}>
            <div onClick={()=>console.log('clicked')}>Rename</div>
            <div>Delete</div>
            <div>Copy</div>
        </div>
    )
}

export default Menu