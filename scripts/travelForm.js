/**
 * Created by Ayush on 1/30/2016.
 */

var APP = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        }
    },
    up: function () {
        this.state.count < 9 ? this.setState({
            count: this.state.count + 1
        }) : this.setState({
            count: this.state.count
        });
    },
    down: function () {
        this.state.count > 0 ? this.setState({
            count: this.state.count - 1
        }) : this.setState({
            count: this.state.count
        });
    },
    render: function () {
        return (
            <div>
                <p id="adults">Adults</p>
                    <div id="nop">
                        <button type="button" className="btn" onClick={this.down}>
                            <span className="glyphicon glyphicon-minus"></span>
                        </button>
                        <input type="textbox" id="nopText" maxLength="1" min="0" max="10"
                               value={this.state.count >=0 ? this.state.count : '0'}
                               className={this.state.count>0 ? 'green votes btn' : 'red votes btn'}></input>

                        <button type="button" className="btn" onClick={this.up}>
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                </div>
            </div>
        )
    }
});
React.render(<APP />, document.body)