import { useState } from "react"
import { useSupportTicketContext } from "../context/TicketContext"

export default function TicketForm() {
  const {setTicketList} = useSupportTicketContext()
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    subject: "",
    description: "",
    priority: "low"
  })

  function handleFormChange(e){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleFormSubmit(e){
    e.preventDefault()
    const id = crypto.randomUUID()
    setTicketList(prevTicketList => {
      return [
        ...prevTicketList,
        {
          ...formData,
          id,
          status: 'open'
        }
      ]
    })
    setFormData({
      userName: "",
      email: "",
      subject: "",
      description: "",
      priority: "low"
    })
  }

  return (
    <form className="col-center" onSubmit={handleFormSubmit}>
      <input 
        name="userName"
        type="text" 
        placeholder="name"
        value={formData.userName}
        onChange={handleFormChange}
      />  
      <input 
        name="email"
        type="email" 
        placeholder="email"
        value={formData.email}
        onChange={handleFormChange}
      />
      <input 
        name="subject"
        type="text" 
        placeholder="subject"
        value={formData.subject}
        onChange={handleFormChange}
      />
      <textarea 
        name="description"
        type="text" 
        placeholder="description"
        value={formData.description}
        onChange={handleFormChange}
      >
      </textarea>
      <select name="priority" onChange={handleFormChange} value={formData.priority}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button type="submit">submit</button>
    </form>
  )
}