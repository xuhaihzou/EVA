import React,{Component} from "react";
import {} from "antd";
import "./{{template}}View.less";

class {{ template }} extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    };

    componentDidMount() {

    }

    render() {
        const props = this.props;
        return (
            <div>
                我爱你
            </div>
        )
    }
}


export default {{template}};