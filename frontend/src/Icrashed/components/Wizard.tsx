import * as React from "react"
import {
  Box,
  Paper,
  Button,
  StepContent,
  StepLabel,
  Step,
  Stepper,
} from "@mui/material"
import {
  // Icon,
  Font,
  useIcrashedSelect,
  selectIcrashed,
} from "../"


export default function Wizard() {
  
  const icrashed = useIcrashedSelect(selectIcrashed)
  const {wizardSteps} = icrashed
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
        {wizardSteps.map((step: any, index: number) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Font variant="caption">Last step</Font>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Font>{step.description}</Font>
              <Box sx={{ mb: 2 }}>
                <div>

                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === wizardSteps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === wizardSteps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Font>All steps completed - you&apos;re finished</Font>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
