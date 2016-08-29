import { Screen } from 'components/screens/screen';

export class ScreenTeam extends Screen {
    constructor(block) {
        super(block, 'screen-team', function() {
        });
    }

    _onShow(e) {
        this.header.toggleNavClasses('top');
        this.header.changeNavHref('#second/advantages');
    }
}
