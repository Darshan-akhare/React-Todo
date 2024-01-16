import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Todo from './Todo';
import {Component}  from 'react';
class App extends Component {
state={
  items:[],
  text:""
};
 handlechange=(e)=>{
  this.setState({text:e.target.value})
};
 handleadd=()=>{
  if(this.state.text!==""){
    const items=[...this.state.items,this.state.text];
    this.setState({items:items,text:""});
  }
};

handeledelete=(id)=>{
  const olditem=[...this.state.items];
  const items=olditem.filter((element,i)=>{
    return i!==id;
  })
  this.setState({items:items})
}
  render(){
    return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center">TODO List</h2>
            <div className="container-fluid">
            <div className="row">
              <div className="col-9">
                <input type="text" name="inp" id="inp" className="form-control" placeholder="Write Plan here" 
                value={this.state.text} onChange={this.handlechange} />
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5 fw-bold" onClick={this.handleadd}>ADD</button>
              </div>
              </div>
              <div className="container">
                { <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value,i)=>{
                      return <Todo key={i} id={i} value={value} senddata={this.handeledelete}/>
                    })
                  }
                </ul> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );}
}

export default App;