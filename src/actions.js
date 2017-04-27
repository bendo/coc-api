import scopedKeyMirror from './util/scopedKeyMirror';
import {asyncAction} from './util/actions';
import URI from 'urijs';

export const Types = scopedKeyMirror('coc', {
    LOAD_CLAN: null
});

export function loadClan() {
    const url = new URI('https://set7z18fgf.execute-api.us-east-1.amazonaws.com')
        .directory('prod').query({route: 'getClanDetails', clanTag: '%239J8CUCCL'
    });
    return asyncAction(Types.LOAD_CLAN, fetch(url).then((response) => response.json()));
}

