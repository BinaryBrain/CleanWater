// Languages: name (local), name_en, name_fr, name_es, name_de
@name: '[name_en]';

// Fonts //
@sans: 'Arial Unicode MS Regular';
@sans_bold: 'Arial Unicode MS Bold';

/*
This style is designed to be easily recolored by adjusting the color
variables below. For predicatable feature relationships,
maintain or invert existing value (light to dark) scale.
*/

// Color palette //
@road:  #e6e6e6;
@land:  #eee;

@fill1: #fff;
@fill2: #bbb;
@fill3: #777;
@fill4: #000;

@text: #777;

Map { background-color: @land; }

// Political boundaries //
#admin[admin_level=2][maritime=0] {
  line-join: round;
  line-color: mix(@fill3,@fill2,50);
  line-width: 1;
  [zoom>=5] { line-width: 1.4; }
  [zoom>=6] { line-width: 1.8; }
  [zoom>=8] { line-width: 2; }
  [zoom>=10] { line-width: 3; }
  [disputed=1] { line-dasharray: 4,4; }
}

#admin[admin_level>2][maritime=0] {
  line-join: round;
  line-color: #e0dddd;
  line-width: 1;
  line-dasharray: 3,2;
  [zoom>=6] { line-width: 1.5; }
  [zoom>=8] { line-width: 1.8; }
}

// Water Features //
#water {
  ::shadow {
    polygon-fill: #8a8ae8;
  }
  ::fill {
    // a fill and overlay comp-op lighten the polygon-
    // fill from ::shadow.
    polygon-fill: @land;
    comp-op: soft-light;
    // blurring reveals the polygon fill from ::shadow around
    // the edges of the water
    image-filters: agg-stack-blur(10,10);
  }
}

// Water color is calculated by sampling the resulting color from
// the soft-light comp-op in the #water layer style above. 
@water: #8a8ae8;

#waterway {
  [type='river'] {
    line-color: @water;
    line-width: 3;
    [zoom>=0] { line-width: 0.5; }
    [zoom>=14] { line-width: 2; }
    [zoom>=16] { line-width: 3; }
  }
  [type='stream'],
  [type='canal'] {
    line-color: @water;
    line-width: 1;
    [zoom>=12] { line-width: 1; }
    [zoom>=14] { line-width: 2; }
    [zoom>=16] { line-width: 3; }
  }
}
