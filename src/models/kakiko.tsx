import React from "react";

export class Kakiko {
    number: number;
    name: string;
    time: string;
    userid: string;
    contenttext: string;
  
    constructor(number: number, name: string, time: string, userid: string, contenttext: string) {
      this.number = number;
      this.name = name;
      this.time = time;
      this.userid = userid;
      this.contenttext = contenttext;
    }
  }
  
  export type KakikoProps = {
    number: number;
    name: string;
    time: string;
    userid: string;
    contenttext: string;
  }

export class KakikoForm extends React.Component<{}, {username: string, useremail: string, content: string}> {
  constructor(props: {}) {
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
    console.log(`username: ${this.state.username} useremail: ${this.state.useremail} content: ${this.state.content}`)
  }

  render() {
    return (
      <form>
        <input type="submit" value="書き込む" onClick={this.handleOnClick}/>
        <label>名前:
          <input type="text" value={this.state.username} onChange={this.handleOnUserNameChange}/>
        </label>
        <label>E-mail:
          <input type="email" value={this.state.useremail} onChange={this.handleOnUserEmailChange}/>
        </label>
          <textarea value={this.state.content} onChange={this.handleOnContentChange}></textarea>
      </form>
    )
  }
}