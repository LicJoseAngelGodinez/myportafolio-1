import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.webp';
import GreenCtgImg from '../images/greenctg.webp';
import CoinTrackerImg from '../images/cointracker.webp';
import CavinImg from '../images/cavinimg.webp';
import SUImg from '../images/salesup.webp';
import VMImg from '../images/vm.webp';
import VMServicesImg from '../images/vm-back-services.webp';
import VMPanelImg from '../images/vm-panel.webp';
import VMOffersImg from '../images/vm-back-offers.webp';

const projects = [
  {
    id: uuidv4(),
    name: 'SalesUp!',
    desc:
      'SalesUp!® el CRM en español usado por empresas en toda latinoamérica facilitas la interacción con tus clientes y mantienes el control de tus procesos',
    img: SUImg,
  },
  {
    id: uuidv4(),
    name: 'Visit Mexico',
    desc:
      'Portal de cara al mundo presentando los estados, atractivos, destinos, rutas y actividades que puedes realizar en todo el terriorio mexicano.',
    img: VMImg,
  },
  {
    id: uuidv4(),
    name: 'Proveedores de Servicios de VM',
    desc:
      'Acceso a los proveedores de servicios de hotelería, aviación, viajes, tourismo, restaurantes y transportes mediante un formulario para poder ofertarse en el sitio de VisitMexico.',
    img: VMServicesImg,
  },
  {
    id: uuidv4(),
    name: "CMS para VM",
    desc:
      'CMS diseñados para los manejos de contenidos de diferentes proyectos, entre ellos página principal de VisitMexico, Prestadores de servicios y Ofertas.',
    img: VMPanelImg,
  },
  {
    id: uuidv4(),
    name: 'Ofertas en VM',
    desc:
      'Registro rápido para landing de ofertas que se muestra en el sitio VisitMexico.',
    img: VMOffersImg,
  },
];

export default projects;
