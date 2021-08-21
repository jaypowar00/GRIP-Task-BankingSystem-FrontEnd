import React, { PureComponent } from 'react'
import axios from 'axios'

class CustomersPage extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             customers: []
        }
    }

    componentDidMount(){
        axios.get('https://grip-bankingsystem-backend.herokuapp.com/')
        .then(response=>{
            console.log(response);
            if(response.data.status){
                this.setState({
                    customers: response.data.customers
                });
            }
        })
        .catch(err=>{
            console.log('Error!\n'+err);
        })
    }
    
    render() {
        let { customers } = this.state;
        console.log(customers);
        return (
                <React.Fragment>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Banking System</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/history">History</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/transfer">Transactions</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </nav>
                    <div className='container py-3 mb-5'>
                    <h1 className='m-3'>Customers:</h1>
                        {
                            (customers.length>0)?
                                customers.map(customer => 
                                    <React.Fragment key={customer.account_no}>
                                        <div className="mycard rounded mx-2 my-3 py-3 px-4">
                                            <h2>{customer.email}</h2>
                                            <h5>Name: {customer.name}</h5>
                                            Account no.: {customer.account_no} &nbsp; | &nbsp; Balance: Rs.{customer.balance}
                                        </div>
                                    </React.Fragment>
                                )
                            :
                                <div className="mycard rounded text-center m-2 p-4" style={{fontSize: '22px'}}>
                                    <h3>There is nothing to show right now...</h3>
                                </div>
                        }
                    </div>
                </React.Fragment>
        )
    }
}

export default CustomersPage
