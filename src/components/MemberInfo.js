import './MemberInfo.styl';
import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';

export default class MemberInfo extends Component {
    render() {
        const {member} = this.props;

        return (
            <div className="member">
                {member.get('name')}
            </div>
        );
    }
}

MemberInfo.propTypes = {
    member: PropTypes.object.isRequired
};
