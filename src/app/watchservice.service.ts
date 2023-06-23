import { Injectable } from '@angular/core';
import { Watches } from './watches';
@Injectable({
  providedIn: 'root'
})
export class WatchserviceService {

  constructor() { }

  getAllWatches(){
    return this.watchesList;
  }

  
// check if there is any problem in this method
findByModel(property: string) {
  const lowerCaseProperty = property.toLowerCase();

  for (const watch of this.watchesList) {
    if (watch.model.toLowerCase() === lowerCaseProperty) {
      return watch;
    }
  }
  
  return {};
}



  watchesList : Watches[] =[
    {
      id:1,
      model:"Titan",
      price:2300,
      info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel cumque officiis minima vero voluptatibus illo nihil dolorum quia, fuga ad praesentium doloremque dolorem velit libero saepe consequuntur ut nostrum dicta! Reiciendis rerum sapiente impedit quod ea qui aspernatur dolore ad! Possimus iure quod, necessitatibus sint doloremque perspiciatis quidem voluptatibus?",
      picture:"/assets/titan.png",
      smallInfo:"Lorem ipsum dolor sit amet",
      cartAdded: false
    },
    {
      id:2,
      model:"Rolex",
      price:4300,
      info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel cumque officiis minima vero voluptatibus illo nihil dolorum quia, fuga ad praesentium doloremque dolorem velit libero saepe consequuntur ut nostrum dicta! Reiciendis rerum sapiente impedit quod ea qui aspernatur dolore ad! Possimus iure quod, necessitatibus sint doloremque perspiciatis quidem voluptatibus?",
      picture:"/assets/rolex.png",
      smallInfo:"Lorem ipsum dolor sit amet",
      cartAdded: false
    },
    
    {
      id:3,
      model:"Boult",
      price:4500,
      info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel cumque officiis minima vero voluptatibus illo nihil dolorum quia, fuga ad praesentium doloremque dolorem velit libero saepe consequuntur ut nostrum dicta! Reiciendis rerum sapiente impedit quod ea qui aspernatur dolore ad! Possimus iure quod, necessitatibus sint doloremque perspiciatis quidem voluptatibus?",
      picture:"/assets/boult.png",
      smallInfo:"Lorem ipsum dolor sit amet",
      cartAdded: false
    },
    {
      id:4,
      model:"Noise",
      price:3300,
      info:"loreLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel cumque officiis minima vero voluptatibus illo nihil dolorum quia, fuga ad praesentium doloremque dolorem velit libero saepe consequuntur ut nostrum dicta! Reiciendis rerum sapiente impedit quod ea qui aspernatur dolore ad! Possimus iure quod, necessitatibus sint doloremque perspiciatis quidem voluptatibus?m50",
      picture:"/assets/noise.png",
      smallInfo:"Lorem ipsum dolor sit amet",
      cartAdded: false
    },
    {
      id:5,
      model:"Sonata",
      price:4500,
      info:"loreLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel cumque officiis minima vero voluptatibus illo nihil dolorum quia, fuga ad praesentium doloremque dolorem velit libero saepe consequuntur ut nostrum dicta! Reiciendis rerum sapiente impedit quod ea qui aspernatur dolore ad! Possimus iure quod, necessitatibus sint doloremque perspiciatis quidem voluptatibus?m50",
      picture:"/assets/casio.png",
      smallInfo:"Lorem ipsum dolor sit amet",
      cartAdded: false
    },
    {
      id:4,
      model:"Noise",
      price:3300,
      info:"loreLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel cumque officiis minima vero voluptatibus illo nihil dolorum quia, fuga ad praesentium doloremque dolorem velit libero saepe consequuntur ut nostrum dicta! Reiciendis rerum sapiente impedit quod ea qui aspernatur dolore ad! Possimus iure quod, necessitatibus sint doloremque perspiciatis quidem voluptatibus?m50",
      picture:"/assets/noise.png",
      smallInfo:"Lorem ipsum dolor sit amet",
      cartAdded: false
    },
    {
      id:3,
      model:"Boult",
      price:4500,
      info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel cumque officiis minima vero voluptatibus illo nihil dolorum quia, fuga ad praesentium doloremque dolorem velit libero saepe consequuntur ut nostrum dicta! Reiciendis rerum sapiente impedit quod ea qui aspernatur dolore ad! Possimus iure quod, necessitatibus sint doloremque perspiciatis quidem voluptatibus?",
      picture:"/assets/boult.png",
      smallInfo:"Lorem ipsum dolor sit amet",
      cartAdded: false
    },
    {
      id:5,
      model:"Sonata",
      price:4500,
      info:"loreLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel cumque officiis minima vero voluptatibus illo nihil dolorum quia, fuga ad praesentium doloremque dolorem velit libero saepe consequuntur ut nostrum dicta! Reiciendis rerum sapiente impedit quod ea qui aspernatur dolore ad! Possimus iure quod, necessitatibus sint doloremque perspiciatis quidem voluptatibus?m50",
      picture:"/assets/casio.png",
      smallInfo:"Lorem ipsum dolor sit amet",
      cartAdded: false
    },
    {
      id:1,
      model:"Titan",
      price:2300,
      info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vel cumque officiis minima vero voluptatibus illo nihil dolorum quia, fuga ad praesentium doloremque dolorem velit libero saepe consequuntur ut nostrum dicta! Reiciendis rerum sapiente impedit quod ea qui aspernatur dolore ad! Possimus iure quod, necessitatibus sint doloremque perspiciatis quidem voluptatibus?",
      picture:"/assets/titan.png",
      smallInfo:"Lorem ipsum dolor sit amet",
      cartAdded: false
    }
          
  ]
}
