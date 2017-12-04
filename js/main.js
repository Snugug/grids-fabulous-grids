import stageFright from 'stage-fright/src/js/lib/core';
import Editor from './editor';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-javascript';

stageFright({
  navigation: {
    arrows: false,
    spacebar: 'alt',
  },
  notes: 'alt',
});

const editor = new Editor;

editor.run('.editor', {
  live: true,
});
