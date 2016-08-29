import { Screen } from 'components/screens/screen';

export class ScreenAdvantages extends Screen {
    constructor(block) {
        super(block, 'screen-advantages', function() {
            // this.firstShow = true;
        });
    }

    _onShow(e) {
        // this.header.toggleNavClasses('right');
        // this.header.changeNavHref('#second/mission');
        //
        // if (this.firstShow) {
        //     let plane = this.block.querySelector('.screen-advantages__plane');
        //
        //     plane.classList.add('screen-advantages__plane_trigger');
        //
        //     this.firstShow = false;
        // }
    }
}
