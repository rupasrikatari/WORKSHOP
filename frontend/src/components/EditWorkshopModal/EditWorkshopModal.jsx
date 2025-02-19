import React, { useState, useEffect } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter,Button, Label, Input } from "./ModalStyles"

const EditWorkshopModal = ({ isOpen, onClose, workshop, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: "",
    startTime: "",
    endTime: "",
    venue: "",
    registrations: 0,
  })

  useEffect(() => {
    if (workshop) {
      setFormData({
        title: workshop.title || "",
        startTime: workshop.startTime || "",
        endTime: workshop.endTime || "",
        venue: workshop.venue?.address || "",
        registrations: workshop.registrations || 0,
      })
    }
  }, [workshop])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdate(workshop._id, formData)
    onClose() // Close the modal after updating
  }

  return (



    <Modal isOpen={isOpen}>
      <ModalHeader>Edit Workshop</ModalHeader>
      <ModalBody>
        <Label>Title</Label>
        <Input name="title" value={formData.title} onChange={handleChange} />

        <Label>Start Time</Label>
        <Input type="datetime-local" name="startTime" value={formData.startTime} onChange={handleChange} />

        <Label>End Time</Label>
        <Input type="datetime-local" name="endTime" value={formData.endTime} onChange={handleChange} />

        <Label>Venue</Label>
        <Input name="venue" value={formData.venue} onChange={handleChange} />

        <Label>Registrations</Label>
        <Input type="number" name="registrations" value={formData.registrations} onChange={handleChange} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSubmit}>Save Changes</Button>
        <Button variant="destructive" onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default EditWorkshopModal
