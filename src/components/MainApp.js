import './MainApp.styl';
import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';

export default class MainApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clan} = this.props;

        return (
            <div className="clan">
                <div>
                    <img src={clan.getIn(['clanBadgeImg', 'l'])}/>
                </div>
                <div>
                    <ul>
                        <li><strong>tag:</strong>{clan.get('tag')}</li>
                        <li><strong>name:</strong>{clan.get('name')}</li>
                        <li><strong>type:</strong>{clan.get('type')}</li>
                        <li><strong>locationName:</strong>{clan.get('locationName')}</li>
                        <li><strong>warFrequency:</strong>{clan.get('warFrequency')}</li>
                        <li><strong>clanLevel:</strong>{clan.get('clanLevel')}</li>
                        <li><strong>warWins:</strong>{clan.get('warWins')}</li>
                        <li><strong>clanPoints:</strong>{clan.get('clanPoints')}</li>
                        <li><strong>requiredTrophies:</strong>{clan.get('requiredTrophies')}</li>
                        <li><strong>members:</strong>{clan.get('members')}</li>
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
