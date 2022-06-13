import React from "react";

export class Kakiko {
    name: string;
    time: Date;
    userid: string;
    contenttext: string;
  
    constructor(name: string, contenttext: string) {
      this.name = name ? name : "名無しさん";
      this.time = new Date();
      this.userid = Math.random().toString(32).substring(2);
      this.contenttext = contenttext;
    }
  }
  
  export type KakikoProps = {
    name: string;
    time: Date;
    userid: string;
    contenttext: string;
  }

export class KakikoForm extends React.Component<{register_func: Function}, {username: string, useremail: string, content: string}> {
  constructor(props: {register_func: Function}) {
    super(props);
    this.state = {username: '', useremail: '', content: ''};
  }
  handleOnUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }
    this.setState({username: e.target.value});
  }

  handleOnUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }
    this.setState({useremail: e.target.value});
  }

  handleOnContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!(e.target instanceof HTMLTextAreaElement)) {
      return;
    }
    this.setState({content: e.target.value});
  }

  handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }
    e.preventDefault();
    const kakiko = new Kakiko(this.state.username, this.state.content);
    this.props.register_func(kakiko);
    this.setState({username: '', useremail: '', content: ''});
  }

  render() {
    return (
      <form>
          <input type="text" placeholder="名前(省略可)" value={this.state.username} onChange={this.handleOnUserNameChange}/>
          <input type="email" placeholder="E-mail(省略可)" value={this.state.useremail} onChange={this.handleOnUserEmailChange}/>
          <textarea value={this.state.content} onChange={this.handleOnContentChange}></textarea>
          <div className="submit-space">
            <input type="submit" value="書き込みをする" onClick={this.handleOnClick}/>
            <span>※書き込み反映には時間が掛かる場合があります※</span>
          </div>
      </form>
    )
  }
}