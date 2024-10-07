import { TextCustom } from '../Components/TextCustom';
import logo from '../Resources/Images/logo.png';

const MissionAndVision = () => {

  const titleMission = 'misión';
  const titleVision = 'visión';
  const atrTitle = {

    fontSize: '23px',
    fontWeight: 'bold',
    textTransform: 'Capitalize',
    color:  `red`,
    textAlign: 'center'
  }
  const atrSummary = {
    fontSize: '16px',
    lineHeight: '23px',
    textAlign: 'justify',
    marginTop: '15px'
  }
  
  return (
    <div id='MissionAndVision'>
      <div  className='mx-16 pt-14 pb-8'>
      <div className='flex justify-center img-logo items-center'>
        <img src={logo} alt='logo' className='h-36'/>
      </div>
      <div className='container mx-auto gap-10 columns-2'>
        <TextCustom title={titleMission}
          lineTitle={true}
          titlePosition='center'
          linePosition='center'
          >
          Facilitar el éxito comercial al conectar de manera efectiva a vendedores y compradores, ofreciendo soluciones personalizadas que maximicen los beneficios para los vendedores. Nos comprometemos a proporcionar un servicio de intermediación transparente y eficiente, utilizando tecnología avanzada y un profundo conocimiento del mercado para asegurar que cada transacción sea beneficiosa y satisfactoria.
        </TextCustom>

        <TextCustom title={titleVision}
          lineTitle={true}
          titlePosition='center'
          linePosition='center'
          >
          Ser la plataforma líder en intermediación comercial, reconocida por nuestra capacidad para transformar el mercado mediante la conexión efectiva y personalizada entre vendedores y compradores. Aspiramos a crear un ecosistema de negocios en el que cada transacción no solo cumpla con las expectativas, sino que las supere, utilizando tecnología innovadora y un entendimiento profundo del mercado para impulsar el éxito y la satisfacción de todos nuestros clientes.
        </TextCustom>
      </div>
    </div>
    </div>
  )
}

export { MissionAndVision };