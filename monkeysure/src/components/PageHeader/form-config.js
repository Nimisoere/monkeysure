export const phoneInsuanceForm = {
  header: 'Personal Information',
  description: 'Please fill out the form to get accurate quotes. You can skip this step by entering your ID Number',
  leadtext: 'Phone Insurance',
  subtext: 'easy as you like',
  action: () => null,
  fields: [
    {
      label: 'Firstname',
      placeholder: 'Enter your Firstname',
      type: 'text',
      span: 6
    },
    {
      label: 'Lastname',
      placeholder: 'Enter your Lastname',
      type: 'text',
      span: 6
    },
    {
      label: 'Date of birth',
      type: 'date',
      span: 6
    },
    {
      label: 'Gender',
      placeholder: 'M/F',
      type: 'select',
      span: 6,
      options: [
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
      ]
    },
    {
      label: 'Email',
      placeholder: 'Enter your primary email address',
      type: 'email',
      span: 12
    },
    {
      label: 'Phone number',
      placeholder: 'Enter your phone number',
      type: 'phone',
      span: 6
    },
  ]
}

export const homeInsuanceForm = {
  header: 'Personal Information',
  description: 'Please fill out the form to get accurate quotes. You can skip this step by entering your ID Number',
  leadtext: 'Home Insurance',
  subtext: 'in simple steps',
  action: () => null,
  fields: [
    {
      label: 'Firstname',
      placeholder: 'Enter your Firstname',
      type: 'text',
      span: 6
    },
    {
      label: 'Lastname',
      placeholder: 'Enter your Lastname',
      type: 'text',
      span: 6
    },
    {
      label: 'Date of birth',
      type: 'date',
      span: 6
    },
    {
      label: 'Marital Status',
      placeholder: 'Please select',
      type: 'select',
      span: 6,
      options: [
        {label: 'Single', value: 'single'},
        {label: 'Married', value: 'married'},
        {label: 'Divorced', value: 'divorced'}
      ]
    },
    {
      label: 'Property type',
      placeholder: 'Please select',
      type: 'select',
      span: 6,
      options: [
        {label: 'Rental', value: 'rental'},
        {label: 'Primary Address', value: 'home'}
      ]
    },
    {
      label: 'Building purpose',
      placeholder: 'Please select',
      type: 'select',
      span: 6,
      options: [
        {label: 'Rental', value: 'rental'},
        {label: 'Primary Address', value: 'home'}
      ]
    },
    {
      label: 'Ownership status',
      placeholder: 'Please select',
      type: 'select',
      span: 6,
      options: [
        {label: 'Rental', value: 'rental'},
        {label: 'Primary Address', value: 'home'}
      ]
    },
    {
      label: 'Cover required',
      placeholder: 'Please select',
      type: 'select',
      span: 6,
      options: [
        {label: 'Rental', value: 'rental'},
        {label: 'Primary Address', value: 'home'}
      ]
    },
    {
      label: 'Building Value',
      type: 'money',
      span: 6
    },
    {
      label: 'Home contents value',
      type: 'money',
      span: 6
    },
    {
      label: 'Email',
      placeholder: 'Enter your primary email address',
      type: 'email',
      span: 12
    },
    {
      label: 'Phone number',
      placeholder: 'Enter your phone number',
      type: 'phone',
      span: 6
    },
    {
      label: 'Propery address',
      placeholder: 'Enter address',
      type: 'text',
      span: 6
    }
  ]
}

export const funeralInsuanceForm = {
  header: 'Personal Information',
  description: 'Please fill out the form to get accurate quotes. You can skip this step by entering your ID Number',
  leadtext: 'Funeral Insurance',
  subtext: 'quotes made easy',
  action: () => null,
  fields: [
    {
      label: 'Firstname',
      placeholder: 'Enter your Firstname',
      type: 'text',
      span: 6
    },
    {
      label: 'Lastname',
      placeholder: 'Enter your Lastname',
      type: 'text',
      span: 6
    },
    {
      label: 'Date of birth',
      type: 'date',
      span: 6
    },
    {
      label: 'Marital Status',
      placeholder: 'Please select',
      type: 'select',
      span: 6,
      options: [
        {label: 'Single', value: 'single'},
        {label: 'Married', value: 'married'},
        {label: 'Divorced', value: 'divorced'}
      ]
    },
    {
      label: 'Email',
      placeholder: 'Enter your primary email address',
      type: 'email',
      span: 12
    },
    {
      label: 'Phone number',
      placeholder: 'Enter your phone number',
      type: 'phone',
      span: 6
    },
    {
      label: 'Gender',
      placeholder: 'M/F',
      type: 'select',
      span: 6,
      options: [
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
      ]
    },
  ]
}

