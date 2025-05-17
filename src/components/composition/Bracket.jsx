import React from "react";

export default class Bracket extends React.Component {
    addEmoji = (text) => `[ ${text} ]`;

    render() {
        return this.props.children({ addBracket: this.addEmoji});
    }
}