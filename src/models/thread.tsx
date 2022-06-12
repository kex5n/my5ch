import React from 'react';
import { Kakiko, KakikoForm } from "./kakiko";

export class Thread extends React.Component<{}, {contents: Kakiko[]}> {
    constructor(props: {}) {
        super(props)
        this.state = {contents: []};
    }
    render() {
        return (<KakikoForm />)
    }
}
