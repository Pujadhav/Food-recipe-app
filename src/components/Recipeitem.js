import React from 'react';

const Recipeitem =(props)=>
{
    const {name,image,ingredientLines,source} = props;
//     const ing =()=>{
//       return(
//         <ul className="list-group list-group-flush">
//       {
//         ingredientLines.map(ingradiant=>
//         <li className="list-group-item">{ingradiant}</li>)
//       }
       
// </ul>
//       );
      

    // }
   return(
    <div className="col-sm-3">
    <div className="card py-2 text-center ">
        <img src={image} className="img-fluid w-50 m-auto"/>
        <div className="card-body">
          <h5>{name}</h5>
         </div>
   <div className="recipelink">
     <a href={source}>Ingradiant for Recipe</a>
   </div>
   
   

                          </div>
                    </div>)
}

export default Recipeitem;