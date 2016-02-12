import './ClanInfo.styl';
import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';

export default class MainApp extends Component {
    render() {
        const {clan} = this.props;

        return (
            <div className="clan">
                <div>
                    <img src={clan.getIn(['clanBadgeImg', 'l'])}/>
                </div>
                <div className="info">
                    <h1>{clan.get('name')}</h1>
                    <ul>
                        <li><strong>Total Points:</strong>{clan.get('clanPoints')}</li>
                        <li><strong>Wars Won:</strong>{clan.get('warWins')}</li>
                        <li><strong>Members:</strong>{clan.get('members')}</li>
                        <li><strong>Type:</strong>{clan.get('type')}</li>
                        <li><strong>Required Trophies:</strong>{clan.get('requiredTrophies')}</li>
                        <li><strong>War Frequency:</strong>{clan.get('warFrequency')}</li>
                        <li><strong>Clan Location:</strong>{clan.get('locationName')}</li>
                        <li><strong>Clan tag:</strong>{clan.get('tag')}</li>
                    </ul>
                </div>
                <div className="desc">
                    <p>{clan.get('description')}</p>
                </div>
            </div>
        );
    }
}

MainApp.propTypes = {
    clan: PropTypes.object.isRequired
};
