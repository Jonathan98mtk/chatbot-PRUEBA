const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MongoAdapter = require('@bot-whatsapp/database/mongo')

const path = require("path")
const fs = require("fs")

// LEER ARCHIVOS TXT
const menuPath = path.join(__dirname, "mensajes","menu.txt")
const menuPath2 = path.join(__dirname, "mensajes","menuOpc1.txt")
const menuPath3 = path.join(__dirname, "mensajes","menuOpc2.txt")
const menuPath4 = path.join(__dirname, "mensajes","menuOpc3.txt")
const menuPath5 = path.join(__dirname, "mensajes","menuOpc4.txt")
const menuPath2_1 = path.join(__dirname, "mensajes","menuOpc2_Opc1.txt")
const menuPath2_2 = path.join(__dirname, "mensajes","menuOpc2_Opc2.txt")
const menuPath4_1 = path.join(__dirname, "mensajes","menuOpc4_Opc1.txt")
const menu = fs.readFileSync(menuPath, "utf8")
const menuOpc1 = fs.readFileSync(menuPath2, "utf8")
const menuOpc2 = fs.readFileSync(menuPath3, "utf8")
const menuOpc3 = fs.readFileSync(menuPath4, "utf8")
const menuOpc4 = fs.readFileSync(menuPath5, "utf8")
const menuOpc2_1 = fs.readFileSync(menuPath2_1, "utf8")
const menuOpc2_2 = fs.readFileSync(menuPath2_2, "utf8")
const menuOpc4_1 = fs.readFileSync(menuPath4_1, "utf8")

/**
 * Declaramos las conexiones de Mongo
 */

const MONGO_DB_URI = 'mongodb+srv://admin:123que@chatbot.vvxj6.mongodb.net/?retryWrites=true&w=majority&appName=ChatBot'
const MONGO_DB_NAME = 'db_bot'

const menuOpcion4_Opcion2 = addKeyword(EVENTS.WELCOME)
    .addAnswer('Para registrarte en el programa *Paseo de las emprendedoras* del *Instituto Municipal de la Mujer* necesitas contar con los siguientes requisitos: ' +
        '\n' +
        '\n◻️ INE' +
        '\n◻️ Comprobante de domicilio' +
        '\n◻️ Producto elaborado por tí (no debe estar registrado, ser ajeno o ser una imitación)' +
        '\n◻️ Fotos impresas del producto' +
        '\n' +
        '\nPara recibir mas información puedes contactar directamente al *IMMT*: '
        ,{
        delay: 1000,
        }
    )
    .addAnswer('*Instituto Municipal de la Mujer de Torreón*' +
        '\nTeléfono: *8715007419* ' +
        '\nDirección: *Av. Colón y Delicias, Col. Luis Echeverria Alvarez, CP 27220, Torreón, Coahuila* ' +
        '\nHorario: *08:00 - 16:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/gxwp7rTd/IMMT.jpg'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )

const menuOpcion4_Opcion1_Opcion1_2 = addKeyword(EVENTS.WELCOME)
    .addAnswer('Para registrarte en uno de los Talleres que imparte el *Instituto Municipal de la Mujer* necesitas contar con la siguiente documentación: ' +
        '\n' +
        '\n◻️ Acta de nacimiento' +
        '\n◻️ INE' +
        '\n◻️ CURP' +
        '\n◻️ Comprobante de último grado de estudios' +
        '\n◻️ Comprobante de domicilio' +
        '\n' +
        '\nPara recibir mas información puedes contactar directamente al *IMMT*: '
        ,{
        delay: 1000,
        }
    )
    .addAnswer('*Instituto Municipal de la Mujer de Torreón*' +
        '\nTeléfono: *8715007419* ' +
        '\nDirección: *Av. Colón y Delicias, Col. Luis Echeverria Alvarez, CP 27220, Torreón, Coahuila* ' +
        '\nHorario: *08:00 - 16:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/gxwp7rTd/IMMT.jpg'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )

const menuOpcion4_Opcion1 = addKeyword(EVENTS.ACTION)
    .addAnswer(
        menuOpc4_1,
        {  
            delay: 1000,
            capture: true,
        },
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            if (!['1','2','9','0'].includes(ctx.body)) {
                return fallBack(
                    "Respuesta no válida, elije una de las opciones disponibles."
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(menuOpcion4_Opcion1_Opcion1_2);
                case "2":
                    return gotoFlow(menuOpcion4_Opcion1_Opcion1_2);
                case "9":
                    return gotoFlow(menuOpcion2);
                case "0":
                    return gotoFlow(volverMenuFlow);   
            }
        }
    )

