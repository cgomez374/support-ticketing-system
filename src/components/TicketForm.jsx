import { useState } from "react"
import { useSupportTicketContext } from "../context/TicketContext"
import { useAuthContext } from "../context/AuthContext"

export default function TicketForm() {
  const { currentUser } = useAuthContext()
  const { addNewTicket } = useSupportTicketContext()
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "low",
    username: currentUser.username,
    fullName: currentUser.fullName,
    email: currentUser.email,
    userId: currentUser.id,
    createdAt: ""
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
    addNewTicket(formData) 
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        title: "",
        description: "",
        status: "",
        priority: "low",
        createdAt: ""
      }
    })
  }

  return (
    <form className="col-center" onSubmit={handleFormSubmit}>
      <input 
        name="fullName"
        type="text" 
        placeholder="name"
        value={formData.fullName}
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
        name="title"
        type="text" 
        placeholder="title"
        value={formData.title}
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