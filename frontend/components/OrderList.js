import React, { useState } from 'react'
import { useGetHistoryQuery } from '../state/pizzaApi'

export default function OrderList() {
  const { data: orders } = useGetHistoryQuery()
  const [filteredSize, setFilteredSize] = useState('All')
  
  const filteredOrders = filteredSize === 'All' ? orders : orders?.filter(order => order.size === filteredSize)

  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          filteredOrders?.map(order => {
            return (
              <li key={order.id}>
                <div>
                {order.customer} ordered a size {order.size} with {order.toppings ? (order.toppings.length > 0 ? `${order.toppings.length} topping${order.toppings.length !== 1 ? 's' : ''}` : 'no toppings') : 'no toppings'}
                </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const className = `button-filter${size === 'All' ? ' active' : ''}`
            return <button
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}
              onClick={() => setFilteredSize(size)}
              >{size}</button>
          })
        }
      </div>
    </div>
  )
}
