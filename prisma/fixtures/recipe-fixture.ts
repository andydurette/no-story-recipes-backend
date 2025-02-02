import { Recipe } from '@prisma/client';

export const recipes = [
  {
    id: 1,
    displayUrl: 'eggs-benedict',
    cuisine: ['AMERICAN'],
    description:
      'A dish consisting of hollandiase sauce, peameal bacon, poached eggs and english muffins',
    name: 'Eggs Benedict',
    ingredients: [
      '6 Eggs',
      '1 Pack Peameal bacon',
      '4 English Muffin',
      '1 Cup butter',
      '2 Cups of vinegar',
    ],
    directions: [
      `Fill a large pot half full with water and a cup of vinegar, and bring up to a simmer. (bubbles but not boiling)`,
      `Add peameal bacon to a pan on low-medium heat and let cook.`,
      `Crack open two eggs and seperate the whites from the yolks, keep the yolks in a bowl and whisk them together for later making the hollandaise.`,
      `Put 1 cup of vinegar in a small pot and reduce until about half, set aside.`,
      `Put butter in a small pot and melt, clearing any milk fats that rise to the top of the butter.`,
      `Fill a medium sized pan about half full with water and set it to medium-high. Let it heat until bubbles form but it is not boiling.`,
      `Put a metal bowl over the pot of high simmering water (lots of bubbles but not boiling) and add the butter and vinegar. Wisk vingourous and continuously while slowly incorporating the egg yolks to not cook them.`,
      'Lower heat to a slow simmer to keep hollandaise sauce warm but not cooking.',
      'Lightly stir the large pot of simmering water and then using a ladel or cup, lower a freshly cracked egg in, let sit for 3-4 minutes, then remove.',
      'Assemble the English muffins, peameal bacon, poached eggs, and hollandaise.',
    ],
    photoURL: 'https://i.imgur.com/uwFrdJC.jpg',
    published: true,
  },
  {
    id: 2,
    displayUrl: 'japanese-gratin',
    cuisine: ['ASIAN'],
    description:
      'A dish consisting of a white sauce, chicken, bread crumbs and cheese crust',
    name: 'Japanese Gratin',
    ingredients: [
      '800ml of Alfredo sauce',
      '3 cups of Penne',
      '2 large Chicken breasts or other protein',
      '3 cups of Bread Crumbs',
      '200 ml Motzerella',
    ],
    directions: [
      'Cut up chicken into 1 inch cubes and sear in a pan.',
      'Add penne to boiling water and cook for 4-5 minutes so it is softened but not fully cooked.',
      'Add alreado sauce, penne and chicken breasts in a casserole dish.',
      'Mix bread crumbs and shredded cheese and layer on top of the casserole dish.',
      'Put into oven for 30 minutes, if the top starts to burn, cover with tin foil.',
    ],
    photoURL: 'https://i.imgur.com/rUbvBuD.jpg',
    published: true,
  },
  {
    id: 3,
    displayUrl: 'steak-burrito',
    cuisine: ['LATIN_AMERICAN'],
    description:
      'A dish consisting of a white tortilla, black bean paste and fillings',
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
      'Sear steak and cook to desired level, then cut into small chunks.',
      `Combine other listed ingredients in an xl tortilla and wrap.`,
      'Cook burrito on each side on a low-med hot pan until browned on each side.',
    ],
    photoURL: 'https://i.imgur.com/qM2mTYp.jpg',
    published: true,
  },
  {
    id: 4,
    displayUrl: 'crunch-wrap',
    cuisine: ['LATIN_AMERICAN'],
    description:
      'A dish consisting of a white tortilla, black bean paste and fillings',
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
      `Preheat a pan to low to medium heat.`,
      `Set tortilla open flat on a plate or cutting board.`,
      `Warm up choice of protein and set it as the base of the Crunch Wrap.`,
      `Add a layer of tortilla chips on top as the base for the rest of the ingredients.`,
      `Add in lettuce first and cheese last, everything else in between.`,
      `If it's going to be too full, use another chip to seal the top.`,
      `Fold around the tortilla wrap to make triangles ending in what looks like the photo.`,
      `Put the opening side down on the heated pan and it should easily glide back and forth.`,
      `Once golden brown, flip and cook on the other side, then plate.`,
    ],
    photoURL: 'https://i.imgur.com/2DfMHjM.jpg',
    published: true,
  },
  {
    id: 5,
    displayUrl: 'korean-fried-chicken',
    cuisine: ['ASIAN'],
    description:
      'A dish consisting of chicken and a sweet, savory, spicy sauce',
    name: 'Korean Fried Chicken',
    ingredients: [
      '3 large chicken breasts',
      '½ cup gochujang',
      '½ cup honey',
      '4 tbsp ketchup',
      '2 tbsp rice vinegar',
      '2 tbsp soy sauce',
      '2 tbsp sugar',
      '4 cloves garlic, minced',
      '3 tbsp. freshly minced ginger',
      '4 tbsp chili flakes',
      '2 tbsp butter',
      '1 tablespoon black sesame seeds',
      '½ c. cornstarch',
      '½ c. flour',
      'vegtable oil or spray oil for an air fryer',
    ],
    directions: [
      'Cut chicken into 1 inch cubes and set aside',
      'Mince and heat up garlic and ginger, combine with chili flakes in a pan kept on low to mid heat until fragrant.',
      `Add gochujang, honey, ketchup, rice vinegar, soy sauce, sugar and butter in a bowl mix together then and add into 
      the pan with the ginger, garlic and chili flakes. Let simmer and reduce stirring occasionally, reduce heat if bubbling.`,
      'Mince and heat up garlic and ginger, combine with chili flakes in a pan kept on low to mid heat until fragrant.',
      'Mix the chicken into the flour and cornstach mixture until evenly coated.',
      'Heat oil or heat air fryer to 450 degrees fahrenheit.',
      'If an air fryer fill fryer basket and spray oil which shaking coated chicken around, heat for 25 minutes shaking occasionally.',
      'Combine sauce and chicken once chicken is done.',
    ],
    photoURL: 'https://i.imgur.com/ua2BAyq.jpg',
    published: true,
  },
  {
    id: 6,
    displayUrl: 'double-chocolate-double-mint-cookies',
    cuisine: ['AMERICAN'],
    description:
      'A cookie with elements of chocolate and mint to delectably stimulate the tastebuds',
    name: 'Double Chocolate Double Mint Cookies',
    ingredients: [
      '2 ½ cups butter, softened',
      '4 cups sugar',
      '4 eggs',
      '1 teaspoon vanilla extract',
      '1 teaspoon peppermint extract',
      '4 cups all-purpose flour',
      '1 ½ cups unsweetened cocoa powder',
      '2 teaspoons baking soda',
      '1 teaspoon salt',
      '2 cups semisweet chocolate chips',
    ],
    directions: [
      'Preheat the oven to 350 degrees fahrenheit.',
      'Cream together, butter, sugar and eggs. Mix in th remaining ingredients. Blend well.',
      'Drop mixture using a cookie scoop or a tablespoon if not available, onto a baking tray. Bake for 8 or 9 minutes. Cookies will be soft.',
      'Leave out to cool on the tray, or if you have a wire rack, after cooling for 1 or 2 minutes, move cookies over to the wire rack.',
    ],
    photoURL: 'https://i.imgur.com/6FwrQ2a.png',
    published: true,
  },
  {
    id: 7,
    displayUrl: 'cinnamon-cookies',
    cuisine: ['AMERICAN'],
    description:
      'A cookie with elements of cinnamon to delectably stimulate the tastebuds',
    name: 'Cinnamon Cookies',
    ingredients: [
      '½ cups butter, softened',
      '1 cups sugar',
      '1 egg',
      '1 teaspoon vanilla extract',
      '1 ½ cups all-purpose flour',
      '2 tablespoon cinnamon',
      '1 tea spoon  baking powder',
      '¼ tea spoon salt',
    ],
    directions: [
      'Preheat the oven to 350 degrees fahrenheit.',
      'Cream together, butter, sugar and eggs. Mix in the remaining ingredients. Blend well.',
      'Drop mixture using a cookie scoop or a tablespoon if not available, onto a baking tray. Bake for 8 or 9 minutes. Cookies will be soft.',
      'Leave out to cool on the tray, or if you have a wire rack, after cooling for 1 or 2 minutes, move cookies over to the wire rack.',
    ],
    photoURL: 'https://i.imgur.com/3QasQMZ.jpg',
    published: true,
  },
  {
    id: 8,
    displayUrl: 'carnitas',
    cuisine: ['LATIN_AMERICAN'],
    description:
      'Carnitas, also known as mexican pulled pork, which is packed with flavor from the citrus fruits and spices',
    name: 'Carnitas',
    ingredients: [
      '4 pounds boneless pork butt (2 kg) skinless (or shoulder)',
      '2 limes juiced',
      '2 large oranges juiced or 1 cup natural orange juice',
      '1 cup coke (Original or Mexican coke is ideal)*',
      '8 cloves garlic smashed',
      '3-4 teaspoons salt',
      '1 tablespoon dried oregano (or Mexican oregano)',
      '1 tablespoon ground cumin',
    ],
    directions: [
      'Pat dry pork with a paper towel.',
      'In a large slow cooker (6 quart suggested), add pork, salt, pepper, oregano, cumin, garlic, lime juice, orange juice and coke.',
      'Cover and cook on low heat for 8-10 hours, or on high heat for 5-6 hours (until the meat falls apart). If you use the shoulder it tends to have less fat and may take more time.',
      'Move pork to a separate bowl and shred with two forks. (DO NOT DISCARD THE LIQUID!)',
      'Transfer the pork to a baking sheet lightly sprayed with cooking oil spray (or lined with aluminum foil or parchment paper).',
      'Pour 1 ladle full (about 1 cup) of the liquid from the slow cooker over the pork to season. Broil for 5-10 minutes on high heat until the meat becomes golden browned and crispy on the edges. Take a spatula to flip the meat periodicly for even browning.',
      `Repeat the above step until all the liquid is gone, don't add too much liquid at a time so that the meat becomes mushy and watch to make sure the park does not burn.`,
    ],
    photoURL: 'https://i.imgur.com/KsUH2DB.jpg',
    published: true,
  },
  {
    id: 9,
    displayUrl: 'earl-grey-milk-tea',
    cuisine: ['ASIAN'],
    description: 'Milk tea made with caramel and Earl Grey tea',
    name: 'Earl Grey Milk Tea',
    ingredients: [
      '20 grams of loose leaf tea or about 8 teabags, preference here is Twinnings earl grey but you can use any brand',
      '6½ cups of 2% milk',
      '2 cup of water',
      '1 cup sugar',
      '1-2 teaspoon vanilla extract (optional to make into a London fog)',
    ],
    directions: [
      'Fill a container with 6 cups milk and add in your tea bags, or if you have an infuser, you can use loose leaf tea.',
      'Boil 1 of the cups of water and have nearby this will be necessary in the next step.',
      'Make caramel, which will sweeten and color the milk tea. In a small pot mix together 1 cup water and 1 cup sugar on medium-high to reduce until you see very little liquid and the mixture has started to turn brown. Immediately remove from the burner and add the prior steps 1 cup of boiled water to stop the caramel from solidifying.',
      'If any of the caramel did solidify, stir the misture with a whisk and put back on heat if needed until it is all disolved.',
      'Let cool then mix into the container of milk and tea.',
      'Leave the mixture to cold brew over 2 days for best results; after these 2 days, remove the tea bags or loose leaves to stop the steeping process and your milk tea is ready to enjoy.',
    ],
    photoURL: 'https://i.imgur.com/iqVYq9t.jpg',
    published: true,
  },
  {
    id: 10,
    displayUrl: 'coca-cola-wings',
    cuisine: ['AMERICAN'],
    description: 'Sweet and savory chicken wings coated with coca cola',
    name: 'Coca-Cola Wings',
    ingredients: ['2 pounds of chicken wings', '355ml of Coca-Cola'],
    directions: [
      'Pat down wings with paper towels to remove as much moisture as possible.',
      `Reduce Coca-Cola down until it's a bit syrupy.`,
      'Using a nuetral oil coat the wings. (Optionally use sesame oil for added flavor.)',
      'Put in oven or air fryer at 450 degrees fahrenheit for about 20-25 minutes or until browned and crispy.',
      'Take out the chicken wings and with a basting brush apply the reduced Coca-Cola equally across the wings.',
      'Put wings back into oven or air fry for 5 minutes at 350 degrees fahrenheit then enjoy.',
    ],
    photoURL: 'https://i.imgur.com/KcmBGk1.jpg',
    published: true,
  },
  {
    id: 11,
    displayUrl: 'tandoori-chicken-pizza-buns',
    cuisine: ['ASIAN', 'EUROPEAN'],
    description: 'Fusion recipe adding indian flavors to a pizza bun.',
    name: 'Tandoori Chicken Pizza Buns',
    ingredients: [
      'Pizza Dough',
      '3 chicken breasts',
      '150g Marble Cheese ',
      'Tandoori Sauce',
      'Garlic Butter',
    ],
    directions: [
      'Preheat oven to 350°F.',
      'Cut up chikcen into rough 1 inch cubes or smaller and cook in a pan with tandoori sauce on medium to high heat.',
      'Seperate pizza dough into 8 parts, then flatten down each of them.',
      'Grate your cheese and evenly distribute it to each flattened section of dough, distribute the chicken the same way.',
      'Pinch and curl the dough to close each bun.',
      'Put a little olive or other cooking oil in the bottom of a rough 10 inch steel pan so the buns will not stick. Once coated load each of the buns into the pan.',
      'Brush each bun with garlic butter.',
      'Place pan into the over for about 30 minutes or until browned, take out and enjoy.',
    ],
    photoURL: 'https://i.imgur.com/DEjpn61.jpeg',
    published: true,
  },
  {
    id: 12,
    displayUrl: 'steak-pie',
    cuisine: ['EUROPEAN'],
    description: 'Simple and delicious steak pie',
    name: 'Steak Pie',
    ingredients: [
      '3 steaks',
      'pie shell',
      'puff pastry',
      '900ml',
      '¼ teaspoon salt',
      '1 tablespoon pepper',
      '3 tablespoons flour',
    ],
    directions: [
      'Cut up steaks into roughly 1 inch sections.',
      'Sear the portions of steak in a pan (DO NOT COOK THE STEAK ONLY SEAR THE OUTSIDE!) and seared sections to a slow cooker',
      'Once searing of the steak is done deglaze the pan with mushroom stock and the mixture to the slow cooker with the rest of the stock.',
      'Add in salt and pepper then slow cook for 2-6 hours on low, cheaper cuts of steaks will need longer to get tender.',
      'Once slow cooking has finished preheat oven to 350°F.',
      'Take about 50ml of broth from the slow cooker and let cool in a container',
      'Add pie shell to oven and remove once browned, poke the bottom with a fork if it bubbles up or if you have bakers mables use them.',
      'Roll out Puff pastry enough to cover top of pie.',
      'Load steak from slow cooker into pie shell taking only about 1 tablespoon of broth to keep moist.',
      'Add layer of puff pastry on top of the pie and score the top with 3 lines to release steam.',
      'While pie is cooking take the broth put aside from step 6 to cool and add the flour mixture to it and shake vigourous until full incorperated',
      'Add flour and broth mixture back into the slow cooker at low and mix together to make a gravy to go over the pie.',
      'Once the pie is done, pour gravy over your pie and enjoy.',
    ],
    photoURL: 'https://i.imgur.com/LMk6lNo.jpeg',
    published: true,
  },
  {
    id: 13,
    displayUrl: 'cherry-ice-cream',
    cuisine: ['AMERICAN'],
    description: 'Sweet,robust and smooth cherry ice cream',
    name: 'Cherry Ice Cream',
    ingredients: ['10 cups of cherries', '¾ cup sugar', '1 ¾ cups heavy cream'],
    directions: [
      'Preheat oven to 450°F. Add cherries and sugar into a stainless steel pan deep enough. Roast, stirring occasionally for about 40 minutes.',
      'Set cherries aside to cool then remove the pits. Transfer pits to a 1-quart stainless steel saucier or saucepan and place pitted cherries in a tall, narrow container or the bowl of a food processor; reserve roasting juices in the pan.',
      'Add cream to the pits, bring to a simmer over medium heat, then cover and set aside.',
      'Purée the cherries in a food processor or blender until smooth with the skins completely broken down. Return the purée to the reserved pan of roasted cherry juices and bring to a simmer on the stovetop over medium heat. Continue cooking, stirring frequently with until the fruit looks a bit thick and jammy , 5 to 10 minutes depending on the degree of roasting.',
      'Strain the reserved cherry pit-infused cream into the reduction, then discard the pits. Whisk until smooth, then add lemon juice and salt.',
      'Store mixture in fridge for 4 hours to cool.',
      'Add mixture to ice cream maker and when the ice cream looks thick and light, shut off the machine and scrape ice cream into chilled container.',
      'Enjoy immediately or cover with plastic pressed directly against surface of ice cream, then close lid and freeze for later',
    ],
    photoURL: 'https://i.imgur.com/6aSVWpP.jpeg',
    published: true,
  },
  {
    id: 14,
    displayUrl: 'pumpkin-bread',
    cuisine: ['AMERICAN'],
    description: 'Sweet and spiced pumpkin bread',
    name: 'Pumpkin Bread',
    ingredients: [
      '2 eggs',
      '2 cups flour',
      '2 cups sugar',
      '1 teaspoon baking soda',
      '½ teaspoon baking powder',
      '½ teaspoon salt',
      '1 teaspoon nutmeg',
      '2 tablespoon cinnamon',
      '¾ cup butter',
      '2 cups pumpkin',
    ],
    directions: [
      'Preheat oven to 325°F.',
      'In a mixing bowl mix together sugar and softened butter until slightly clumpy and sugar is no longer seen.',
      'Mix in eggs one at a time until incorperated, repeat with pumpkin.',
      'Whisk together dry ingredient then slowly add to mix until all has been incorperated.',
      `Using two 8" x 4" bread pans cover with butter or oil then coat lightly with flour so the bread won't stick to the pans.`,
      'Pour mixture into the bread pans in even amounts, place into preheated oven for 50 minutes.',
      'Let cook for 5 minutes, then enjoy.',
    ],
    photoURL: 'https://i.imgur.com/ey9MIm3.jpeg',
    published: true,
  },
  {
    id: 15,
    displayUrl: 'meatballs',
    cuisine: ['AMERICAN'],
    description: 'Tangy and crunchy meatballs',
    name: 'Meatballs',
    ingredients: [
      '500g ground beef',
      '500g ground pork',
      '500ml of grated block cheese of choice',
      '2 tbs oyster sauce',
      '1 tbs worcestershire sauce',
      '1 tbs soy sauce',
      '1 tbs paprika',
    ],
    directions: [
      'Preheat oven to 350°F.',
      'Place meats and paprika in a mixing or steel bowl and mix until combined',
      'Mix in oyster, worcestershire and soy sauce until combined',
      'Mix adding grated cheese in small portions to prevent clumping',
      'Once mixed use a cookie scoop is available to make the meatballs otherwise aim for the size to be about a 1¼ inch in diamater',
      'Lay meatballs onto a tray and place into oven for about 20 minutes (Do not remove)',
      'Set oven to broil 500°F for about 5 minutes, then flip over meatballs for another 5 minutes to get the nice crust',
    ],
    photoURL: 'https://i.imgur.com/muJzVcl.jpeg',
    published: true,
  },
  {
    id: 16,
    displayUrl: 'orange-chicken',
    cuisine: ['ASIAN'],
    description: 'Sweet and savory orange chicken',
    name: 'Orange Chicken',
    ingredients: [
      '3 large chicken breasts',
      '3 cup orange juice',
      '2 tbsp rice vinegar',
      '2 tbsp soy sauce',
      '2 tbsp sugar',
      '4 cloves garlic, minced',
      '4 tbsp chili flakes',
      '1 tablespoon black sesame seeds',
      '½ c. cornstarch',
      '½ c. flour',
      'vegtable oil or spray oil for an air fryer',
    ],
    directions: [
      'Cut chicken into 1 inch cubes and set aside',
      `Start reducing 2 cups of orange juice`,
      'Mince and heat up garlic and ginger, combine with chili flakes in a pan kept on low to mid heat until fragrant.',
      'Mix the chicken into the flour and cornstach mixture until evenly coated.',
      'Heat oil or heat air fryer to 450 degrees fahrenheit.',
      'If an air fryer fill fryer basket and spray oil which shaking coated chicken around, heat for 25 minutes shaking occasionally.',
      'Combine sauce and chicken once chicken is done and put on a cooking tray',
      'Place in oven at 275 degrees fahrenheit and move around ever few minutes until full adhered to the chicken',
    ],
    photoURL: 'https://i.imgur.com/nAfjIqk.jpeg',
    published: true,
  },
  {
    id: 17,
    displayUrl: 'chocolate-chip-muffins',
    cuisine: ['EUROPEAN'],
    description:
      'A muffin with cinnamon and nutmeg has a warm, cozy flavor with a hint of spice. Along with the sweetness of chocolate chips.',
    name: 'Chocolate Chip Muffins',
    ingredients: [
      '3 cups all purpose flour',
      '3 teaspoons baking powder',
      '½ baking soda',
      '½ baking salt',
      '1 teaspoon ground cinnamon',
      '⅛ teaspoon ground nutmeg (optional)',
      '⅓ cup unsalted butter, melted and slightly cooled',
      '⅓ cup vegetable oil',
      '1 cup granulated sugar',
      '2 large eggs, at room temperature',
      '⅓ cup sour cream or yogurt, at room temperature',
      '1 cup milk, at room temperature',
      '1 teaspoon pure vanilla extract',
      '1 and ½ cups semi-sweet chocolate chips',
    ],
    directions: [
      'Preheat oven to 425°F (218°C). Grease a 12-count muffin pan with butter or use muffin liners. Set aside.',
      `Whisk the flour, baking powder, baking soda, salt, cinnamon, and nutmeg together in a large bowl. Set aside.`,
      'Whisk the melted butter, oil, sugar, and eggs together until combined. Then whisk in the sour cream, milk, and vanilla extract. Pour wet ingredients into dry ingredients and mix together until completely no clumps exist. Avoid overmixing and once ready mix in the chocolate chips.',
      'Divide batter between each muffin cup, filling all the way to the top. Bake at 425°F for 5 minutes, then, keeping the muffins in the oven, reduce the oven temperature to 350°F (177°C) and continue to bake for 20 minutes until the tops are lightly golden brown and centers are set. Stick a toothpick in the center of a muffin to test for doneness. If it comes out clean, the muffins are done.',
      'You may have some leftover batter you can use this to create as many extra as you like.',
      'Allow to cool for 10 minutes in pan before serving.',
    ],
    photoURL: 'https://i.imgur.com/Rx34sEZ.jpeg',
    published: true,
  },
] as Recipe[];
