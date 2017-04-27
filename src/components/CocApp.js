import './CocApp.styl';
import React from 'react';
import shortid from 'shortid';
import Immutable from 'immutable';
import MemberInfo from './MemberInfo';

const CocApp = function ({model}) {
    const members = model.get('memberList', Immutable.List()).map((member) => (
        <MemberInfo key={shortid.generate()} member={member}/>
    ));

    return (
        <div>
            <div className="clan">
                <div>
                    <img src={model.getIn(['clanBadgeImg', 'l'])}/>
                </div>
                <div className="info">
                    <h1>{model.get('name')}</h1>
                    <ul>
                        <li><strong>Total Points:</strong>{model.get('clanPoints')}</li>
                        <li><strong>Wars Won:</strong>{model.get('warWins')}</li>
                        <li><strong>Members:</strong>{model.get('members')}</li>
                        <li><strong>Type:</strong>{model.get('type')}</li>
                        <li><strong>Required Trophies:</strong>{model.get('requiredTrophies')}</li>
                        <li><strong>War Frequency:</strong>{model.get('warFrequency')}</li>
                        <li><strong>Clan Location:</strong>{model.get('locationName')}</li>
                        <li><strong>Clan tag:</strong>{model.get('tag')}</li>
                    </ul>
                </div>
                <div className="desc">
                    <p>{model.get('description')}</p>
                </div>
            </div>
            <div>
                {members}
            </div>
        </div>
    );
};

CocApp.propTypes = {
    model: React.PropTypes.any.isRequired
};

export default CocApp;
