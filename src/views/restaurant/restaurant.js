
import React from 'react';
import './restaurant.scss';

export default class Restaurant extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    type: 'all',
    menu: [
      {type: 'lunch', name: 'Chicken Caesar Salad', price: 12.99, description: 'Crispy romaine lettuce, grilled chicken, parmesan cheese, and Caesar dressing.', imageId: 'caesar_salad'},
      {type: 'dinner', name: 'Spaghetti Bolognese', price: 17.99, description: 'Classic Italian pasta dish with a rich, savory meat sauce and grated Parmesan cheese.', imageId: 'spaghetti_bolognese'},
      {type: 'breakfast', name: 'Blueberry Pancakes', price: 11.99, description: 'Fluffy buttermilk pancakes bursting with juicy blueberries and served with maple syrup.', imageId: 'blueberry_pancakes'},
      {type: 'drink', name: 'Mango Smoothie', price: 4.99, description: 'A refreshing blend of ripe mango, yogurt, and honey – a tropical delight in a glass.', imageId: 'mango_smotthie'},
      {type: 'lunch', name: 'Grilled Vegetable Wrap', price: 10.99, description: 'A delicious wrap filled with grilled zucchini, bell peppers, onions, and hummus.', imageId: 'grilled_vegetable_wrap'},
      {type: 'dinner', name: 'Salmon Fillet', price: 19.99, description: 'Succulent grilled salmon served with lemon herb butter and a side of roasted asparagus.', imageId: 'salmon_fillet'},
      {type: 'breakfast', name: 'Avocado Toast', price: 9.99, description: 'Sliced avocado and cherry tomatoes on toasted whole-grain bread with a sprinkle of sea salt.', imageId: 'avocado_toast'},
      {type: 'drink', name: 'Freshly Squeezed Orange Juice', price: 2.99, description: 'Start your day with a burst of citrus goodness – pure, fresh-squeezed orange juice.', imageId: 'orange_juice'},
      {type: 'lunch', name: 'BBQ Pulled Pork Sandwich', price: 13.99, description: 'Slow-cooked pulled pork smothered in tangy barbecue sauce, served on a toasted bun.', imageId: 'pulled_pork_and_slaw'},
      {type: 'dinner', name: 'Vegetarian Pad Thai', price: 14.99, description: 'Stir-fried rice noodles with tofu, peanuts, and a zesty tamarind sauce – a Thai classic.', imageId: 'vegetarian_pad_thai'},
      {type: 'breakfast', name: 'Greek Yogurt Parfait', price: 8.99, description: 'Creamy Greek yogurt layered with granola, fresh berries, and a drizzle of honey.', imageId: 'greek_yogurt_parfait'},
      {type: 'drink', name: 'Iced Caramel Macchiato', price: 4.99, description: 'Espresso mixed with caramel syrup and creamy milk, served over ice for a sweet coffee treat.', imageId: 'iced_caramel_macchiato'},
    ]
  }
}

  filterType(type){
    this.setState({
      type: type
    });
  }

  render(){
    
    const { menu, type } = this.state;
    const filteredMenu = type === 'all' ? menu : menu.filter(item => item.type === type);
    return (
      <div className="fade-in restaurant">
        <h1>Menu</h1>
        <div className='button-holder'>
            <button onClick={() => this.filterType('all')} className={(this.state.type === 'all' ? 'enabled' : '')}>All</button>
            <button onClick={() => this.filterType('breakfast')} className={(this.state.type === 'breakfrast' ? 'enabled' : '')}>Breakfrast</button>
            <button onClick={() => this.filterType('lunch')} className={(this.state.type === 'lunch' ? 'enabled' : '')}>Lunch</button>
            <button onClick={() => this.filterType('dinner')} className={(this.state.type === 'dinner' ? 'enabled' : '')}>Dinner</button>
            <button onClick={() => this.filterType('drink')} className={(this.state.type === 'drink' ? 'enabled' : '')}>Drinks</button>
        </div>
        <div className="menu">
        {filteredMenu.map((menuItem, index) => (
            <div className='card' key={index}>
              <div className='image' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/restaurant/`+menuItem.imageId+`.jpg)`}} alt={menuItem.name}></div>
              <div className='info'>
                <h2>{menuItem.name} <span>{menuItem.price} €</span></h2>
                <p>{menuItem.description}</p>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    );
  }
}
