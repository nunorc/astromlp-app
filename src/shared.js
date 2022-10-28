
export default {
  'PIPES': [
    'one2one',
    'cherryPicked',
    'universal'
  ],
  'PIPES_NAMES': {
    one2one: 'One-2-One Ensemble',
    cherryPicked: 'Cherry-Picked Ensemble',
    universal: 'Universal Pipeline'
  },
  'PIPES_DESCS': {
    one2one: [
      'Infer redshift, stellar mass, subclass and gz2 simplified classification from RGB image, FITS, spectra, selected spectra, bands and WISE data using an ensemble of all single input/output models.',
      '<table class="table table-sm"><thead><tr><th>Output</th><th>Ensemble</th></tr></thead><tbody><tr><td><code>redshift</code></td><td><code>[i2r, f2r, s2r, ss2r, b2r, w2r]</code></td></tr><tr><td><code>smass</code></td><td><code>[i2sm, f2sm, s2sm, ss2sm, b2sm, w2sm]</code></td></tr><tr><td><code>subclass</code></td><td><code>[i2s, f2s, s2s, ss2s, b2s, w2s]</code></td></tr><tr><td><code>gz2c</code></td><td><code>[i2g, f2g, s2g, ss2g, b2g, w2g]</code></td></tr></tbody></table>'
    ],
    cherryPicked: [
      'Infer redshift, stellar mass, subclass and gz2 simplified classification from RGB image, FITS, spectra, selected spectra, bands and WISE data using an ensemble of hand picked models.',
      '<table class="table table-sm"><thead><tr><th>Output</th><th>Ensemble</th></tr></thead><tbody><tr><td><code>redshift</code></td><td><code>[f2r, s2r, ss2r, iFsSSbW2r]</code></td></tr><tr><td><code>smass</code></td><td><code>[f2sm, b2sm, w2sm, iFsSSbW2sm]</code></td></tr><tr><td><code>subclass</code></td><td><code>[iFsSSbW2s]</code></td></tr><tr><td><code>gz2c</code></td><td><code>[i2g, f2g, iFsSSbW2g]</code></td></tr></tbody></table>'
    ],
    universal: [
      'Infer redshift, stellar mass, subclass and gz2 simplified classification from RGB image, FITS, spectra and selected spectra data using a set of specific models.',
      '<table class="table table-sm"><thead><tr><th>Output</th><th>Model</th></tr></thead><tbody><tr><td><code>redshift</code></td><td><code>s2r</code></td></tr><tr><td><code>smass</code></td><td><code>i2sm</code></td></tr><tr><td><code>subclass</code></td><td><code>ss2s</code></td></tr><tr><td><code>gz2c</code></td><td><code>f2g</code></td></tr></tbody></table>'
    ],
  },
  'MODELS': [
    'i2r',
    'f2r',
    's2r',
    'ss2r',
    'b2r',
    'w2r',
    'i2sm',
    'f2sm',
    's2sm',
    'ss2sm',
    'b2sm',
    'w2sm',
    'i2s',
    'f2s',
    's2s',
    'ss2s',
    'b2s',
    'w2s',
    'i2g',
    'f2g',
    's2g',
    'ss2g',
    'b2g',
    'w2g',
    'fSbW2rSM',
    'fSbW2sG',
    'iFsSSbW2r',
    'iFsSSbW2sm',
    'iFsSSbW2s',
    'iFsSSbW2g',
    'iFsSSbW2rSMsG'
    ],
  'FUNS': {
    i2r: 'img &rarr; redshift',
    f2r: 'fits &rarr; redshift',
    s2r: 'spectra &rarr; redshift',
    ss2r: 'ssel &rarr; redshift',
    b2r: 'bands &rarr; redshift',
    w2r: 'wise &rarr; redshift',
    i2sm: 'img &rarr; smass',
    f2sm: 'fits &rarr; smass',
    s2sm: 'spectra &rarr; smass',
    ss2sm: 'ssel &rarr; smass',
    b2sm: 'bands &rarr; smass',
    w2sm: 'wise &rarr; smass',
    i2s: 'img &rarr; subclass',
    f2s: 'fits &rarr; subclass',
    s2s: 'spectra &rarr; subclass',
    ss2s: 'ssel &rarr; subclass',
    b2s: 'bands &rarr; subclass',
    w2s: 'wise &rarr; subclass',
    i2g: 'img &rarr; gz2c',
    f2g: 'fits &rarr; gz2c',
    s2g: 'spectra &rarr; gz2c',
    ss2g: 'ssel &rarr; gz2c',
    b2g: 'bands &rarr; gz2c',
    w2g: 'wise &rarr; gz2c',
    fSbW2rSM: '[fits, spectra, bands, wise] &rarr; [redshift, smass]',
    fSbW2sG: '[fits, spectra, bands, wise] &rarr; [subclass, gz2c]',
    iFsSSbW2r: '[img, fits, spectra, ssel, bands, wise] &rarr; redshift',
    iFsSSbW2sm: '[img, fits, spectra, ssel, bands, wise] &rarr; smass',
    iFsSSbW2s: '[img, fits, spectra, ssel, bands, wise] &rarr; subclass',
    iFsSSbW2g: '[img, fits, spectra, ssel, bands, wise] &rarr; gz2c',
    iFsSSbW2rSMsG: '[img, fits, spectra, ssel, bands, wise] &rarr; [redshift, smass, subclass, gz2c]'
  },
  'DESCS': {
    i2r: [
      'infer galaxy object redshift from the RGB image',
      'The model is fitted using a RMSprop optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    f2r: [
      'infer galaxy object redshift from FITS data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 64.'
    ],
    s2r: [
      'infer galaxy object redshift from spectra data',
      'The model is fitted using a RMSprop optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    ss2r: [
      'infer galaxy object redshift from spectra selected bands',
      'The model is fitted using a RMSprop optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    b2r: [
      'infer galaxy object redshift from bands data',
      'The model is fitted using a RMSprop optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    w2r: [
      'infer galaxy object redshift from WISE data',
      'The model is fitted using a RMSprop optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    i2sm: [
      'infer galaxy object stellar mass from the RGB image.',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    f2sm: [
      'infer galaxy object stellar mass from FITS data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    s2sm: [
      'infer galaxy object stellar mass from spectra data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    ss2sm: [
      'infer galaxy object stellar mass from spectra selected bands',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    b2sm: [
      'infer galaxy object stellar mass from bands data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    w2sm: [
      'infer galaxy object stellar mass from WISE data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 64.'
    ],
    i2s: [
      'infer galaxy object subclass from the RGB image',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 64.'
    ],
    f2s: [
      'infer galaxy object subclass from FITS data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    s2s: [
      'infer galaxy object subclass from spectra data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    ss2s: [
      'infer galaxy object subclass from spectra selected bands',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    b2s: [
      'infer galaxy object subclass from bands data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    w2s: [
      'infer galaxy object sublcass from WISE data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    i2g: [
      'infer galaxy object gz2 simplified class from the RGB image',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    f2g: [
      'infer galaxy object gz2 simplified class from FITS data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    s2g: [
      'infer galaxy object gz2 simplified class from spectra data',
      'The model is fitted using a RMSprop optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    ss2g: [
      'infer galaxy object gz2 simplified class from spectra selected bands',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 64.'
    ],
    b2g: [
      'infer galaxy object gz2 simplified class from bands data',
      'The model is fitted using a RMSprop optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 64.'
    ],
    w2g: [
      'infer galaxy object gz2 simplified class from WISE data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 20 epochs with a batch size of 32.'
    ],
    fSbW2rSM: [
      'infer galaxy object redshift and stellar mass from FITS, spectra, bands and WISE data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 30 epochs with a batch size of 32.'
    ],
    fSbW2sG: [
     'infer galaxy object subclass and gz2 simplified class from FITS, spectra, bands and WISE data',
     'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 30 epochs with a batch size of 32.'
     ],
    iFsSSbW2r: [
      'infer galaxy object redshift from RGB image, FITS, spectra, selected spectra, bands and WISE data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 30 epochs with a batch size of 32.'
    ],
    iFsSSbW2sm: [
      'infer galaxy object stellar mass from RGB image, FITS, spectra, selected spectra, bands and WISE data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 30 epochs with a batch size of 32.'
    ],
    iFsSSbW2s: [
      'infer galaxy object subclass from RGB image, FITS, spectra, selected spectra, bands and WISE data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 30 epochs with a batch size of 32.'
    ],
    iFsSSbW2g: [
      'infer galaxy object gz2 simplified class from RGB image, FITS, spectra, selected spectra, bands and WISE data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 30 epochs with a batch size of 32.'
    ],
    iFsSSbW2rSMsG: [
      'infer galaxy object redshift, stellar mass, subclass and gz2 simplified class from RGB image, FITS, spectra, selected spectra, bands and WISE data',
      'The model is fitted using a Adam optimizer with a learning rate of 0.001 for 30 epochs with a batch size of 32.'
    ]
  },
  'TEST': {
    i2r: 'The model achieved a mean squared error of 0.002 on the test set.',
    f2r: 'The model achieved a mean squared error of 0.002 on the test set.',
    s2r: 'The model achieved a mean squared error of 1.110e-4 on the test set.',
    ss2r: 'The model achieved a mean squared error of 0.004 on the test set.',
    b2r: 'The model achieved a mean squared error of 0.011 on the test set.',
    w2r: 'The model achieved a mean squared error of 0.076 on the test set.',
    i2sm: 'The model achieved a mean absolute error of 20.98 on the test set.',
    f2sm: 'The model achieved a mean absolute error of 18.7 on the test set.',
    s2sm: 'The model achieved a mean absolute error of 16.4 on the test set.',
    ss2sm: 'The model achieved a mean absolute error of 29.83 on the test set.',
    b2sm: 'The model achieved a mean absolute error of 24.57 on the test set.',
    w2sm: 'The model achieved a mean absolute error of 29.41 on the test set.',
    i2s: 'The model achieved an accuracy of 83.5% on the test set.',
    f2s: 'The model achieved an accuracy of 83.2% on the test set.',
    s2s: 'The model achieved an accuracy of 92.0% on the test set.',
    ss2s: 'The model achieved an accuracy of 83.6% on the test set.',
    b2s: 'The model achieved an accuracy of 76.7% on the test set.',
    w2s: 'The model achieved an accuracy of 76.7% on the test set.',
    i2g: 'The model achieved an accuracy of 45.5% on the test set.',
    f2g: 'The model achieved an accuracy of 43.6% on the test set.',
    s2g: 'The model achieved an accuracy of 27.3% on the test set.',
    ss2g: 'The model achieved an accuracy of 30.7% on the test set.',
    b2g: 'The model achieved an accuracy of 24.7% on the test set.',
    w2g: 'The model achieved an accuracy of 24.8% on the test set.',
    fSbW2rSM: 'The model achieved a mean squared error of 0.018 for the redshift and a mean absolute error of 16.46 for the stellar mass on the test set.',
    fSbW2sG: 'The model achieved an accuracy of 88.2% for the subclass and an accuracy of 46.8% for gz2 simplified class on the test set.',
    iFsSSbW2r: 'The model achieved a mean squared error of 0.001 on the test set.',
    iFsSSbW2sm: 'The model achieved a mean absolute error of 11.9 on the test set.',
    iFsSSbW2s: 'The model achieved an accuracy of 91.8% on the test set.',
    iFsSSbW2g: 'The model achieved an accuracy of 51.4% on the test set.',
    iFsSSbW2rSMsG: 'The model achieved a mean squared error of 0.025 for the redshift, an accuracy of 84.7% for the subclass, a mean absolute error of 6.632 for the stellar mass on the test set and an accuracy of 40.1% for gz2 simplified class on the test set.',
  },
  'HS': {
    i2r: '208px',
    f2r: '208px',
    s2r: '178px',
    ss2r: '178px',
    b2r: '178px',
    w2r: '178px',
    i2sm: '208px',
    f2sm: '208px',
    s2sm: '178px',
    ss2sm: '178px',
    b2sm: '178px',
    w2sm: '178px',
    i2s: '208px',
    f2s: '208px',
    s2s: '178px',
    ss2s: '178px',
    b2s: '178px',
    w2s: '178px',
    i2g: '208px',
    f2g: '208px',
    s2g: '178px',
    ss2g: '178px',
    b2g: '178px',
    w2g: '178px',
    fSbW2rSM: '475px',
    fSbW2sG: '475px',
    iFsSSbW2r: '737px',
    iFsSSbW2sm: '737px',
    iFsSSbW2s: '737px',
    iFsSSbW2g: '737px',
    iFsSSbW2rSMsG: '737px'
  },
  'EXPLAIN': {
    AGN: 'has detectable emission lines that are consistent with being a Seyfert or LINER',
    BROADLINE: 'has lines detected at the 10-sigma level with sigmas > 200 km/sec at the 5-sigma level',
    STARBURST: 'galaxy is star-forming',
    STARFORMING: 'has detectable emission lines that are consistent with star-formation criteria',
    A: 'artifact, star',
    Ec: 'smooth, cigar-shaped',
    Ei: 'smooth, in-between',
    Er: 'smooth, completely round',
    SBa: 'with features/disks, has bar, dominant bulge prominence',
    SBaR: 'with features/disks, has bar, dominant bulge prominence, has spiral structure',
    SBb: 'with features/disks, has bar, obvious bulge prominence',
    SBbR: 'with features/disks, has bar, obvious bulge prominence, has spiral structure',
    SBc: 'with features/disks, has bar, just noticeable bulge prominence',
    SBcR: 'with features/disks, has bar, just noticeable bulge prominence, has spiral structure',
    SBd: 'with features/disks, has bar, no bulge prominence',
    SBdR: 'with features/disks, has bar, no bulge prominence, has spiral structure',
    Sa: 'with features/disks, dominant bulge prominence',
    SaR: 'with features/disks, dominant bulge prominence, has spiral structure',
    Sb: 'with features/disks, obvious bulge prominence',
    SbR: 'with features/disks, obvious bulge prominence, has spiral structure',
    Sc: 'with features/disks, just noticeable bulge prominence',
    ScR: 'with features/disks, just noticeable bulge prominence, has spiral structure',
    Sd: 'with features/disks, no bulge prominence',
    SdR: 'with features/disks, no bulge prominence, has spiral structure',
    Seb: 'with features/disks, edge-on, boxy bulge',
    Sen: 'with features/disks, edge-on, no bulge',
    Ser: 'with features/disks, edge-on, round bulge',
  }
}
