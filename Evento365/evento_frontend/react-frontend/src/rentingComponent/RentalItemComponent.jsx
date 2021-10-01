import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';

class RentalItemComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            rentalitems: []
        }
        this.addrentalitem = this.addrentalitem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    navigate(){
        this.props.history.push('/test123');
    } 
    
    deleteItem(rentalitemid){
        if(window.confirm('Are you sure, want to delete the selected item?')) {

            RentalItemService.deleteItem(rentalitemid).then(res => {
                this.setState({rentalitems: this.state.rentalitems.filter(rentalitem => rentalitem.rentalitemid !== rentalitemid)});
            }); 
        } 
}

    editItem(rentalitemid){
        this.props.history.push(`/update-rentalitem/${rentalitemid}`);
    }

    componentDidMount(){
        RentalItemService.getRentalItems().then((res) => {
            this.setState({rentalitems: res.data});
        });
    }

    addrentalitem(){
        this.props.history.push('/add-rentalitem');
    }

    render() { 
        return (
            <div>
                <div className="row" style={{paddingTop:"170px", paddingBottom:"170px"}}>
                <center>
                <div class="formDiv" >
                <h2 style={{marginTop:"20px", marginBottom:"20px"}} className="text-center"> Rental Items </h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addrentalitem.bind(this)}> Add Items </button>
                    <button style={{marginTop:"20px"}}className="btn btn-primary" onClick={this.navigate}> Test button </button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table bordered">
                        <thead>
                            <tr> 
                                <th>Item Name</th>
                                <th>Description</th>
                                <th>Rent Per Day</th>
                                <th>Total Units</th>
                                <th>Available Units </th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.rentalitems.map(
                                    rentalitem =>
                                    <tr key = {rentalitem.rentalitemid}>
                                        <td> {rentalitem.name}</td>
                                        <td> {rentalitem.description}</td>
                                        <td> {rentalitem.rentalperday}</td>
                                        <td> {rentalitem.totalunits}</td>
                                        <td> {rentalitem.availableunits}</td>
                                        <td> <img style={{width:"50px", height:"50px"}} src={rentalitem.image} ></img> </td>
                                        <td>
                                            <button style={{height:"35px"}} onClick= {() => this.editItem(rentalitem.rentalitemid)} className="btn btn-info"> Update </button>
                                            <button style={{marginLeft: "10px",height:"35px"}} onClick= {() => this.deleteItem(rentalitem.rentalitemid)} className="btn btn-danger"> Delete </button>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
                </div>
                </center>
                </div>
            </div>
        );
    }
}

export default RentalItemComponent;