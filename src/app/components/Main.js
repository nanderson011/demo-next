// inside Main.js

import Card from './Card'

const cards = [
  {
    title: 'The Coldest Sunset',
    img: 'https://plus.unsplash.com/premium_photo-1754262068203-f44514952a2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZGVzdCUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
  },
  {
    title: 'The Warmest Sunset',
    img: 'https://images.unsplash.com/photo-1745829586157-1b920ad22923?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhcm1lc3QlMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400',
  },
  {
    title: 'The Coolest Ocean',
    img: 'https://images.unsplash.com/photo-1631994500983-0e6989fb4724?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdlbmVyaWMlMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400',
  },
]

export default function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.img} />
        ))}
      </div>
    </main>
  )
}
