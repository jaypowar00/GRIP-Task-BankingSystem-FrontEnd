import React, { PureComponent } from 'react'
import axios from 'axios'

class HistoryPage extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             history: []
        }
    }

    componentDidMount(){
        axios.get('https://grip-bankingsystem-backend.herokuapp.com/history')
        .then(response=>{
            console.log(response);
            if(response.data.status){
                this.setState({
                    history: response.data.history
                });
            }
        })
        .catch(err=>{
            console.log('Error!\n'+err);
        })
    }
    
    render() {
        let { history } = this.state;
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
                                <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" href="/history">History</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/transfer">Transactions</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    <div className='container py-3 mb-5'>
                    <h1 className='m-3'>History:</h1>
                        {
                            (history.length>0)?
                                history.map(customer => {
                                    let date = new Date(customer.date);
                                    return(
                                        <React.Fragment key={customer._id}>
                                        <div className="mycard rounded m-2 py-3 px-4" style={{fontSize: '22px'}}>
                                            <h1>{customer.name}</h1>
                                            <span>From:</span> {customer.fromName} <br/> <span>To:</span> {customer.toName} <br/> <span>Amount:</span> Rs.{customer.amount}<br/>
                                            <span>Transaction Date:</span> {date.toUTCString()}
                                        </div>
                                    </React.Fragment>
                                    )
                                })
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

export default HistoryPage
