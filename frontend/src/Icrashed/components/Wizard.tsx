import * as React from "react"
import {
  Box,
  Button,
  IconButton,
  StepContent,
  StepLabel,
  Step,
  Stepper,
} from "@mui/material"
import {
  Icon,
  Font,
  useIcrashedSelect,
  selectIcrashed,
} from "../"


export default function Wizard() {
  
  const icrashed = useIcrashedSelect(selectIcrashed)
  const {wizard} = icrashed
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {wizard.map((step: any, index: number) => (
          <Step key={step.label}>
            <StepLabel>
              <Font variant="title">
                {step.label}
              </Font>
            </StepLabel>
            <StepContent>
              <Font>
                {step.description}
              </Font>
              <Box sx={{ mb: 2 }}>
                <div>

                  <IconButton
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    <Icon icon="left" />
                  </IconButton>

                  <IconButton
                    color="inherit"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}>
                    <Icon icon="right" />
                  </IconButton>
                  
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === wizard.length && (
          <>
            <Font variant="title">
              Thanks
            </Font>
            <Button
              variant="outlined"
              onClick={handleReset} 
              sx={{ mt: 1, mr: 1 }}>
                <Font>
                  Reset?
                </Font>
            </Button>
          </>
      )}
    </Box>
  );
}
