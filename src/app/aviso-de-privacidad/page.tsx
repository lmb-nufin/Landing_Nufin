
'use client';
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900">
              Aviso de Privacidad
            </h1>
            <p className="text-gray-500 font-medium">
              Última actualización: 1 de Agosto de 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              En virtud de lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de Particulares (“LFPDPPP”), su Reglamento, los Lineamientos del Aviso de Privacidad y las demás Disposiciones aplicables (en adelante denominados conjuntamente como la “Ley”), se emite el presente Aviso de Privacidad en los siguientes términos:
            </p>

            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. RESPONSABLE DE LOS DATOS PERSONALES.</h2>
              <p>
                Para efectos del presente aviso de privacidad Nufin México SAPI de CV (en lo sucesivo, “NUFIN”, “Responsable”, “nosotros”, “nuestros”, indistintamente) con domicilio en General Mariano Escobedo No. 550, Piso 4 ala “B”, Col. Anzures, Alcaldía Miguel Hidalgo CP. 11590, Ciudad de México, al momento de recabar tus datos personales (como se define más adelante), es responsable del uso y protección de los mismos, en los términos de la Ley de la obtención, divulgación, almacenamiento y/o uso, incluido acceso, manejo, aprovechamiento, transferencia o disposición (en adelante el “Tratamiento”) y, en general, de todos los datos personales que recabamos de nuestros clientes y usuarios (en adelante el(los) “Titular(es)”).
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. DATOS SOMETIDOS A TRATAMIENTO.</h2>
              <p>
                Conforme a lo anterior, te informamos que NUFIN obtendrá tus datos personales, ya sea de forma directa o indirecta, cuando realizas una solicitud y proporcionas tus datos personales para efectos de la prestación de los servicios de crédito que ofrece NUFIN, a través de nuestras diversas páginas de Internet (“Sitios Web”), Blog y/o aplicación nativa Android (“App”) (en conjunto, Sitios Web, blog y App, las “Plataformas”), vía telefónica, a través de un tercero o cualquier otro medio personal o electrónico.
              </p>
              <p>
                NUFIN sujeta a tratamiento tus siguientes Datos Personales obtenidos a través de los medios antes descritos:
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Datos de Identificación:</h3>
              <p>Nombre; apellido paterno; apellido materno; género; fecha de nacimiento; entidad federativa de nacimiento; estado civil; CURP; clave de elector o número de identificación de elector; INE; RFC.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Datos de Contacto:</h3>
              <p>Dirección de correo electrónico; número de teléfono móvil; número de teléfono fijo; dirección de residencia.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Datos Financieros:</h3>
              <p>Datos bancarios (número de tarjeta y CLABE interbancaria), ingreso mensual, fecha de próximo pago, gasto promedio mensual, saldos en cuentas bancarias, nombre del beneficiario de cuentas bancarias, fechas de pago, historial bancario; tipo de vivienda incluyendo su modalidad y fechas de inicio de residencia.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.4 Datos Laborales:</h3>
              <p>Empleo o actividad actual que genera la principal fuente de ingresos, ultimo nivel de estudios, cargo, fecha de inicio del último empleo, sector empresarial.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.5 Registros Informáticos Relacionados con Actividades y Comportamiento en Internet:</h3>
              <p>Horario de navegación, periodo de tiempo de navegación en nuestro sitio web, secciones consultadas y páginas web que visitó antes de ingresar a nuestro Sitio, dirección IP.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.6 Información de tu Teléfono Móvil y/o Apps.</h3>
              <p>Incluyendo sin Limitar, la Información Relacionada con tu Servicio Celular, lo que Incluye sin limitar, la información relacionada con tus contactos, datos de almacenamiento, información de imágenes, lista de contactos, llamadas, uso y/o servicio celular, lo que incluye: (i) operador; (ii) pagos del servicio, servicios adicionales y/o recargas de saldo para el servicio celular o servicios adicionales; (iii) hábitos de consumo; (iv) marca y modelo del teléfono móvil, (v) obtención de permisos del dispositivo; versión del sistema operativo “Android” del dispositivo; y (v) Apps.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.7 Perfil Adicional Relacionado al Uso de la APP:</h3>
              <p>Dirección IP, hardware utilizado, software utilizado.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2.8 Información de mensajes SMS.</h3>
              <p>Con el consentimiento explícito del Titular, NUFIN podrá acceder a los mensajes SMS almacenados en su dispositivo exclusivamente para identificar mensajes relacionados con préstamos personales, como notificaciones de pago vencido, confirmaciones de pago y avisos de desembolso, enviados por entidades financieras.</p>
              <p>Esta información será utilizada únicamente para evaluar el perfil de riesgo y el comportamiento de pago del usuario como parte del análisis crediticio. NUFIN no accederá, almacenará ni utilizará mensajes personales, de carácter privado o no relacionados con fines financieros. El Titular podrá revocar en cualquier momento su consentimiento directamente desde la aplicación.</p>
              <p>Estos datos podrán ser utilizados, entre otros fines, para evaluar los riesgos inherentes al crédito que solicites, verificar tu identidad, evaluar y calificar tu capacidad crediticia, para fines estadísticos y para cumplir con las Disposiciones de Carácter General aplicables en materia de prevención de lavado de dinero y financiamiento al terrorismo.</p>
              <p>NUFIN no recaba directamente datos personales de menores de edad a través de formularios en la aplicación, cuestionarios, ni a través de su página web, Asimismo, te informamos que NUFIN no recaba datos sensibles para su tratamiento.</p>
              <p>Se hace de tu conocimiento que NUFIN no trabaja con agentes, comisionistas, ni ninguna otra figura similar, por lo que cualquier dato que proporciones a cualquier tercero que se haga pasar como tal, no se encontrará bajo la responsabilidad de NUFIN y, por lo tanto, tú como Titular de los datos, serás el único responsable de la información y datos personales que compartas y el tratamiento que se les dé bajo dichos supuestos.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. FINALIDADES A LAS QUE SE SUJETARÁ EL TRATAMIENTO DE DATOS PERSONALES.</h2>
              <p>El tratamiento tiene como finalidades primarias ser usados para:</p>
              <ol className="list-decimal list-inside space-y-2">
                  <li>Identificación del solicitante y/o cliente, según sea el caso.</li>
                  <li>Integración del expediente de información de nuestro cliente.</li>
                  <li>Gestión, control, administración y procesamiento de la solicitud de crédito y, en su caso, el otorgamiento de este.</li>
                  <li>Evaluación de perfil de riesgo y crediticio de forma directa y/o a través de terceros nacionales o extranjeros.</li>
                  <li>Gestión, control, administración, ejecución y cumplimiento del contrato de crédito celebrado con el cliente conforme a la solicitud correspondiente.</li>
                  <li>Gestión, control y administración de la cobranza administrativa (a través de cualquier medio de contacto otorgado en la solicitud), extrajudicial y, en su caso, judicial derivada de los servicios proporcionados por NUFIN.</li>
                  <li>Investigación de cambios en el perfil transaccional del cliente.</li>
                  <li>Cumplimiento a obligaciones de carácter fiscal o comercial.</li>
                  <li>Atención de consultas, dudas, aclaraciones o quejas del cliente.</li>
                  <li>Estadística y registro histórico de usuarios y clientes.</li>
                  <li>Creación, mantenimiento y entrenamiento de los modelos de riesgo predictivos de NUFIN.</li>
                  <li>Mantener la seguridad de la información y de la operación.</li>
                  <li>Protección ante casos de robo de identidad.</li>
                  <li>Cumplir con todas las leyes, reglamentos y disposiciones de carácter general aplicables.</li>
                  <li>Investigación y análisis de estudios socioeconómicos.</li>
                  <li>Utilizar los datos personales, en cualquier tipo de acto o diligencia de cobranza judicial o extrajudicial.</li>
                  <li>Obtener datos personales para mejorar los modelos crediticios de NUFIN, sus modelos de datos y otros servicios; y originar, dar servicio, mantener y exigir la deuda del Titular.</li>
                  <li>Análisis de comportamiento crediticio a partir de mensajes SMS financieros, previo consentimiento del Titular.</li>
                  <li>La información recabada relacionada con la lista de contactos es necesaria para realizar un proceso de evaluación de riesgo de crédito y probabilidad de pago (scoring crediticio) en base al perfil del usuario y así poder determinar la capacidad crediticia, lo cual es parte de los criterios para la determinación de NUFIN para aprobar o rechazar el otorgamiento de la solicitud de crédito y dar inicio a la relación jurídica.</li>
                  <li>En función de los permisos que tenga habilitados, Nufin podrá tener acceso a cierto contenido de su dispositivo, con las siguientes finalidades:
                    <ul className="list-[lower-alpha] list-inside pl-6 space-y-2 mt-2">
                        <li>Lista de contactos: para efectos de prevenir y detectar el fraude con el objeto de minimizar el riesgo crediticio a través de la herramienta de evaluación denominada “scoring crediticio”.</li>
                        <li>Por ningún motivo Nufin usará los datos de la lista de contactos para comunicarse con tus amigos o familiares. Asimismo, Nufin no proporcionará ninguno de tus datos personales a menos que lo indiques expresamente por separado.</li>
                        <li>Ubicación: para dar cumplimiento a las buenas prácticas que imperan en el proceso de otorgamiento de créditos de manera no presencial a través de dispositivos, así como para efectos de integración del perfil inicial del cliente.</li>
                        <li>Cámara: para capturar imágenes y/o videos que permiten al algoritmo realizar parte del proceso de identificación del cliente.</li>
                    </ul>
                  </li>
              </ol>
              
              <p className="mt-4">Las finalidades secundarias (en lo sucesivo, las “Finalidades Secundarias”) que no son necesarias para el mantenimiento y cumplimiento de la relación jurídica entre NUFIN y tú, son las siguientes:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Fines mercadotécnicos, publicitarios y/o de prospección comercial.</li>
                <li>Campañas de recomendaciones.</li>
                <li>Uso de imágenes y testimonios de clientes y/o usuarios para fines publicitarios y de ofertas comerciales referentes a productos y/o servicios ofrecidos o relacionados con productos y/o servicios contratados.</li>
                <li>Mejoras en el servicio de atención y trato con el cliente.</li>
                <li>La mercadotecnia, publicidad y/o promoción de los productos y/o servicios que sean ofrecidos por NUFIN al Titular, por cualquier medio material y/o electrónico.</li>
              </ol>
              <p className="mt-4">En caso de que no desees que se utilicen tus datos para estos fines adicionales por favor selecciona la siguiente casilla:</p>
              <div className="flex items-center space-x-2 my-4 p-4 border rounded-md">
                <Checkbox id="secondary-purposes" />
                <Label htmlFor="secondary-purposes" className="text-sm">
                  No deseo que mis datos sean utilizados para las finalidades secundarias descritas anteriormente.
                </Label>
              </div>
              <p>Recuerda que puedes solicitar la revocación de tu consentimiento en cualquier momento ingresando nuevamente a este aviso de privacidad y seleccionando la casilla correspondiente, en caso de que nos lo hayas otorgado previamente. Dicha solicitud aplica desde el momento que selecciones la casilla. Para que tu revocación sea guardada correctamente, deberás iniciar sesión en la aplicación de NUFIN y seguir el procedimiento descrito previamente. La negativa para el uso de tus datos personales para estas finalidades no será motivo para negar el servicio.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. OPCIONES Y MEDIOS QUE NUFIN OFRECE A LOS TITULARES DE DATOS PERSONALES PARA LIMITAR EL USO O DIVULGACIÓN DE SUS DATOS PERSONALES.</h2>
              <p>Podrás limitar el tratamiento de tus datos personales de la siguiente forma:</p>
              <ul className="list-[lower-roman] list-inside space-y-2">
                  <li>El uso, siguiendo las instrucciones indicadas en el último párrafo del apartado “FINALIDADES A LAS QUE SE SUJETARÁ EL TRATAMIENTO DE DATOS PERSONALES”.</li>
                  <li>La divulgación, siguiendo las instrucciones indicadas en el apartado “TRANSFERENCIA DE DATOS PERSONALES”.</li>
                  <li>Dirigiendo la solicitud correspondiente al área Legal, para ejercer tus derechos ARCO conforme a los lineamientos establecidos en el apartado “MEDIOS PARA EL EJERCICIO DE DERECHOS ARCO DEL TITULAR; o</li>
                  <li>En el caso de los datos personales recabados conforme al último párrafo del apartado “OTROS MEDIOS PARA RECABAR DATOS PERSONALES”, podrás limitar su tratamiento conforme a lo ahí descrito.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. OTROS MEDIOS PARA RECABAR DATOS PERSONALES.</h2>
              <p>NUFIN utiliza cookies, web beacons y/o Kits de Desarrollo de Software (“SDKs”) para facilitar la navegación en sus Plataformas.</p>
              <p>Las cookies constituyen una herramienta empleada por los servidores web para almacenar y recuperar información que se guarda en el navegador utilizado por los usuarios o visitantes del sitio web, lo que permite guardar tus preferencias personales para brindarte una mejor experiencia de navegación.</p>
              <p>Las cookies tienen fecha de caducidad, que puede oscilar desde el tiempo que dura la sesión o visita al sitio web hasta una fecha específica a partir de la cual dejan de ser operativas. Las cookies empleadas en las Plataformas se asocian únicamente con un Usuario anónimo y su equipo informático, no proporcionan referencias que permitan deducir el nombre y apellidos del Usuario, no pueden leer datos de su disco duro ni incluir virus en sus textos.</p>
              <p>Puedes configurar tu navegador para aceptar o rechazar automáticamente todas las cookies o para recibir un aviso en pantalla sobre la recepción de cada cookie y decidir en ese momento su implantación o no en tu disco duro. Te sugerimos consultar la sección de ayuda de tu navegador para saber cómo cambiar la configuración sobre aceptación o rechazo de cookies. Aun y cuando configures tu navegador para rechazar todas las cookies o rechaces expresamente las cookies de las Plataformas, podrás seguir navegando por el sitio web con el único inconveniente de no poder disfrutar de las funcionalidades del sitio que requieran la instalación de alguna de ellas. En todo caso, podrás eliminar las cookies instaladas en tu disco duro, en cualquier momento, siguiendo el procedimiento establecido en la sección de ayuda de tu navegador.</p>
              <p>Te confirmamos que NUFIN no recaba datos personales a través de estos medios, por lo que no se someten a tratamiento ni a transferencias.</p>
              <p>Asimismo, recabamos información a partir de las autorizaciones que nos otorgas cuando ingresas a tu usuario a través de nuestras Apps, ya sea para que ingresemos a tu cámara y/o carrete para mejorar tu experiencia de usuario, o a tu calendario, contactos y/o ubicación con la única finalidad establecida en el punto 3.11 de las finalidades originarias establecidas en el apartado 3 “FINALIDADES A LAS QUE SE SUJETARÁ EL TRATAMIENTO DE DATOS PERSONALES” de este aviso de privacidad, que se refiere a la creación, mantenimiento y entrenamiento de los modelos de riesgo predictivos de NUFIN. Es de suma importancia para NUFIN informarte que nunca utilizaremos la información recabada por estos medios de manera individual ni para algún uso distinto al descrito. NUFIN no puede revocar dichas autorizaciones ya que esto debe modificarse desde el teléfono móvil desde el cual fueron otorgadas; por lo que tú puedes revocarlas en cualquier momento ingresando a la configuración de tu teléfono móvil.</p>
              <p>Es importante que sepas que puedes comunicarte en todo momento con nosotros a través de los medios de contacto que ponemos a tu disposición en el sitio www.nufin.com.mx y con gusto te brindaremos asesoría sobre el procedimiento para revocar dichos consentimientos desde tu dispositivo.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. MEDIOS PARA EL EJERCICIO DE DERECHOS ARCO DEL TITULAR.</h2>
              <p>Con el objeto de proteger los datos personales, la privacidad y confianza de nuestros clientes y usuarios, ponemos a tu disposición el correo de soporte@nufin.com.mx, en donde como titular, en cualquier momento puedes limitar el uso o divulgación de tus datos personales, así como negar o revocar la autorización para su tratamiento, mediante el ejercicio de los derechos de acceso, rectificación, cancelación u oposición que la Ley prevé.</p>
              <p>Podrás dirigir tu solicitud a través de:</p>
              <ul className="list-[lower-alpha] list-inside space-y-2">
                <li>El correo electrónico soporte@nufin.com.mx, cumpliendo con todos los requisitos señalados en la solicitud de Derechos ARCO disponible a través del Aviso de Privacidad que se puede obtener a través página web de NUFIN www.nufin.com.mx o iniciando sesión en la Aplicación de NUFIN .</li>
                <li>Mediante escrito dirigido a nuestro equipo Legal, con domicilio en General Mariano Escobedo No. 550, Piso 4 ala “B”, Col. Anzures, Alcaldía Miguel Hidalgo CP. 11590, Ciudad de México, acompañado del formato disponible conforme a lo establecido en el punto a) anterior y copia de tu identificación oficial.</li>
                <li>Disponible a través del Aviso de Privacidad que se puede descargar a través de la Aplicación NUFIN</li>
              </ul>
              <p className="mt-4">NUFIN te comunicará, en un plazo máximo de veinte días hábiles, contados desde la fecha en que recibamos la solicitud correspondiente, la determinación adoptada. Si la solicitud resulta procedente, esta se hará́ efectiva dentro de los quince días hábiles siguientes a la fecha en que NUFIN comunique la respuesta.</p>
              <p>En caso de que la información proporcionada en tu solicitud sea errónea o insuficiente, o no se acompañen los documentos necesarios para acreditar tu identidad o la representación legal correspondiente, o cualquier otro que sea necesario para ejercer tus derechos; dentro de los cinco días hábiles siguientes a la recepción de tu solicitud, requeriremos la subsanación de las deficiencias para poder dar trámite a la misma. En estos casos, contarás con diez días hábiles para atender el requerimiento de subsanación, contados a partir del día siguiente en que lo hayas recibido. La solicitud correspondiente se tendrá́ por no presentada si no respondes dentro de dicho plazo.</p>
              <p>En el supuesto de que tuvieras un préstamo activo (vencido o por vencer) con nosotros, NUFIN no podrá hacer modificaciones a tus datos personales. Para lograr esto, será necesario que primero pagues tu préstamo y una vez liquidado, sigas el proceso descrito anteriormente.</p>
              <p>Recuerda que, en caso de insatisfacción o incumplimiento de parte nuestra, podrás acudir ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) para solicitar el inicio del procedimiento de protección de derechos.</p>
              <p>Como titular, serás responsable de mantener actualizados tus datos personales en posesión de NUFIN. Por lo anterior, garantizas y respondes, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de los datos personales facilitados a NUFIN, y te comprometes a mantenerlos debidamente actualizados, comunicando cualquier cambio al responsable.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. TRANSFERENCIA DE DATOS PERSONALES.</h2>
              <p>NUFIN podrá realizar la transferencia y/o remisión de datos a:</p>
              <ul className="list-[lower-roman] list-inside space-y-2">
                  <li>Sociedades controladoras, subsidiarias o afiliadas a NUFIN o a una sociedad matriz para resguardo, control, análisis estadístico, evaluación, mejora y diseño de nuevos productos.</li>
                  <li>Terceros no afiliados (prestadores de servicios) para asistencia en la ejecución de los servicios relacionados con tu crédito.</li>
                  <li>Autoridades administrativas, judiciales o gubernamentales, así́ como a Sociedades de Información Crediticia para cumplir los mandatos judiciales o administrativos o cuando una ley lo determine.</li>
                  <li>Terceros subcontratados para procesar información por cuenta de NUFIN y bajo instrucciones de este.</li>
                  <li>Proveedores de manejo de riesgo, seguridad de la información y/o software especializado para la prevención de fraude.</li>
                  <li>Socios comerciales, para la adquisición de productos o servicios obtenidos a través de créditos NUFIN.</li>
                  <li>Afiliados comerciales para fines publicitarios.</li>
              </ul>
              <p className="mt-4">De listado anterior, puedes limitar o cancelar la transferencia de tus datos solamente conforme a lo descrito en el último punto.</p>
              <p>Los terceros y las entidades receptoras de datos personales asumen las mismas obligaciones y/o responsabilidades de NUFIN, de conformidad con lo descrito en el presente Aviso de Privacidad.</p>
              <p>Te informamos que tus datos personales podrán ser transferidos y tratados por personas distintas a NUFIN, en México o en el extranjero cuando se trate de: a) Cualquier prospecto, comprador potencial o adquirente de NUFIN o de cualesquiera de sus activos, incluyendo su cartera de crédito, otorgarle financiamiento, adquirir las acciones o activos de NUFIN o sus accionistas o filiales en México; b) Cualquier autoridad o auditor interno y externo cuando así lo requieran para llevar a cabo la auditoría correspondiente; c) Cualquier proveedor o prestador de servicios de cobranza, análisis de riesgo crediticio y otros que NUFIN considere necesario contratar.</p>
              <p>Para la transferencia indicada con asterisco (*) requerimos tu consentimiento, el cual nos estás otorgando al aceptar este aviso de privacidad.</p>
              <p>En caso de que no desees que tus datos sean transferidos a afiliados comerciales, por favor selecciona la siguiente casilla:</p>
              <div className="flex items-center space-x-2 my-4 p-4 border rounded-md">
                  <Checkbox id="commercial-transfer" />
                  <Label htmlFor="commercial-transfer" className="text-sm">
                  No deseo que mis datos sean transferidos para fines publicitarios.
                  </Label>
              </div>
              <p>Recuerda que puedes solicitar la revocación de tu consentimiento en cualquier momento ingresando nuevamente a este aviso de privacidad y seleccionando la casilla anterior en caso de que nos lo hayas otorgado previamente. Dicha solicitud aplica desde el momento que selecciones la casilla. Para que tu revocación sea guardada correctamente, deberás iniciar sesión en la aplicación de NUFIN y seguir el procedimiento descrito previamente. La negativa respecto a la transferencia de tus datos personales para estas finalidades no será motivo para negarte el servicio.</p>
              <p>Asimismo, hacemos de tu consentimiento que podremos transferir tus datos sin necesidad de tu autorización previa en cualquiera de los supuestos considerado en el artículo 37 de la LFPDPPP</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">8. REVOCACIÓN DEL CONSENTIMIENTO</h2>
              <p>En cualquier momento, podrás revocar tu consentimiento para el tratamiento de tus datos personales, siempre y cuando, dicha revocación sea legitima y no suponga la imposibilidad de cumplir obligaciones derivadas de una relación contractual vigente entre NUFIN y tú, o no sea posible en virtud de un mandato legal o judicial.</p>
              <p>Puedes solicitar la revocación de tu consentimiento, iniciando sesión en la aplicación NUFIN seleccionando las casillas deseadas. La negativa respecto al tratamiento de tus datos personales para estas finalidades y/o transferencias, no vulnerará tu relación contractual con NUFIN.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">9. CAMBIOS AL AVISO DE PRIVACIDAD</h2>
              <p>Cualquier actualización, modificación o cambio al presente aviso de privacidad, que se realice atendiendo a novedades legislativas y/o modificaciones en las políticas internas de NUFIN, será publicado en el sitio web www.nufin.com.mx</p>
              <p>Sin embargo, cuando el contenido del presente Aviso de Privacidad cambie sustancialmente; por ejemplo, si las finalidades para las cuales fueron recabados los datos personales cambiaran, te será informado y requeriremos nuevamente de tu consentimiento para continuar tratando tus datos personales.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">10. POLÍTICAS DE SEGURIDAD.</h2>
              <p>NUFIN protege tus datos personales usando el estándar de la industria en materia de encriptación, de esta forma garantizamos que los datos que se envían desde la página de Internet lleguen seguros a nuestros servidores. Almacenamos y procesamos tu información manteniendo siempre medidas de seguridad orientadas a proteger tus datos personales.</p>
              <p>En NUFIN contamos con procedimientos que dictan quién y bajo qué condiciones se puede tener acceso a los datos, dando siempre la máxima prioridad a la protección de tu privacidad. Asimismo, asumimos medidas de seguridad físicas para prevenir el acceso no autorizado a nuestros sistemas e instalaciones.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">11. CONSENTIMIENTO DEL TITULAR.</h2>
              <p>Con la lectura y aceptación del presente Aviso de Privacidad cada vez que ingresas a tu perfil de usuario por cualquiera de los medios disponibles para ello, manifiestas expresamente que: (i) el presente Aviso de Privacidad te ha sido dado a conocer por NUFIN y (ii) has leído y entendido en su totalidad los términos y alcances expuestos, por lo que expresamente otorgas tu consentimiento para el tratamiento de tus datos personales en los términos de este.</p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