const menuOpcion3_Opcion2 = addKeyword(EVENTS.ACTION)
.addAnswer('El *Instituto de Salud Pública Municipal de Torreón* ofrece diferentes aspectos de salud y bienestar gratuitos que podrían interesarte: ' +
    '\n' +
    '\n◻️Consulta Médica.' +
    '\n◻️Consulta Ginecología.' +
    '\n◻️Consulta Nutricional.' +
    '\n◻️Consulta Psicológica.' +
    '\n◻️Dental.' +
    '\n◻️Rehabilitación y Terapia Física.' +
    '\n◻️Trabajo Social.' +
    '\n◻️Veterinaria.' +
    '\n◻️Vacunación Antirrábica.' +
    '\n' +
    '\nTe comparto la información de contacto y ubicación: '
    ,{
    delay: 1000,
    }
).addAnswer('*Instituto de Salud Pública Municipal de Torreón*' +
    '\nTeléfono: *8717134780* ' +
    '\nDirección: *Av. Ocampo No. 1167 Ote. Col. Segundo de Cobián Centro; entre C. Niños Héroes (Calle 11) y Av. Mariano López Ortiz (Calle 12). CP 27000 Torreón, Coahuila* ' +
    '\nHorario: *Lunes a Viernes de 08:00 a 19:00 Hrs*',{
    delay: 1000,
    media: 'https://i.postimg.cc/p5XbJdFw/SALUD.jpg'
    }
)
.addAction(
    async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
        return gotoFlow(volverMenuFlow);   
    }
)

const menuOpcion3_Opcion1 = addKeyword(EVENTS.ACTION)
.addAnswer('Si tienes una urgencia médica puedes marcar al *911* o puedes buscar atención médica en:'
    ,{
    delay: 1000,
    }
).addAnswer('*Hospital Municipal de Torréon* ' +
    '\nTeléfono: *8717134780* ' +
    '\nDirección: *Av. Ocampo Pte. 1133, Tercero de Cobián Centro, 27000 Torreón, Coahuila* ' +
    '\nHorario: *Lunes a Viernes de 08:00 a 19:00 Hrs*',{
    delay: 1000,
    }
).addAction(
    async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
        return gotoFlow(volverMenuFlow);   
    }
)

const menuOpcion2_Opcion1_Opcion3 = addKeyword(EVENTS.WELCOME)
    .addAnswer('Elegiste *Grupos de ayuda para mujeres en situación de violencia.*, puedes buscar ayuda en alguno de los siguientes organismos:',{
        delay: 1000,
        }
    )
    .addAnswer('*Instituto Municipal de la Mujer de Torreón*' +
        '\nTeléfono: *8715007419* ' +
        '\nDirección: *Av. Colón y Delicias, Col. Luis Echeverria Alvarez, CP 27220, Torreón, Coahuila* ' +
        '\nHorario: *08:00 - 16:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/gxwp7rTd/IMMT.jpg'
        }
    )
    .addAnswer('*CJEM*' +
        '\nTeléfono: *8712226300*' +
        '\nDirección: *Calzada Francisco Sarabia s/n, Col. San Felipe, CP 27085, Torreón, Coahuila* ' +
        '\nHorario: *09:00 - 16:00 Hrs*',{
        delay: 1000,
        media: '/CJEM1.jpg'
        }
    )
    .addAnswer('*MUSAS*' +
        '\nTeléfono: *8712284439*' +
        '\nHorario: *Las 24 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/v1fsQkyN/MUSAS.png'
        }
    )
    .addAnswer('*Mujeres Contigo*' +
        '\nDirección: C, Torreón Viejo, 27000 Torreón, Coahuila' +
        '\nTeléfono: *8712445091*' +
        '\nHorario: *10:00 - 15:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/WhYjS0SX/MUJERES-CONTIGO.jpg'
        }
    )
    .addAnswer('*Línea de la Vida*' +
    '\nComunícate al *018009112000*, espera la atención' +
    'del especialista, expresa tu necesidad, al final de la llamada te brindarán ' +
    'información sobre los centros especializados de tratamiento.',{
        delay: 1000,
        media: 'https://i.postimg.cc/6T9XXMmM/VIDA.jpg'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )

const menuOpcion2_Opcion1_Opcion2 = addKeyword(EVENTS.WELCOME)
    .addAnswer('Elegiste *Terapia para menores de edad*, puedes buscar ayuda en alguno de los siguientes organismos:',{
        delay: 1000,
        }
    )
    .addAnswer('*Ciudad DIF*' +
        '\nTeléfono: *8712293300* ' +
        '\nDirección: *De Los Continentes 500, Sin Nombre de Col 16, CP 27058 Torreón, Coahuila* ' +
        '\nHorario: *08:00 - 15:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/XpY4wsKr/DIF.jpg'
        }
    )
    .addAnswer('*CAIF*' +
        '\nTeléfono: *8717333199*' +
        '\nDirección: *Perfi. Raul Lopez Sanchez, esq con Rio Nazas s/n Col. El Roble, CP 27120, Torreón, Coahuila* ' +
        '\nHorario: *09:00 - 16:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/kRn9Yckh/CAIF.png'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )

