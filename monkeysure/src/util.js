import { homeInsuanceForm, carInsuanceForm, lifeInsuanceForm, phoneInsuanceForm, funeralInsuanceForm, travelInsuanceForm, healthInsuanceForm } from './components/PageHeader/form-config';


export const formToRender = (category) => {
  switch (category) {
    case 'cars':
      return carInsuanceForm;
    case 'home':
      return homeInsuanceForm;
    case 'life':
      return lifeInsuanceForm;
    case 'phone':
      return phoneInsuanceForm;
    case 'funeral':
      return funeralInsuanceForm;
    case 'travel':
      return travelInsuanceForm;
    case 'health':
        return healthInsuanceForm;
    default:
      return {}
  }
}