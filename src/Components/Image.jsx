import React from 'react';


class Image extends React.Component {

    render(){
    return( 
        
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt='poster-film' width="250"/>
      
     )
    }
}


    
      



export default Image;