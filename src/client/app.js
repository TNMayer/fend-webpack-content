// functions/modules
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
// styles
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
// images
import previewLogo from './images/preview_logo.svg';

console.log(checkForName);

//include images
let headerLogo = document.getElementById('previewLogo');
headerLogo.src = previewLogo;