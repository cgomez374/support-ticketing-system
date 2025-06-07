export default function FilterControls({ filters, setFilter }){
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
              options.map(({ label, value }) => (
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