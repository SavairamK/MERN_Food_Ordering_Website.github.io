import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ url }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("ERROR....")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
    await fetchList()
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error('ERROR...')
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <div className="list add flex-col">
        <p className='available-food-text'>All Available Foods</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Delete</b>
          </div>
          {
            list.map((item, index) => {
              return (
                <>
                  <div className="list-table-format" key={index}>
                    <img src={`${url}/images/` + item.image} alt="" className="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>Rs.{item.price}</p>
                    <p onClick={() => removeFood(item._id)} className='delete-food'>Delete Food</p>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default List
