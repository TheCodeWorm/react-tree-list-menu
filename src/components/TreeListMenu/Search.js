import React, { Component } from 'react'

class Search extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
     <div>
       <form>
         <input
           placeholder="Search for..."
           ref={input => this.search = input}
           onChange={this.handleInputChange}
         />
       </form>
       <div>
         { this.state.query }
       </div>
     </div>
   )
 }
}

export default Search