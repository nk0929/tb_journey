import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      value: ''
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.show = this.show.bind(this);

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
  update (e) {
    this.setState({
      value: e.target.value
    });
  }
  show (e) {
    if(this.state.startDate === '' || this.state.endDate === ''|| this.state.value === ''){
      window.alert('全ての項目に入力してください');
    }else {
      console.log(`チェックイン${this.state.startDate}`);
      console.log(`チェックアウト${this.state.endDate}`);
      console.log(`目的地は${this.state.value}`);
    }
    e.preventDefault()
  }
  render() {
    return (
    <div className="searchBox">
    <p>検索フォーム</p>
    <input type="text" value={this.state.value}  onChange={e => this.update(e)} /><br/>
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
    <input type="button" value="検索する" className="btn-default" onClick={this.show}/>
    </form>
    </div>
    );
  }
}
export default SearchForm;
