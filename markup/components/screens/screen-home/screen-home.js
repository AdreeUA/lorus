import { Screen } from 'components/screens/screen';

export class ScreenHome extends Screen {
    constructor(block) {
        super(block, 'screen-home');
    }

    _onShow(e) {
        this.header.hide();
    }

    _onHide(e) {
        this.header.show()
    }
}
