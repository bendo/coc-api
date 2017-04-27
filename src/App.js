import {connect} from 'react-redux';
import * as actions from './actions';
import CocApp from './components/CocApp';
import {flowRight as compose} from 'lodash/util';

function mapStateToProps(state) {
    return {
        model: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLoadClan: compose(dispatch, actions.loadClan)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CocApp);
