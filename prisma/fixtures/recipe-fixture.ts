export const recipes = [
  {
    id: 1,
    displayUrl: 'eggs-benedict',
    cuisine: 'american',
    description:
      'A dish consisting of hollandiase sauce, peameal bacon, poached eggs and english muffins',
    name: 'Eggs Benedict',
    ingredients: [
      '6 Eggs',
      '1 Pack Peameal bacon',
      '4 English Muffin',
      'Bread Crubs',
      '1 Cup butter',
      '1/4 cup of reduced vinegar',
    ],
    directions: [
      `Add peameal bacon to a pan on low-medium and let cook while you complete the next steps`,
      `For the hollandise sauce we will be using a double boiler method.
       Start by filling a medium sized pot about half way with water and set it to med-high. 
       While it is heating up crack open two eggs and seperate the whites from yolks.
       Once the water is near boiling add a small metal bowl over the pot with the butter inside.
       Once the butter is melted and hot reduce the heat of the burner to medium add the reduced vingear and while vigarously 
       whisking slowly add the egg yolks.
       `,
      'Making the hollandaise',
      'Making the hollandaise',
    ],
    photoURL: 'https://i.imgur.com/uwFrdJC.jpg',
    published: true,
  },
  {
    id: 2,
    displayUrl: 'japanese-gratin',
    cuisine: 'japanese',
    description:
      'A dish consisting of a white sauce, chicken, bread crumbs and cheese crust',
    name: 'Japanese gratin',
    ingredients: [
      '800ml of alfredo sauce',
      '200ml of English Muffin',
      '1 pound of chicken',
      '200 gramsBread Crubs',
      '200 ml motzerella',
    ],
    directions: ['These are my directions'],
    photoURL: 'https://i.imgur.com/rUbvBuD.jpg',
    published: true,
  },
  {
    id: 3,
    displayUrl: 'steak-burrito',
    cuisine: 'mexican',
    description:
      'A dish consisting a white tortilla, black bean paste and fillings',
    name: 'Steak Burrito',
    ingredients: [
      '1 steak',
      'xl soft flour tortilla',
      'cheese',
      'black bean paste',
      'cilantro',
      'sour cream',
      'guacamole',
      'jalapeno',
    ],
    directions: ['These are my directions'],
    photoURL: 'https://i.imgur.com/qM2mTYp.jpg',
    published: true,
  },
  {
    id: 4,
    displayUrl: 'crunch-wrap',
    cuisine: 'mexican',
    description:
      'A dish consisting a white tortilla, black bean paste and fillings',
    name: 'Crunch Wrap',
    ingredients: [
      'xl soft flour tortilla',
      'cheese',
      'black bean paste',
      'cilantro',
      'sour cream',
      'guacamole',
      'jalapeno',
      'pork carnitas or taco beef',
    ],
    directions: ['These are my directions'],
    photoURL: 'https://i.imgur.com/2DfMHjM.jpg',
    published: true,
  },
] as const;
