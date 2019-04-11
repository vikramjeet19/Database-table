import React ,{Component} from 'react';

import {Jumbotron} from 'react-bootstrap';
import Mapper from './Mapper';
import axios from 'axios';

 class List extends Component {
     state={
        data:[]
     }

     componentDidMount(){
         axios.get('http://demo9197058.mockable.io/users')
         .then(resolve=>{
             console.log(resolve);
             this.setState({data:resolve.data.flat()})
         }).catch(err=>console.log(err));
       
     }

     render(){
         return(<div>
             <Jumbotron>
                 {this.state.data.length?(    <Mapper data={this.state.data}/>   ):<p>Loading..</p>}
             
             </Jumbotron>
         </div>)
     }
 }
 export default List;