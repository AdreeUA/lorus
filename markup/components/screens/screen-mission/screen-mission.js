import { Screen } from 'components/screens/screen';
import { ClipImg } from 'components/clip-img/clip-img';

export class ScreenMission extends Screen {
    constructor(block) {
        super(block, 'screen-mission', function() {
            this.photo = new ClipImg(this.block.querySelector('.screen-mission__photo'));
        });
    }

    _onShow(e) {
        this.header.toggleNavClasses('top');
        this.header.changeNavHref('#first/about');

        this.photo.move(e.detail.direction);
    }

    _onHide(e) {
        this.photo.move(e.detail.direction);
    }
}
