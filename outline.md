* Book Grids
  - Villard De Honnecourt Layout
    + One set of proportions
    + Fixed ratio, "size"
  - Swiss Order
    + Asymmetry
    + Rule of Thirds
    + Grid Terminology
* Web Grids
  - Problem with web is dynamic height is hard
  - December 2006, [Gridding the 960](http://www.cameronmoll.com/archives/2006/12/gridding_the_960/)
  - Formed the basis for the [960 Grid System](https://960.gs/) (released March 2008) which popularized the 12 column web grid
  - July 2009 first [Susy](https://github.com/oddbird/susy) release for Sass-based grids
  - In August and September of 2011, Twitter Bootstrap and Zurb Foundation were released, using the 12 column grid from 960gs as its basis
  - Float Based
* Creating Grids
  - Columns and Rows
  - Gutters (Gaps)
  - Spanning
  - Flexibility vs Constraints
    + Symmetric vs Asymmetric
    + Proportional Grids
* Grid, Flexbox, and Floats Oh My
  - [Flexbox faster than Float](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing)
  - [Grid faster than Flexbox](https://blogs.igalia.com/jfernandez/2015/06/24/performance-on-grid-layout/)
  - Flexbox
    + One direction
    + Size and position based on content
    + Cannot control positioning in more than one direction
  - Grid
    + Two directions
    + Set constraints for size and position
    + Can directly control positioning in each direction
*  CSS Grid
  -  HTML
  -  Grid Templates
    + Rows & Columns
    + New Units!
      * `fr` - fractional uit, 1 part of the available space
      * `ch` - Represents the width, or more precisely the advance measure, of the glyph "0" (zero, the Unicode character U+0030) in the element's font.
      * `auto`
    + Repeating Template Sections
    + Template Constraints
      * minmax
      * min
      * max
    + Template Areas
  - Gaps
  - Positioning
    + Start/End
    + Span
      * start/end
      * grid-area
* Practical Stuff 
  - Basic 12 Column Layout
  - More interesting tryptic layout
* Crazy Fun Stuff
  - Flexbox-based Card layout
  - minmax based area
  - no-MQ responsive layout!
