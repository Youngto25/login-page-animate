import React,{Component} from 'react';
import {connect} from "dva";
import style from './IndexPage.less'
//import logoImg from '../../../assets/img/index/logo2.png'
import { routerRedux } from 'dva/router'
import { Checkbox } from 'antd'

class IndexPage extends Component{
    constructor(props){
        super(props)
        this.state ={
            userName: '',
            password: '',
            isNameShow: false,
            isPassShow: false,
        }
    }
    componentWillReceiveProps(nextProps){
      console.log(this.props.showLogin , nextProps.showLogin)
        if(!this.props.showLogin && nextProps.showLogin){
          this.showLoginAnime()
        }else if(this.props.showLogin && !nextProps.showLogin){
          this.hiddenLoginAnime()
        }
    }
    // showLoginAnime(){
    //   anime({
    //     targets: `.${style.loginWrapper}`,
    //     right:'438px',
    //     duration: 500,
    //     endDelay:100,
    //     easing: 'easeOutCubic'
    //   });
    // }
    // hiddenLoginAnime(){
    //   anime({
    //     targets: `.${style.loginWrapper}`,
    //     right:'0',
    //     duration: 500,
    //     Delay:100,
    //     easing: 'easeOutCubic'
    //   });
    // }
    render(){
        return (
            <aside className={style.loginWrapper} onClick={this.judge.bind(this)}>
                <div className={style.logo}>
                    {/* <img src={logoImg} alt="logo" style={{width: 306,height: 59}}/> */}
                </div>
                <div className={style.loginTitle}>
                    <span className={style.login}>登录</span>
                </div>
                <div className={style.basic} onClick={this.exchangeName.bind(this)} id="markName">
                    <div className={`${style.initRemind} ${this.state.isNameShow ? style.active3 : ''}`}>用户名</div>
                    <input
                        className={style.initInput}
                        type="text"
                        value={this.state.userName}
                        onChange={this.getUsername.bind(this)}
                        ref={(nameInput)=>this.nameInput = nameInput}
                    />
                </div>
                <div className={style.basic} onClick={this.exchangePass.bind(this)} id="markPass">
                    <div className={`${style.initRemind} ${this.state.isPassShow ? style.active3 : ''}`}>密码</div>
                    <input
                        className={style.initInput}
                        type="password"
                        value={this.state.password}
                        onChange={this.getPassword.bind(this)}
                        ref={(passInput)=>this.passInput = passInput}
                    />
                </div>
                <div className={style.parts}>
                    <Checkbox onChange={this.onChange.bind(this)}><span>自动登录</span></Checkbox>
                    <span style={{cursor: 'pointer'}}>找回密码</span>
                </div>
                <div
                    className={style.loginButton}
                    onClick={this.login.bind(this)}
                >
                    <span className={style.confirm}>确认</span>
                </div>
            </aside>
        )
    }

    exchangeName(e){
        let parent = e.target.parentNode
        this.setState({
            isNameShow: true
        })
        let input = parent.querySelector('input')
        if(input.classList.contains('active4')){

        }else{
            setTimeout(()=>{
                input.classList.add('active4')
            },200)
        }
    }

    exchangePass(e){
        let parent = e.target.parentNode
        this.setState({
            isPassShow: true
        })
        let input = parent.querySelector('input')
        if(input.classList.contains('active4')){

        }else{
            setTimeout(()=>{
                input.classList.add('active4')
            },300)
        }
    }

    judge(e){
        let id = e.target.parentNode.id
        switch(id){
            case 'markName':
            {
                if(this.state.password){

                }else{
                    this.setState({
                        isPassShow: false
                    })
                    this.passInput.classList.remove('active4')
                }
            }
            break
            case 'markPass':
            {
                if(this.state.userName){

                }else{
                    this.setState({
                        isNameShow: false
                    })
                    this.nameInput.classList.remove('active4')
                }
            }
            break
            default:
            {
                if(this.state.password){

                }else{
                    this.setState({
                        isPassShow: false
                    })
                    this.passInput.classList.remove('active4')
                }
                if(this.state.userName){

                }else{
                    this.setState({
                        isNameShow: false
                    })
                    this.nameInput.classList.remove('active4')
                }
            }
        }
    }

    login(){
      this.props.dispatch(routerRedux.push('/search'))
        console.log('登录')
        console.log(this.state.userName,this.state.password)
    }
    getUsername(event){
        console.log('取得用户名')
        this.setState({
            userName: event.target.value
        })
    }

    getPassword(event){
        console.log('取得密码')
        this.setState({
            password: event.target.value
        })
    }
    onChange(e){
        console.log('切换是否自动登录')
        console.log(e.target.checked)
    }
}

export default connect(({})=>({

}))(IndexPage)
