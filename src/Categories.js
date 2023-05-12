import React from 'react'

const Categories = (props) => {
	// const filterItems = props.filterItems
	const categories = props.categories;
	
		return(
		<div className='btn-container'>
			{
				categories.map((category)=>{
					
return (
<button className='filter-btn' onClick={() => props.filterItems(category)}>{category}</button>)

				})
			}
			{/* <button className='filter-btn' onClick={() => props.filterItems('all')}>All</button>
			<button className='filter-btn' onClick={() => props.filterItems('breakfast')}>Breakfast</button>
			<button className='filter-btn' onClick={() => props.filterItems('shakes')}>Shakes</button> */}
		</div>)
	// )
}

export default Categories
