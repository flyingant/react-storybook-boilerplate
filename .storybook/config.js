import { configure } from '@kadira/storybook';

function loadStories() {
    // require as many as stories you need.
    require('../components/stories/IndexStory');
}

configure(loadStories, module);