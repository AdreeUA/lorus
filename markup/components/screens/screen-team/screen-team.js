import { Screen } from 'components/screens/screen';

export class ScreenTeam extends Screen {
    constructor(block) {
        super(block, 'screen-team');
    }

    _onShow(e) {
        this.header.toggleNavClasses('header_nav_top');
        this.header.changeNavHref('#second/advantages');
    }
}
