const items = [
  {
    id: 'butter_chicken',
    name: 'Butter Chicken',
    steps: [
      {
        number: '1',
        name: 'Tomato Sauce Base',
        ingredients: [
          {
            ingredient: 'tomato_sauce',
            measurement: '2qt'
          }
        ],
        instruction: 'Put 2qts of Tomato Sauce in the patela',
        tools: ['patela'],
        images: ['./patela-01.jpg'],
        videos: ['./sauce-01.mp4']
      },
      {
        number: '2',
        name: 'Marination Sauce',
        ingredients: [
          {
            ingredient: 'marination_sauce',
            measurement: '1qt'
          }
        ],
        instruction: 'Put 1 quart of marination sauce in a bucket',
        tools: ['bucket'],
        images: ['./-01.jpg'],
        videos: ['./-01.mp4']
      },
      {
        number: '3',
        name: 'Marinate',
        ingredients: [
          {
            ingredient: 'chicken',
            measurement: '20 lbs'
          }
        ],
        instruction:
          'Put 20 lbs of chicken in the marinade sauce in the bucket',
        tools: ['bucket'],
        images: ['./-01.jpg'],
        videos: ['./-01.mp4']
      }
    ]
  },
  {
    id: '2',
    name: 'Sauce',
    steps: [
      {
        number: '1',
        name: 'Before Cooked',
        ingredients: [
          {
            ingredient: 'tomato sauce can',
            measurement: 5
          }
        ],
        instruction: 'Grab 5 tomato sauce cans and put them in the big patela',
        tools: ['patela', 'half-bucket'],
        images: ['./patela-1.jpg'],
        videos: ['./sauce-1.mp4']
      }
    ]
  },
  {
    id: '3',
    name: 'Chicken',
    steps: [
      {
        number: '1',
        name: 'Drumsticks',
        ingredients: [
          {
            ingredient: 'chicken drumsticks',
            measurement: '50lbs'
          }
        ],
        instruction: 'Remove the skin from  50lbs of chicken drumsticks',
        tools: ['weight machine'],
        images: ['./weighing-01.jpg', './skin-removal.jpg'],
        videos: ['./sauce-01.mp4']
      }
    ]
  },
  {
    id: '4',
    name: 'Mango Lassi',
    steps: [
      {
        number: '1',
        name: 'Mixing',
        ingredients: [
          {
            ingredient: 'yogurt',
            measurement: '4qts'
          },
          {
            ingredient: 'mango pulp can',
            measurement: '4 cans'
          },
          {
            ingredient: 'milk',
            measurement: '1 gallon'
          },
          {
            ingredient: 'sugar',
            measurement: '3 cups'
          },
          {
            ingredient: 'orange color',
            measurement: '1 oz'
          }
        ],
        instruction:
          'Mix 4qts of yogurt, 4 cans of mango pulp, 1 gallon of milk, 3 cups of sugar, and 1 oz of orange coloring into the measurement bucket. Check the color and adjust coloring accordingly.',
        tools: ['measurement bucket'],
        images: ['./bucket-01.jpg'],
        videos: ['./mixing-bucket-01.mp4']
      }
    ]
  }
];
export default items;
