let estudios=[
    {
    id:1,
    Inst:"Universidad Nacional Abierta y a Distancia",
    Titulo:"Bachiller academico",
    anio:"2011",
    compl:"Bachiderato academico con énfasis en adminitración de empresas.",
    },

    {id:2,
        Inst:"Incap",
        Titulo:"Tecnico Auxiliar Administrativo",
        anio:"2013",
        compl:"Conocimientos en manejo de archivos,dijitación,ofimatica,principios conatables."
        },
    {id:3,
    Inst:"Servicio Nacional de Aprendizaje",
    Titulo:"Tecnólogo en Análisis y desarrollo de sistemas de información",
    anio:"Cursando",
    compl:"Análisis e Identificación de requerimientos para el desarrollo de software, Crud de bases de datos en MYSQL,Desarrollo de sofware en JAVA,PHP.",
    },

    
    {id:4,
        Inst:"Kuepa TechPower",
        Titulo:"Digitación de datos con énfasis en desarrollo Front-end.",
        anio:"Cursando",
        compl:"Conocimientos en desarrollo Front-end, manejo de herramientas de diseño (Figma) desarrollo en HTML5 , CSS3 y javascript.",
        },
    ]
    export function getAllEstudies(){
        return estudios;
    }
    export function getEt(id){
        return estudios.find((s)=>s.id===id);
    }