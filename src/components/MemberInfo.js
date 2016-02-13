import './MemberInfo.styl';
import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';

export default class MemberInfo extends Component {
    render() {
        const {member} = this.props;

        return (
            <div className="member">
                <div><h2>{member.get('clanRank')}</h2></div>
                <div><img src={member.getIn(['leagueBadgeImg', 's']).split(',')[0]}/></div>
                <div><strong>{member.get('expLevel')}</strong></div>
                <div className="name">
                    {member.get('name')}<br/>
                    <span className="xs">{member.get('role')}</span>
                </div>
                <div className="info">
                    <div><span className="xs">Troops donated:</span><br/>{member.get('donations')}</div>
                    <div><span className="xs">Troops received:</span><br/>{member.get('donationsReceived')}</div>
                    <div><span className="xs">Trophies:</span><br/>{member.get('trophies')}</div>
                </div>
            </div>
        );
    }
}

MemberInfo.propTypes = {
    member: PropTypes.object.isRequired
};
