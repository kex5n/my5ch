import React, { ReactNode } from 'react';
import { Kakiko, KakikoForm } from "./kakiko";

export class Thread extends React.Component<{}, {contents: Kakiko[]}> {
    constructor(props: {}) {
        super(props)
        this.state = {contents: []};
    }

    hiroyukiGenerator = () => {
        const dialogues = [
            "それあなたの感想ですよね？",
            "何かそういうデータがあるんですか？",
            "嘘つくのやめてもらっていいですか",
            "うそはうそであると見抜ける人でないと(掲示板を使うのは)難しい"
        ]
        const index = Math.floor(Math.random() * 3)
        return dialogues[index]
    }

    addKakiko = (kakiko: Kakiko) => {
        const current_contents: Kakiko[] = this.state.contents;
        const hiroyuki_kakiko = new Kakiko("ひろゆき", this.hiroyukiGenerator());
        current_contents.push(kakiko);
        current_contents.push(hiroyuki_kakiko);
        this.setState({contents: current_contents});
    }

    render() {
        const week = ["日", "月", "火", "水", "木", "金", "土", "日",]
        const dateFormat = (time: Date) => {
            return (
                time.getFullYear()
                + '/' + (time.getMonth() + 1)
                + '/' + time.getDate()
                + '(' + week[time.getDay()] + ')'
                + time.getHours()
                + ':' + time.getMinutes()
                + ':' + time.getSeconds()
                + '.' + time.getMilliseconds()
            )
        }
        const thread_kakiko = this.state.contents.map(
            (kakiko: Kakiko, index: number) => {return (
                <li key={kakiko.userid}>
                    <div className='kakiko'>
                        <div className='kakiko-info'>
                            <span>{("000" + index).slice(-4)} </span>
                            <span>名前: </span>
                            <span>{kakiko.name} </span>
                            <span>{dateFormat(kakiko.time)}</span>
                        </div>
                        <span className='user-id'>ID:{kakiko.userid}</span>
                        <p>{kakiko.contenttext}</p>
                    </div>
                </li>
            );
            }
        );
        console.log(thread_kakiko);
        return (
            <div>
                <ol>{thread_kakiko}</ol>
                <KakikoForm register_func={this.addKakiko}/>
            </div>
        );
    }
}
