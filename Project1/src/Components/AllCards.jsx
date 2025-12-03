import data from "../utils/data";



function AllCards({data}){


    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'20px',padding:'20px', justifyContent:'space-around'}}>

            {data.map(singleItem =>(
       <div key={singleItem.id} style={{backgroundColor:'whitesmoke',color:'black',maxWidth:'350px',maxHeight:'800px',height:'500px', padding:'10px',overflow:'hidden'}}>
                <img src={singleItem.thumbnail} alt="" style={{width:'100%',height:'250px',objectFit:'cover'}}/>
                <h2>{singleItem.title}</h2>
                <p>{singleItem.price} $</p>
                <p>{singleItem.description}</p>
            </div>
   ))}
            
            
            
        </div>
    )
}

export default AllCards;