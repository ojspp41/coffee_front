import './CategoryItem.css'

const CategoryItem = ({data}) => {
  return(
    <div className='categoryItem'>
      <img src= {data.img} className='catImg' />
      <div className="catInfo">
        <div className="catTitle">
          {data.title}
          </div>
        <button className='catBtn'>BUY NOW</button>
        
      </div>
    </div>
  )
}

export default CategoryItem;