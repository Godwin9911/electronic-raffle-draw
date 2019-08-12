import React from 'react';
import {Input, Container, Form, FormGroup, Label, Col, Button, Row} from 'reactstrap';
import WinnersModal from './winnersmodal';

class Selectwinners extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
            winnersArray: [ ]
    
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){ 
        event.preventDefault();
        let indexes = [];
        let winners = [];
        const [...contestants] = this.props.contestants;
        contestants.forEach((element, index)=>{
            indexes.push(index);
        });

        function get_rand(){
            let random = Math.floor(Math.random() * contestants.length) + 1;
            if(!winners.includes(random)){
                winners.push(random);
                return random
            }else{
                get_rand();
            }             
        }

        for(var i = 0; i < this.state.value; i++) {
            get_rand();
        }

        this.setState({winnersArray: winners});
    }

    
    render(){
        return(
            <Col xl={6} className="mx-auto text-center">
                <Container>
                    <h2 className="d-none">Select Number of Winners</h2>
                    <p>Enter the Number of Winners you wish to select from the total Number of Contestant, click shuffle then click view Winners</p>
                    <small class="text-secondary">Contestants Data gotten from Google Sheets</small>
                    <Form className="border rounded-lg p-5 m-3">
                    <h3 className="text-nowrap"><i class="fas fa-users"></i> {this.props.contestants.length}</h3>
                        <FormGroup>
                                <Label for="numberOfWinners">Enter Number of Winners</Label>
                                <Row>
                                    <Col xl="10" className="mt-2 p-0">
                                        <Input type="number" name="select" id="numberOfWinners" placeholder="Number of Winners" value={this.state.value} onChange={this.handleChange} required/>
                                    </Col>
                                    <Col xl="2" className="mt-2 p-0">
                                        <Button onClick={this.handleSubmit} block>Shuffle</Button>
                                    </Col>
                                </Row>
                            </FormGroup>
                    </Form>
                    <div>
                        <hr/>
                   </div>
                    <p>Click the button below to view winners</p>
                    <WinnersModal buttonLabel={`View Winners`} winners={this.state.winnersArray} contestants={this.props.contestants}/>
                    <div className="mt-5">
                        <small>Created by <a href="http://www.godwinagedah.com.ng">Godwin Agedah</a></small>
                        <p className='small'>Built with React <i class="fab fa-react"></i> and Google sheets API</p>
                    </div>
                </Container>
            </Col>
        );
    }
}

export default Selectwinners;