import React from 'react';
import Loading from '../loading/index';
import Page from './page';
import axios from 'axios';

class Survey extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = 
        {
            catedo: null,
            loading: false,
            saved: false,
            semestre: '',
            matricula: '',
            carrera: '',
            nombre: '',
            primape: '',
            segape: '',
            edad: 0,
            genero: 'F',
            municnac: '',
            ciudadnac: '',
            estadonac: 0,
            domact: '',
            municact: '',
            vivsol: 'N',
            vivpad: 'N',
            vivmad: 'N',
            vivher: 0,
            vivotro: 0,
            domtip: 0,
            maxescpad: 0,
            oficpad: '',
            maxescmad: 0,
            oficmad: '',
            hermedad1: 0,
            hermesc1: 0,
            hermofic1: '',
            hermedad2: 0,
            hermesc2: 0,
            hermofic2: '',
            hermedad3: 0,
            hermesc3: 0,
            hermofic3: '',
            hermedad4: 0,
            hermesc4: 0,
            hermofic4: '',
            biecomp: 'N',
            bieinter: 'N',
            biefija: 'N',
            biesat: 'N',
            bievehi: 'N',
            sermimss: 'N',
            sevmisst: 'N',
            servmsp: 'N',
            servmpar: 'N',
            estciv: 'N',
            hijos: 0,
            edades: '',
            estlabno: 'N',
            estlabsi: 'N',
            estlabvac: 'N',
            horario: '',
            ingreso: 0,
            estlabcno: 'N',
            estlabcsi: 'N',
            estlabcvac: 'N',
            horarioc: '',
            ingresoc: 0,
            formmedsup: 0,
            formmedsupo: '',
            isprimopc: 'N',
            cartecarea: '',
            prommedsup: 0,
            primopc: 0,
            primdate: '',
            segopc: 0,
            segdate: '',
            tercopc: 0,
            tercdate: '',
            arq: 0,
            ccomp: 0,
            fismat: 0,
            ingciv: 0,
            ingelec: 0,
            ingtel: 0,
            ingind: 0,
            ingmec: 0,
            ingquim: 0,
            ingmecrob: 0,
            ingeneren: 0,
            ingamb: 0,
            biolog: 0,
            cforen: 0,
            ododent: 0,
            enferm: 0,
            medcir: 0,
            medvet: 0,
            nutrio: 0,
            psico: 0,
            quimfarm: 0,
            admon: 0,
            antropo: 0,
            ccomun: 0,
            cpolit: 0,
            conta: 0,
            derec: 0,
            econom: 0,
            gastro: 0,
            geograf: 0,
            geolog: 0,
            relaint: 0,
            sociolo: 0,
            artvisual: 0,
            cinema: 0,
            disegraf: 0,
            filoso: 0,
            histo: 0,
            idiom: 0,
            litera: 0,
            pedago: 0,
            teatactmu: 0,
            razest: 0,
            alegre: 'N',
            introvertido: 'N',
            dominante: 'N',
            sociable: 'N',
            puntual: 'N',
            agresivo: 'N',
            responsable: 'N',
            practico: 'N',
            inquieto: 'N',
            tranquilo:'N'
        };
    };

    changeValue = event => this.setState({ [event.target.name]: event.target.value.toUpperCase() });

    getEstados()
    {
        const config = 
        {
            url: process.env.REACT_APP_URL_REQ + '?service=0',
            method: 'GET'
        };

        this.setState({ loading: true });

        axios(config).then((response) => 
        {
            if (response.status === 200)
                this.setState({ catedo: response.data }, () => this.setState({ loading: false }));
        });   
    }

    sendSurvey()
    {
        const { semestre, matricula, carrera, nombre, primape, segape, edad, genero, municnac, ciudadnac, 
                estadonac, domact, municact, vivsol, vivpad, vivmad, vivher, vivotro, domtip, maxescpad, 
                oficpad, maxescmad, oficmad, hermedad1, mermesc1, hermofic1, hermedad2, mermesc2, hermofic2, 
                hermedad3, mermesc3, hermofic3, hermedad4, mermesc4, hermofic4, biecomp, bieinter, biefija, 
                biesat, bievehi, sermimss, sevmisst, servmsp, servmpar, estciv, hijos, edades, estlabno, estlabsi, 
                estlabvac, horario, ingreso, estlabcno, estlabcsi, estlabcvac, horarioc, ingresoc, formmedsup, formmedsupo, 
                isprimopc, cartecarea, prommedsup, primopc, primdate, segopc, segdate, tercopc, tercdate, arq, ccomp, fismat, 
                ingciv, ingelec, ingtel, ingind, ingmec, ingquim, ingmecrob, ingeneren, ingamb, biolog, cforen, ododent, 
                enferm, medcir, medvet, nutrio, psico, quimfarm, admon, antropo, ccomun, cpolit, conta, derec, econom, gastro, 
                geograf, geolog, relaint, sociolo, artvisual, cinema, disegraf, filoso, histo, idiom, litera, pedago, teatactmu, 
                razest, alegre, introvertido, dominante, sociable, puntual, agresivo, responsable, practico, inquieto, tranquilo 
            } = this.state;
        
        const params = new URLSearchParams();
        const config =
        {
            url: process.env.REACT_APP_URL_REQ,
            method: 'POST',
            data: params
        };

        params.append('service', 0);
        params.append('semestre', semestre);
        params.append('matricula', matricula);
        params.append('carrera', carrera);
        params.append('nombre', nombre);
        params.append('primape', primape);
        params.append('segape', segape);
        params.append('edad', edad);
        params.append('genero', genero);
        params.append('municnac', municnac);
        params.append('ciudadnac', ciudadnac);
        params.append('estadonac', estadonac);
        params.append('domact', domact);
        params.append('municact', municact);
        params.append('vivsol', vivsol);
        params.append('vivpad', vivpad);
        params.append('vivmad', vivmad);
        params.append('vivher', vivher);
        params.append('vivotro', vivotro);
        params.append('domtip', domtip);
        params.append('maxescpad', maxescpad);
        params.append('oficpad', oficpad);
        params.append('maxescmad', maxescmad);
        params.append('oficmad', oficmad);
        params.append('hermedad1', hermedad1);
        params.append('mermesc1', mermesc1);
        params.append('hermofic1', hermofic1);
        params.append('hermedad2', hermedad2);
        params.append('mermesc2', mermesc2);
        params.append('hermofic2', hermofic2);
        params.append('hermedad3', hermedad3);
        params.append('mermesc3', mermesc3);
        params.append('hermofic3', hermofic3);
        params.append('hermedad4', hermedad4);
        params.append('mermesc4', mermesc4);
        params.append('hermofic4', hermofic4);
        params.append('biecomp', biecomp);
        params.append('bieinter', bieinter);
        params.append('biefija', biefija);
        params.append('biesat', biesat);
        params.append('bievehi', bievehi);
        params.append('sermimss', sermimss);
        params.append('sevmisst', sevmisst);
        params.append('servmsp', servmsp);
        params.append('servmpar', servmpar);
        params.append('estciv', estciv);
        params.append('hijos', hijos);
        params.append('edades', edades);
        params.append('estlabno', estlabno);
        params.append('estlabsi', estlabsi);
        params.append('estlabvac', estlabvac);
        params.append('horario', horario);
        params.append('ingreso', ingreso);
        params.append('estlabcno', estlabcno);
        params.append('estlabcsi', estlabcsi);
        params.append('estlabcvac', estlabcvac);
        params.append('horarioc', horarioc);
        params.append('ingresoc', ingresoc);
        params.append('formmedsup', formmedsup);
        params.append('formmedsupo', formmedsupo);
        params.append('isprimopc', isprimopc);
        params.append('cartecarea', cartecarea);
        params.append('prommedsup', prommedsup);
        params.append('primopc', primopc);
        params.append('primdate', primdate);
        params.append('segopc', segopc);
        params.append('segdate', segdate);
        params.append('tercopc', tercopc);
        params.append('tercdate', tercdate);
        params.append('arq', arq);
        params.append('ccomp', ccomp);
        params.append('fismat', fismat);
        params.append('ingciv', ingciv);
        params.append('ingelec', ingelec);
        params.append('ingtel', ingtel);
        params.append('ingind', ingind);
        params.append('ingmec', ingmec);
        params.append('ingquim', ingquim);
        params.append('ingmecrob', ingmecrob);
        params.append('ingeneren', ingeneren);
        params.append('ingamb', ingamb);
        params.append('biolog', biolog);
        params.append('cforen', cforen);
        params.append('ododent', ododent);
        params.append('enferm', enferm);
        params.append('medcir', medcir);
        params.append('medvet', medvet);
        params.append('nutrio', nutrio);
        params.append('psico', psico);
        params.append('quimfarm', quimfarm);
        params.append('admon', admon);
        params.append('antropo', antropo);
        params.append('ccomun', ccomun);
        params.append('cpolit', cpolit);
        params.append('conta', conta);
        params.append('derec', derec);
        params.append('econom', econom);
        params.append('gastro', gastro);
        params.append('geograf', geograf);
        params.append('geolog', geolog);
        params.append('relaint', relaint);
        params.append('sociolo', sociolo);
        params.append('artvisual', artvisual);
        params.append('cinema', cinema);
        params.append('disegraf', disegraf);
        params.append('filoso', filoso);
        params.append('histo', histo);
        params.append('idiom', idiom);
        params.append('litera', litera);
        params.append('pedago', pedago);
        params.append('teatactmu', teatactmu);
        params.append('razest', razest);
        params.append('alegre', alegre);
        params.append('introvertido', introvertido);
        params.append('dominante', dominante);
        params.append('sociable', sociable);
        params.append('puntual', puntual);
        params.append('agresivo', agresivo);
        params.append('responsable', responsable);
        params.append('practico', practico);
        params.append('inquieto', inquieto);
        params.append('tranquilo', tranquilo);

        this.setState({ loading: true });
        
        axios(config).then(response =>
        {
            if (response.status === 200)
            {
                if (response.data.status)
                    this.setState({ saved: true }, () => this.setState({ loading: false }));

                else
                    this.setState({ saved: false });
            }

            else
                this.setState({ saved: false });
        });
    }

    componentDidMount()
    {
        this.getEstados();
    }

    render()
    {
        const { catedo, loading, saved } = this.state;

        if (loading)
            return <Loading animation="grow" msg="Cargando..." />;

        return <Page 
                    catedo={ catedo } 
                    saved={ saved }
                    changeValue={ this.changeValue.bind(this) } 
                    sendSurvey={ this.sendSurvey.bind(this) } 
            />;
    }
}

export default Survey;