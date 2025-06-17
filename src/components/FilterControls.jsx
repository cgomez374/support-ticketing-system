export default function FilterControls({ statusFilter, priorityFilter, setPriorityFilter, setStatusFilter }){
  const filters = [
    {
      name: 'status',
      value: statusFilter,
      options: [
        { value: 'all', label: 'all statuses' },
        { value: 'open', label: 'open' },
        { value: 'in-progress', label: 'in-progress' },
        { value: 'closed', label: 'closed' },
      ]
    },
    {
      name: 'priority',
      value: priorityFilter,
      options: [
        { value: 'all', label: 'all priorities' },
        { value: 'high', label: 'high' },
        { value: 'medium', label: 'medium' },
        { value: 'low', label: 'low' },
      ]
    }
  ]

  function setFilter(name, value){
    if(name === "status") setStatusFilter(value)
    if(name === "priority") setPriorityFilter(value)
  }
  return (
    <div className="">
      {
        filters.map(({ name, value, options }) => (
          <select 
            key={name} 
            name={name} 
            value={value}
            onChange={(e) => setFilter(name, e.target.value)}
          >
            {
              options.map(({label, value }) => (
                <option 
                  key={value} 
                  value={value}
                >
                  { label }
                </option>
              ))
            }
          </select>
        ))
      }
    </div>
  )
}