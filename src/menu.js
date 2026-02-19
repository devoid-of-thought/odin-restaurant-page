export default function loadMenu() {
  const contentDiv = document.getElementById('content');

  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu';

  const mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Menu';
  menuContainer.appendChild(mainHeading);

  const menuSections = [
    {
      title: 'Our Cheese',
      items: [
        {
          name: 'Cheese 1',
          price: '$5.99',
          origin: 'Poland',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        },
        {
          name: 'Cheese 2',
          price: '$6.99',
          origin: 'France',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        },
        {
          name: 'Cheese 3',
          price: '$7.99',
          origin: 'Italy',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        }
      ]
    },
    {
      title: 'Mains',
      items: [
        {
          name: 'Main 1',
          price: '$10.99',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        },
        {
          name: 'Main 2',
          price: '$12.99',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        },
        {
          name: 'Main 3',
          price: '$14.99',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        }
      ]
    },
    {
      title: 'Drinks',
      items: [
        {
          name: 'Water',
          price: '$2.99',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        },
        {
          name: 'Soda',
          price: '$3.99',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        },
        {
          name: 'Wine',
          price: '$8.99',
          origin: 'Spain',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        },
        {
          name: 'Beer',
          price: '$4.99',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'
        }
      ]
    }
  ];

  menuSections.forEach(section => {
    const sectionHeading = document.createElement('h2');
    sectionHeading.textContent = section.title;
    menuContainer.appendChild(sectionHeading);

    section.items.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';

      const nameAndDetails = document.createElement('div');
      nameAndDetails.className = 'name-and-details';

      const itemName = document.createElement('h2');
      itemName.textContent = item.name;
      nameAndDetails.appendChild(itemName);
        const details = document.createElement('div');
        details.className = 'details';

        const itemPrice = document.createElement('h3');
        itemPrice.textContent = `Price: ${item.price}`;
        details.appendChild(itemPrice);

        if (item.origin) {
          const itemOrigin = document.createElement('h4');
          itemOrigin.textContent = `Origin: ${item.origin}`;
          details.appendChild(itemOrigin);
        }

        nameAndDetails.appendChild(details);
      

      menuItem.appendChild(nameAndDetails);

      const itemDesc = document.createElement('p');
      itemDesc.textContent = item.description;
      menuItem.appendChild(itemDesc);

      menuContainer.appendChild(menuItem);
    });
  });

  contentDiv.appendChild(menuContainer);
}