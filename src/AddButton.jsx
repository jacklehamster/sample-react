import React from 'react';

class AddButton extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         label: ""
      };
      this.onClick = this.onClick.bind(this);
      this.onChange = this.onChange.bind(this);
   }

   onClick() {
      this.props.onClick(this.state.label);
      this.setState({label:""});
   }

   onChange(e) {
      this.setState({label:e.target.value});
   }

   render() {
     return (
       <div>
           <button onClick={this.onClick} disabled={!this.state.label.length}>Add</button>
           <input onChange={this.onChange} type="text" value={this.state.label} />
       </div>
     );
   }
 }

export default AddButton;