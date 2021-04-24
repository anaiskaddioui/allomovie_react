import React from 'react';


class Image extends React.Component {

    render(){
    return( 
        
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt='poster-film' width={this.props.width} style={{ borderRadius: '3px', margin: "auto" }}/>
      
     )
    }
}


    
      



export default Image;