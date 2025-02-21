import React, { useState, useCallback, useEffect } from "react"
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faImage,
  faUser,
  faCalendar,
  faMapMarkerAlt,
  faInfoCircle,
  faCheck,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import { useForm, useFieldArray } from "react-hook-form"
import { Modal, ModalHeader, ModalBody, ModalFooter,Container,  Form
} from "./ModalStyles"
import {
  
  Subtitle,
  InputGroup,
  Label,
  Input,
  TextArea,
  Button,
  ErrorMessage,
  Icon,
  FormSection,
  FormSectionTitle,
  InputWrapper,
  ProgressBar,
  ProgressStep,
  StepNumber,
  ButtonGroup,
  StepConnector,
  AddButton,
  RemoveButton,
  OptionalText,
} from "../../pages/Register/register.styles"
import { getSpecificEvent, updateEvent } from "../../services/api"


const EditWorkshopModal = ({ isOpen, onClose, workshop, onUpdate,workshopId}) => {
 const [isLoading, setIsLoading] = useState(false)
   const [apiError, setApiError] = useState(null)
   const [submitSuccess, setSubmitSuccess] = useState(false)
   const [isSubmitted, setIsSubmitted] = useState(false)
   const [currentStep, setCurrentStep] = useState(1)
   const [completedSteps, setCompletedSteps] = useState([])
 
   const {
     register,
     control,
     handleSubmit,
     watch,
     reset,
     formState: { errors },
   } = useForm({
     defaultValues: {
       title: "",
       image: "",
       about: [{ text: "" }],
       whatWillYouGain: [{ text: "" }],
       aboutInstructor: [{ text: "" }],
       masterClassFor: [{ text: "" }],
       testimonials: [],
       startTime: "",
       endTime: "",
       targetingUsers: [],
       venue: {
         mode: "online",
         address: "",
       },
       speaker: {
         name: "",
         roles: [
           {
             title: "",
             description: ""
           }
         ]
       }
     },
   })
 

   useEffect(() => {
    if (!workshopId) return;

    const fetchEventDetails = async () => {
      try {
        setIsLoading(true);
        setApiError(null);
        const eventDetails = await getSpecificEvent(workshopId);
        if (eventDetails) {
          reset({
            ...eventDetails,
            startTime: eventDetails.startTime
              ? format(new Date(eventDetails.startTime), "yyyy-MM-dd'T'HH:mm")
              : "",
            endTime: eventDetails.endTime
              ? format(new Date(eventDetails.endTime), "yyyy-MM-dd'T'HH:mm")
              : "",
          });
        }
        if (eventDetails) {
          reset(eventDetails); // Prefill form with fetched data
        }
      } catch (error) {
        console.error("Failed to fetch event details:", error);
        setApiError("Failed to load workshop details.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchEventDetails();
  }, [workshopId, reset]);


  const onSubmit = useCallback(
    async (data) => {
      setIsLoading(true);
      setApiError(null);

      try {
        const updatedWorkshopData = {
          title: data.title,
          image: data.image,
          about: data.about.map((item) => item.text),
          whatWillYouGain: data.whatWillYouGain.map((item) => item.text),
          aboutInstructor: data.aboutInstructor.map((item) => item.text),
          masterClassFor: data.masterClassFor.map((item) => item.text),
          testimonials: data.testimonials,
          startTime: data.startTime,
          endTime: data.endTime,
          targetingUsers: data.targetingUsers,
          venue: data.venue,
          speaker: { name: data.speaker.name, roles: data.speaker.roles },
        };

        await updateEvent(workshopId, updatedWorkshopData);
        alert("Workshop updated successfully!");
        onClose();
      } catch (error) {
        console.error("Error updating the workshop:", error);
        setApiError(error.response?.data?.message || "Failed to update workshop");
      } finally {
        setIsLoading(false);
      }
    },
    [workshopId, onClose]
  );
  

   const {
     fields: roleFields,
     append: appendRole,
     remove: removeRole,
   } = useFieldArray({
     control,
     name: "speaker.roles",
   })
 
   const {
     fields: aboutFields,
     append: appendAbout,
     remove: removeAbout,
   } = useFieldArray({
     control,
     name: "about",
   })
 
   const {
     fields: gainFields,
     append: appendGain,
     remove: removeGain,
   } = useFieldArray({
     control,
     name: "whatWillYouGain",
   })
 
   const {
     fields: instructorFields,
     append: appendInstructor,
     remove: removeInstructor,
   } = useFieldArray({
     control,
     name: "aboutInstructor",
   })
 
   const {
     fields: classForFields,
     append: appendClassFor,
     remove: removeClassFor,
   } = useFieldArray({
     control,
     name: "masterClassFor",
   })
 
  //  const watchAllFields = watch()

 
  //  const validateStepCompletion = (step) => {
  //    switch (step) {
  //      case 1:
  //        return watchAllFields.title && watchAllFields.image
  //      case 2:
  //        return (
  //          watchAllFields.about?.some(item => item.text.trim() !== "") &&
  //          watchAllFields.whatWillYouGain?.some(item => item.text.trim() !== "") &&
  //          watchAllFields.aboutInstructor?.some(item => item.text.trim() !== "") &&
  //          watchAllFields.masterClassFor?.some(item => item.text.trim() !== "")
  //        )
  //      case 3:
  //        return (
  //          watchAllFields.speaker?.name && 
  //          watchAllFields.speaker?.roles?.some((role) => role.title.trim() !== "")
  //        )
  //      case 4:
  //        return true
  //      default:
  //        return false
  //    }
  //  }
 
   const nextStep = () => {
     
       if (!completedSteps.includes(currentStep)) {
         setCompletedSteps((prev) => [...prev, currentStep])
       }
       setCurrentStep((prev) => Math.min(prev + 1, 4))
       setApiError(null)
     }
   
 
   const prevStep = () => {
     setCurrentStep((prev) => Math.max(prev - 1, 1))
     setApiError(null)
   }
 
   const isStepCompleted = (step) => {
     if (step === 4) {
       return completedSteps.includes(step) && isSubmitted
     }
     return completedSteps.includes(step)
   }
 
   const steps = [
     { number: 1, title: "Basic Info" },
     { number: 2, title: "Description" },
     { number: 3, title: "Speaker" },
     { number: 4, title: "Event Details" },
   ]

  return (



    <Modal isOpen={isOpen}>
        <Container>
        <ModalHeader>Edit Workshop</ModalHeader>
        <Subtitle>Fill in the details to set up your workshop</Subtitle>
       
             {apiError && <ErrorMessage style={{ marginBottom: "1rem", textAlign: "center" }}>{apiError}</ErrorMessage>}
       
             <ProgressBar>
               {steps.map((step, index) => (
                 <React.Fragment key={step.number}>
                   <ProgressStep
                     active={(currentStep === step.number).toString()}
                     completed={isStepCompleted(step.number).toString()}
                   >
                     {isStepCompleted(step.number) ? (
                       <FontAwesomeIcon icon={faCheck} />
                     ) : (
                       <StepNumber active={(currentStep === step.number).toString()}>{step.number}</StepNumber>
                     )}
                     <span className="step-title">{step.title}</span>
                   </ProgressStep>
                   {index < steps.length - 1 && <StepConnector completed={isStepCompleted(step.number).toString()} />}
                 </React.Fragment>
               ))}
             </ProgressBar>
       
             <Form onSubmit={handleSubmit(onSubmit)}>
               {currentStep === 1 && (
                 <FormSection>
                   <FormSectionTitle>Basic Information</FormSectionTitle>
                   <InputGroup>
                     <Label htmlFor="title">Workshop title</Label>
                     <InputWrapper>
                       <Icon>
                         <FontAwesomeIcon icon={faInfoCircle} />
                       </Icon>
                       <Input
                         type="text"
                         id="title"
                         {...register("title", { required: "title is required" })}
                         placeholder="e.g., Introduction to Machine Learning"
                       />
                     </InputWrapper>
                     {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
                   </InputGroup>
       
                   <InputGroup>
                     <Label htmlFor="image">Workshop Image URL</Label>
                     <InputWrapper>
                       <Icon>
                         <FontAwesomeIcon icon={faImage} />
                       </Icon>
                       <Input
                         type="text"
                         id="image"
                         {...register("image", { required: "Image URL is required" })}
                         placeholder="https://example.com/workshop-image.jpg"
                       />
                     </InputWrapper>
                     {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
                   </InputGroup>
                 </FormSection>
               )}
       
               {currentStep === 2 && (
                 <FormSection>                   
                   <FormSectionTitle>About the Workshop</FormSectionTitle>
                   {aboutFields.map((field, index) => (
                     <InputGroup key={field.id}>
                       <InputWrapper>
                         <TextArea
                           {...register(`about.${index}.text`, {
                             required: "About section is required",
                             minLength: { value: 10, message: "About must be at least 10 characters" },
                           })}
                           placeholder="Provide details about the workshop..."
                         />
                         {aboutFields.length > 1 && (
                           <RemoveButton type="button" onClick={() => removeAbout(index)}>
                             <FontAwesomeIcon icon={faTimes} />
                           </RemoveButton>
                         )}
                       </InputWrapper>
                       {errors.about?.[index]?.text && <ErrorMessage>{errors.about[index].text.message}</ErrorMessage>}
                     </InputGroup>
                   ))}
                   
       
                   <FormSectionTitle>What Will You Learn</FormSectionTitle>
                   {gainFields.map((field, index) => (
                     <InputGroup key={field.id}>
                       <InputWrapper>
                         <TextArea
                           {...register(`whatWillYouGain.${index}.text`, {
                             required: "Learning outcomes are required",
                             minLength: { value: 10, message: "Learning outcomes must be at least 10 characters" },
                           })}
                           placeholder="Describe what participants will learn..."
                         />
                         {gainFields.length > 1 && (
                           <RemoveButton type="button" onClick={() => removeGain(index)}>
                             <FontAwesomeIcon icon={faTimes} />
                           </RemoveButton>
                         )}
                       </InputWrapper>
                       {errors.whatWillYouGain?.[index]?.text && (
                         <ErrorMessage>{errors.whatWillYouGain[index].text.message}</ErrorMessage>
                       )}
                     </InputGroup>
                   ))}
                   <AddButton type="button" onClick={() => appendGain({ text: "" })}>
                     <FontAwesomeIcon icon={faPlus} /> Add Learning Outcome
                   </AddButton>
       
                   <FormSectionTitle>About the Instructor</FormSectionTitle>
                   {instructorFields.map((field, index) => (
                     <InputGroup key={field.id}>
                       <InputWrapper>
                         <TextArea
                           {...register(`aboutInstructor.${index}.text`, {
                             required: "Instructor information is required",
                             minLength: { value: 10, message: "Instructor information must be at least 10 characters" },
                           })}
                           placeholder="Provide information about the instructor..."
                         />
                         {instructorFields.length > 1 && (
                           <RemoveButton type="button" onClick={() => removeInstructor(index)}>
                             <FontAwesomeIcon icon={faTimes} />
                           </RemoveButton>
                         )}
                       </InputWrapper>
                       {errors.aboutInstructor?.[index]?.text && (
                         <ErrorMessage>{errors.aboutInstructor[index].text.message}</ErrorMessage>
                       )}
                     </InputGroup>
                   ))}
                   
       
                   <FormSectionTitle>Master Class For</FormSectionTitle>
                   {classForFields.map((field, index) => (
                     <InputGroup key={field.id}>
                       <InputWrapper>
                         <TextArea
                           {...register(`masterClassFor.${index}.text`, {
                             required: "Target audience information is required",
                             minLength: { value: 10, message: "Target audience information must be at least 10 characters" },
                           })}
                           placeholder="Describe who this master class is for..."
                         />
                         {classForFields.length > 1 && (
                           <RemoveButton type="button" onClick={() => removeClassFor(index)}>
                             <FontAwesomeIcon icon={faTimes} />
                           </RemoveButton>
                         )}
                       </InputWrapper>
                       {errors.masterClassFor?.[index]?.text && (
                         <ErrorMessage>{errors.masterClassFor[index].text.message}</ErrorMessage>
                       )}
                     </InputGroup>
                   ))}
                   
                 </FormSection>
               )}
       
               {currentStep === 3 && (
                 <FormSection>
                   <FormSectionTitle>Speaker Information</FormSectionTitle>
                   <InputGroup>
                     <Label htmlFor="speakerName">Speaker Name</Label>
                     <InputWrapper>
                       <Icon>
                         <FontAwesomeIcon icon={faUser} />
                       </Icon>
                       <Input
                         type="text"
                         id="speakerName"
                         {...register("speaker.name", { required: "Speaker name is required" })}
                         placeholder="John Doe"
                       />
                     </InputWrapper>
                     {errors.speaker?.name && <ErrorMessage>{errors.speaker.name.message}</ErrorMessage>}
                   </InputGroup>
       
                   {roleFields.map((field, index) => (
                     <div key={field.id}>
                       <InputGroup>
                         <Label htmlFor={`speakerRole-${index}`}>Speaker Role {index + 1}</Label>
                         <InputWrapper>
                           <Icon>
                             <FontAwesomeIcon icon={faUser} />
                           </Icon>
                           <Input
                             type="text"
                             id={`speakerRole-${index}`}
                             {...register(`speaker.roles.${index}.title`, { 
                               required: "Role title is required" 
                             })}
                             placeholder="e.g., Senior Data Scientist"
                           />
                           {roleFields.length > 1 && (
                             <RemoveButton type="button" onClick={() => removeRole(index)}>
                               <FontAwesomeIcon icon={faTimes} />
                             </RemoveButton>
                           )}
                         </InputWrapper>
                         {errors.speaker?.roles?.[index]?.title && (
                           <ErrorMessage>{errors.speaker.roles[index].title.message}</ErrorMessage>
                         )}
                       </InputGroup>
       
                       <InputGroup>
                         
                         <InputWrapper>
                           
                         </InputWrapper>
                         {errors.speaker?.roles?.[index]?.description && (
                           <ErrorMessage>{errors.speaker.roles[index].description.message}</ErrorMessage>
                         )}
                       </InputGroup>
                     </div>
                   ))}
       
                   <AddButton 
                     type="button" 
                     onClick={() => appendRole({ title: "", description: "" })}
                   >
                     <FontAwesomeIcon icon={faPlus} /> Add Role
                   </AddButton>
                 </FormSection>
               )}
       
               {currentStep === 4 && (
                 <FormSection>
                   <FormSectionTitle>
                     Event Details <OptionalText>(Optional)</OptionalText>
                   </FormSectionTitle>
                   <InputGroup>
                     <Label htmlFor="startTime">Start Date and Time</Label>
                     <InputWrapper>
                       <Icon>
                         <FontAwesomeIcon icon={faCalendar} />
                       </Icon>
                       <Input
                         type="datetime-local"
                         id="startTime"
                         {...register("startTime", { required: "Start date and time is required" })}
                       />
                     </InputWrapper>
                     {errors.startTime && <ErrorMessage>{errors.startTime.message}</ErrorMessage>}
                   </InputGroup>
       
                   <InputGroup>
                     <Label htmlFor="endTime">End Date and Time</Label>
                     <InputWrapper>
                       <Icon>
                         <FontAwesomeIcon icon={faCalendar} />
                       </Icon>
                       <Input
                         type="datetime-local"
                         id="endTime"
                         {...register("endTime", { required: "End date and time is required" })}
                       />
                     </InputWrapper>
                     {errors.endTime && <ErrorMessage>{errors.endTime.message}</ErrorMessage>}
                   </InputGroup>
       
                   <InputGroup>
                     <Label htmlFor="targetingUsers">Targeting Users</Label>
                     <InputWrapper>
                       <select
                         multiple
                         id="targetingUsers"
                         {...register("targetingUsers")}
                       >
                         <option value="College students">College students</option>
                         <option value="School students">School students</option>
                         <option value="Professionals">Professionals</option>
                         <option value="Government exam candidates">Government exam candidates</option>
                       </select>
                     </InputWrapper>
                     {errors.targetingUsers && <ErrorMessage>{errors.targetingUsers.message}</ErrorMessage>}
                   </InputGroup>
       
                   <InputGroup>
                     <Label htmlFor="venueMode">Venue Mode</Label>
                     <InputWrapper>
                       <select id="venueMode" {...register("venue.mode", { required: "Venue mode is required" })}>
                         <option value="online">Online</option>
                         <option value="offline">Offline</option>
                       </select>
                     </InputWrapper>
                     {errors.venue?.mode && <ErrorMessage>{errors.venue.mode.message}</ErrorMessage>}
                   </InputGroup>
       
                   <InputGroup>
                     <Label htmlFor="venueAddress">Venue Address</Label>
                     <InputWrapper>
                       <Icon>
                         <FontAwesomeIcon icon={faMapMarkerAlt} />
                       </Icon>
                       <Input
                         type="text"
                         id="venueAddress"
                         {...register("venue.address")}
                         placeholder="e.g., Tech Conference Center, New York"
                       />
                     </InputWrapper>
                   </InputGroup>
                 </FormSection>
               )}
       
               <ButtonGroup>
                 {currentStep > 1 && (
                   <Button type="button" onClick={prevStep} variant="outline" disabled={isLoading}>
                     Previous
                   </Button>
                 )}
                 {currentStep < 4 ? (
                   <Button type="button" onClick={nextStep}>
                     Next
                   </Button>
                 ) : (
                   <Button type="submit" disabled={isLoading} >
                     {isLoading ? "Saving Changes..." : "Save Changes "}
                   </Button>
                 )}
               </ButtonGroup>
             </Form>
             <ModalFooter>
        {/* <Button onClick={handleSubmit}>Save Changes</Button> */}
        <Button variant="destructive" onClick={onClose}>Cancel</Button>
      </ModalFooter>
           </Container>
    
    </Modal>
  )
}

export default EditWorkshopModal
