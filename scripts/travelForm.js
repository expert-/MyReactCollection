/**
 * Created by Ayush on 1/30/2016.
 */

var PersonCount = React.createClass({
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
        this.state.count < 9 ? this.props.update1() : this.setState({
            count: this.state.count
        });
    },
    down: function () {
        this.state.count > 0 ? this.setState({
            count: this.state.count - 1
        }) : this.setState({
            count: this.state.count
        });
        this.state.count > 0 ? this.props.update2() : this.setState({
            count: this.state.count
        });

    },
    render: function () {
        return (
            <div className="numOfAdults">
                <p id="adults">{this.props.text}</p>
                <div id="nop">
                    <button type="button" className="btn" onClick={this.down}>
                        <span className="glyphicon glyphicon-minus"></span>
                    </button>
                    <label id="nopText" maxLength="1" min="0" max="10"
                           value={this.state.count >=0 ? this.state.count : '0'}
                           className={this.state.count>0 ? 'green' : 'red'}>{this.state.count}</label>

                    <button type="button" className="btn" onClick={this.up}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </div>
            </div>
        )
    }
});
//React.render(<PersonCount text="Adult"/>, document.getElementById("numOfAdults"))
//React.render(<PersonCount text="Children"/>, document.getElementById("children"))


var TotalTraveller = React.createClass({
    getInitialState: function () {
        return {
            totalPerson: 0
        }
    },
    update1: function () {
        this.state.totalPerson < 18 ? this.setState({
            totalPerson: this.state.totalPerson + 1
        }) : this.setState({
            totalPerson: this.state.totalPerson
        });
    },
    update2: function () {
        this.state.totalPerson > 0 ? this.setState({
            totalPerson: this.state.totalPerson - 1
        }) : this.setState({
            totalPerson: this.state.totalPerson
        });
    },
    render: function () {
        return (
            <div>
                    <PersonCount text="Adult" update1={this.update1} update2={this.update2}/>


                    <PersonCount id="children" text="Children" update1={this.update1} update2={this.update2}/>

                <div id="totalTravellerDisplay"><span>Total Travellers :</span>{this.state.totalPerson}</div>
            </div>
        )
    }
});
React.render(<TotalTraveller />, document.getElementById("personCount"))