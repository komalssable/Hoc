import React from 'react'

const UpdateComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
        
            this.state = {
                 count:1
            }
        }
        
        clickHandler = () =>{
            this.setState({
                count:this.state.count +1
            });
        }
        
    
        render() {
            return (<OriginalComponent 
                        count={this.state.count} 
                        clickHandler={this.clickHandler}
                        />
            )
        }
}
    return NewComponent
}
export default UpdateComponent