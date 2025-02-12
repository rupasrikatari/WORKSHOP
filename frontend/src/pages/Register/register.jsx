"use client"

import React, { useState, useCallback } from "react"
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
  AddButton,
  RemoveButton,
  OptionalText,
} from "./register.styles"

import { registerWorkshop } from "../../services/api"

const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false) // Added state for submission status
  const [currentStep, setCurrentStep] = useState(1) // Added state for current step
  const [completedSteps, setCompletedSteps] = useState([]) // Added state for completed steps

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      topic: "",
      image: "",
      about: [""],
      whatWillYouGain: [""],
      aboutInstructor: [""],
      masterClassFor: [""],
      testimonials: [],
      startDateTime: "",
      endDateTime: "",
      targetingUsers: [],
      venue: {
        mode: "online",
        address: "",
      },
    },
  })

  const watchAllFields = watch()

  const {
    fields: aboutFields,
    append: appendAbout,
    remove: removeAbout,
  } = useFieldArray({
    control,
    name: "about",
  })

  const {
    fields: whatWillYouGainFields,
    append: appendWhatWillYouGain,
    remove: removeWhatWillYouGain,
  } = useFieldArray({
    control,
    name: "whatWillYouGain",
  })

  const {
    fields: aboutInstructorFields,
    append: appendAboutInstructor,
    remove: removeAboutInstructor,
  } = useFieldArray({
    control,
    name: "aboutInstructor",
  })

  const {
    fields: masterClassForFields,
    append: appendMasterClassFor,
    remove: removeMasterClassFor,
  } = useFieldArray({
    control,
    name: "masterClassFor",
  })

  const {
    fields: learningFields,
    append: appendLearning,
    remove: removeLearning,
  } = useFieldArray({
    control,
    name: "learnings",
  })

  const {
    fields: roleFields,
    append: appendRole,
    remove: removeRole,
  } = useFieldArray({
    control,
    name: "speaker.roles",
  })

  const onSubmit = useCallback(
    async (data) => {
      setIsLoading(true)
      setApiError(null)

      try {
        const workshopData = {
          topic: data.topic,
          image: data.image,
          about: data.about.filter((item) => item.trim() !== ""),
          whatWillYouGain: data.whatWillYouGain.filter((item) => item.trim() !== ""),
          aboutInstructor: data.aboutInstructor.filter((item) => item.trim() !== ""),
          masterClassFor: data.masterClassFor.filter((item) => item.trim() !== ""),
          testimonials: data.testimonials,
          startDateTime: data.startDateTime,
          endDateTime: data.endDateTime,
          targetingUsers: data.targetingUsers,
          venue: data.venue,
        }

        const result = await registerWorkshop(workshopData)
        setSubmitSuccess(true)
        setIsSubmitted(true)
        reset()
      } catch (error) {
        console.error("Error registering the workshop:", error)
        const errorMessage = error.response?.data?.message || error.message || "Failed to register workshop"
        setApiError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    },
    [reset],
  )

  const validateStepCompletion = (step) => {
    switch (step) {
      case 1:
        return watchAllFields.topic && watchAllFields.image
      case 2:
        return (
          watchAllFields.about?.some((item) => item.trim() !== "") &&
          watchAllFields.whatWillYouGain?.some((item) => item.trim() !== "") &&
          watchAllFields.aboutInstructor?.some((item) => item.trim() !== "") &&
          watchAllFields.masterClassFor?.some((item) => item.trim() !== "")
        )
      case 3:
        return watchAllFields.speaker.name && watchAllFields.speaker.roles.some((role) => role.title.trim() !== "")
      case 4:
        return true
      default:
        return false
    }
  }

  const nextStep = () => {
    if (validateStepCompletion(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps((prev) => [...prev, currentStep])
      }
      setCurrentStep((prev) => Math.min(prev + 1, 4))
      setApiError(null)
    }
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

  if (submitSuccess) {
    return (
      <Container>
        <Title>Workshop Created Successfully!</Title>
        <Button
          onClick={() => {
            setSubmitSuccess(false)
            setIsSubmitted(false)
          }}
        >
          Create Another Workshop
        </Button>
      </Container>
    )
  }

  const FieldArray = ({ fields, name, label, register, append, remove, errors }) => (
    <>
      {fields.map((field, index) => (
        <InputGroup key={field.id}>
          <Label htmlFor={`${name}-${index}`}>
            {label} {index + 1}
          </Label>
          <InputWrapper>
            <TextArea
              id={`${name}-${index}`}
              {...register(`${name}.${index}`, {
                required: `${label} is required`,
                minLength: { value: 10, message: `${label} must be at least 10 characters` },
              })}
              placeholder={`Provide ${label.toLowerCase()}...`}
            />
            {index > 0 && (
              <RemoveButton type="button" onClick={() => remove(index)}>
                <FontAwesomeIcon icon={faTimes} />
              </RemoveButton>
            )}
          </InputWrapper>
          {errors?.[index] && <ErrorMessage>{errors[index].message}</ErrorMessage>}
        </InputGroup>
      ))}
      <AddButton type="button" onClick={() => append("")}>
        <FontAwesomeIcon icon={faPlus} /> Add {label}
      </AddButton>
    </>
  )

  return (
    <Container>
      <Title>Create a New Workshop</Title>
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
              <Label htmlFor="topic">Workshop Topic</Label>
              <InputWrapper>
                <Icon>
                  <FontAwesomeIcon icon={faInfoCircle} />
                </Icon>
                <Input
                  type="text"
                  id="topic"
                  {...register("topic", { required: "Topic is required" })}
                  placeholder="e.g., Introduction to Machine Learning"
                />
              </InputWrapper>
              {errors.topic && <ErrorMessage>{errors.topic.message}</ErrorMessage>}
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
            <FormSectionTitle>Workshop Description</FormSectionTitle>
            {/* About section */}
            <FieldArray
              fields={aboutFields}
              name="about"
              label="About the Workshop"
              register={register}
              append={appendAbout}
              remove={removeAbout}
              errors={errors.about}
            />

            {/* What Will You Gain section */}
            <FieldArray
              fields={whatWillYouGainFields}
              name="whatWillYouGain"
              label="What Will You Gain"
              register={register}
              append={appendWhatWillYouGain}
              remove={removeWhatWillYouGain}
              errors={errors.whatWillYouGain}
            />

            {/* About Instructor section */}
            <FieldArray
              fields={aboutInstructorFields}
              name="aboutInstructor"
              label="About the Instructor"
              register={register}
              append={appendAboutInstructor}
              remove={removeAboutInstructor}
              errors={errors.aboutInstructor}
            />

            {/* Master Class For section */}
            <FieldArray
              fields={masterClassForFields}
              name="masterClassFor"
              label="Master Class For"
              register={register}
              append={appendMasterClassFor}
              remove={removeMasterClassFor}
              errors={errors.masterClassFor}
            />
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
              <InputGroup key={field.id}>
                <Label htmlFor={`speakerRole-${index}`}>Speaker Role {index + 1}</Label>
                <InputWrapper>
                  <Icon>
                    <FontAwesomeIcon icon={faUser} />
                  </Icon>
                  <Input
                    type="text"
                    id={`speakerRole-${index}`}
                    {...register(`speaker.roles.${index}.title`, { required: "Role is required" })}
                    placeholder="e.g., Senior Data Scientist"
                  />
                  <RemoveButton type="button" onClick={() => removeRole(index)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </RemoveButton>
                </InputWrapper>
                {errors.speaker?.roles?.[index]?.title && (
                  <ErrorMessage>{errors.speaker.roles[index].title.message}</ErrorMessage>
                )}
              </InputGroup>
            ))}
            <AddButton type="button" onClick={() => appendRole({ title: "" })}>
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
              <Label htmlFor="startDateTime"></Label>
              <InputWrapper>
                <Icon>
                  <FontAwesomeIcon icon={faCalendar} />
                </Icon>
                <Input
                  type="datetime-local"
                  id="startDateTime"
                  {...register("startDateTime", { required: "" })}
                />
              </InputWrapper>
              {errors.startDateTime && <ErrorMessage>{errors.startDateTime.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="endDateTime">End Date and Time</Label>
              <InputWrapper>
                <Icon>
                  <FontAwesomeIcon icon={faCalendar} />
                </Icon>
                <Input
                  type="datetime-local"
                  id="endDateTime"
                  {...register("endDateTime", { required: "" })}
                />
              </InputWrapper>
              {errors.endDateTime && <ErrorMessage>{errors.endDateTime.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="targetingUsers">Targeting Users</Label>
              <InputWrapper>
                <select
                  multiple
                  id="targetingUsers"
                  {...register("targetingUsers", { required: "" })}
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
            <Button type="button" onClick={nextStep} disabled={!validateStepCompletion(currentStep) || isLoading}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating Workshop..." : "Create Workshop"}
            </Button>
          )}
        </ButtonGroup>
      </Form>
    </Container>
  )
}

export default Register