const menuOpcion2_Opcion1_Opcion1 = addKeyword(EVENTS.WELCOME)
    .addAnswer('Elegiste *Primeros Auxilios e intervención en situación de violencia*, puedes buscar ayuda en alguno de los siguientes organismos:',{
        delay: 1000,
        }
    )
    .addAnswer('*Instituto Municipal de la Mujer de Torreón*' +
        '\nTeléfono: *8715007419* ' +
        '\nDirección: *Av. Colón y Delicias, Col. Luis Echeverria Alvarez, CP 27220, Torreón, Coahuila* ' +
        '\nHorario: *08:00 - 16:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/gxwp7rTd/IMMT.jpg'
        }
    )
    .addAnswer('*CJEM*' +
        '\nTeléfono: *8712226300*' +
        '\nDirección: *Calzada Francisco Sarabia s/n, Col. San Felipe, CP 27085, Torreón, Coahuila* ' +
        '\nHorario: *09:00 - 16:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/hz8c0w3d/CJEM1.jpg'
        }
    )
    .addAnswer('*MUSAS*' +
        '\nTeléfono: *8712284439*' +
        '\nHorario: *Las 24 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/v1fsQkyN/MUSAS.png'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )

const menuOpcion2_Opcion2 = addKeyword(EVENTS.ACTION)
    .addAnswer(
        menuOpc2_2,
        {  
            delay: 1000,
            capture: true,
        },
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            if (!['1','2','3','4','5','9','0'].includes(ctx.body)) {
                return fallBack(
                    "Respuesta no válida, elije una de las opciones disponibles."
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(respuestaDEFENSORIA);
                case "2":
                    return gotoFlow(respuestaDEFENSORIA);
                case "3":
                    return gotoFlow(respuestaDEFENSORIA);
                case "4":
                    return gotoFlow(respuestaTFCA);
                case "5":
                    return gotoFlow(respuestaTFCA);
                case "9":
                    return gotoFlow(menuOpcion2);
                case "0":
                    return gotoFlow(volverMenuFlow);   
            }
        }
    )

const menuOpcion2_Opcion1 = addKeyword(EVENTS.ACTION)
    .addAnswer(
        menuOpc2_1,
        {  
            delay: 1000,
            capture: true,
        },
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            if (!['1','2','3','9','0'].includes(ctx.body)) {
                return fallBack(
                    "Respuesta no válida, elije una de las opciones disponibles."
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(menuOpcion2_Opcion1_Opcion1);
                case "2":
                    return gotoFlow(menuOpcion2_Opcion1_Opcion2);
                case "3":
                    return gotoFlow(menuOpcion2_Opcion1_Opcion3);
                case "9":
                    return gotoFlow(menuOpcion2);
                case "0":
                    return gotoFlow(volverMenuFlow);   
            }
        }
    )

const respuestaDEFENSORIA = addKeyword(EVENTS.WELCOME)
    .addAnswer('Puedes buscar asesoramiento en el *Instituto Estatal de Defensoría Pública, Delegación Torreón*',{
        delay: 1000,
        }
    )
    .addAnswer('Teléfono: *8718804585*' +
        '\nDirección: *Calle del Yute # 105 esq. Comerciantes, Col. villas de la Merced, CP 27276, Torreón, Coahuila*' + 
        '\nHorario: *09:00 - 14:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/grdY0znq/DEFENSORIA.jpg'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )

