const style={width:200,backgroundColor:"white",borderRadius:10,borderWidth:1,padding:20}

export function PostComponent({name,subtitle,time,image,description}) {
    return <div style={style} >
        <div style={{display: 'flex'}} >
            <img src={image} style={{
                width:40,
                height:40,
                borderRadius:25
            }} />
            <div style={{fontSize:10,marginLeft:10}} >
                <b>
                    {name}
                </b>
                <div>{subtitle}</div>
                {(time !== undefined) ? <div style={{display: 'flex'}}>
                    <div>{time}</div>
                    <img src={"https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp3_d7855f9562.webp"} style={{width:12,height:12}} />
                    </div> :null}
            </div>
        </div>
        <div style={{fontSize:12}} >
            {description}
        </div>
    </div>
}