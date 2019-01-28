import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Show from './components/Show';
import Theater from './components/Theater';
import Mine from './components/Mine';
import Ticket from './components/E-ticket';
import './CSS/pulic.scss';
import SearchPage from './components/Home/search';
class App extends Component {
  constructor(){
    super();
    this.state = {
      footerNav:[
        {
          text:'首页',
          path:'/home',
          icon:'icon-shouye'
        },
        {
          text:'演出库',
          path:'/show',
          icon:'icon-fenlei'
        },
        {
          text:'剧院',
          path:'/theater',
          icon:'icon-shouye'
        },
        {
          text:'电子票',
          path:'/ticket',
          icon:'icon-youhuiquan'
        },
        {
          text:'我的',
          path:'/mine',
          icon:'icon-wode'
        },
      ],
      currentIndex:0
    }
    this.NavChange = this.NavChange.bind(this);
  }

  NavChange(idx){
    this.setState({
      currentIndex:idx
    });
  }
  componentDidMount(){
    let hash = window.location.hash.split('/');
    switch(hash[1]){
      case 'home' :
          this.setState({ currentIndex:0});
          break;
      case 'show' :
          this.setState({ currentIndex:1});
          break;
      case 'theater' :
          this.setState({ currentIndex:2});
          break;
      case 'ticket' :
          this.setState({ currentIndex:3});
          break;
      case 'mine' :
          this.setState({ currentIndex:4});
          break;
    }
  }
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/show' component={Show}/>
        <Route path='/theater' component={Theater}/>
        <Route path='/mine' component={Mine}/>
        <Route path='/ticket' component={Ticket}/>
        <Route path='/search' component={SearchPage}/>
        <Redirect from="/" to="/home"/>
       </Switch>
       <div className="footerFiex">
          <ul>
            {
              this.state.footerNav.map((item,idx)=>{
                return  <li key={item.path} onClick={()=>this.NavChange(idx)}>
                         <NavLink to={item.path} className={this.state.currentIndex==idx?'selected':''}>
                        <i  className={"iconfont "+item.icon}></i>
                        <p>{item.text}</p>
                        </NavLink>
              </li>
              })
            }
             
          </ul>
       </div>
      </div>
    );
  }
}

export default App;
