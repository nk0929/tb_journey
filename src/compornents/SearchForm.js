import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      value: {},
      textInput:''
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);

  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }
  handleChange (e) {
   this.setState(
     {textInput: e.currentTarget.value}
   );
 }
  handleTextSubmit (e) {
    if(!this.state.startDate || !this.state.endDate || !this.state.textInput){
      window.alert('全ての項目に入力してください');
    }else{
      console.log(`チェックイン${this.state.startDate}`);
      console.log(`チェックアウト${this.state.endDate}`);
      console.log(`目的地は${this.state.textInput}`);
    }
    e.preventDefault()
  }
  render() {
    return (
    <div className="searchBox">
      <h2>SearchBox</h2>
      <div>
        <input type="text" value={this.state.textInput} onChange={this.handleChange} /><br/>
        <DatePicker placeholderText={'チェックイン'}
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart} />
        <br/>
        <DatePicker placeholderText={'チェックアウト'}
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd} />
        <br/>
        <form>
        <input type="button" value="検索する" className="btn-default" onClick={this.handleTextSubmit}/>
        </form>
      </div>

    </div>
    );
  }
}
export default SearchForm;
