import { Screen } from 'components/screens/screen';
import { ClipImg } from 'components/clip-img/clip-img';

export class ScreenAbout extends Screen {
    constructor(block) {
        super(block, 'screen-about', function() {
            this.photo = new ClipImg(this.block.querySelector('.screen-about__photo'));
        });
    }

    _onShow(e) {
        this.photo.move(e.detail.direction);
        this.header.toggleNavClasses('header_nav_left');
        this.header.changeNavHref('#first/home');
    }

    _onHide(e) {
        this.photo.move(e.detail.direction);
    }
}
