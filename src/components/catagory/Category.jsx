import './Category.css'
import {categories} from  '../../dummyData'
import CategoryItem from '../categoryyItem/CategoryItem'
const Category = () => {
  return(
    <div className='category'>
      {categories.map(data => (
        <CategoryItem data = {data} key={data.id}/>
      ))}
    </div>
  )
}

export default Category;