const respuestaPRONNIF= addKeyword(EVENTS.WELCOME)
    .addAnswer('¡Tú denuncia es importante! \nRecuerda que es parte de los derechos humanos de acceso a la justicia, a una vida libre de violencia y a la salud solicitar esta atención.',{
        delay: 1000,
        }
    )
    .addAnswer('Puedes realizar tu denuncia en la *PRONNIF*',{
        delay: 1000,
        }
    )
    .addAnswer('Teléfono: *8717163088*' +
        '\nDirección: *Lib. Perif. Raúl López Sánchez, Leandro Rovirosa Wade, CP 27119, Torreón, Coahuila*',{
        delay: 1000,
        media: 'https://i.postimg.cc/ftvQddJ7/PRONNIF.jpg'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )

const respuestaFGEC= addKeyword(EVENTS.WELCOME)
    .addAnswer('¡Tú denuncia es importante! \nRecuerda que es parte de los derechos humanos de acceso a la justicia, a una vida libre de violencia y a la salud solicitar esta atención.',{
        delay: 1000,
        }
    )
    .addAnswer('Puedes realizar tu denuncia en la *FGEC*',{
        delay: 1000,
        }
    )
    .addAnswer('Teléfono: *8717296700*' +
        '\nDirección: *Lib. Perif. Raúl López Sánchez Km. 3+900, Los Viñedos, CP 27019, Torreón, Coahuila* ' +
        '\nHorario: *09:00 - 16:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/qgLphPKf/FGEC.png'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )

const respuestaTFCA= addKeyword(EVENTS.WELCOME)
    .addAnswer('¡Tú denuncia es importante! \nRecuerda que es parte de los derechos humanos de acceso a la justicia, a una vida libre de violencia y a la salud solicitar esta atención.',{
        delay: 1000,
        }
    )
    .addAnswer('Puedes realizar tu denuncia en el *TFCA*',{
        delay: 1000,
        }
    )
    .addAnswer('Teléfono: *8717222357*' +
        '\nDirección: *Zaragoza Sur, Colonia Zona Centro #148 BIS, CP 27000, Torreón, Coahuila* ' +
        '\nHorario: *09:00 - 16:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/jwTrCcdd/TFCA.jpg'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )

const respuestaCJEM = addKeyword(EVENTS.WELCOME)
    .addAnswer('¡Tú denuncia es importante! \nRecuerda que es parte de los derechos humanos de acceso a la justicia, a una vida libre de violencia y a la salud solicitar esta atención.',{
        delay: 1000,
        }
    )
    .addAnswer('Puedes realizar tu denuncia en el *CJEM*',{
        delay: 1000,
        }
    )
    .addAnswer('Teléfono: *8712226300*' +
        '\nDirección: *Calzada Francisco Sarabia s/n, Col. San Felipe, CP 27085, Torreón, Coahuila* ' +
        '\nHorario: *09:00 - 16:00 Hrs*',{
        delay: 1000,
        media: 'https://i.postimg.cc/hz8c0w3d/CJEM1.jpg'
        }
    )
    .addAction(
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            return gotoFlow(volverMenuFlow);   
        }
    )


const menuOpcion4 = addKeyword(EVENTS.ACTION)
    .addAnswer(
        menuOpc4,
        {  
            delay: 1000,
            capture: true,
        },
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            if (!['1','2','9','0'].includes(ctx.body)) {
                return fallBack(
                    "Respuesta no válida, elije una de las opciones disponibles."
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(menuOpcion4_Opcion1);
                case "2":
                    return gotoFlow(menuOpcion4_Opcion2);
                case "9":
                    return gotoFlow(menuFlow);
                case "0":
                    return gotoFlow(volverMenuFlow);
            }
        }
    )

const menuOpcion3 = addKeyword(EVENTS.ACTION)
    .addAnswer(
        menuOpc3,
        {  
            delay: 1000,
            capture: true,
        },
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            if (!['1','2','9','0'].includes(ctx.body)) {
                return fallBack(
                    "Respuesta no válida, elije una de las opciones disponibles."
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(menuOpcion3_Opcion1);
                case "2":
                    return gotoFlow(menuOpcion3_Opcion2);
                case "9":
                    return gotoFlow(menuFlow);
                case "0":
                    return gotoFlow(volverMenuFlow);
            }
        }
    )

const menuOpcion2 = addKeyword(EVENTS.ACTION)
    .addAnswer(
        menuOpc2,
        {  
            delay: 1000,
            capture: true,
        },
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            if (!['1','2','9','0'].includes(ctx.body)) {
                return fallBack(
                    "Respuesta no válida, elije una de las opciones disponibles."
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(menuOpcion2_Opcion1);
                case "2":
                    return gotoFlow(menuOpcion2_Opcion2);
                case "9":
                    return gotoFlow(menuFlow);
                case "0":
                    return gotoFlow(volverMenuFlow);
            }
        }
    )

