import React, { useState } from "react"
import {
  PhotoIcon,
  UserIcon,
  CalendarIcon,
  MapPinIcon,
  InformationCircleIcon,
  CheckIcon,
} from "@heroicons/react/24/outline"
import {
  Container,
  Form,
  Title,
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
} from "./register.styles"

const Register = () => {
  const [formData, setFormData] = useState({
    topic: "",
    image: "",
    description: {
      about: "",
      learnings: ["", "", ""],
      speaker: {
        title: "",
        experience: [""],
      },
    },
    speaker: {
      image: "",
      name: "",
      role: "",
      location: "",
      flag: "",
    },
    eventDetails: {
      startsOn: "",
      endsOn: "",
      venue: "",
    },
    schedule: {
      day: "",
      date: "",
      month: "",
      time: "",
    },
    disclaimer: "",
    registrations: 0,
  })

  const [errors, setErrors] = useState({})
  const [currentStep, setCurrentStep] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleNestedChange = (e, parent, index = null) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        [name]:
          index !== null
            ? [...prevState[parent][name].slice(0, index), value, ...prevState[parent][name].slice(index + 1)]
            : value,
      },
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.topic) newErrors.topic = "Topic is required"
    if (!formData.description.about) newErrors.about = "About section is required"
    if (!formData.speaker.name) newErrors.speakerName = "Speaker name is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your backend
    }
  }

  const nextStep = () => {
    if (validateStepCompletion(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const validateStepCompletion = (step) => {
    switch (step) {
      case 1:
        return formData.topic && formData.image
      case 2:
        return formData.description.about && formData.description.learnings.some((learning) => learning)
      case 3:
        return formData.speaker.name && formData.speaker.role
      case 4:
        return true // Event details are now optional
      default:
        return false
    }
  }

  const isStepCompleted = (step) => {
    return validateStepCompletion(step)
  }

  const steps = [
    { number: 1, title: "Basic Info" },
    { number: 2, title: "Description" },
    { number: 3, title: "Speaker" },
    { number: 4, title: "Event Details" },
  ]

  return (
    <Container>
      <Title>Create a New Workshop</Title>
      <Subtitle>Fill in the details to set up your workshop</Subtitle>

      <ProgressBar currentStep={currentStep}>
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <ProgressStep
              active={currentStep === step.number}
              completed={currentStep > step.number || isStepCompleted(step.number)}
            >
              {currentStep > step.number || isStepCompleted(step.number) ? (
                <CheckIcon className="w-6 h-6" />
              ) : (
                <StepNumber>{step.number}</StepNumber>
              )}
              <span className="step-title">{step.title}</span>
            </ProgressStep>
            {index < steps.length - 1 && (
              <StepConnector completed={currentStep > step.number || isStepCompleted(step.number)} />
            )}
          </React.Fragment>
        ))}
      </ProgressBar>

      <Form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <FormSection>
            <FormSectionTitle>Basic Information</FormSectionTitle>
            <InputGroup>
              <Label htmlFor="topic">Workshop Topic</Label>
              <InputWrapper>
                <Icon>
                  <InformationCircleIcon className="w-5 h-5" />
                </Icon>
                <Input
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  placeholder="e.g., Introduction to Machine Learning"
                />
              </InputWrapper>
              {errors.topic && <ErrorMessage>{errors.topic}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="image">Workshop Image URL</Label>
              <InputWrapper>
                <Icon>
                  <PhotoIcon className="w-5 h-5" />
                </Icon>
                <Input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/workshop-image.jpg"
                />
              </InputWrapper>
            </InputGroup>
          </FormSection>
        )}

        {currentStep === 2 && (
          <FormSection>
            <FormSectionTitle>Workshop Description</FormSectionTitle>
            <InputGroup>
              <Label htmlFor="about">About the Workshop</Label>
              <TextArea
                id="about"
                name="about"
                value={formData.description.about}
                onChange={(e) => handleNestedChange(e, "description")}
                placeholder="Provide a brief description of your workshop..."
              />
              {errors.about && <ErrorMessage>{errors.about}</ErrorMessage>}
            </InputGroup>

            {formData.description.learnings.map((learning, index) => (
              <InputGroup key={index}>
                <Label htmlFor={`learning-${index}`}>Key Learning {index + 1}</Label>
                <Input
                  type="text"
                  id={`learning-${index}`}
                  name="learnings"
                  value={learning}
                  onChange={(e) => handleNestedChange(e, "description", index)}
                  placeholder={`e.g., Understanding ${
                    index === 0 ? "basic" : index === 1 ? "intermediate" : "advanced"
                  } concepts`}
                />
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
                  <UserIcon className="w-5 h-5" />
                </Icon>
                <Input
                  type="text"
                  id="speakerName"
                  name="name"
                  value={formData.speaker.name}
                  onChange={(e) => handleNestedChange(e, "speaker")}
                  placeholder="John Doe"
                />
              </InputWrapper>
              {errors.speakerName && <ErrorMessage>{errors.speakerName}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="speakerRole">Speaker Role</Label>
              <InputWrapper>
                <Icon>
                  <UserIcon className="w-5 h-5" />
                </Icon>
                <Input
                  type="text"
                  id="speakerRole"
                  name="role"
                  value={formData.speaker.role}
                  onChange={(e) => handleNestedChange(e, "speaker")}
                  placeholder="e.g., Senior Data Scientist"
                />
              </InputWrapper>
            </InputGroup>
          </FormSection>
        )}

        {currentStep === 4 && (
          <FormSection>
            <FormSectionTitle>Event Details (Optional)</FormSectionTitle>
            <InputGroup>
              <Label htmlFor="startsOn">Start Date</Label>
              <InputWrapper>
                <Icon>
                  <CalendarIcon className="w-5 h-5" />
                </Icon>
                <Input
                  type="date"
                  id="startsOn"
                  name="startsOn"
                  value={formData.eventDetails.startsOn}
                  onChange={(e) => handleNestedChange(e, "eventDetails")}
                />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="endsOn">End Date</Label>
              <InputWrapper>
                <Icon>
                  <CalendarIcon className="w-5 h-5" />
                </Icon>
                <Input
                  type="date"
                  id="endsOn"
                  name="endsOn"
                  value={formData.eventDetails.endsOn}
                  onChange={(e) => handleNestedChange(e, "eventDetails")}
                />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="venue">Venue</Label>
              <InputWrapper>
                <Icon>
                  <MapPinIcon className="w-5 h-5" />
                </Icon>
                <Input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.eventDetails.venue}
                  onChange={(e) => handleNestedChange(e, "eventDetails")}
                  placeholder="e.g., Tech Conference Center, New York"
                />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="disclaimer">Disclaimer</Label>
              <TextArea
                id="disclaimer"
                name="disclaimer"
                value={formData.disclaimer}
                onChange={handleChange}
                placeholder="Any additional information or requirements..."
              />
            </InputGroup>
          </FormSection>
        )}

        <ButtonGroup>
          {currentStep > 1 && (
            <Button type="button" onClick={prevStep} variant="outline">
              Previous
            </Button>
          )}
          {currentStep < 4 ? (
            <Button type="button" onClick={nextStep} disabled={!validateStepCompletion(currentStep)}>
              Next
            </Button>
          ) : (
            <Button type="submit">Create Workshop</Button>
          )}
        </ButtonGroup>
      </Form>
    </Container>
  )
}

export default Register