export const lifeInsuanceForm = {
  header: 'Personal Information',
  description: 'Please fill out the form to get accurate quotes. You can skip this step by entering your ID Number',
  leadtext: 'Life Insurance',
  subtext: 'made easy',
  action: () => null,
  fields: [
    {
      label: 'Firstname',
      placeholder: 'Enter your Firstname',
      type: 'text',
      span: 6
    },
    {
      label: 'Lastname',
      placeholder: 'Enter your Lastname',
      type: 'text',
      span: 6
    },
    {
      label: 'Date of birth',
      type: 'date',
      span: 6
    },
    {
      label: 'Gender',
      placeholder: 'M/F',
      type: 'select',
      span: 6,
      options: [
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
      ]
    },
    {
      label: 'Marital Status',
      placeholder: 'Please select',
      type: 'select',
      span: 6,
      options: [
        {label: 'Single', value: 'single'},
        {label: 'Married', value: 'married'},
        {label: 'Divorced', value: 'divorced'}
      ]
    },
    {
      label: 'Gross monthly income',
      type: 'money',
      span: 6
    },
    {
      label: 'Highest academic level',
      placeholder: 'Please select',
      type: 'select',
      span: 6,
      options: [
        {label: 'Bachelors', value: 'bsc'},
        {label: 'Masters', value: 'msc'}
      ]
    },
    {
      label: 'Do you smoke?',
      placeholder: 'Please select',
      type: 'select',
      span: 6,
      options: [
        {label: 'Yes', value: true},
        {label: 'No', value: false}
      ]
    },
    {
      label: 'Email',
      placeholder: 'Enter your primary email address',
      type: 'email',
      span: 12
    },
    {
      label: 'Phone number',
      placeholder: 'Enter your phone number',
      type: 'phone',
      span: 6
    },
    {
      label: 'Propery address',
      placeholder: 'Enter address',
      type: 'text',
      span: 6
    },
  ]
}

export const carInsuanceForm = {
  header: 'Personal Information',
  description: 'Please fill out the form to get accurate quotes. You can skip this step by entering your ID Number',
  leadtext: 'Car Insurance',
  subtext: 'in 2 simple steps',
  action: () => null,
  fields: [
    {
      label: 'Firstname',
      placeholder: 'Enter your Firstname',
      type: 'text',
      span: 6
    },
    {
      label: 'Lastname',
      placeholder: 'Enter your Lastname',
      type: 'text',
      span: 6
    },
    {
      label: 'Date of birth',
      type: 'date',
      span: 6
    },
    {
      label: 'Phone number',
      placeholder: 'Enter your phone number',
      type: 'phone',
      span: 6
    },
    {
      label: 'Address',
      placeholder: 'Enter your home address',
      type: 'email',
      span: 12
    },
    {
      label: 'Email',
      placeholder: 'Enter your primary email address',
      type: 'email',
      span: 12
    },
    {
      label: 'Gender',
      placeholder: 'M/F',
      type: 'select',
      span: 6,
      options: [
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
      ]
    },
  ]
}

export const travelInsuanceForm = {
  header: 'Personal Information',
  description: 'Please fill out the form to get accurate quotes. You can skip this step by entering your ID Number',
  leadtext: 'Travel Insurance',
  subtext: 'Made easy',
  action: () => null,
  fields: [
    {
      label: 'Firstname',
      placeholder: 'Enter your Firstname',
      type: 'text',
      span: 6
    },
    {
      label: 'Lastname',
      placeholder: 'Enter your Lastname',
      type: 'text',
      span: 6
    },
    {
      label: 'Date of birth',
      type: 'date',
      span: 6
    },
    {
      label: 'Gender',
      placeholder: 'M/F',
      type: 'select',
      span: 6,
      options: [
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
      ]
    },
    {
      label: 'Email',
      placeholder: 'Enter your primary email address',
      type: 'email',
      span: 12
    },
    {
      label: 'Phone number',
      placeholder: 'Enter your phone number',
      type: 'phone',
      span: 6
    },
  ]
}

export const homeRadioButtons = {
  header: 'More anbout your home',
  description: 'Please note that all fields are mandatory',
  fields: [
    {
      label: 'Have you had a break-in at this address?',
      type: 'radio',
      span: 6,
      options: [
        {label: 'Yes', value: true},
        {label: 'No', value: false}
      ]
    },
    {
      label: 'Is your home occupied during working hours?',
      type: 'radio',
      options: [
        {label: 'Yes', value: true},
        {label: 'No', value: false}
      ]
    },
    {
      label: 'Do you have neighbours on all borders?',
      type: 'radio',
      options: [
        {label: 'Yes', value: true},
        {label: 'No', value: false}
      ]
    },
    {
      label: 'Do you have burglary bars on all windows?',
      type: 'radio',
      options: [
        {label: 'Yes', value: true},
        {label: 'No', value: false}
      ]
    },
    {
      label: 'Do you live in an access controlled estate?',
      type: 'radio',
      options: [
        {label: 'Yes', value: true},
        {label: 'No', value: false}
      ]
    },
    {
      label: 'Do you have a working alarm system?',
      type: 'radio',
      options: [
        {label: 'Yes', value: true},
        {label: 'No', value: false}
      ]
    }
  ]
}