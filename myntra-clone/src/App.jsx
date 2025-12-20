import React from 'react'
import Card from './components/Card'
import Header from './components/Header';
import categories from './data/categories';

const App = () => {

  return (
    <>
      <Header />
      <div className='flex gap-8 justify-center flex-wrap p-6 max-w-345 mx-auto'>
        {categories.map((e) => (
          <Card
            key={e.id}
            img={e.img}
            name={e.name}
            discount={e.discount}
          />
        ))}
      </div>
    </>
  )
}

export default App