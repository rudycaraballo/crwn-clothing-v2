const App = () => {
  const directory = [
    {
      id: 1,
      title:'Hat'
    }
  ]
  return (
    <div className='categories-container'>
      {directory.map(({title}) => {
        return(
          <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
        )
      })}
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Hats</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Jackets</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Sneakers</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Womens</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Mens</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default App;
