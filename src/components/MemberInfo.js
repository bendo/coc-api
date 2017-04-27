import './MemberInfo.styl';
import React from 'react';

export default function ({member}) {
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
