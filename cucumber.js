if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['cucumber'] = [
  [
    [
      /#/g,
      'sh_comment',
      1
    ],
    [
      /@/g,
      'sh_comment',
      1
    ],
    [
      /Scenario:/g,
      'sh_keyword',
      1
    ],
    [
      /Feature:/g,
      'sh_keyword',
      1
    ],
    [
      /In order to/g,
      'sh_variable',
      1
    ],
    [
      /As a/g,
      'sh_variable',
      1
    ],
    [
      /I want to/g,
      'sh_variable',
      1
    ],
    [
      /I wish to/g,
      'sh_variable',
      1
    ],
    [
      /I can/g,
      'sh_variable',
      1
    ],
    [
      /So that/g,
      'sh_variable',
      1
    ],
    [
      /\b(?:Given|When|Then|And|But)\b/g,
      'sh_keyword',
      -1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ]
];
