import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Container, Stack, Box, Button} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function FormTemplate(){
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.secondary',
    m: 1,
    border: 1,
    width: '35rem',
    height: '13rem',
    p: 4,
  };
  const common = {
    width: '30rem',
    height: '13rem',
    p: 2,
  };
    return(
        <div className="d-flex justify-content-center">
            <div>
                <div>
                    <Container maxWidth="sm">
                    <Box sx={{ ...commonStyles, borderRadius: '12px' }}>
                    <FormControl>
                    <FormLabel>MCQ *</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value="Option1" control={<Radio color="secondary" />} label="Option1" />
                        <FormControlLabel value="Option2" control={<Radio color="secondary" />} label="Option2" />
                        <FormControlLabel value="Option3" control={<Radio color="secondary" />} label="Option3" />
                    </RadioGroup>
                    </FormControl>
                    </Box>
                    </Container>
                </div>
                <div>
                    <Container maxWidth='sm'>
                        <Box sx={{ ...commonStyles, borderRadius: '12px' }}>
                        <FormGroup>
                        <FormLabel>Checkbox *</FormLabel>
                        <FormControlLabel  control={<Checkbox color="secondary" />} label="Option1" />
                        <FormControlLabel  control={<Checkbox color="secondary" />} label="Option2" />
                        <FormControlLabel  control={<Checkbox color="secondary" />} label="Option3" />
                        </FormGroup>
                        </Box>
                    </Container>
                </div>
                <div>
                    <Container maxWidth='sm'>
                        <Box sx={{ ...commonStyles, borderRadius: '12px', height: '8rem', p:3}}>
                        <FormLabel row>Short Answer *</FormLabel><br />
                        <TextField label="" defaultValue="Your answer" variant="standard" />
                        </Box>
                    </Container>
                </div>
                <div>
                    <Container maxWidth='sm'>
                        <Box sx={{ ...commonStyles, borderRadius: '12px', height: '8rem', p:3}}>
                        <FormLabel>ParaGraph *</FormLabel><br />
                        <TextField label="" defaultValue="Your answer" variant="standard" fullWidth/>
                        </Box>
                    </Container>
                </div>
                <div>
                    <Container maxWidth='sm'>
                        <Box sx={{ ...commonStyles, borderRadius: '12px', height: '7rem', p:2}}>
                        <FormLabel>Drop down *</FormLabel><br />
                        <FormControl>
                        <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value="">
                            Choose
                        </MenuItem>
                        <MenuItem value={10}>Option1</MenuItem>
                        <MenuItem value={20}>Option2</MenuItem>
                        <MenuItem value={30}>Option3</MenuItem>
                        </Select>
                        </FormControl>
                        </Box>
                    </Container>
                </div>
                <div>
                   <Container maxWidth='sm'>
                        <Box sx={{ ...commonStyles, borderRadius: '12px', height: '7rem', p:2}}>
                        <FormControl>
                        <FormLabel>File Upload*</FormLabel>
                        <span className='bi bi-upload'><input type='file' placeholder='Add file' /></span>
                        </FormControl>
                        </Box>
                   </Container>
                </div>
                <div>
                    <Container maxWidth='sm'>
                        <Box sx={{ ...commonStyles, borderRadius: '12px', height: '10rem', p:4}}>
                        <FormControl>
                        <FormLabel>Linear Scale*</FormLabel><br />
                        <Stack direction={'row'}  alignItems={'center'} justifyContent={'space-around'} spacing={4}>
                            <item> &nbsp;</item>
                            <item> 1</item>
                            <item> 2</item>
                            <item> 3</item>
                            <item> 4</item>
                            <item> 5</item>
                            <item> &nbsp;</item>
                        </Stack>
                        <Stack direction={'row'}  alignItems={'center'} justifyContent={'space-around'} spacing={4}>
                            <item>Worst</item>
                            <item>{<Radio color="secondary" />}</item>
                            <item>{<Radio color="secondary" />}</item>
                            <item>{<Radio color="secondary" />}</item>
                            <item>{<Radio color="secondary" />}</item>
                            <item>{<Radio color="secondary" />}</item>
                            <item>Best</item>
                        </Stack>
                        </FormControl>
                        </Box>
                    </Container>
                </div>
                <div>
                    <Container maxWidth='sm'>
                        <Box sx={{ ...commonStyles, borderRadius: '12px', height: '16rem', p:4}}>
                        <FormControl>
                        <FormLabel>Multi choice Grid*</FormLabel><br />
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={9}>
                            <FormLabel>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</FormLabel>
                            <FormLabel>Column 1</FormLabel>
                            <FormLabel>Column 2</FormLabel>
                            <FormLabel>Column 3</FormLabel>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={9}>
                            <FormLabel>Row 1</FormLabel>
                            <FormControlLabel control={<Radio color="secondary" />} />
                            <FormControlLabel control={<Radio color="secondary" />} />
                            <FormControlLabel control={<Radio color="secondary" />} />
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={9}>
                            <FormLabel>Row 2</FormLabel>
                            <FormControlLabel control={<Radio color="secondary" />} />
                            <FormControlLabel control={<Radio color="secondary" />} />
                            <FormControlLabel control={<Radio color="secondary" />} />
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={9}>
                            <FormLabel>Row 3</FormLabel>
                            <FormControlLabel control={<Radio color="secondary" />} />
                            <FormControlLabel control={<Radio color="secondary" />} />
                            <FormControlLabel control={<Radio color="secondary" />} />
                        </Stack>
                        </FormControl>
                        </Box>
                    </Container>
                </div>
                <div>
                    <Container maxWidth='sm'>
                        <Box sx={{ ...commonStyles, borderRadius: '12px', height: '16rem', p:4}}>
                        <FormControl>
                        <FormLabel>Tick box Grid*</FormLabel><br />
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={9}>
                            <FormLabel>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</FormLabel>
                            <FormLabel>Column 1</FormLabel>
                            <FormLabel>Column 2</FormLabel>
                            <FormLabel>Column 3</FormLabel>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={9}>
                            <FormLabel>Row 1</FormLabel>
                            <FormControlLabel control={<Checkbox color="secondary" />} />
                            <FormControlLabel control={<Checkbox color="secondary" />} />
                            <FormControlLabel control={<Checkbox color="secondary" />} />
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={9}>
                            <FormLabel>Row 2</FormLabel>
                            <FormControlLabel control={<Checkbox color="secondary" />} />
                            <FormControlLabel control={<Checkbox color="secondary" />} />
                            <FormControlLabel control={<Checkbox color="secondary" />} />
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={9}>
                            <FormLabel>Row 3</FormLabel>
                            <FormControlLabel control={<Checkbox color="secondary" />} />
                            <FormControlLabel control={<Checkbox color="secondary" />} />
                            <FormControlLabel control={<Checkbox color="secondary" />} />
                        </Stack>
                        </FormControl>
                        </Box>
                    </Container>
                </div>
                <div>
                <Container maxWidth="sm">
                <Box sx={{...common, }}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} >
                   <Button variant="contained" color="secondary" size="medium">Submit</Button>
                    <span className="progress w-50">
                        <span className="progress-bar text-bg-success" style={{width: "100%"}}></span>
                    </span>
                    <p color='secondary'>Page 1 of 1</p>  
                </Stack>
                </Box>
                </Container>
            </div>
            </div>
        </div>
    )
}