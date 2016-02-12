import { connect } from 'react-redux';
import * as actionCreators from '../actions/ClanActions';
import { bindActionCreators } from 'redux';
import ClanInfo from '../components/ClanInfo';

function mapStateToProps(state) {
    return {
        clan: state
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ClanInfo);
