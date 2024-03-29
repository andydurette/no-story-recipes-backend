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
      '2 Cups of vinegar',
    ],
    directions: [
      `Fill a large pot half way with water and a cup of vinegar, and bring up to a simmer (bubbles but not boiling)`,
      `Add peameal bacon to a pan on low-medium heat and let cook.`,
      `Crack open two eggs and seperate the whites from yolks, keep yolks in a bowl and whisk them together for later making the hollandaise.`,
      `Put 1 cup of vinegar in a small pot and reduce until about half, set aside.`,
      `Put butter in a small pot and melt, clearing any milk fats away that rise to the top of the butter.`,
      `Fill a medium sized pan about half way with water and set it to med-high let heat until bubbles form but is not boiling.`,
      `Put a metal bowl over the pot of high simmering water (lots of bubbles but not boiling) and add the butter and vinegar. Wisk vingourous and continously while slowly incorperating the egg yolks to not cook them`,
      'Lower heat to a slow simmer to keep hollandaise sauce warm but not cooking',
      'Lightly stir the large pot of simmering water and then using a ladel or cup lower a freshly cracked eggs in let sit for 3-4 minutes then remove',
      'Assemble the english muffins, peameal bacon, poached eggs and hollandaise',
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
    name: 'Japanese Gratin',
    ingredients: [
      '800ml of Alfredo sauce',
      '3 cups of Penne',
      '2 large Chicken breasts or other protein',
      '3 cups of Bread Crubs',
      '200 ml Motzerella',
    ],
    directions: [
      'Cut up chicken into 1 inch cubes and sear in a pan',
      'Add penne to boiling water and cook for 4-5 minutes so it is softened but not fully cooked',
      'Add alreado sauce, penne and chicken breasts in a casserole dish',
      'Mix bread crumbs and shredded cheese and layer ontop of the casserole dish',
      'Put into oven for 30 minutes, if top starts to burn cover with tin foil',
    ],
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
    directions: [
      'Sear steak and cook to desired level then cut into small chunks',
      `Combine other listed ingredients in xl tortilla and wrap`,
      'Cook burrito on each side on a low-med hot pan until browned on each side',
    ],
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
      'cilantro',
      'sour cream',
      'guacamole',
      'jalapeno',
      'pork carnitas or taco beef',
      'tortilla chips',
    ],
    directions: [
      `Preheat a pan to low to medium heat`,
      `Set tortilla open flat on plate or cutting board`,
      `Warm up choice of protein and set as the base of the Crunch Wrap`,
      `Add a layer of tortilla chips on top as the base for the rest of the ingredients`,
      `Add in lettuce first and cheese last everything else in between`,
      `If it's going to be too full use another chip to seal the top`,
      `Fold around the tortilla wrap to make triangles ending in what looks like the photo`,
      `Put opening side down on the heated pan and it should easily glide back and forth`,
      `Once golden brown flip and cook on the other side then plate`,
    ],
    photoURL: 'https://i.imgur.com/2DfMHjM.jpg',
    published: true,
  },
  {
    id: 5,
    displayUrl: 'korean-fried-chicken',
    cuisine: 'asian',
    description: 'A dish consisting chicken and a sweet, savoury, spicy sauce',
    name: 'Korean Fried Chicken',
    ingredients: [
      '3 large chicken breast',
      '1/2 cup gochujang',
      '1/2 cup honey',
      '4 tbsp ketchup',
      '2 tbsp rice vinegar',
      '2 tbsp soy sauce',
      '2 tbsp sugar',
      '4 cloves garlic, minced',
      '3 tbsp. freshly minced ginger',
      '4 tbsp chili flakes',
      '2 tbsp butter',
      '1 table spoon black sesame seeds',
      '1/2 c. cornstarch',
      '1/2 c. flour',
      'vetable oil or spray oil for air fryer',
    ],
    directions: [
      'Cut chicken in 1 inch cubes and set aside',
      'Mince and heat up garlic and ginger, combine with chili flakes in a pan kept on low to mid heat until fragrent',
      `Add gochujang, honey, ketchup, rice vinegar, soy sauce, sugar and butter in a bowl mix together then and add into 
      the pan with the ginger garlic and chili flakes. Let simmer and reduce stirring occasionally, reduce heat if bubbling`,
      'Mince and heat up garlic and ginger, combine with chili flakes in a pan kept on low to mid heat until fragrent',
      'Mix the chicken into the flour and cornstach mixture until evenly coated',
      'Heat oil or heat air fryer to 450 or limit or air fryer',
      'If air fryer fill fyer basket and spray oil which shaking coated chicken around, heat for 25 minutes shaking occasionally',
      'Combine sauce and chicken once chicken is done',
    ],
    photoURL: 'https://i.imgur.com/ua2BAyq.jpg',
    published: true,
  },
] as const;
