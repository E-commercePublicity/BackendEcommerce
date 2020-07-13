let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url= 'https://ecommercepublicity.azurewebsites.net';


describe('Consultar Vestuarios: ',()=>{
    it('consultara todos los vestuarios de la base de datos', (done) => {
    chai.request(url)
    .get('/productosVestuario')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });