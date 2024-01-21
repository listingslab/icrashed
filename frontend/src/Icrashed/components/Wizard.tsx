import * as React from "react"
import {
  Box,
  Paper,
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
                  <Font>Last step</Font>
                ) : null
              }
            >
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

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    <Font>
                      {index === wizardSteps.length - 1 ? 'Finish' : 'Next step'}
                    </Font>
                  </Button>
                  
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === wizardSteps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Font variant="title">
            Thanks
          </Font>
          <IconButton
            onClick={handleReset} 
            sx={{ mt: 1, mr: 1 }}>
            <Icon icon="reset" />
          </IconButton>
        </Paper>
      )}
    </Box>
  );
}
