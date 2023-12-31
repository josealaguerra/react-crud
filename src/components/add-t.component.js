import React, { Component } from 'react'

export class AddTutorial extends Component {

    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            id: null,
            title: '',
            description: '',
            published: false,
            submitted: false
        };
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }



    render() {
    return (
      <div>AddTutorial</div>
    )
  }
}

export default AddTutorial ;