const menuOpcion1 = addKeyword(EVENTS.ACTION)
    .addAnswer(
        menuOpc1,
        {  
            delay: 1000,
            capture: true,
        },
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            if (!['1','2','3','4','5','6','7','8','9','0'].includes(ctx.body)) {
                return fallBack(
                    "Respuesta no válida, elije una de las opciones disponibles."
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(respuestaCJEM);
                case "2":
                    return gotoFlow(respuestaCJEM);
                case "3":
                    return gotoFlow(respuestaCJEM);
                case "4":
                    return gotoFlow(respuestaTFCA);
                case "5":
                    return gotoFlow(respuestaFGEC);
                case "6":
                    return gotoFlow(respuestaCJEM);
                case "7":
                    return gotoFlow(respuestaFGEC);
                case "8":
                    return gotoFlow(respuestaPRONNIF);
                case "9":
                    return gotoFlow(menuFlow);
                case "0":
                    return gotoFlow(volverMenuFlow);
            }
        }
    )

const menuFlow = addKeyword(EVENTS.ACTION)
    .addAnswer(
        menu,
        {  
            delay: 1000,
            capture: true,
        },
        async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
            if (!['1','2','3','4','0'].includes(ctx.body)) {
                return fallBack(
                    "Respuesta no válida, elije una de las opciones disponibles."
                );
            }
            switch (ctx.body) {
                case "1":
                    return gotoFlow(menuOpcion1);
                case "2":
                    return gotoFlow(menuOpcion2);
                case "3":
                    return gotoFlow(menuOpcion3);
                case "4":
                    return gotoFlow(menuOpcion4);
                case "0":
                    return gotoFlow(volverMenuFlow);
            }
        }
    )

const flowPrincipal = addKeyword(EVENTS.WELCOME)
    .addAnswer('¡Hola! Soy *Elva*, la asistente virtual del *Instituto Municipal de la Mujer*.',{
        delay: 1000,
    })
    .addAnswer('Antes de comenzar, recuerda que si tienes una emergencia marca inmediatamente al *911* o envía un whatsapp a seguridad Pública al *8719737975*.',{
        delay: 1000,
    })
    .addAnswer('Si estás enfrentando una situación de violencia o emergencia, quiero ' +
                'que sepas que estás en un canal seguro. Mi objetivo es proporcionar ' +
                'información necesaria, recursos y consejos para brindarte ' +
                'herramientas que puedes utilizar en estas situaciones. \nTu seguridad es ' +
                'mi prioridad número uno.',{
    delay: 1000,
    },  
    async (ctx, ctxFn) => {
        await ctxFn.gotoFlow(menuFlow)  
    }
    ) 

const volverMenuFlow = addKeyword(EVENTS.ACTION)
.addAnswer(
    'Si necesitas más información, no dudes en volver aquí. Estoy para apoyarte. Recuerda que tu seguridad es nuestra prioriodad y que este chat es confidencial y está disponible para ayudarte las 24 horas.',
    {
        delay: 1000,
    }
)
.addAnswer(
    'Puedes enviar la palabra *menu* para regresar al menú principal o puedes iniciar nuevamente la conversación Saludando.',
    {  
        delay: 1000,
        capture: true,
    },
    async (ctx, {gotoFlow, fallBack, flowDynamic}) => {
        if (['MENU','Menu','menu','MENÚ','Menú','menú'].includes(ctx.body)) {
            return gotoFlow(menuFlow);
        } 
        else
        {
            return gotoFlow(flowPrincipal);   
        }
    }
)


const main = async () => {
    const adapterDB = new MongoAdapter({
        dbUri: MONGO_DB_URI,
        dbName: MONGO_DB_NAME,
    })
    const adapterFlow = createFlow([flowPrincipal, menuFlow, menuOpcion1, menuOpcion2,
        menuOpcion3, menuOpcion4, respuestaCJEM, respuestaTFCA, respuestaFGEC, respuestaPRONNIF, 
        menuOpcion2_Opcion1, menuOpcion2_Opcion2, menuOpcion2_Opcion1_Opcion1, menuOpcion2_Opcion1_Opcion2, 
        menuOpcion2_Opcion1_Opcion3, respuestaDEFENSORIA, volverMenuFlow, menuOpcion4_Opcion1, 
        menuOpcion4_Opcion1_Opcion1_2, menuOpcion4_Opcion2, menuOpcion3_Opcion1, menuOpcion3_Opcion2])
    const adapterProvider = createProvider(BaileysProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    QRPortalWeb()
}

main()
