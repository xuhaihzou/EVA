import {connect} from "react-redux";
import {{template}}View from './views/{{template}}View'
import {} from './actions'

const mapStateToProps=state=>({
    Loading:state.{{template}}.loading,
    tableData:state.{{template}}.tableData,
});

const mapDispatchToprops=dispatch=>({

});

export  default connect(
    mapStateToProps,
    mapDispatchToprops,
)({{template}}View)